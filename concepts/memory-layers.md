# Memory Layers

CURA stores data in two distinct layers, each serving a different purpose. Understanding the difference helps you understand why the system gets smarter over time.

## The Two Layers

| Layer | Location | Purpose |
|---|---|---|
| **Operational store** | `SQLite (cura.db)` | Live data — emails, tasks, suggestions, contacts, finance, calendar events |
| **Synthesised memory** | `Markdown wiki (%AppData%\CURA\memory\wiki\)` | LLM-written narrative pages that compound over time |

### Layer 1 — Operational Store (SQLite)

This is the ground truth of your data. Every approved task, contact, finance item, and email lives here as a structured row in a local SQLite database.

**Tables:**

| Table | What's stored |
|---|---|
| `emails` | All fetched Gmail messages (last 30 days on first sync, then incremental) |
| `tasks` | Open and completed tasks, with due times, recurrence type, and reminders |
| `suggestions` | AI-proposed items waiting for your approval |
| `finance_items` | Approved bills and renewals extracted from email |
| `subscriptions` | Manually-tracked recurring subscriptions |
| `transactions` | CSV-imported bank statement rows |
| `people` | Manual contacts with relationship notes |
| `calendar_events` | Google Calendar events (30-day window) |

All data in SQLite is queryable by CURA AI — when you ask "what are my open tasks?" it runs a structured query against this store, not a fuzzy search.

### Layer 2 — Synthesised Memory (Markdown Wiki)

The wiki is what gives CURA AI its depth. Where the operational store holds facts, the wiki holds *context* — narrative summaries written by Gemini Pro that accumulate understanding across weeks and months.

**Example wiki pages:**
- `client_acme_corp.md` — history of your relationship with a client, open commitments, tone of recent exchanges
- `project_website_redesign.md` — decision history, key contacts, outstanding tasks, financial commitments
- `person_sarah_chen.md` — interaction frequency, what you typically discuss, recent context

**How a wiki page grows:**

```
Week 1:  "Sarah sent invoice for project X. Payment pending."
Week 3:  + "Sarah followed up on payment. You agreed to pay by Friday."
Week 6:  + "Payment confirmed. Sarah mentioned new project opportunity."
Month 3: + "Three projects completed with Sarah. Strong working relationship..."
```

Each synthesis run adds new context rather than replacing old context. The page compounds.

## How the Layers Work Together

CURA AI has access to **both layers** on every chat turn:

1. **Structured queries** hit the SQLite store — precise, fast, always current
2. **Wiki context** is injected as narrative memory — giving the AI the "why" behind the facts

This is why asking "what's my history with John?" returns something richer than a list of email dates — the wiki contains the synthesised narrative of that relationship.

## Wiki Synthesis Rules

Synthesis is triggered automatically when both conditions are met:

- **≥ 3 new important emails** have arrived since the last synthesis run
- **≥ 2 hours** have passed since the last synthesis

You can also trigger a manual wiki health check from the **Briefing** tab using the **Wiki Health** button, which scans for orphaned or stale pages.

::: info Cost control
Wiki synthesis uses Gemini Pro, the more capable (and more expensive) model. The gates exist to ensure synthesis only runs when there is sufficient new signal — keeping your API costs predictable.
:::

## Where Your Data Lives

```
%AppData%\CURA\
├── cura.db              ← SQLite operational store
└── memory\
    └── wiki\
        ├── people\      ← Per-person relationship pages
        ├── projects\    ← Per-project context pages
        └── topics\      ← Topic-based narrative pages
```

None of this data leaves your machine. There is no cloud backup, no sync, and no external service that touches these files.
