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
  { num: '01', acc: 'amber',  tag: 'Memory',   name: 'Compounding memory',   path: '/concepts/second-brain',
    desc: 'Every confirmed item and auto-captured draft deepens what CURA understands about your life. The longer you use it, the smarter it gets.' },
  { num: '02', acc: 'amber',  tag: 'AI',       name: 'CURA AI',              path: '/features/ai-chat',
    desc: 'Ask anything. Tell it what to do. Read queries hit the live database; write actions are tiered by consequence — auto-draft, glance-confirm, or explicit confirm.' },
  { num: '03', acc: 'purple', tag: 'CRM',      name: 'Relationship CRM',     path: '/features/contacts',
    desc: 'Contacts as living records — interaction history, open commitments, relationship context. Always manual; never auto-created from your inbox.' },
  { num: '04', acc: 'green',  tag: 'Tasks',    name: 'Intelligent tasks',    path: '/features/tasks',
    desc: 'Cork-board of sticky notes, or a quiet list. AI-extracted tasks auto-write as unreviewed drafts — reviewable with a glance, correctable with one tap.' },
  { num: '05', acc: 'teal',   tag: 'Money',    name: 'Finance visibility',   path: '/features/finance',
    desc: 'No bill should surprise you. No subscription should be forgotten. CSV import, AI-extracted renewals, monthly spend at a glance. Finance always requires explicit confirm.' },
  { num: '06', acc: 'tan',    tag: 'Today',    name: 'Today / Briefing',     path: '/features/briefing',
    desc: 'The front door. One next action, the day\'s brief, and any inline Tier-2 confirms — all in one place. No tabs to check.' },
  { num: '07', acc: 'copper', tag: 'Privacy',  name: 'Local by default',     path: '/privacy',
    desc: 'No cloud sync. No telemetry. No account to create. Data lives in local SQLite. Email goes to Gemini for classification; on-device inference is on the roadmap.' },
]

export const manifesto = [
  { num: '01', title: 'Your data is not someone else\'s product.',
    body: 'CURA runs on your Windows desktop. There is no server that knows you exist. There is no account to delete because there is no account to make.' },
  { num: '02', title: 'Interrupt the user only when the cost of being wrong is meaningful.',
    body: 'Tier 1 auto-captures. Tier 2 glance-confirms inline. Tier 3 requires explicit approval — finance and destructive actions. The question is not "did the user approve this?" It is "what is the cost of being wrong here?"' },
  { num: '03', title: 'Tools should remember so you don\'t have to.',
    body: 'CURA reads your email, watches your calendar, and quietly builds a second brain of what matters. You manage less of the system, not more.' },
  { num: '04', title: 'Productivity software has lost the plot.',
    body: 'You shouldn\'t need three apps and a Notion template to remember to call your mum. CURA is one quiet window that compounds.' },
  { num: '05', title: 'Local-first isn\'t a feature. It\'s a constraint.',
    body: 'No cloud sync. No mobile app. No web client. Data lives in local SQLite. Email goes to Gemini for classification; on-device inference is a deferred roadmap item. The tradeoff is known and accepted.' },
  { num: '06', title: 'Software should feel like an object.',
    body: 'A Filofax-inspired design system — leather sidebar, paper grain, ink type. Two themes called Margin and Daylight. CURA is something you keep on your desktop, not something you tab through.' },
]

export const howSteps = [
  { num: '1', title: 'Connect Google, once.',
    body: 'OAuth2 with PKCE. Read-only Gmail and Calendar. The token stays on your machine — CURA has no servers to send it to.' },
  { num: '2', title: 'Context builds automatically.',
    body: 'AI classifies your last 30 days of email in batches. Extracted tasks auto-write as unreviewed drafts. Finance items wait for explicit confirm. You review what matters in one low-friction surface.' },
  { num: '3', title: 'Open Today, not a queue.',
    body: 'Every morning, one next action and a brief. Inline confirms for anything consequential. No backlog to clear before the app is usable.' },
]

export const notGoals = [
  { name: 'No cloud sync.',         body: 'There is no cloud. Your data lives in a local SQLite file. Email content goes to Gemini for classification; on-device inference is on the roadmap.' },
  { name: 'No mobile app.',         body: 'Windows desktop only. We picked the constraint to keep the surface honest. A phone build is not on the roadmap.' },
  { name: 'No email writing.',      body: 'CURA is read-only on Gmail. It will not send, reply, or draft. Composing email is your job; remembering it is ours.' },
  { name: 'No auto-discovery.',     body: 'Contacts are never inferred from your inbox. You add the people who matter, by hand, on purpose.' },
  { name: 'No badge counts.', body: 'No unread counts, no "12 pending" numbers on tabs. A count re-externalises pending decisions into working memory — the exact load CURA exists to remove.' },
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
