export const navStructure = [
  {
    text: 'The Build',
    items: [
      { text: 'The Design Pivot', path: '/pivot', acc: 'amber' },
    ],
  },
  {
    text: 'Introduction',
    items: [
      { text: 'Getting Started', path: '/getting-started', acc: 'amber' },
      { text: 'The Interface',   path: '/interface',       acc: 'amber' },
    ],
  },
  {
    text: 'Concepts',
    items: [
      { text: 'The Second Brain',  path: '/concepts/second-brain',  acc: 'amber' },
      { text: 'Memory Layers',     path: '/concepts/memory-layers', acc: 'amber' },
    ],
  },
  {
    text: 'Features',
    items: [
      { text: 'CURA AI',            path: '/features/ai-chat',  acc: 'amber' },
      { text: 'Contacts',           path: '/features/contacts', acc: 'purple' },
      { text: 'Tasks',              path: '/features/tasks',    acc: 'green' },
      { text: 'Finance',            path: '/features/finance',  acc: 'teal' },
      { text: 'Today / Briefing',   path: '/features/briefing', acc: 'tan' },
      { text: 'Email Intelligence', path: '/features/email',    acc: 'copper' },
      { text: 'Calendar',           path: '/features/calendar', acc: 'rose' },
    ],
  },
  {
    text: 'Reference',
    items: [
      { text: 'Privacy & Data', path: '/privacy',   acc: 'amber' },
      { text: 'Build Log',      path: '/roadmap',   acc: 'amber' },
    ],
  },
]

export const features = [
  { num: '01', acc: 'amber',  tag: 'Memory',   name: 'Compounding Memory',   path: '/concepts/second-brain',
    desc: 'Every approval deepens what CURA understands about your life. The longer you use it, the smarter it gets — without sending a single byte to a server.' },
  { num: '02', acc: 'amber',  tag: 'AI',       name: 'CURA AI',              path: '/features/ai-chat',
    desc: 'Ask anything. Tell it what to do. Full conversational control over contacts, tasks, finance, calendar, emails, and the wiki — with consent cards on every write.' },
  { num: '03', acc: 'purple', tag: 'CRM',      name: 'Relationship CRM',     path: '/features/contacts',
    desc: 'Contacts as living records — interaction history, open commitments, relationship context. Not just a name and an email address.' },
  { num: '04', acc: 'green',  tag: 'Tasks',    name: 'Intelligent Tasks',    path: '/features/tasks',
    desc: 'Cork-board of sticky notes, or a quiet list — your call. CURA watches your patterns and surfaces what you should be working on before you think of it.' },
  { num: '05', acc: 'teal',   tag: 'Money',    name: 'Finance Visibility',   path: '/features/finance',
    desc: 'No bill should surprise you. No subscription should be forgotten. CSV statement import, AI-extracted renewals, monthly spend at a glance.' },
  { num: '06', acc: 'tan',    tag: 'Daily',    name: 'Morning Briefing',     path: '/features/briefing',
    desc: 'Every morning, a personal newspaper written by AI in CURA\'s voice — warm, dry, occasionally funny. Your tasks, calendar, email, and memory in one page.' },
  { num: '07', acc: 'copper', tag: 'Privacy',  name: 'Local by default',     path: '/privacy',
    desc: 'No cloud. No telemetry. No account to create. Your data lives in a SQLite file on your machine and never leaves it, except for the explicit AI API calls you authorize.' },
  { num: '08', acc: 'ochre',  tag: 'Consent',  name: 'The Consent Gate',     path: '/concepts/consent-gate',
    desc: 'AI proposes. You decide. Nothing is ever written to your database without your explicit confirmation. Permanently. No "auto-approve" mode. No exceptions.' },
]

export const manifesto = [
  { num: '01', title: 'Your data is not someone else\'s product.',
    body: 'CURA runs entirely on your Windows desktop. There is no server that knows you exist. There is no account to delete because there is no account to make.' },
  { num: '02', title: 'AI should ask permission, not forgiveness.',
    body: 'Every AI proposal lands in Suggestions and waits for your approval. The consent gate is permanent — there is no setting to turn it off.' },
  { num: '03', title: 'Tools should remember so you don\'t have to.',
    body: 'CURA reads your email, watches your calendar, and quietly builds a second brain of what matters. You manage less of the system, not more.' },
  { num: '04', title: 'Productivity software has lost the plot.',
    body: 'You shouldn\'t need three apps and a Notion template to remember to call your mum. CURA is one quiet window with eight tools that compound.' },
  { num: '05', title: 'Local-first isn\'t a feature. It\'s a principle.',
    body: 'No cloud sync. No mobile app. No web client. We picked the constraint and built around it. Your second brain stays on your machine — full stop.' },
  { num: '06', title: 'Software should feel like an object.',
    body: 'A Filofax-inspired design system — leather sidebar, paper grain, ink type. Two themes called Margin and Daylight. CURA is something you keep on your desktop, not something you tab through.' },
]

