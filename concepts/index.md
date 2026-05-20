# Core Concepts

CURA is built on a small number of ideas that shape how everything else works. Understanding these makes the rest of CURA click.

## The Three Pillars

### 1. Compounding Memory

CURA is not a to-do app with email integration. It is a memory system with task and finance features on top. The foundational idea is that context should accumulate — every approved task, every contact note, every resolved bill makes CURA's understanding of your life slightly richer. Over months and years, this compounds into something genuinely useful.

→ [Read: The Second Brain](/concepts/second-brain)

### 2. The Consent Gate

Nothing is ever written to your database without your explicit confirmation. Not one task. Not one contact. Not one finance item. AI proposes; you decide. This is a permanent design principle, not a setting that can be toggled.

→ [Read: The Consent Gate](/concepts/consent-gate)

### 3. Two-Layer Memory

CURA stores data in two places: a live SQLite database for operational data (tasks, contacts, finance) and a Markdown wiki for synthesised, narrative memory written by Gemini Pro. The wiki is what makes the AI chat smart — it's the accumulated understanding of your life, not just raw data.

→ [Read: Memory Layers](/concepts/memory-layers)

---

## Design Philosophy

These four principles inform every product decision in CURA:

| Principle | What it means |
|---|---|
| **Privacy first** | Everything stays on your machine. No cloud sync, no external database, no telemetry. |
| **Consent gate** | AI proposes, you decide. Nothing writes automatically. |
| **Compounding memory** | The longer you use CURA, the smarter it gets. Context accumulates. |
| **Proactive, not reactive** | CURA surfaces what matters based on patterns — you don't have to ask. |

---

## One AI Model

CURA uses **Gemini only** — both Flash-Lite (for fast classification and extraction) and Pro (for memory synthesis, chat, and the daily briefing). This keeps costs predictable, privacy consistent, and quality controlled.

There is no OpenAI integration, no model switching, and no API key you need to manage beyond the one Gemini key that powers everything.
