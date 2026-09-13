"""Octopus AI prototype server.

Serves the static prototype and one API endpoint that turns a meeting recording
(Zoom video or audio) into a bilingual transcript, minutes and decisions with
Gemini on Vertex AI. Everything else in the prototype stays client-side.
"""
import json
import os
import shutil
import subprocess
import tempfile
from pathlib import Path

import time

from fastapi import Body, FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from google import genai
from google.genai import types

ROOT = Path(__file__).parent
PROJECT = os.environ.get("GCP_PROJECT_ID") or os.environ.get("GOOGLE_CLOUD_PROJECT") or "aiwomen26ham-4441"
LOCATION = os.environ.get("GCP_LOCATION", "global")
MODELS = [m.strip() for m in os.environ.get("GEMINI_MODELS", "gemini-3.1-pro-preview,gemini-3.8-flash").split(",") if m.strip()]
API_KEY = os.environ.get("GEMINI_API_KEY", "").strip()
MAX_UPLOAD = 30 * 1024 * 1024

app = FastAPI(title="Octopus AI prototype")
_clients: dict[str, genai.Client] = {}

# Recorded meetings are persisted in Firestore (collection "recordings"); if Firestore is not
# reachable, they stay in this process memory so the demo still works.
MEMORY_RECORDINGS: dict[str, dict] = {}
_store = {"client": None, "checked": False}


def firestore_client():
    if not _store["checked"]:
        _store["checked"] = True
        try:
            from google.cloud import firestore
            client = firestore.Client(project=PROJECT)
            client.collection("recordings").limit(1).get()
            _store["client"] = client
        except Exception:  # noqa: BLE001 - fall back to memory
            _store["client"] = None
    return _store["client"]


def client(provider: str) -> genai.Client:
    if provider not in _clients:
        if provider == "vertex":
            _clients[provider] = genai.Client(vertexai=True, project=PROJECT, location=LOCATION)
        else:
            _clients[provider] = genai.Client(api_key=API_KEY)
    return _clients[provider]


def providers() -> list[str]:
    order = ["vertex"]
    if API_KEY:
        order.append("aistudio")
    return order


TURN = types.Schema(type="OBJECT", properties={
    "time": types.Schema(type="STRING", description="mm:ss offset of the turn start"),
    "speaker": types.Schema(type="STRING", description="Speaker first name if said or shown, else Speaker 1, Speaker 2 ..."),
    "en": types.Schema(type="STRING", description="What was said, in English"),
    "de": types.Schema(type="STRING", description="What was said, in German"),
    "kind": types.Schema(type="STRING", enum=["none", "task", "deadline", "decision", "commitment", "information"],
                         description="none for small talk; otherwise the most important thing this turn contains"),
}, required=["time", "speaker", "en", "de", "kind"])

TASK = types.Schema(type="OBJECT", properties={
    "title_en": types.Schema(type="STRING", description="Short imperative task title in English"),
    "title_de": types.Schema(type="STRING", description="Same task title in German"),
    "owner": types.Schema(type="STRING", description="First name of the person responsible, or empty if unclear"),
    "due": types.Schema(type="STRING", description="Deadline as YYYY-MM-DD resolved from the meeting date, or empty if none was said"),
    "detail_en": types.Schema(type="STRING", description="The sentence(s) from the meeting that created this task, in English"),
    "detail_de": types.Schema(type="STRING", description="The same in German"),
    "kind": types.Schema(type="STRING", enum=["task", "commitment", "dependency"], description="task = asked of someone, commitment = someone promised, dependency = approval or input someone else must give"),
}, required=["title_en", "title_de", "owner", "due", "detail_en", "detail_de", "kind"])

UPDATE = types.Schema(type="OBJECT", properties={
    "taskId": types.Schema(type="INTEGER", description="id of the EXISTING task this update refers to"),
    "note_en": types.Schema(type="STRING", description="One sentence: what changed or was reported, in English"),
    "note_de": types.Schema(type="STRING", description="The same in German"),
    "status": types.Schema(type="STRING", enum=["unchanged", "open", "in_progress", "blocked", "done"], description="New status if it was said or clearly implied, else unchanged"),
    "progress": types.Schema(type="INTEGER", description="New progress 0-100 if said or clearly implied, else -1"),
    "due": types.Schema(type="STRING", description="New deadline as YYYY-MM-DD if a new date was agreed, else empty"),
}, required=["taskId", "note_en", "note_de", "status", "progress", "due"])

