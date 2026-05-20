import { Footer } from '../components/Footer'

const stages = [
  {
    label: 'Complete', pill: 'done',
    items: [
      { tag: 'Phase 1', title: 'Desktop shell + Gmail integration', desc: 'Tauri v2 app shell, Gmail OAuth, initial 30-day sync.' },
      { tag: 'Phase 2', title: 'Smart Inbox + Suggestions', desc: 'Email classification, extraction pipeline, Suggestions tab with consent cards.' },
      { tag: 'Phase 3', title: 'Briefing + Notifications + Background Sync', desc: 'Daily briefing, reminder notifications, 30-min background sync.' },
      { tag: 'Phase 4', title: 'Full Memory Surface', desc: 'Contacts CRM, Finance tracker, pattern memory, wiki synthesis.' },
      { tag: 'Phase 4.5', title: 'Contacts cleanup + Finance upgrade + Cost fixes', desc: 'Batching, caching, cost controls, bank statement import.' },
      { tag: 'Phase 5', title: 'Calendar + Read-Only Chat', desc: 'Google Calendar integration, CURA AI (read-only), wiki ingest.' },
      { tag: 'Phase 6', title: 'Chat Action Proposals + Consent Cards', desc: 'Full chat write actions, consent cards on every write, tool registry.' },
      { tag: 'UI', title: 'Paper / Filofax design system', desc: 'Margin and Daylight themes, leather sidebar, paper grain, Caveat font.' },
    ],
  },
  {
    label: 'On hold', pill: 'hold',
    items: [
      { tag: 'Phase 7', title: 'Chat as Full Controller', desc: 'Every UI button exposed as a chat tool. Undo support. Full audit log.' },
    ],
  },
  {
    label: 'Planned', pill: 'next',
    items: [
      { tag: 'Relationship Intelligence', title: 'Proactive relationship nudges', desc: '"You haven\'t spoken to [name] in 3 months." Relationship timeline. Commitment tracking.' },
      { tag: 'Memory Expansion', title: 'Voice notes + manual wiki entry', desc: 'Record a voice note; CURA adds it to the wiki. Write your own context directly.' },
      { tag: 'Finance Depth', title: 'PDF statement import + AI recategorisation', desc: 'PDF import for banks that don\'t export CSV. AI-powered merchant recategorisation.' },
    ],
  },
]

export default function Roadmap({ go }: { go: (p: string) => void }) {
  return (
    <>
      <div className="roadmap-page">
        <h1>Roadmap</h1>
        <p className="lede">Phases 1–6 are complete and shipping. Phase 7 is on hold. Everything else is planned but unscheduled.</p>
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
      </div>
      <Footer go={go} />
    </>
  )
}
