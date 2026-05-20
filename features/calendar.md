# Calendar

CURA fetches your Google Calendar to surface upcoming events in the daily briefing and make them queryable via CURA AI. Calendar data is read-only — CURA never creates or modifies events.

## What Gets Synced

CURA fetches from two calendars:

| Calendar | What's synced |
|---|---|
| **Primary calendar** | All events in a 30-day rolling window |
| **Birthday calendar** | Birthday events from your Google contacts |

## Calendar View

The **Calendar** tab shows your events grouped by date with **Today** and **Tomorrow** labels at the top for quick orientation. Events on other dates scroll below.

**Birthday events** are marked with a badge to distinguish them from regular events.

## Birthday Handling

When a birthday is approaching, CURA generates a local gift or wish task suggestion — no AI call needed. This lands in Suggestions for you to approve, convert to a reminder, or dismiss.

## Sync Schedule

The calendar syncs with a **5-minute cooldown** between runs. This prevents excessive API calls while keeping events reasonably fresh.

## Calendar via CURA AI

You can query upcoming events through the chat interface:

```
"What do I have on today?"
"Do I have anything tomorrow afternoon?"
"When is my next call with the Acme team?"
"Any birthdays coming up this week?"
```

Calendar data is also automatically included in the **Daily Briefing** — you don't need to ask for it.

## Known Limitations

- Calendar sync is untested at scale — very dense calendars (hundreds of events per month) may experience slower sync.
- The birthday pipeline (gift/wish suggestions) is not fully verified — behaviour may vary depending on how birthdays are stored in your Google Contacts.
- CURA fetches the **primary calendar** only. Secondary or shared calendars are not currently synced.
- CURA does not support creating, editing, or deleting calendar events.

## Planned Improvements

Support for multiple calendars (secondary, shared, team calendars) is a candidate for a future release but has not been scheduled.