RESULT = types.Schema(type="OBJECT", properties={
    "title_en": types.Schema(type="STRING"), "title_de": types.Schema(type="STRING"),
    "date": types.Schema(type="STRING", description="YYYY-MM-DD if a meeting date is mentioned, else empty"),
    "department": types.Schema(type="STRING", enum=["Management", "Revenue & Sales", "Operations", "Marketing", "People & Culture"]),
    "summary_en": types.Schema(type="STRING"), "summary_de": types.Schema(type="STRING"),
    "minutes_en": types.Schema(type="ARRAY", items=types.Schema(type="STRING"), description="3-6 minute lines: facts, tasks with owner and deadline"),
    "minutes_de": types.Schema(type="ARRAY", items=types.Schema(type="STRING")),
    "decisions_en": types.Schema(type="ARRAY", items=types.Schema(type="STRING")),
    "decisions_de": types.Schema(type="ARRAY", items=types.Schema(type="STRING")),
    "language": types.Schema(type="STRING", description="Main spoken language code, e.g. en or de"),
    "turns": types.Schema(type="ARRAY", items=TURN),
    "tasks": types.Schema(type="ARRAY", items=TASK, description="NEW tasks, commitments and dependencies spoken in the meeting that do not match an existing open task"),
    "updates": types.Schema(type="ARRAY", items=UPDATE, description="Progress, changes, delays, completions or new deadlines for EXISTING open tasks"),
}, required=["title_en", "title_de", "date", "department", "summary_en", "summary_de", "minutes_en", "minutes_de",
             "decisions_en", "decisions_de", "language", "turns", "tasks", "updates"])

PROMPT = """You are Octopus AI, the organizational memory of a hotel team. Listen to this recorded team meeting.
1. Transcribe it as speaking turns in the order spoken. Keep every turn; do not summarize inside the transcript.
   Use the speaker's first name when it is said or shown; otherwise "Speaker 1", "Speaker 2". Keep one label per voice; never split one voice into two labels.
   Provide each turn in English and in German (translate faithfully; keep the original language's wording in its own field).
2. Mark the turns that carry a task, a deadline, a decision, a commitment (someone promises to do something) or important project information. Small talk gets kind "none".
3. Write a short meeting title, a one-sentence summary, 3-6 minute lines (each naming owner and deadline when known) and the decisions, all in English and German.
4. Pick the department that fits best. If a meeting date is spoken, return it as YYYY-MM-DD, otherwise leave it empty.
5. EXISTING OPEN TASKS of the linked project (JSON): {existing}
   If the meeting reports progress, a change, a delay, a blocker, completion or a new deadline for one of these, return it in
   "updates" with that task's id and do NOT create a new task for it. Only genuinely new work goes into "tasks".
6. Extract every NEW task, commitment and dependency as a separate item: who has to do what, by when. "Sarah, can you get the quotation by Friday?" is a task for Sarah; "I will contact the supplier" is a commitment of the speaker; "David needs to approve before Tuesday" is a dependency owned by David. The meeting took place on {meeting_date}; resolve relative deadlines such as "by Friday" or "before Tuesday" to the next such weekday after that date as YYYY-MM-DD. Leave due empty if no deadline was said. Never invent tasks that were not spoken.
Known team members: {people}. Prefer these names when the voice or content clearly matches; never invent facts that were not said."""


def extract_audio(src: Path, dst: Path) -> Path:
    """Video/audio -> mono 64 kbps AAC so the request stays small."""
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        return src
    result = subprocess.run([ffmpeg, "-y", "-i", str(src), "-vn", "-ac", "1", "-ar", "16000", "-b:a", "64k", str(dst)],
                            capture_output=True, timeout=300)
    if result.returncode != 0 or not dst.exists():
        raise HTTPException(400, "Could not read this recording. Please upload an MP4, M4A, MP3, WAV or WebM file.")
    return dst


TRANSCRIBE_MODELS = [m for m in MODELS if "flash" in m] + [m for m in MODELS if "flash" not in m]


def analyze(audio: bytes, mime: str, people: list[str], meeting_date: str, existing: list) -> dict:
    contents = [types.Part.from_bytes(data=audio, mime_type=mime),
                PROMPT.format(people=", ".join(people) or "none", meeting_date=meeting_date, existing=json.dumps(existing, ensure_ascii=False) if existing else "none")]
    config = types.GenerateContentConfig(response_mime_type="application/json", response_schema=RESULT, temperature=0.2)
    errors = []
    for provider in providers():
        for model in TRANSCRIBE_MODELS:
            try:
                response = client(provider).models.generate_content(model=model, contents=contents, config=config)
                data = json.loads(response.text)
                data["model"] = f"{model} · {'Vertex AI' if provider == 'vertex' else 'AI Studio'}"
                return data
            except Exception as error:  # noqa: BLE001 - try the next provider/model
                errors.append(f"{provider}/{model}: {str(error)[:200]}")
    raise HTTPException(502, "Gemini could not process the recording. " + " | ".join(errors))


