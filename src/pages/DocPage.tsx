import { useState, useEffect, useMemo } from 'react'
import { DocsSidebar } from '../components/DocsSidebar'
import { RightRail } from '../components/RightRail'
import { Footer } from '../components/Footer'
import { docPages, flatNav } from '../data/content'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/* ── Page bodies ─────────────────────────────────────────────────────────── */

function GettingStartedBody() {
  return (
    <>
      <h2 id="requirements">System requirements</h2>
      <p>You need a Windows machine. Everything else is optional.</p>
      <table>
        <thead><tr><th>What</th><th>Need</th></tr></thead>
        <tbody>
          <tr><td><strong>OS</strong></td><td>Windows 10 or 11 (64-bit)</td></tr>
          <tr><td><strong>RAM</strong></td><td>4 GB minimum, 8 GB recommended</td></tr>
          <tr><td><strong>Storage</strong></td><td>~200 MB for the app, plus space for your database</td></tr>
          <tr><td><strong>Internet</strong></td><td>Required for Google OAuth, Gmail/Calendar sync, AI API</td></tr>
        </tbody>
      </table>
      <h2 id="installation">Installation</h2>
      <p>Download the latest installer (<code>.exe</code>) from the releases page, run it, and you're done. CURA installs to <code>%AppData%\CURA\</code> and launches into your system tray.</p>
      <div className="callout">
        <div><strong>Auto-launch is on by default.</strong> Right-click the tray icon to disable it. CURA's value comes from running quietly in the background.</div>
      </div>
      <h2 id="five-steps">Five steps</h2>
      <div className="gs-stepper">
        {[
          { n: '1', title: 'Connect Google', body: 'CURA reads your Gmail and Calendar via OAuth2 with PKCE. Your credentials never touch a CURA server because there isn\'t one. The token is encrypted and stored locally.', extra: <ul><li><strong>Gmail</strong> — read-only</li><li><strong>Google Calendar</strong> — read-only</li></ul> },
          { n: '2', title: 'Wait for the first sync', body: 'CURA fetches your last 30 days of Gmail. Local regex rules pre-filter newsletters, OTPs, and receipts. Important emails go to AI for classification.' },
          { n: '3', title: 'Work through Suggestions', body: 'Head to the Suggestions tab. AI-proposed tasks, finance items, and contacts wait for your approval. Approve, defer, or dismiss — nothing writes to your data until you say so.' },
          { n: '4', title: 'Add your first contact', body: 'Contacts in CURA are always manual. Add the people who matter with a relationship type and a few notes. Or ask CURA: "Add a contact — John Smith, colleague, john@company.com".' },
          { n: '5', title: 'Read your briefing', body: 'Open the Briefing tab and click Regenerate. AI writes a newspaper from your tasks, calendar, important emails, and wiki memory. After today, it runs once each morning automatically.' },
        ].map(s => (
          <div className="gs-step" key={s.n}>
            <div className="gs-bullet">{s.n}</div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.extra}
            </div>
          </div>
        ))}
      </div>
      <h2 id="whats-next">What's next</h2>
      <p>You're set up. CURA will quietly work in the background, syncing email, checking reminders, building memory. The longer it runs, the more context it accumulates — and the more useful it becomes.</p>
    </>
  )
}

