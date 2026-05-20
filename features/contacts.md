# Contacts

CURA's Contacts feature is a personal relationship CRM. Your contacts are not just a list of names — they are living records that accumulate interaction history, open commitments, and relationship context over time.

## What a Contact Record Holds

| Field | Description |
|---|---|
| **Name** | Full name |
| **Relationship type** | Displayed as a badge (e.g., Client, Colleague, Friend, Family) |
| **Email address** | Primary email for cross-referencing with your inbox |
| **Personal notes** | Free-form, editable, permanent — anything you want to remember |
| **Interaction history** | Drawn from email and conversation context |
| **Open commitments** | Tasks or follow-ups linked to this person |

## Actions from a Contact Card

From any contact's record, you can:

- **Email** — opens your email client with their address pre-filled
- **Set a reminder** — creates a task linked to this contact
- **View notes** — full-screen notes editor with their history

## How Contacts Are Added

CURA keeps you in full control of who enters your CRM. Contacts are never auto-created.

### Manual Addition

Open the **Contacts** tab and click **Add Contact**. Fill in their name, email, relationship type, and any initial notes.

### Via CURA AI

Tell CURA in chat: *"Add a contact — Sarah Chen, client, sarah@acme.io"*

CURA will present a consent card with the details. Confirm and the contact is created.

### CURA-Suggested Contacts

If a person appears in **5 or more important emails** and is not a no-reply address, CURA may surface a suggestion in the **People** tab of Suggestions. Approving it opens the **Add Contact form** — it does not auto-create the record.

::: info You always fill in the form
Even when CURA suggests a contact, the final record is created by you. CURA pre-fills what it knows from email; you add the relationship type and notes before confirming.
:::

## Relationship Awareness

CURA AI can answer questions about any contact using both email history and wiki memory:

```
"When did I last hear from Marcus?"
"What's my history with the Acme team?"
"Are there any open commitments I have with Priya?"
"Who have I been in touch with most this month?"
```

These queries cross-reference the `people` table, the `emails` table, and any relevant wiki pages synthesised for that person.

## What CURA Does Not Do With Contacts

- **Does not auto-create contacts** from your inbox — every contact requires your action
- **Does not import from Google Contacts** — CURA's CRM is separate and intentionally curated
- **Does not email on your behalf** — the email action opens your own email client

## Planned: Relationship Intelligence

Coming after Phase 7:

- **Proactive nudges** — "You haven't spoken to [name] in 3 months"
- **Relationship timeline** — a scrollable history of every interaction with a contact
- **Commitment tracking** — open promises to and from contacts, surfaced in the daily briefing
