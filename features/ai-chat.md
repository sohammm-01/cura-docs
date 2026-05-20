# CURA AI

CURA AI is the primary interface to your second brain. Instead of navigating tabs and dashboards, you ask CURA what you need to know — or tell it what to do — and it works across your full memory: contacts, tasks, finance, calendar, emails, and the wiki.

## Two Modes

### Read — Ask Anything

CURA AI has full context on every turn. Ask about any part of your life:

```
"When did I last hear from Marcus?"
"What are my overdue tasks?"
"How much am I spending on subscriptions this month?"
"Am I falling behind on the Acme project?"
"What have I been busy with this week?"
```

Every answer includes **source references** — CURA shows you where it got its information, whether that's a specific email, a task record, a finance item, or a wiki page.

### Act — Tell CURA What to Do

You can instruct CURA to create, update, or manage items across your data. Before any write happens, CURA produces a **consent card** — a preview of exactly what it's about to do — and waits for your confirmation.

```
"Add a task: follow up with Sarah about the invoice, due Friday"
"Mark the gym task as done"
"Add a contact — Alex Kumar, designer, alex@studio.io"
"Log a subscription: Notion, ₹800/month, billed annually"
```

::: warning Finance and destructive actions
Creating finance items or making other potentially irreversible changes always requires confirmation — permanently. There is no way to bypass this.
:::

## Available Tools

CURA AI has access to a structured set of tools it can invoke on your behalf. These are the tools available in Phase 6 (current):

### Read Tools

| Tool | What it does |
|---|---|
| `query_tasks` | Retrieve open, completed, or filtered tasks |
| `query_suggestions` | Check pending AI-proposed items |
| `query_subscriptions` | List active subscriptions and monthly spend |
| `get_calendar_events` | Fetch upcoming calendar events |
| `get_people` | Look up contacts and relationship notes |
| `search_emails` | Search the email archive |
| `read_wiki` | Access synthesised memory pages |

### Write Tools (consent required)

| Tool | What it does |
|---|---|
| `add_task` | Create a new task |
| `mark_task_done` | Mark a task as complete |
| `add_contact` | Add a new contact |
| `add_subscription` | Track a new subscription |
| `approve_suggestion` | Approve an AI-proposed item |
| `reject_suggestion` | Dismiss a suggestion |
| `defer_suggestion` | Move a suggestion to the Deferred tab |
| `create_finance_item` | Log a finance item |

## Cost Model

CURA AI uses **Gemini Pro** for all chat turns. To keep costs predictable:

- **Maximum 2 tool rounds per turn** — CURA will not chain more than two tool calls before responding
- Chat is triggered only by your messages — no background AI calls are made for chat

## CURA's Personality

CURA AI is humorous but genuinely caring — like a witty friend who actually pays attention. It won't lecture you, but it will gently point out that you've been putting off that dentist call for three weeks. It finds the lighter side of your chaos without making light of things that matter.

```
You:   "What's urgent today?"

CURA:  "Three things — and before you groan, none of them are 
        the dentist (that one's tomorrow's problem). Follow-up 
        with Priya is 2 days overdue, your Notion subscription 
        renews tomorrow at ₹800, and you've got the Acme call 
        at 3 PM. You've got this."
```

## Tips

**Be direct.** CURA responds well to direct instructions. "Add a task: call dentist, due next Monday" works better than "I need to remember to call the dentist at some point next week maybe."

**Ask about patterns.** CURA has wiki memory, not just raw data. Questions like "How's my relationship with the Acme team going?" or "What did we agree on in the last client review?" are fair game.

**Reference people by name.** CURA will look up the contact record, cross-reference email history, and pull wiki context — all in a single turn.
