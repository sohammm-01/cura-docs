# The Second Brain

Most productivity tools ask you to maintain them. You add tasks, you update contacts, you categorise transactions. The work of keeping the system current falls entirely on you.

CURA is built on a different premise: **the system should maintain itself from your natural behaviour** — reading email, scheduling meetings, paying bills — and surface what matters without you having to manage it.

## What CURA Remembers

CURA builds memory from four primary signals:

| Signal | What CURA extracts |
|---|---|
| **Email** | Tasks you committed to, people worth tracking, bills arriving, calendar mentions |
| **Calendar** | Upcoming events, recurring commitments, birthday reminders |
| **Your approvals** | Every suggestion you confirm teaches CURA what matters to you |
| **Your conversations** | Chat interactions add context that refines future responses |

## How Memory Grows

Memory in CURA is not static. It grows over time through a continuous loop:

1. **Signals arrive** — Gmail syncs every 30 minutes, Calendar every 5 minutes
2. **AI extracts** — Gemini Flash-Lite classifies and pulls tasks, finance signals, people mentions
3. **You approve** — Suggestions land in the Suggestions tab; you confirm what's real
4. **Memory deepens** — Approved items enrich both the SQLite database and the Markdown wiki
5. **CURA gets smarter** — Better suggestions, richer chat answers, deeper briefings

The key insight: **each approval is a signal**. CURA learns not just the content of your life, but the shape of it — what you prioritise, who matters to you, what patterns repeat.

## The Wiki — Synthesised Memory

Beyond raw data (tasks, contacts, finance rows), CURA maintains a **Markdown wiki** at `%AppData%\CURA\memory\wiki\`. This is where Gemini Pro writes narrative summaries — running pages per topic, project, or relationship.

Wiki pages are not just summaries of individual emails. They are synthesised narratives that accumulate context across many interactions over time:

- A page for a client might include the history of your relationship, open commitments, and the tone of recent exchanges
- A project page might track decision history, outstanding tasks, and relevant financial commitments
- A topic page might connect patterns across months of email

### Wiki Ingest Rules

Wiki synthesis is deliberately gated to control cost and quality:

- Requires a **minimum of 3 new important emails** since the last synthesis
- Enforces a **2-hour cooldown** between synthesis runs
- Partial failures retry on the next run

::: info Why the gates?
Gemini Pro is powerful but not free. These constraints ensure synthesis only runs when there is enough new signal to justify it — keeping your costs predictable and the output meaningful.
:::

## Compounding Over Time

In the first week, CURA has limited context. Suggestions may miss some nuance. The briefing may feel thin.

By month three, it knows your patterns. It knows who you talk to regularly and who has gone quiet. It knows which tasks tend to recur and which ones you defer. The daily briefing begins to feel like it was written by someone who knows you.

This is the compounding effect: **CURA becomes more valuable the longer you use it**, because the context layer is always growing.

## What CURA Does Not Do

To be clear about the boundaries:

- CURA does not send email on your behalf
- CURA does not auto-add contacts — contacts are always manual or consent-gated
- CURA does not write anything to your database without your explicit approval
- CURA does not store data outside your local machine
