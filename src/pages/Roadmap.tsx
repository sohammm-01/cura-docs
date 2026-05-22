import { Footer } from '../components/Footer'

const stages = [
  {
    label: 'Complete', pill: 'done',
    items: [
      { tag: 'Phase 1', title: 'Desktop shell + Gmail integration',
        desc: 'Tauri v2 app shell, Gmail OAuth with PKCE, 30-day initial sync, incremental sync, local SQLite.' },
      { tag: 'Phase 2', title: 'Email pipeline + Suggestions queue',
        desc: 'Batch classification (20–50 emails per prompt), tiered extraction, Suggestions tab with consent cards.' },
      { tag: 'Phase 3', title: 'Briefing + Notifications + Background sync',
        desc: 'Daily briefing cached as Markdown, reminder notifications, 30-minute background sync via setInterval (no Python sidecar).' },
      { tag: 'Phase 4', title: 'Contacts, Finance, wiki synthesis',
        desc: 'Manual contact CRM, finance tracker with subscription and CSV import. Gemini-written wiki — later replaced by projection model in Phase R.' },
      { tag: 'Phase 4.5', title: 'Cost controls + bank statement import',
        desc: 'Batching, caching, 5 KB body cap, pre-classification regex for newsletters/OTPs, HDFC/ICICI CSV import.' },
      { tag: 'UI', title: 'Filofax design system',
        desc: 'Margin and Daylight themes, leather sidebar, paper grain texture, JetBrains Mono + Plus Jakarta Sans.' },
    ],
  },
  {
    label: 'Built — unverified', pill: 'unverified',
    items: [
      { tag: 'Phase 5', title: 'Calendar + read-only chat',
        desc: 'Google Calendar integration and CURA AI (read-only queries). Calendar untested at scale; dense event sets may slow sync. Birthday suggestion pipeline unverified.' },
      { tag: 'Phase 6', title: 'Chat write-actions + consent cards',
        desc: 'Chat can create tasks, contacts, subscriptions, and finance items via Tier-3 consent cards. Write-action stability is unverified end-to-end; full tool surface deferred to Phase 7.' },
    ],
  },
  {
    label: 'Refactor complete — validating', pill: 'progress',
    items: [
      { tag: 'Phase R', title: 'ADHD refocus — tiered capture + Today surface',
        desc: 'Replaced the consent-gate-everywhere model with tiered capture (Tier 1 auto-draft / Tier 2 glance-confirm / Tier 3 explicit). Wiki converted from Gemini-written narrative to deterministic projection from confirmed tables. Suggestions queue decommissioned; Today surface evolved as front door. Architecture complete; runtime validation in progress.' },
    ],
  },
  {
    label: 'Deferred', pill: 'hold',
    items: [
      { tag: 'Privacy', title: 'On-device inference',
        desc: 'Email classification currently goes to Gemini. On-device inference (approach TBD) would keep all data fully local. Deferred because Gemini is fast and cheap at current scale; the tradeoff is known and accepted.' },
      { tag: 'Phase 7', title: 'Chat as full controller',
        desc: 'Every UI action exposed as a chat tool with undo support and a full audit log. Deferred until the Today surface stabilises post-Phase R.' },
      { tag: 'Calendar QA', title: 'Calendar at-scale testing',
        desc: 'Basic sync works. Behaviour with dense event sets and complex birthday configurations is untested. Unblocking this requires dedicated QA time.' },
    ],
  },
]

export default function Roadmap({ go }: { go: (p: string) => void }) {
  return (
    <>
      <div className="roadmap-page">
        <h1>Build Log</h1>
        <p className="lede">What's built, what's verified, what's deferred — and why.</p>
        {stages.map(stage => (
          <div className="rm-stage" key={stage.label}>
            <div className="rm-stage-head">
              <h2>{stage.label}</h2>
              <span className={`rm-pill ${stage.pill}`}>{stage.label}</span>
            </div>
            <div className="rm-list">
              {stage.items.map(item => (
                <div className="rm-card" key={item.title}>
                  <div className="rm-tag">{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p style={{ marginTop: 48, fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
          Planned features (relationship intelligence, Finance depth, voice notes) are candidates, not commitments.
        </p>
      </div>
      <Footer go={go} />
    </>
  )
}
