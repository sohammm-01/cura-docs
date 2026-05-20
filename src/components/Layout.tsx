import { useLocation, useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'

const TABS = [
  { id: '/',               label: 'Overview',  c: '#7a8a5a' },
  { id: '/getting-started',label: 'Setup',     c: '#8a5a3a' },
  { id: '/concepts',       label: 'Concepts',  c: '#a07a5a' },
  { id: '/features',       label: 'Features',  c: '#c8945a' },
  { id: '/privacy',        label: 'Privacy',   c: '#6a8a7a' },
  { id: '/roadmap',        label: 'Roadmap',   c: '#a89060' },
  { id: '/faq',            label: 'FAQ',       c: '#8a6a8a' },
]

interface LayoutProps {
  children: ReactNode
  title: string
  meta?: string
  subtitle?: string
}

export function Layout({ children, title, meta, subtitle }: LayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()

  const activeTab = TABS.slice().reverse().find(t =>
    t.id === '/' ? location.pathname === '/' : location.pathname.startsWith(t.id)
  ) ?? TABS[0]

  return (
    <div className="app">
      <div className="desk" />

      {/* Filofax sidebar */}
      <div className="filo">
        <div className="filo-brand">
          CURA<small>Documentation</small>
        </div>
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`filo-tab ${activeTab.id === tab.id ? 'on' : ''}`}
            style={{ '--c': tab.c } as React.CSSProperties}
            onClick={() => navigate(tab.id)}
          >
            {tab.label}
            <span className="filo-stitch" />
          </button>
        ))}
      </div>

      {/* Paper page */}
      <div className="perspective">
        <div className="page" key={location.pathname}>
          <div className="page-inner">
            <header className="ph-head">
              <div>
                {meta && <div className="ph-meta">{meta}</div>}
                <h1 className="ph-h1">{title}</h1>
                {subtitle && <div className="ph-sub">{subtitle}</div>}
              </div>
            </header>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
