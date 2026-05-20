# Privacy & Data

CURA is built on a single, non-negotiable principle: **your data stays on your machine.** There is no cloud sync, no external database, no telemetry, and no server that knows you exist.

## What Stays Local

Everything:

| Data | Where it lives |
|---|---|
| All emails (fetched from Gmail) | `%AppData%\CURA\cura.db` |
| Tasks, contacts, finance items | `%AppData%\CURA\cura.db` |
| Suggestions and approval history | `%AppData%\CURA\cura.db` |
| Bank statement transactions | `%AppData%\CURA\cura.db` |
| Calendar events | `%AppData%\CURA\cura.db` |
| Synthesised memory wiki | `%AppData%\CURA\memory\wiki\` |
| Daily briefing cache | `%AppData%\CURA\memory\briefings\` |
| Google OAuth token | `%AppData%\CURA\` (encrypted) |
| App settings and preferences | `localStorage` (Tauri WebView) |

## What Leaves Your Machine

The only data that leaves your machine is what is sent to external APIs as part of normal operation:

| API | What's sent | When |
|---|---|---|
| **Google Gmail API** | OAuth token for fetching email headers and bodies | Every sync (30 min) |
| **Google Calendar API** | OAuth token for fetching events | Every sync (5 min cooldown) |
| **Gemini Flash-Lite** | Email bodies (up to 5 KB each) for classification | Per unclassified batch |
| **Gemini Pro** | Email content, task/contact/finance context, wiki pages | For wiki synthesis, briefing, chat |

In all cases, data sent to Google and Gemini APIs is governed by Google's privacy policy and Gemini's data use terms. CURA does not operate its own servers or store any data remotely.

## Data Schema

CURA uses a single local SQLite database (`cura.db`) with the following tables:

| Table | Contents |
|---|---|
| `emails` | All fetched Gmail messages — ID, sender, subject, body, classification |
| `tasks` | Open and completed tasks, due dates, recurrence, reminder times |
| `suggestions` | AI-proposed items with status (pending / approved / rejected / deferred) |
| `finance_items` | Approved bills and renewals — name, amount, due date, status |
| `subscriptions` | Manually-tracked subscriptions — name, cost, cycle, next billing date |
| `transactions` | CSV-imported bank statement rows — merchant, amount, date, category |
| `people` | Contacts — name, email, relationship type, notes |
| `calendar_events` | Google Calendar events — title, start time, end time, attendees |

## AI Cost Model

CURA uses two Gemini models, each with specific rules to keep costs predictable:

| Operation | Model | Trigger | Constraint |
|---|---|---|---|
| Email classification | Flash-Lite | Per 25 unclassified emails | Batched to minimise calls |
| Email extraction | Flash-Lite | Per important email | Max 50 per sync run; 5 KB body cap |
| Wiki synthesis | Pro | When ≥3 new important emails + 2h cooldown | Cached; not re-run unnecessarily |
| Daily briefing | Pro | Once per day | Cached as Markdown; re-run on demand |
| Chat Q&A | Pro | Per user message | Max 2 tool rounds per turn |
| Reminder check | None | Every 5 minutes | Local DB only — no API call |

::: info Your API key
CURA uses your own Gemini API key, entered during setup. All costs are billed directly to your Google account. CURA does not proxy API calls or add markup.
:::

## Gemini Never Writes to SQLite

An explicit architectural rule: **Gemini output is always reviewed by you before it touches the database.** AI extractions land in the `suggestions` table. Only your approval moves them to `tasks`, `finance_items`, `people`, or the wiki. Gemini has no direct write path to your data.

## Deleting Your Data

Because all data is local:

- **Delete `cura.db`** to wipe all operational data
- **Delete `%AppData%\CURA\memory\`** to wipe the wiki and briefing cache
- **Uninstall CURA** via Windows Settings → Apps to remove the application

There is no account to delete, no server-side data to request erasure of, and no support ticket to open.

## Google OAuth

CURA uses OAuth2 with PKCE — no client secret is ever stored, and authorization codes are exchanged in a browser you control. CURA stores only the resulting access token and refresh token locally.

To revoke CURA's access to your Google account at any time:
1. Go to **myaccount.google.com/permissions**
2. Find **CURA** in the list of connected apps
3. Click **Remove Access**

Revoking access stops all Gmail and Calendar syncing. Your existing local data is not affected.