export const howSteps = [
  { num: '1', title: 'Connect Google, once.',
    body: 'OAuth2 with PKCE. Read-only Gmail and Calendar. The token stays on your machine — CURA has no servers to send it to.' },
  { num: '2', title: 'Approve what matters.',
    body: 'AI classifies your last 30 days of email and proposes tasks, finance items, and people in the Suggestions tab. You approve, defer, or reject.' },
  { num: '3', title: 'Read your briefing.',
    body: 'Every morning, AI writes a newspaper-style summary from your open tasks, upcoming events, important emails, and synthesised wiki memory.' },
]

export const notGoals = [
  { name: 'No cloud sync.',         body: 'There is no cloud. There is no sync. Your second brain lives in cura.db and nowhere else.' },
  { name: 'No mobile app.',         body: 'Windows desktop only. We picked the constraint to keep the surface honest. A phone build is not on the roadmap.' },
  { name: 'No email writing.',      body: 'CURA is read-only on Gmail. It will not send, reply, or draft. Composing email is your job; remembering it is ours.' },
  { name: 'No auto-discovery.',     body: 'Contacts are never inferred from your inbox. You add the people who matter, by hand, on purpose.' },
  { name: 'No AI writing to disk.', body: 'AI has no direct path to your database. Every extraction goes through the Suggestions tab and waits for you.' },
  { name: 'No telemetry.',          body: 'CURA does not phone home, measure your sessions, or report errors to anyone. The app you run is the app you run.' },
]

export const accentColor: Record<string, string> = {
  amber:  '#D4A843',
  green:  '#6ab04c',
  purple: '#7B68EE',
  teal:   '#2BAFA0',
  tan:    '#C8956D',
  rose:   '#d48ba0',
  ochre:  '#C8A23B',
  copper: '#C17A50',
}

export type DocMeta = {
  crumb: string
  title: string
  lede: string
  kind: string
}

export const docPages: Record<string, DocMeta> = {
  '/pivot':                 { crumb: 'The Build',    title: 'The Design Pivot',     kind: 'pivot',           lede: 'CURA started as an eight-tab approve-everything second brain. Here is what was wrong with it, and what replaced it.' },
  '/getting-started':       { crumb: 'Introduction', title: 'Get started',         kind: 'getting-started', lede: 'CURA is a Windows desktop application built with Tauri v2. There is no web app, no mobile version, and no cloud account to create. Everything runs locally on your machine.' },
  '/interface':             { crumb: 'Introduction', title: 'The interface',        kind: 'interface',       lede: 'CURA has a distinctive visual identity — a Filofax-inspired design system with physical texture, earthy tones, and a leather sidebar. Two themes are available.' },
  '/concepts/second-brain': { crumb: 'Concepts',     title: 'How memory works',    kind: 'second-brain',    lede: 'CURA builds memory from signals you generate anyway — email, calendar, approvals. It compounds over time without you having to maintain it.' },
  '/concepts/memory-layers':{ crumb: 'Concepts',     title: 'Memory Layers',       kind: 'memory-layers',   lede: 'CURA stores data in two layers: a live SQLite database for operational data, and a wiki projected on demand from confirmed table state.' },
  '/features/ai-chat':      { crumb: 'Features',     title: 'CURA AI',             kind: 'ai-chat',         lede: 'Ask anything across your contacts, tasks, finance, calendar, emails, and memory. Write actions are tiered — auto-draft, glance-confirm, or explicit confirm depending on consequence.' },
  '/features/contacts':     { crumb: 'Features',     title: 'Contacts',            kind: 'placeholder',     lede: 'A manual relationship CRM. Contacts are never auto-created — adding a contact is a deliberate act, because a wrong contact silently pollutes relationship data.' },
  '/features/tasks':        { crumb: 'Features',     title: 'Tasks',               kind: 'placeholder',     lede: 'Cork-board of colour-coded sticky notes, or a clean focused list. AI-extracted tasks auto-write as unreviewed drafts — reviewable with a glance, correctable with one tap.' },
  '/features/finance':      { crumb: 'Features',     title: 'Finance',             kind: 'placeholder',     lede: 'Bills, subscriptions, and bank statement transactions in one place. Finance items always require explicit confirmation — they are consequential enough to warrant it.' },
  '/features/briefing':     { crumb: 'Features',     title: 'Today / Briefing',    kind: 'placeholder',     lede: 'The front door. Leads with a single next action, the day\'s brief, and any pending Tier-2 confirms — all in one place. No tabs to check.' },
  '/features/email':        { crumb: 'Features',     title: 'Email Intelligence',  kind: 'placeholder',     lede: 'CURA reads Gmail every 30 minutes, classifies in batches of 20–50, and extracts tasks and finance signals from important categories only.' },
  '/features/calendar':     { crumb: 'Features',     title: 'Calendar',            kind: 'placeholder',     lede: 'Google Calendar events feed into the Today surface and chat. Calendar is a data source, not a destination tab.' },
  '/privacy':               { crumb: 'Reference',    title: 'Privacy & Data',      kind: 'privacy',         lede: 'All data is stored locally in SQLite. Email is sent to Gemini for classification; on-device inference is a deferred roadmap item. The tradeoff is known and accepted.' },
}

export const flatNav = navStructure.flatMap(g => g.items)
