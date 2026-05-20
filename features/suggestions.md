# Suggestions

Every item CURA proposes must pass through you. The Suggestions tab is the consent gate made visible — a review queue where you decide what becomes part of your second brain and what gets dismissed.

## The Card Interface

Suggestions are presented as a **pile of cards with a tilt animation** — reminiscent of a physical stack you're sorting through. Each card shows:

- The suggestion type (task, finance, contact, other)
- The content CURA extracted
- The source (which email it came from)
- The proposed action (what will happen if you approve)

### Approving and Dismissing

| Action | How | What happens |
|---|---|---|
| **Approve** | Swipe right or tap ✓ | Item is written to the appropriate table |
| **Reject** | Swipe left or tap ✗ | Item is permanently dismissed |
| **Defer** | Tap ··· or tap Later | Item moves to the Deferred tab |

## The Five Tabs

| Tab | What's in it |
|---|---|
| **Tasks** | Commitments and follow-ups extracted from email |
| **Finance** | Bills, renewals, invoices, payment requests |
| **People** | Potential contacts to add to your CRM |
| **Other** | Meeting notes, follow-up context, miscellaneous |
| **Deferred** | Items you've set aside to review later |

## What Happens on Approval

Each suggestion type writes to a different place:

| Suggestion type | On approve |
|---|---|
| **Task** | Written to the `tasks` table — appears in your Tasks tab |
| **Finance** | Written to the `finance_items` table — appears in Finance tab |
| **Contact suggestion** | Opens the **Add Contact form** — you fill in details and confirm |
| **Other** | Logged to wiki memory (meeting notes, follow-ups) |

::: info Contact suggestions never auto-create
Approving a contact suggestion opens the Add Contact form pre-filled with what CURA found in email. You review, add any missing details, and confirm. The contact is only created when you submit the form.
:::

## The Deferred Tab

The Deferred tab is a holding area — not a bin. Items here are things you weren't ready to decide on. Come back to them when you have more context.

Deferred items do not expire automatically. Clear them when you're ready, or let them accumulate until your next review session.

## Working Through Suggestions Efficiently

The Suggestions tab is most useful when you process it regularly — even a few minutes a day keeps the queue manageable. A practical workflow:

1. **Start with Tasks** — approve what's real, dismiss what's already done or irrelevant
2. **Check Finance** — verify bills you recognise, dismiss duplicates or spam
3. **Review People** — approve contacts worth tracking, dismiss one-off correspondents
4. **Defer anything uncertain** — come back to it when you have more context

## Suggestion Quality Over Time

Early on, CURA may surface suggestions that miss the mark — emails it misread, commitments that were hypothetical, contacts that aren't worth tracking. This is normal. As you approve and dismiss, CURA learns your patterns and suggestion accuracy improves.

Your rejection behaviour is signal. Consistently dismissing suggestions from certain senders or of certain types tells CURA what to deprioritise.