function SecondBrainBody() {
  return (
    <>
      <h2 id="signals">What CURA remembers</h2>
      <p>CURA builds memory from four primary signals — all things you're already doing.</p>
      <table>
        <thead><tr><th>Signal</th><th>What CURA extracts</th></tr></thead>
        <tbody>
          <tr><td><strong>Email</strong></td><td>Tasks you committed to, people worth tracking, bills arriving, calendar mentions</td></tr>
          <tr><td><strong>Calendar</strong></td><td>Upcoming events, recurring commitments, birthday reminders</td></tr>
          <tr><td><strong>Your approvals</strong></td><td>Every suggestion you confirm teaches CURA what matters to you</td></tr>
          <tr><td><strong>Your conversations</strong></td><td>Chat interactions add context that refines future responses</td></tr>
        </tbody>
      </table>
      <h2 id="memory-grows">How memory grows</h2>
      <ol>
        <li><strong>Signals arrive</strong> — Gmail syncs every 30 minutes, Calendar every 5</li>
        <li><strong>AI extracts</strong> — AI classifies and pulls tasks, finance signals, people</li>
        <li><strong>You approve</strong> — Suggestions land in the tab and wait for your call</li>
        <li><strong>Memory deepens</strong> — Approved items enrich SQLite <em>and</em> the Markdown wiki</li>
        <li><strong>CURA gets smarter</strong> — Better suggestions, richer chat, deeper briefings</li>
      </ol>
      <h2 id="compounding">Compounding over time</h2>
      <p>In the first week, CURA has limited context. By month three, it knows your patterns. The daily briefing begins to feel like it was written by someone who knows you. This is the compounding effect — CURA becomes more valuable the longer you use it.</p>
      <h2 id="limits">What CURA does not do</h2>
      <ul>
        <li>It does not send email on your behalf</li>
        <li>It does not auto-add contacts from your inbox</li>
        <li>It does not write anything to your database without your explicit approval</li>
        <li>It does not store data outside your local machine</li>
      </ul>
    </>
  )
}

function ConsentGateBody() {
  return (
    <>
      <h2 id="why">Why this matters</h2>
      <p>AI systems that write automatically create a specific kind of anxiety: <em>what did it do while I wasn't looking?</em> CURA eliminates this by design. You are always the author of your own second brain.</p>
      <h2 id="how">How it works</h2>
      <p>Every AI-extracted item lands in the <strong>Suggestions</strong> tab as a card. Nothing happens to that item until you act on it.</p>
      <table>
        <thead><tr><th>Your action</th><th>What happens</th></tr></thead>
        <tbody>
          <tr><td><strong>Approve</strong></td><td>Item is written to the appropriate table</td></tr>
          <tr><td><strong>Reject</strong></td><td>Item is dismissed permanently</td></tr>
          <tr><td><strong>Defer</strong></td><td>Item moves to the Deferred tab</td></tr>
        </tbody>
      </table>
      <h2 id="consent-cards">Consent cards</h2>
      <p>When you ask CURA AI to take an action via chat, it produces a <strong>consent card</strong> before executing — a preview of exactly what will be written. You confirm, it executes. You cancel, nothing happens.</p>
      <div className="callout warning">
        <div><strong>Finance is always confirmed.</strong> Finance and destructive actions carry an extra confirmation requirement that is permanent and cannot be changed by any setting.</div>
      </div>
      <h2 id="permanent">Permanent by design</h2>
      <p>The consent gate is not configurable. There is no "auto-approve" mode, no trusted sources that bypass it, no keyboard shortcut to skip it. Every write goes through you.</p>
    </>
  )
}

function AiChatBody() {
  return (
    <>
      <h2 id="two-modes">Two modes</h2>
      <h3 id="read">Read — ask anything</h3>
      <p>CURA AI has full context on every turn. Ask about any part of your life and it queries the live database, the wiki, and calendar in one response.</p>
      <h3 id="act">Act — tell CURA what to do</h3>
      <p>You can instruct CURA to create, update, or manage items. Before any write happens, CURA produces a <strong>consent card</strong> and waits for your confirmation.</p>
      <h2 id="tools">Available tools</h2>
      <table>
        <thead><tr><th>Tool</th><th>Type</th><th>What it does</th></tr></thead>
        <tbody>
          {[
            ['query_tasks','Read','Retrieve open, completed, or filtered tasks'],
            ['query_suggestions','Read','Check pending AI-proposed items'],
            ['query_subscriptions','Read','List active subscriptions and monthly spend'],
            ['get_calendar_events','Read','Fetch upcoming calendar events'],
            ['get_people','Read','Look up contacts and relationship notes'],
            ['search_emails','Read','Search the email archive'],
            ['read_wiki','Read','Access synthesised memory pages'],
            ['add_task','Write','Create a new task (consent required)'],
            ['mark_task_done','Write','Mark a task as complete (consent required)'],
            ['add_contact','Write','Add a new contact (consent required)'],
            ['add_subscription','Write','Track a new subscription (consent required)'],
            ['create_finance_item','Write','Log a finance item (consent required)'],
          ].map(([tool, type, desc]) => (
            <tr key={tool}><td><code>{tool}</code></td><td>{type}</td><td>{desc}</td></tr>
          ))}
        </tbody>
      </table>
      <h2 id="cost">Cost model</h2>
      <p>CURA AI uses <strong>AI</strong> for all chat turns with a maximum of 2 tool rounds per turn to keep costs predictable.</p>
    </>
  )
}

