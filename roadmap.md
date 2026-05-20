# Roadmap

CURA is actively developed. Here's the current state of each phase and what's planned next.

## Completed Phases

All six core phases are complete and shipping.

| Phase | Name | Status |
|---|---|---|
| 1 | Desktop shell + Gmail integration | ✅ Complete |
| 2 | Smart Inbox + Suggestions | ✅ Complete |
| 3 | Briefing + Notifications + Background Sync | ✅ Complete |
| 4 | Full Memory Surface (Contacts, Finance, Patterns) | ✅ Complete |
| 4.5 | Contacts cleanup + Finance upgrade + Cost fixes | ✅ Complete |
| 5 | Calendar + Read-Only Chat | ✅ Complete |
| 6 | Chat Action Proposals + Consent Cards | ✅ Complete |
| UI | Paper / Filofax design system | ✅ Complete |

## On Hold

### Phase 7 — Chat as Full Controller

Phase 7 completes the vision for CURA AI: every feature in the UI is accessible as a chat tool, with full audit logging and undo support.

**What's included:**
- Every UI button exposed as a chat tool — full control via conversation
- Undo support for task and suggestion actions
- Finance and destructive actions always require confirmation (this is already enforced)
- Full audit log of every AI action

**Status:** On hold — no scheduled date.

## Planned Features

These are confirmed directions, not scheduled releases.

### Relationship Intelligence

- **Proactive nudges** — "You haven't spoken to [name] in 3 months"
- **Relationship timeline** — a scrollable history of every interaction with a contact
- **Commitment tracking** — open promises to and from contacts, surfaced in the briefing

### Memory Expansion

- **Voice notes ingested into wiki memory** — record a note, CURA adds it to the relevant wiki page
- **Manual wiki entry** — write your own context directly into the second brain
- **Cross-reference engine** — CURA connects people, tasks, and finance items automatically

### Finance Depth

- **PDF statement import** — for banks that only export PDF (requires JS PDF parsing or Rust sidecar)
- **AI-powered transaction re-categorisation** — for ambiguous merchant names
- **Month-over-month spending comparison** — requires at least 2 imported statements
- **Budget targets and variance alerts** — set a monthly budget per category

### Other Candidates

| Feature | Description |
|---|---|
| Wake-up call via Twilio | CURA calls your phone at a set time (missed-call style) |
| Usage dashboard | Per-call log: model, feature, input size, output size, timestamp |
| Chat model routing | Simple Q&A to Flash rather than Pro to reduce cost |
| NVIDIA NIM pilot | Test Llama 3.1 70B for chat to reduce Gemini Pro spend |

## What's Not on the Roadmap

These are explicitly **not planned** — they conflict with CURA's design principles:

| Non-goal | Reason |
|---|---|
| Auto-discovery of contacts from email | Contacts are always 100% manual |
| Auto-writing wiki people pages | Relationship memory is built by CURA, confirmed by you |
| External database | Privacy by design — all data is local SQLite |
| Cloud sync | Privacy by design |
| Mobile app | Windows desktop only (for now) |
| Python sidecar | Background sync is setInterval in the frontend |
| Email sending, replying, or drafting | CURA is read-only on Gmail |
| Gemini writing directly to SQLite | All AI output goes through the consent gate |

## Current Version

**CURA v2.0** — May 2026 — Phases 1–6 complete, UI design system complete.
