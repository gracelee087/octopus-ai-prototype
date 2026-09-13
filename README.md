# Octopus AI — organizational commitment memory (hackathon prototype)

> Decisions shouldn't disappear when the meeting ends.
> From conversation → commitment → outcome.

Octopus AI remembers what teams decide, tracks what they promise, and follows those
commitments across meetings, people and projects until they become outcomes.
This repository is the interactive prototype built during **AI.Hackathon 2026 / AI.WOMEN Hamburg**
(Track A: AI Studio + Cloud Run).

Demo scenario: the fictional **Harbor & Oak** hotel in Hamburg, 19 days before opening,
6 people, 12 recorded meetings, 6 projects.

## Try it

- Hosted preview (Cloud Run): https://octopus-ai-333131259792.us-central1.run.app
- Locally: any static file server, e.g. `python -m http.server 8080` and open http://localhost:8080

Demo accounts (password for both: `octopus-demo`):

| Role | Email |
|---|---|
| Manager (General Manager Lena Wagner) | `lena@harbor-oak.example` |
| Employee (Social Media Manager Mia Fischer) | `mia@harbor-oak.example` |

Language: switch **DE / EN** at the top right. The whole interface, connectors, meeting data,
transcripts, tasks and system messages follow the selected language.

## What the prototype shows

1. **Onboarding** — log in, choose service/product, connect meeting platforms
   (Microsoft Teams, Google Meet, Zoom, Other), and — for managers only — connect hotel business
   systems (PMS, reservations, CRM, POS, housekeeping/operations, HR).
2. **Personal dashboards** for a manager and an employee: projects, tasks, meetings, decisions.
3. **Realistic meeting transcripts** (500–600 words each) with highlighted tasks, deadlines,
   decisions, commitments and project information.
4. **Meetings recorded in your absence** — clearly flagged, with transcript, highlights, decisions,
   tasks and deadlines available.
5. **Task assignment with mandatory reason** in personal dashboards.
6. **Add to Octopus Memory** — after a meeting, add context or a thought to the transcript.
   Octopus classifies it (thought / task / deadline / update) and updates the related project card.
7. **Ask Octopus** — conversational search over meetings and linked commitments.
8. **Friday business brief** for the manager with hotel KPIs.

## What is AI-powered vs. simulated (honesty note)

This prototype is a **front-end only static web app** (HTML, CSS, vanilla JavaScript, no build step,
no backend, no database). Everything runs in the browser and resets on reload.

- Meeting transcripts, extracted tasks, decisions and highlights are **hand-written fixtures**.
  The highlighting is rule-based, not a live model.
- Platform and business-system connectors are **mocked** — toggles only, no real OAuth or data transfer.
- "Add to Octopus Memory" classification and "Ask Octopus" search use **deterministic local logic**
  (keyword and date detection), **not a live LLM**.
- Log-in is a demo gate with a shared demo password; there are no real accounts.

The product vision is that a Gemini-based extraction layer replaces the fixtures and rules:
transcript in → decisions, commitments, owners, deadlines and dependencies out, confirmed by a
human in the loop, stored as an organizational graph.

## Repository layout

| File | Purpose |
|---|---|
| `index.html`, `style.css` | Shell, sidebar, base styles |
| `i18n.js` | DE/EN translation table and helpers |
| `app.js` | Base data model (people, meetings, tasks) and base views |
| `onboarding.js`, `onboarding.css` | Login and onboarding flow, personal dashboards |
| `commitments.js`, `commitments.css` | Task ownership, reassignment with reason, "Ask Octopus" |
| `hotel-model.js` | Projects, personas, hotel KPI model |
| `hotel-transcripts.js` | Detailed project meetings |
| `hotel-workspace.js`, `hotel-workspace.css` | Project pages, transcripts, Friday report |
| `conversation-fixtures.js` | 500–600-word bilingual conversations for all 12 demo meetings |
| `demo-update.js`, `demo-update.css` | Connector pages, demo employee, absence flags, memory input, complete DE/EN |
| `Dockerfile`, `nginx.conf` | Static hosting on Cloud Run |

## Deploy to Cloud Run

```sh
gcloud run deploy octopus-ai --source . --region us-central1
```

Then allow public access in the Cloud Run console (or `gcloud run services add-iam-policy-binding`).
