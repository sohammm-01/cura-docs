import { navStructure, accentColor } from '../data/content'

interface DocsSidebarProps {
  route: string
  go: (path: string) => void
}

export function DocsSidebar({ route, go }: DocsSidebarProps) {
  return (
    <aside className="docs-sidebar">
      {navStructure.map(group => (
        <div className="sb-group" key={group.text}>
          <div className="sb-group-title">{group.text}</div>
          {group.items.map(item => (
            <a
              key={item.path}
              href={'#' + item.path}
              onClick={(e) => { e.preventDefault(); go(item.path) }}
              className={'sb-link ' + (route === item.path ? 'active' : '')}
              style={{ '--accent': accentColor[item.acc] ?? accentColor.amber } as React.CSSProperties}
            >
              <span className="sb-dot" />
              {item.text}
            </a>
          ))}
        </div>
      ))}
    </aside>
  )
}
