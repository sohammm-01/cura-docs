# FAQ & Troubleshooting

## General

### What is CURA?

CURA is a Windows desktop application that acts as your second brain — a personal life operating system that reads your email and calendar, tracks your tasks and finances, and tells you what matters before you have to ask. It runs locally on your machine, uses Gemini AI, and never syncs data to a cloud.

### Is CURA free?

CURA itself is free. You do need a **Gemini API key** (from Google AI Studio), which is billed by usage directly to your Google account. CURA is designed to minimise API calls through batching, caching, and model selection — typical usage should remain within Gemini's free tier or very low-cost paid tier.

### Does CURA work on Mac or Linux?

Not currently. CURA is a Windows desktop application built with Tauri v2. Mac and Linux builds are not planned.

### Does CURA require an internet connection?

Internet is required for:
- Gmail and Calendar sync
- Gemini API calls (classification, extraction, chat, briefing, wiki synthesis)
- Google OAuth

Offline, CURA can display existing data (tasks, contacts, finance, cached briefing) but cannot sync or generate new AI content.

---

## Setup & Authentication

### Google OAuth isn't opening a browser window

Try right-clicking the CURA tray icon → **Show CURA**, then retry the Connect Google button. If a firewall or antivirus is blocking the OAuth redirect, you may need to add an exception for CURA.

### My Google authorisation expired

OAuth tokens expire. If CURA shows a "Re-authenticate" prompt, click it and sign in again. Your local data is not affected by re-authentication.

### I accidentally revoked CURA's Google access

Go to **myaccount.google.com/permissions**, re-authorise CURA, then restart the app. Syncing will resume from where it left off.

---

## Email

### The initial email sync is taking a long time

The first sync fetches 30 days of Gmail. Inboxes with thousands of emails in that window can take several minutes. This is normal — leave CURA open and it will complete.

### Some emails aren't appearing in Suggestions

Not all emails generate suggestions — only emails classified as `action_required`, `financial`, or `people`. Newsletters, OTPs, receipts, and `fyi` emails are classified but don't produce extractable suggestions. If you're missing a specific email, check whether it was classified as a lower-priority category.

### CURA keeps suggesting the same thing

If a suggestion keeps reappearing, check whether you've deferred it instead of rejected it. Deferred items live in the **Deferred** tab and can be cleared from there.

---

## Finance

### My bank format isn't auto-detected

CURA auto-detects HDFC and ICICI CSV formats. For other banks, you can manually map columns during import. Export your statement as CSV from your bank's web interface, then import it in CURA and follow the column mapping prompts.

### A transaction is in the wrong category

Categorisation uses local keyword rules — it's not AI-powered. Ambiguous merchant names (e.g., "NEFT CR" or "UPI/00012345") may be miscategorised. Manual re-categorisation within the Transactions view is planned for a future release.

### A subscription shows the wrong renewal date

Renewal dates on AI-extracted subscriptions come from the email they were found in. If the date is wrong, tap the subscription to edit it and correct the date manually.

---

## Tasks & Reminders

### I'm not getting reminder notifications

Reminders require CURA to be **running in the system tray**. If you fully quit CURA, reminders won't fire. Check that the tray icon is visible and that CURA hasn't been exited.

Also confirm that Windows notifications are enabled for CURA in **Settings → System → Notifications**.

### A recurring task isn't appearing today

Check the task's recurrence settings — the schedule may be set to a different interval than you intended. Open the task detail modal to review and update the recurrence type.

---

## CURA AI

### Chat is slow to respond

CURA AI uses Gemini Pro for all chat turns. Response time depends on Google's API latency and the complexity of the query (especially if tool calls are involved). If responses consistently take more than 10 seconds, check your internet connection and Gemini API status at **status.cloud.google.com**.

### Chat gave me an incorrect answer

CURA AI answers are only as accurate as the data available. If you haven't synced recently, or if a wiki page is outdated, the answer may miss current context. Try:
1. Triggering a manual email sync (wait for the sync indicator to clear)
2. Clicking **Regenerate** on the Briefing tab to refresh wiki synthesis
3. Asking again with more specific context

### CURA AI won't create a finance item without extra confirmation

This is by design. Finance items always require a second explicit confirmation step, regardless of how the action was initiated. This is a permanent design principle and cannot be changed.

---

## Data & Privacy

### Where is my data stored?

All data is stored locally:
- Database: `%AppData%\CURA\cura.db`
- Wiki memory: `%AppData%\CURA\memory\wiki\`
- Briefing cache: `%AppData%\CURA\memory\briefings\`

### How do I back up my CURA data?

Copy the `%AppData%\CURA\` folder to a backup location. This includes your database, wiki memory, and cached briefings. CURA does not have a built-in backup feature.

### How do I delete all my data?

1. Exit CURA fully (right-click tray → **Exit CURA**)
2. Delete `%AppData%\CURA\cura.db` to remove all operational data
3. Delete `%AppData%\CURA\memory\` to remove wiki and briefing cache
4. Uninstall CURA via Windows Settings → Apps if you no longer want the application

---

## Known Limitations

| Area | Limitation |
|---|---|
| Calendar | Untested at scale; birthday pipeline unverified |
| Finance CSV | Auto-detect covers HDFC/ICICI only; other formats require manual column mapping |
| Transactions | Local keyword categorisation misses ambiguous merchants |
| Chat | Gemini Pro; 2 tool rounds max per turn to control cost |
| Reminders | Requires PC to be on and CURA running in tray |
| Wiki ingest | Partial write failures retry on next run; may cause slight lag in memory |
| Relationship memory | Depth depends on email history — sparse inboxes mean thinner context |
| Multiple calendars | Only the primary Google Calendar is synced |