@app.get("/api/health")
def health():
    return {"project": PROJECT, "location": LOCATION, "models": MODELS, "providers": providers(), "ffmpeg": bool(shutil.which("ffmpeg")),
            "storage": "firestore" if firestore_client() else "memory"}


@app.get("/api/recordings")
def list_recordings():
    client = firestore_client()
    docs = list(MEMORY_RECORDINGS.values())
    if client:
        try:
            docs += [d.to_dict() for d in client.collection("recordings").order_by("savedAt").limit(50).stream()]
        except Exception as error:  # noqa: BLE001
            print("firestore read failed:", str(error)[:300])
    docs = sorted(docs, key=lambda d: d.get("savedAt", 0))
    return {"storage": "firestore" if client else "memory", "recordings": docs}


@app.post("/api/recordings")
def save_recording(record: dict = Body(...)):
    meeting = record.get("meeting") or {}
    if not isinstance(meeting, dict) or not meeting.get("title"):
        raise HTTPException(400, "meeting.title is required")
    doc_id = f"{int(time.time() * 1000)}-{abs(hash(meeting.get('title'))) % 10000}"
    payload = {"id": doc_id, "savedAt": time.time(), "meeting": meeting, "tasks": list(record.get("tasks") or [])[:60],
               "translations": dict(record.get("translations") or {}), "people": list(record.get("people") or [])[:20],
               "updates": [u for u in list(record.get("updates") or [])[:40] if isinstance(u, dict)]}
    client = firestore_client()
    if client:
        try:
            client.collection("recordings").document(doc_id).set(payload)
            return {"ok": True, "id": doc_id, "storage": "firestore"}
        except Exception as error:  # noqa: BLE001
            print("firestore write failed:", str(error)[:300])
    MEMORY_RECORDINGS[doc_id] = payload
    return {"ok": True, "id": doc_id, "storage": "memory"}


@app.post("/api/transcribe")
async def transcribe(file: UploadFile = File(...), people: str = Form("[]"), meeting_date: str = Form(""), existing_tasks: str = Form("[]")):
    raw = await file.read()
    if not raw:
        raise HTTPException(400, "Empty upload.")
    if len(raw) > MAX_UPLOAD:
        raise HTTPException(413, "Recording is larger than 30 MB. Please upload a shorter clip or an audio-only export.")
    try:
        names = [str(n) for n in json.loads(people)][:40]
    except Exception:  # noqa: BLE001
        names = []
    try:
        existing = [t for t in json.loads(existing_tasks) if isinstance(t, dict) and "id" in t][:40]
    except Exception:  # noqa: BLE001
        existing = []
    suffix = Path(file.filename or "recording").suffix.lower() or ".bin"
    with tempfile.TemporaryDirectory() as folder:
        src = Path(folder) / f"upload{suffix}"
        src.write_bytes(raw)
        audio = extract_audio(src, Path(folder) / "audio.m4a")
        mime = "audio/mp4" if audio.name.endswith(".m4a") else (file.content_type or "application/octet-stream")
        data = analyze(audio.read_bytes(), mime, names, meeting_date if len(meeting_date) == 10 else "today", existing)
    data["turns"] = [t for t in data.get("turns", []) if t.get("en") or t.get("de")][:400]
    data["tasks"] = [t for t in data.get("tasks", []) if t.get("title_en") or t.get("title_de")][:40]
    known = {int(t["id"]) for t in existing if str(t.get("id", "")).lstrip("-").isdigit()}
    data["updates"] = [u for u in data.get("updates", []) if isinstance(u.get("taskId"), int) and u["taskId"] in known][:40]
    return JSONResponse(data)


MEMORY_CHATS: dict[str, list] = {}


@app.get("/api/conversations")
def list_conversations(user: str = ""):
    key = user.strip().lower()[:120]
    if not key:
        return {"messages": []}
    client = firestore_client()
    if client:
        try:
            doc = client.collection("conversations").document(key).get()
            return {"storage": "firestore", "messages": (doc.to_dict() or {}).get("messages", [])[-40:]}
        except Exception as error:  # noqa: BLE001
            print("firestore chat read failed:", str(error)[:200])
    return {"storage": "memory", "messages": MEMORY_CHATS.get(key, [])[-40:]}


