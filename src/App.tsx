import { useState, useEffect, lazy, Suspense } from 'react'
import { TopNav } from './components/TopNav'
import Home from './pages/Home'
import DocPage from './pages/DocPage'
import FAQ from './pages/FAQ'
import Roadmap from './pages/Roadmap'
import { docPages } from './data/content'

const AnoAI = lazy(() => import('./components/ui/animated-shader-background'))

// Lock to dark + margin permanently
document.documentElement.setAttribute('data-theme', 'dark')
document.documentElement.setAttribute('data-dir',  'margin')

function parseRoute(): string {
  const h = window.location.hash.replace(/^#/, '')
  return !h || h === '/' ? '/' : h
}

export default function App() {
  const [route,      setRoute]      = useState(parseRoute)
  const [navOpacity, setNavOpacity] = useState(0)

  useEffect(() => {
    const onHash = () => { setRoute(parseRoute()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Fade nav in as user scrolls past intro (only on home page)
  useEffect(() => {
    const onScroll = () => {
      if (route !== '/') { setNavOpacity(1); return }
      const progress = Math.min(1, window.pageYOffset / (window.innerHeight * 0.5))
      setNavOpacity(progress)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [route])

  const go = (path: string) => { window.location.hash = path }
  const isHome = route === '/' || route === '/home'

  let view: React.ReactNode
  if (isHome) {
    view = <Home go={go} />
  } else if (route === '/faq') {
    view = <FAQ go={go} />
  } else if (route === '/roadmap') {
    view = <Roadmap go={go} />
  } else if (docPages[route]) {
    view = <DocPage route={route} go={go} />
  } else {
    view = <Home go={go} />
  }

  return (
    <>
      {isHome && <Suspense fallback={null}><AnoAI /></Suspense>}
      <TopNav route={route} go={go} navOpacity={navOpacity} />
      {view}
    </>
  )
}