function PrivacyBody() {
  return (
    <>
      <h2 id="local">Everything local</h2>
      <table>
        <thead><tr><th>Data</th><th>Where it lives</th></tr></thead>
        <tbody>
          {[
            ['All emails (fetched from Gmail)', '%AppData%\\CURA\\cura.db'],
            ['Tasks, contacts, finance items', '%AppData%\\CURA\\cura.db'],
            ['Bank statement transactions', '%AppData%\\CURA\\cura.db'],
            ['Calendar events', '%AppData%\\CURA\\cura.db'],
            ['Synthesised memory wiki', '%AppData%\\CURA\\memory\\wiki\\'],
            ['Daily briefing cache', '%AppData%\\CURA\\memory\\briefings\\'],
            ['Google OAuth token', '%AppData%\\CURA\\ (encrypted)'],
          ].map(([d, l]) => <tr key={d}><td>{d}</td><td><code>{l}</code></td></tr>)}
        </tbody>
      </table>
      <h2 id="leaves">What leaves your machine</h2>
      <p>The only data that leaves is what is sent to external APIs during normal operation.</p>
      <table>
        <thead><tr><th>API</th><th>What's sent</th><th>When</th></tr></thead>
        <tbody>
          <tr><td>Gmail API</td><td>OAuth token for fetching emails</td><td>Every 30-min sync</td></tr>
          <tr><td>Google Calendar API</td><td>OAuth token for fetching events</td><td>Every 5-min sync</td></tr>
          <tr><td>AI</td><td>Email bodies (up to 5 KB each)</td><td>Per unclassified batch</td></tr>
          <tr><td>AI</td><td>Email content, task/contact context</td><td>Wiki, briefing, chat</td></tr>
        </tbody>
      </table>
      <h2 id="schema">Data schema</h2>
      <table>
        <thead><tr><th>Table</th><th>Contents</th></tr></thead>
        <tbody>
          {[
            ['emails','All fetched Gmail messages'],
            ['tasks','Open and completed tasks with due times and recurrence'],
            ['suggestions','AI-proposed items pending approval'],
            ['finance_items','Approved bills and renewals'],
            ['subscriptions','Manually-tracked recurring subscriptions'],
            ['transactions','CSV-imported bank statement rows'],
            ['people','Manual contacts with relationship notes'],
            ['calendar_events','Google Calendar events (30-day window)'],
          ].map(([t, c]) => <tr key={t}><td><code>{t}</code></td><td>{c}</td></tr>)}
        </tbody>
      </table>
      <h2 id="delete">Deleting your data</h2>
      <p>Because all data is local, delete <code>%AppData%\CURA\cura.db</code> to wipe all operational data. Delete <code>%AppData%\CURA\memory\</code> to wipe the wiki and briefing cache. There is no account to delete and no server-side data to request erasure of.</p>
    </>
  )
}