@app.post("/api/conversations")
def save_conversation(body: dict = Body(...)):
    key = str(body.get("user", "")).strip().lower()[:120]
    exchange = body.get("exchange") or {}
    if not key or not isinstance(exchange, dict) or not exchange.get("question"):
        raise HTTPException(400, "user and exchange.question are required")
    exchange = {"question": str(exchange.get("question"))[:1500], "answer": str(exchange.get("answer", ""))[:6000],
                "meetingIds": list(exchange.get("meetingIds") or [])[:5], "taskIds": list(exchange.get("taskIds") or [])[:8],
                "language": exchange.get("language", "en"), "model": str(exchange.get("model", ""))[:80], "at": time.time()}
    client = firestore_client()
    if client:
        try:
            from google.cloud import firestore as fs
            client.collection("conversations").document(key).set({"user": key, "updatedAt": time.time(), "messages": fs.ArrayUnion([exchange])}, merge=True)
            return {"ok": True, "storage": "firestore"}
        except Exception as error:  # noqa: BLE001
            print("firestore chat write failed:", str(error)[:200])
    MEMORY_CHATS.setdefault(key, []).append(exchange)
    return {"ok": True, "storage": "memory"}


ASK_MODELS = [m for m in MODELS if "flash" in m] + [m for m in MODELS if "flash" not in m]
ASK_SCHEMA = types.Schema(type="OBJECT", properties={
    "answer": types.Schema(type="STRING", description="The answer, 1-6 short sentences or bullet lines, in the requested language"),
    "meetingIds": types.Schema(type="ARRAY", items=types.Schema(type="INTEGER"), description="ids of meetings the answer is based on, most relevant first"),
    "taskIds": types.Schema(type="ARRAY", items=types.Schema(type="INTEGER"), description="ids of tasks the answer refers to"),
}, required=["answer", "meetingIds", "taskIds"])
ASK_PROMPT = """You are Octopus, the organizational memory of a hotel team. Answer the user's question using ONLY the records below
(meetings with decisions, minutes and transcripts; tasks with owners, deadlines and status; projects; memories the user added).
Rules: answer in {lang_name}; be warm, friendly and helpful, like a colleague who remembers everything; be concrete (names, dates,
status, numbers) and explain the context briefly so a person who missed the meeting understands it; if the records do not contain
the answer, say so kindly and suggest what to look at; never invent meetings, people or decisions. Today is {today}. The user is {user}.
Cite the meetings and tasks you used via meetingIds / taskIds.

RECORDS (JSON):
{records}

CONVERSATION SO FAR:
{history}

QUESTION: {question}"""


@app.post("/api/ask")
def ask(body: dict = Body(...)):
    question = str(body.get("question", "")).strip()
    if not question or len(question) > 1500:
        raise HTTPException(400, "question must be 1-1500 characters")
    language = "de" if body.get("language") == "de" else "en"
    context = body.get("context") or {}
    history = "\n".join(f"{h.get('role')}: {str(h.get('text',''))[:400]}" for h in (body.get("history") or [])[-6:]) or "(none)"
    prompt = ASK_PROMPT.format(lang_name="German" if language == "de" else "English", today=context.get("today", ""),
                               user=json.dumps(context.get("user", {}), ensure_ascii=False), records=json.dumps(context, ensure_ascii=False)[:120000],
                               history=history, question=question)
    config = types.GenerateContentConfig(response_mime_type="application/json", response_schema=ASK_SCHEMA, temperature=0.2)
    errors = []
    for provider in providers():
        for model in ASK_MODELS:
            try:
                response = client(provider).models.generate_content(model=model, contents=prompt, config=config)
                data = json.loads(response.text)
                data["model"] = f"{model} · {'Vertex AI' if provider == 'vertex' else 'AI Studio'}"
                data["meetingIds"] = [int(i) for i in data.get("meetingIds", []) if isinstance(i, (int, float))][:5]
                data["taskIds"] = [int(i) for i in data.get("taskIds", []) if isinstance(i, (int, float))][:8]
                return data
            except Exception as error:  # noqa: BLE001
                errors.append(f"{provider}/{model}: {str(error)[:160]}")
    raise HTTPException(502, "Octopus could not answer right now. " + " | ".join(errors))


app.mount("/static", StaticFiles(directory=ROOT), name="static")


@app.get("/{path:path}")
def spa(path: str):
    target = ROOT / path if path else ROOT / "index.html"
    if path and target.is_file() and target.suffix in {".html", ".js", ".css", ".png", ".svg", ".ico", ".json", ".txt", ".md"}:
        return FileResponse(target)
    return FileResponse(ROOT / "index.html")
