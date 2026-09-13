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

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
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
}, required=["title_en", "title_de", "date", "department", "summary_en", "summary_de", "minutes_en", "minutes_de",
             "decisions_en", "decisions_de", "language", "turns"])

PROMPT = """You are Octopus AI, the organizational memory of a hotel team. Listen to this recorded team meeting.
1. Transcribe it as speaking turns in the order spoken. Keep every turn; do not summarize inside the transcript.
   Use the speaker's first name when it is said or shown; otherwise "Speaker 1", "Speaker 2".
   Provide each turn in English and in German (translate faithfully; keep the original language's wording in its own field).
2. Mark the turns that carry a task, a deadline, a decision, a commitment (someone promises to do something) or important project information. Small talk gets kind "none".
3. Write a short meeting title, a one-sentence summary, 3-6 minute lines (each naming owner and deadline when known) and the decisions, all in English and German.
4. Pick the department that fits best. If a meeting date is spoken, return it as YYYY-MM-DD, otherwise leave it empty.
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


def analyze(audio: bytes, mime: str, people: list[str]) -> dict:
    contents = [types.Part.from_bytes(data=audio, mime_type=mime), PROMPT.format(people=", ".join(people) or "none")]
    config = types.GenerateContentConfig(response_mime_type="application/json", response_schema=RESULT, temperature=0.2)
    errors = []
    for provider in providers():
        for model in MODELS:
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
    return {"project": PROJECT, "location": LOCATION, "models": MODELS, "providers": providers(), "ffmpeg": bool(shutil.which("ffmpeg"))}


@app.post("/api/transcribe")
async def transcribe(file: UploadFile = File(...), people: str = Form("[]")):
    raw = await file.read()
    if not raw:
        raise HTTPException(400, "Empty upload.")
    if len(raw) > MAX_UPLOAD:
        raise HTTPException(413, "Recording is larger than 30 MB. Please upload a shorter clip or an audio-only export.")
    try:
        names = [str(n) for n in json.loads(people)][:40]
    except Exception:  # noqa: BLE001
        names = []
    suffix = Path(file.filename or "recording").suffix.lower() or ".bin"
    with tempfile.TemporaryDirectory() as folder:
        src = Path(folder) / f"upload{suffix}"
        src.write_bytes(raw)
        audio = extract_audio(src, Path(folder) / "audio.m4a")
        mime = "audio/mp4" if audio.name.endswith(".m4a") else (file.content_type or "application/octet-stream")
        data = analyze(audio.read_bytes(), mime, names)
    data["turns"] = [t for t in data.get("turns", []) if t.get("en") or t.get("de")][:400]
    return JSONResponse(data)


app.mount("/static", StaticFiles(directory=ROOT), name="static")


@app.get("/{path:path}")
def spa(path: str):
    target = ROOT / path if path else ROOT / "index.html"
    if path and target.is_file() and target.suffix in {".html", ".js", ".css", ".png", ".svg", ".ico", ".json", ".txt", ".md"}:
        return FileResponse(target)
    return FileResponse(ROOT / "index.html")
