export interface NavItem {
  text: string
  link?: string
  items?: NavItem[]
}

export const sidebar: NavItem[] = [
  {
    text: 'Introduction',
    items: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Core Concepts', link: '/concepts' },
    ],
  },
  {
    text: 'Concepts',
    items: [
      { text: 'The Second Brain', link: '/concepts/second-brain' },
      { text: 'The Consent Gate', link: '/concepts/consent-gate' },
      { text: 'Memory Layers', link: '/concepts/memory-layers' },
    ],
  },
  {
    text: 'Features',
    items: [
      { text: 'CURA AI', link: '/features/ai-chat' },
      { text: 'Contacts', link: '/features/contacts' },
      { text: 'Tasks', link: '/features/tasks' },
      { text: 'Finance', link: '/features/finance' },
      { text: 'Daily Briefing', link: '/features/briefing' },
      { text: 'Email Intelligence', link: '/features/email' },
      { text: 'Calendar', link: '/features/calendar' },
      { text: 'Suggestions', link: '/features/suggestions' },
    ],
  },
  {
    text: 'Reference',
    items: [
      { text: 'Interface & Themes', link: '/interface' },
      { text: 'Privacy & Data', link: '/privacy' },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'FAQ', link: '/faq' },
    ],
  },
]
