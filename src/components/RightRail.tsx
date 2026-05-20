interface Heading { id: string; text: string; level: number }

interface RightRailProps {
  headings: Heading[]
  activeId: string | null
}

export function RightRail({ headings, activeId }: RightRailProps) {
  if (!headings.length) return <aside className="right-rail" />
  return (
    <aside className="right-rail">
      <div className="right-rail-title">On this page</div>
      {headings.map(h => (
        <a
          key={h.id}
          href={'#' + h.id}
          className={(activeId === h.id ? 'active ' : '') + (h.level === 3 ? 'lvl3' : '')}
          onClick={(e) => {
            e.preventDefault()
            document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          {h.text}
        </a>
      ))}
    </aside>
  )
}
