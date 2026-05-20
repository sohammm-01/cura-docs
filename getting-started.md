# Getting Started

CURA is a Windows desktop application built with Tauri v2. There is no web app, no mobile version, and no cloud account to create. Everything runs locally on your machine.

## System Requirements

- **OS:** Windows 10 or Windows 11 (64-bit)
- **RAM:** 4 GB minimum, 8 GB recommended
- **Storage:** ~200 MB for the app; additional space for your local database and memory wiki
- **Internet:** Required for Google OAuth, Gmail/Calendar sync, and Gemini AI calls

## Installation

1. Download the latest CURA installer (`.exe`) from the releases page.
2. Run the installer and follow the prompts. CURA will be installed to `%AppData%\CURA\`.
3. CURA launches to the **system tray** on first run — look for the icon in your taskbar tray area.
4. Left-click the tray icon to open the main window.

::: tip Auto-launch
CURA is configured to auto-launch on Windows startup by default. You can disable this from the system tray right-click menu.
:::

## Step 1 — Connect Google

CURA reads your Gmail and Google Calendar to surface signals. It uses Google OAuth2 with a PKCE flow, which means your credentials never touch CURA's servers (there are none).

1. Open CURA and click **Connect Google** on the setup screen.
2. A browser window opens — sign in with your Google account and grant the requested permissions:
   - **Gmail** (read-only) — to fetch and classify emails
   - **Google Calendar** (read-only) — to fetch upcoming events and birthdays
3. Once authorised, CURA stores the token locally. You'll never need to re-authenticate unless you revoke access.

::: warning Permissions are read-only
CURA cannot send email, create calendar events, or modify anything in your Google account. It only reads.
:::

## Step 2 — Initial Email Sync

On first run, CURA fetches your last **30 days** of Gmail. This may take a few minutes depending on your inbox size.

**What happens during the initial sync:**

1. Emails arrive in the local database.
2. Local regex rules pre-filter newsletters, OTPs, and receipts — no AI cost for these.
3. Remaining emails are sent in batches of 25 to Gemini Flash-Lite for classification.
4. Important emails are processed individually to extract tasks, finance signals, and people mentions.
5. Everything extracted lands in the **Suggestions** tab — nothing is written to your data without your approval.

After the initial sync, CURA runs incremental syncs every **30 minutes** in the background.

## Step 3 — Your First Suggestions

Head to the **Suggestions** tab. You'll see a stack of cards — AI-proposed tasks, finance items, and contact suggestions drawn from your first email sync.

Work through them:
- **Swipe right / tap ✓** to approve — the item is written to your database
- **Swipe left / tap ✗** to dismiss
- **Tap ···** to defer to the Deferred tab

::: info The Consent Gate
Approving a suggestion is how CURA learns. Every approval enriches the memory layer. You're not just processing notifications — you're training your second brain.
:::

## Step 4 — Add Your First Contact

CURA's Contacts tab is a manual relationship CRM. To add a contact:

1. Open the **Contacts** tab.
2. Click **Add Contact** and fill in their name, email, and your relationship type.
3. Add personal notes — anything you'd want to remember about them.

Alternatively, ask CURA via chat: *"Add a contact — John Smith, colleague, john@company.com"* — CURA will confirm before saving.

## Step 5 — Read Your First Briefing

The **Daily Briefing** is generated once per day, every morning. If this is your first day, trigger a manual one:

1. Go to the **Briefing** tab.
2. Click **Regenerate**.
3. Gemini Pro writes a newspaper-style briefing from your open tasks, upcoming calendar events, recent important emails, and any wiki memory.

## What's Next

<div class="tip custom-block">

**You're set up.** CURA will quietly work in the background, syncing email, checking reminders, and building memory as you go. The longer it runs, the more context it accumulates — and the more useful it becomes.

</div>

| Where to go | What to learn |
|---|---|
| [The Second Brain](/concepts/second-brain) | How CURA's memory compounds over time |
| [The Consent Gate](/concepts/consent-gate) | Why nothing writes without you |
| [CURA AI](/features/ai-chat) | How to talk to your second brain |
| [Tasks](/features/tasks) | Task types, board view, reminders |
| [Finance](/features/finance) | Bills, subscriptions, bank statements |
