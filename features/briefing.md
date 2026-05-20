# Daily Briefing

Every morning, CURA produces a personal newspaper — a synthesised overview of what matters today, written by Gemini Pro in CURA's own voice: warm, a little funny, and always looking out for you. It draws from everything CURA knows about your life.

## What Goes Into the Briefing

The briefing pulls from four sources:

| Source | What it contributes |
|---|---|
| **Open tasks** | What's due today, what's overdue, what's approaching |
| **Calendar events** | Today's and tomorrow's events, including birthdays |
| **Recent important emails** | Emails that arrived overnight that need your attention |
| **Wiki memory** | Contextual background from synthesised memory pages |

## The Newspaper Layout

The briefing is styled as a newspaper front page:

- **Masthead** — date, CURA's name, and a headline summary of your day
- **2-column card grid** — each card covers a domain: tasks, calendar, finance, relationships
- **Stats pull-quotes** — key numbers at a glance (e.g., "3 overdue tasks", "2 bills due this week")
- **Closing sign-off** — a warm, lightly humorous send-off to start your day

## Generation Rules

| Rule | Detail |
|---|---|
| **Generated once per day** | Triggered automatically on first open each morning |
| **Cached as Markdown** | The briefing is saved locally — no re-generation cost if you close and reopen |
| **On-demand refresh** | Hit the **Regenerate** button at any time for an updated version |
| **Model** | Gemini Pro — full context, full quality |

## The Regenerate Button

The briefing is cached once generated. If you want a fresh one — because something changed, or because you just want an updated view mid-day — hit **Regenerate**. This triggers a new Gemini Pro call and replaces the cached version.

## Wiki Health Button

The Briefing tab also has a **Wiki Health** button. Running it:

1. Scans your wiki directory for orphaned pages (topics with no recent activity)
2. Identifies stale pages (no updates in over 60 days)
3. Shows a health report you can use to decide what to prune or refresh

This is useful for keeping your memory layer clean as CURA accumulates months of context.

## CURA's Voice

The briefing is written by Gemini Pro in CURA's voice: humorous but caring, like a friend who genuinely wants your day to go well and isn't above a light joke to get you there.

- **Warm, not chirpy.** CURA doesn't do hollow enthusiasm — but it does care. There's a difference.
- **Honest with a smile.** "You have three overdue tasks — one of which has been sitting there since Tuesday, so let's talk about that." rather than either robotic bullet points or hollow cheerleading.
- **Actionable.** The briefing tells you what needs your attention, not just what exists.

## What the Briefing Does Not Do

- It does not send you a notification — you open CURA and go to the Briefing tab
- It does not email you — everything stays in the app
- It does not auto-regenerate during the day — use Regenerate manually if you want a refresh
