# Tasks

CURA's task system is not passive. It watches your patterns and proactively surfaces what you should be working on — before you have to think of it. Tasks can be created manually, proposed by AI from your email, or added via CURA AI chat.

## Task Types

| Type | Description |
|---|---|
| **One-off** | A single task with an optional due date and time |
| **Daily ritual** | A recurring task that appears every day |
| **Recurring** | A task on a custom schedule (weekly, every N days, etc.) |

## Task Interface

### Board View

A cork-board of colour-coded sticky notes:

- **Salmon** — one-off tasks
- **Yellow** — daily rituals
- **Green** — recurring tasks

Tap any sticky to open a full-screen task modal.

### Lines View

A clean, focused list layout — all tasks in order of priority and due date. Good for planning your day without visual noise.

Toggle between Board and Lines using the view switcher at the top of the Tasks tab.

## Task Detail Modal

Tap any task (in either view) to open its full detail:

| Field | Description |
|---|---|
| **Title** | The task name |
| **Notes** | Free-form notes attached to this task |
| **Due date** | Optional date |
| **Due time** | Optional time — enables reminders |
| **Priority** | High / Normal / Low |
| **Linked contact** | If this task is a follow-up for a specific person |

## Marking Tasks Done

Tap the checkbox on any task for a satisfying **strike-through animation**. The task moves to the done pile and is recorded with a completion timestamp.

Completed tasks are accessible from the **Done** tab for review and reference.

## Reminders

Set a time on any task, and CURA will:
1. Notify you **1 hour before** with a chime and a Windows system notification
2. Surface the task prominently in the next day's briefing if it hasn't been completed

::: warning CURA must be running
Reminders require CURA to be open (or running in the system tray). They are checked locally every 5 minutes — no AI call, no internet required.
:::

## Proactive Task Suggestions

CURA extracts commitments from your email and surfaces them as suggested tasks. Examples of what triggers a suggestion:

- An email where you wrote *"I'll get back to you by Friday"*
- A thread where someone asked you to *"send the updated contract"*
- A calendar invite you haven't responded to
- A recurring pattern — tasks you tend to add on Monday mornings

All suggestions land in the **Tasks** sub-tab of Suggestions. Nothing is added to your task list until you approve it.

Over time, CURA learns:
- What you typically work on certain days of the week
- Which tasks tend to follow others
- Which tasks you frequently defer (and might need breaking down)
- Which commitments in your email you've been ignoring

## Creating Tasks via CURA AI

```
"Add a task: review the Acme proposal, due Thursday at 3 PM, high priority"
"Add a daily ritual: morning journal"
"Mark the dentist call task as done"
```

All create actions produce a consent card. Confirm → task created.

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `N` | New task (from Tasks tab) |
| `B` / `L` | Toggle Board / Lines view |
| `Enter` | Open selected task detail |
| `Space` | Mark selected task done |
