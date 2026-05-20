import { Logo } from './Logo'

interface TopNavProps {
  route: string
  go: (path: string) => void
  navOpacity?: number
}

export function TopNav({ route, go, navOpacity = 1 }: TopNavProps) {
  const isActive = (paths: string[]) =>
    paths.some(p => route === p || route.startsWith(p + '/'))

  return (
    <nav
      className="topnav"
      style={{ opacity: navOpacity, transition: 'opacity 0.3s ease' }}
    >
      <a href="#/" onClick={(e) => { e.preventDefault(); go('/') }} aria-label="Home" style={{ flexShrink: 0 }}>
        <Logo size={22} />
      </a>

      <div className="topnav-links">
        <a
          href="#/getting-started"
          onClick={(e) => { e.preventDefault(); go('/getting-started') }}
          className={isActive(['/getting-started', '/interface', '/concepts', '/features', '/privacy']) ? 'active' : ''}
        >Docs</a>
        <a
          href="#/roadmap"
          onClick={(e) => { e.preventDefault(); go('/roadmap') }}
          className={isActive(['/roadmap']) ? 'active' : ''}
        >Roadmap</a>
        <a
          href="#/faq"
          onClick={(e) => { e.preventDefault(); go('/faq') }}
          className={isActive(['/faq']) ? 'active' : ''}
        >FAQ</a>
      </div>
    </nav>
  )
}
