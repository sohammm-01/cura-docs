# Email Intelligence

Gmail is infrastructure, not identity. CURA reads your email continuously in the background to extract signal — tasks you committed to, people worth remembering, bills arriving, calendar events mentioned. None of this surfaces until you approve it.

## How It Works

Email processing happens in a pipeline:

```
Gmail API
    │
    ▼
Local SQLite (emails table)
    │
    ▼
Pre-classification (local regex — no AI cost)
    │ Newsletters, OTPs, receipts → classified immediately
    ▼
Gemini Flash-Lite (25 emails per batch)
    │ Classifies remaining emails by category
    ▼
Important emails → individual extraction
    │ Tasks, finance signals, people mentions pulled out
    ▼
Suggestions tab (waiting for your approval)
```

### Initial Sync

On first run, CURA fetches your **last 30 days** of Gmail. After that, syncs are incremental — only new emails since the last run.

### Ongoing Sync Schedule

| Sync type | Frequency |
|---|---|
| Full email sync | Every 30 minutes |
| Reminder check | Every 5 minutes (local DB only — no API call) |

## Email Classification

Every email is assigned one of these categories:

| Category | What it means |
|---|---|
| `action_required` | You need to do something |
| `financial` | Invoice, bill, payment request, subscription renewal |
| `travel` | Booking confirmation, itinerary, transit |
| `calendar` | Meeting invite, event mention |
| `people` | Meaningful interaction with someone worth tracking |
| `fyi` | Worth reading, no action needed |
| `newsletter` | Bulk email, subscription content |
| `low_priority` | Not important, can be ignored |

### Pre-classification (Free)

Before any AI call, CURA runs local regex rules to identify:
- Newsletters (unsubscribe links, bulk-send headers)
- OTPs and verification codes
- Automated receipts

These are classified without any AI cost. Only the remaining emails go to Gemini Flash-Lite.

## What CURA Extracts from Important Emails

For emails classified as `action_required`, `financial`, or `people`, CURA runs an individual extraction pass. It looks for:

- **Tasks** — commitments you made, follow-ups you're expected to do
- **Finance items** — bills, renewals, payment requests, amounts and due dates
- **People signals** — new contacts worth tracking, interaction frequency changes

All extracted items land in **Suggestions** — nothing is written until you approve.

## Body Cap

Email bodies sent to Gemini Flash-Lite are capped at **5 KB**. Emails longer than this are truncated before extraction. This controls cost and keeps processing time fast. For most emails, 5 KB is more than sufficient.

## What CURA Does Not Do With Email

This is important:

- **Does not send email** on your behalf
- **Does not reply** to messages
- **Does not draft messages** for you
- **Does not auto-add contacts** from your inbox
- **Does not write anything** to your database without your explicit approval
- **Does not store email content** outside your local machine

CURA treats Gmail as a **read-only data source**. Your inbox is not a product for CURA — it is a signal source.

## Email Search via CURA AI

You can search your email archive through the chat interface:

```
"Search my emails for the Acme invoice"
"Find the thread with Sarah about the contract"
"Did anyone email me about the workshop registration?"
```

CURA queries the local `emails` table — not Gmail directly — so search is fast and offline-capable once emails are synced.

## Privacy

All email data is stored in the local `emails` table in `cura.db`. No email content is sent to any server other than Gemini's API during classification (and only up to the 5 KB body cap). No email is stored in any external system.
