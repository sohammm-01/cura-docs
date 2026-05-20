# The Consent Gate

The consent gate is CURA's most important design principle. It means one thing: **nothing is ever written to your database without your explicit confirmation.**

Not a task. Not a contact. Not a finance item. Not a wiki page. Every proposal from AI must pass through you before it becomes data.

## Why This Matters

AI systems that write automatically create a specific kind of anxiety: *what did it do while I wasn't looking?* You can never be fully confident in the state of your data. You second-guess entries. You wonder if something was added that you didn't intend.

CURA eliminates this by design. You are always the author of your own second brain. CURA is the researcher that surfaces options — you make the calls.

## How It Works

Every AI-extracted item lands in the **Suggestions** tab as a card. Nothing happens to that item until you act on it.

| Your action | What happens |
|---|---|
| **Approve** | Item is written to the database (tasks → tasks table, finance → finance_items, etc.) |
| **Reject** | Item is dismissed permanently |
| **Defer** | Item moves to the Deferred tab — revisit when you're ready |

The Suggestions tab has five sub-tabs: **Tasks · Finance · People · Other · Deferred**.

## Consent Cards

When you interact with CURA AI via chat and ask it to take an action, CURA produces a **consent card** before executing. The card shows exactly what will be written — the fields, the values, the table — and waits for your confirmation.

```
┌─────────────────────────────────────────────┐
│  Add task                                   │
│                                             │
│  Title:    Follow up with Sarah re: invoice │
│  Due:      Tomorrow, 5:00 PM               │
│  Priority: High                             │
│                                             │
│  [ Confirm ]          [ Cancel ]            │
└─────────────────────────────────────────────┘
```

You tap **Confirm** → task is created. You tap **Cancel** → nothing happens.

## Finance is Always Confirmed

Finance and destructive actions carry an **extra confirmation requirement** that is permanent and cannot be changed by any setting. Even if you've enabled more permissive behaviour elsewhere, creating a finance item always requires an explicit confirmation step.

## What Does Not Require Consent

These actions are read-only and do not modify your data, so they do not require a consent card:

- Querying tasks, contacts, finance, or calendar via chat
- Reading wiki pages
- Searching email archive
- Generating the daily briefing

## The Broader Principle

The consent gate reflects a belief about how AI tools should work: **AI should make proposals, humans should make decisions.** A tool that acts on your behalf without asking is not a tool — it's an agent with its own agenda. CURA is a tool.

::: tip Permanent by design
The consent gate is not configurable. There is no "auto-approve" mode, no trusted sources that bypass it, no keyboard shortcut to skip it. Every write goes through you.
:::