function InterfaceBody() {
  return (
    <>
      <h2 id="themes">Themes</h2>
      <p>CURA ships with two themes: <strong>Margin</strong> (dark leather, warm ink) and <strong>Daylight</strong> (cream paper, dark ink). Toggle between them from the top-right of the app window.</p>
      <h2 id="system-tray">System tray</h2>
      <p>CURA lives in your Windows system tray. The close button (×) hides the window — it does not quit the app. Right-click the tray icon to show/exit. Left-click to toggle the window.</p>
      <div className="callout info">
        <div><strong>Why tray behaviour?</strong> CURA's value comes from running continuously in the background — syncing email, checking reminders, updating calendar. Quitting the app stops all of this.</div>
      </div>
      <h2 id="sidebar">Filofax sidebar</h2>
      <p>The sidebar uses a Filofax leather aesthetic with per-tab accent colours — earthy greens, tans, purples. The active tab is highlighted with its accent colour.</p>
    </>
  )
}

function PlaceholderBody({ title }: { title: string }) {
  return (
    <>
      <h2 id="overview">Overview</h2>
      <p>The {title} feature is part of CURA's eight-tool surface. Like every other feature, it operates under the same constraints: local-first storage, consent-gated writes, and AI proposals that wait for your approval before becoming data.</p>
      <div className="callout">
        <div>Full documentation for this section is coming soon. In the meantime, check the <a href="#/getting-started">Getting Started</a> guide or ask in the FAQ.</div>
      </div>
    </>
  )
}

/* ── DocPage ─────────────────────────────────────────────────────────────── */

interface Heading { id: string; text: string; level: number }

export default function DocPage({ route, go }: { route: string; go: (p: string) => void }) {
  const meta = docPages[route] ?? docPages['/getting-started']

  const allFlat = useMemo(() => flatNav, [])
  const idx = allFlat.findIndex(i => i.path === route)
  const prev = idx > 0 ? allFlat[idx - 1] : null
  const next = idx >= 0 && idx < allFlat.length - 1 ? allFlat[idx + 1] : null

  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      const hs = Array.from(document.querySelectorAll('.article h2, .article h3')).map(h => ({
        id: h.id,
        text: h.textContent ?? '',
        level: h.tagName === 'H3' ? 3 : 2,
      })).filter(h => h.id)
      setHeadings(hs)
    }, 60)
    return () => clearTimeout(t)
  }, [route])

  useEffect(() => {
    const onScroll = () => {
      const hs = Array.from(document.querySelectorAll('.article h2, .article h3'))
      let curr: string | null = null
      for (const h of hs) {
        if (h.getBoundingClientRect().top < 120) curr = h.id
      }
      setActiveId(curr)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [route, headings])

  let body: React.ReactNode
  switch (meta.kind) {
    case 'getting-started': body = <GettingStartedBody />; break
    case 'second-brain':    body = <SecondBrainBody />;    break
    case 'consent-gate':    body = <ConsentGateBody />;    break
    case 'ai-chat':         body = <AiChatBody />;         break
    case 'privacy':         body = <PrivacyBody />;        break
    case 'interface':       body = <InterfaceBody />;      break
    default:                body = <PlaceholderBody title={meta.title} />
  }

  return (
    <>
      <div className="shell">
        <div className="shell-grid">
          <DocsSidebar route={route} go={go} />
          <article className="article prose">
            <div className="crumb">{meta.crumb}</div>
            <h1>{meta.title}</h1>
            <p className="lede">{meta.lede}</p>
            {body}
            <div className="page-foot">
              {prev
                ? <a href={'#' + prev.path} onClick={(e) => { e.preventDefault(); go(prev.path) }}>
                    <span>← Previous</span><strong>{prev.text}</strong>
                  </a>
                : <span />}
              {next
                ? <a className="next" href={'#' + next.path} onClick={(e) => { e.preventDefault(); go(next.path) }}>
                    <span>Next →</span><strong>{next.text}</strong>
                  </a>
                : <span />}
            </div>
          </article>
          <RightRail headings={headings} activeId={activeId} />
        </div>
      </div>
      <Footer go={go} />
    </>
  )
}
