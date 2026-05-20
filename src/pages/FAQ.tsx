import { Footer } from '../components/Footer'

const categories = [
  {
    title: 'General',
    items: [
      { q: 'Is CURA free?', a: 'CURA itself is free. You need a AI API key, billed by usage directly to your Google account. Typical usage stays within the free tier.' },
      { q: 'Does CURA work on Mac or Linux?', a: 'Not currently. CURA is a Windows desktop application built with Tauri v2. Mac and Linux builds are not planned.' },
      { q: 'Does CURA require an internet connection?', a: 'Internet is required for Gmail/Calendar sync and AI API calls. Offline, CURA can display existing data but cannot sync or generate new AI content.' },
    ],
  },
  {
    title: 'Setup & Authentication',
    items: [
      { q: 'Google OAuth isn\'t opening a browser window.', a: 'Try right-clicking the CURA tray icon → Show CURA, then retry Connect Google. If a firewall is blocking the OAuth redirect, add an exception for CURA.' },
      { q: 'My Google authorisation expired.', a: 'If CURA shows a "Re-authenticate" prompt, click it and sign in again. Your local data is not affected.' },
    ],
  },
  {
    title: 'Email & Suggestions',
    items: [
      { q: 'The initial email sync is taking a long time.', a: 'The first sync fetches 30 days of Gmail. Inboxes with thousands of emails can take several minutes. Leave CURA open and it will complete.' },
      { q: 'Some emails aren\'t appearing in Suggestions.', a: 'Not all emails generate suggestions — only action_required, financial, or people. Newsletters, OTPs, and receipts are classified but don\'t produce suggestions.' },
    ],
  },
  {
    title: 'Tasks & Reminders',
    items: [
      { q: 'I\'m not getting reminder notifications.', a: 'Reminders require CURA to be running in the system tray. Also confirm Windows notifications are enabled for CURA in Settings → System → Notifications.' },
    ],
  },
  {
    title: 'Data & Privacy',
    items: [
      { q: 'Where is my data stored?', a: 'All data is stored locally at %AppData%\\CURA\\cura.db (database) and %AppData%\\CURA\\memory\\ (wiki and briefings).' },
      { q: 'How do I back up my CURA data?', a: 'Copy the %AppData%\\CURA\\ folder to a backup location. CURA does not have a built-in backup feature.' },
      { q: 'How do I delete all my data?', a: 'Exit CURA fully (right-click tray → Exit CURA), then delete %AppData%\\CURA\\cura.db and %AppData%\\CURA\\memory\\. Uninstall via Windows Settings → Apps.' },
    ],
  },
]

export default function FAQ({ go }: { go: (p: string) => void }) {
  return (
    <>
      <div className="faq-page">
        <h1>FAQ</h1>
        <p className="lede">Common questions about CURA. If yours isn't here, the docs probably have the answer.</p>
        {categories.map(cat => (
          <div className="faq-category" key={cat.title}>
            <div className="faq-category-title">{cat.title}</div>
            {cat.items.map(item => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <div className="faq-body"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        ))}
      </div>
      <Footer go={go} />
    </>
  )
}
