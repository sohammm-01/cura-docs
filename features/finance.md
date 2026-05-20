# Finance

CURA gives you a clear, honest picture of your financial commitments — what you're spending, what's coming up, and what you might be able to cut. The goal is simple: **no bill should surprise you, no subscription should be forgotten, and no month should end without knowing where your money went.**

CURA surfaces information to help you make decisions. It does not make them for you.

## Three Finance Tools

### 1. Tracked Bills & Renewals

CURA extracts finance signals from your email — subscription renewals, invoices, payment requests, and bills. These land in the **Finance** tab of Suggestions.

When you approve a suggestion:
- The item is written to the `finance_items` table
- You can mark it as **paid** or **cancelled** when resolved
- Upcoming bills surface in the daily briefing

You can also manually add finance items from the Finance tab or via CURA AI chat.

### 2. Subscription Tracker

A manual log of your recurring subscriptions. For each subscription you track:

| Field | Description |
|---|---|
| **Name** | Service name (e.g., Notion, Spotify, Adobe) |
| **Amount** | Monthly or annual cost |
| **Billing cycle** | Monthly / Annual / Quarterly |
| **Next billing date** | When it next charges |
| **Category** | Productivity / Entertainment / Utilities / etc. |
| **Payment method** | Which card or account it charges |
| **Notes** | Any relevant context |

CURA calculates your **estimated monthly spend** automatically from all active subscriptions, normalising annual plans to a monthly equivalent.

::: tip Use this to audit your subscriptions
The subscription tracker is useful not just for tracking — reviewing it periodically helps identify services you're paying for but not using.
:::

### 3. Bank Statement Analysis

Import CSV bank statements to get a categorised view of your spending.

**Supported formats (auto-detected):**
- HDFC Bank CSV
- ICICI Bank CSV

**What happens on import:**
1. CURA reads the CSV and stores transactions in the `transactions` table
2. Each transaction is categorised automatically by local keyword rules
3. You see a spending breakdown by category with click-to-filter detail

**Categories (11 total):**
Food & Dining · Shopping · Utilities · Entertainment · Transport · Health · Subscriptions · EMI / Loans · Transfers · Investments · Other

::: warning All data stays local
No bank statement data ever leaves your machine. CURA does not connect to your bank directly — you download and import the CSV yourself.
:::

## Viewing Finance Data

The **Finance** tab shows:

- **Upcoming bills** — sorted by due date, with days-until-due
- **Subscription list** — all active subscriptions, monthly cost estimate at the top
- **Statement view** — category breakdown of imported transactions, filterable by month

## Finance via CURA AI

```
"What subscriptions am I paying for?"
"How much am I spending on subscriptions this month?"
"Any bills due this week?"
"Add a subscription: Adobe Creative Cloud, ₹4,500/month"
"Log a finance item: rent payment, ₹25,000, due 1st"
```

Write actions always produce a consent card before executing.

## Known Limitations

- CSV auto-detection covers **HDFC and ICICI formats**. Other bank formats can be imported if you manually map columns.
- Month-over-month comparison is planned for a future release (requires at least 2 imported statements).
- CURA does not categorise transactions using AI — categorisation is local keyword-based rules. Ambiguous merchants may be miscategorised.

## Planned Finance Features

- **PDF statement import** — for banks that only export PDF
- **AI-powered transaction re-categorisation** — for ambiguous merchant names
- **Month-over-month spending comparison** — once multiple statements are imported
- **Budget targets and variance alerts** — set a monthly budget per category, get notified when you're over
