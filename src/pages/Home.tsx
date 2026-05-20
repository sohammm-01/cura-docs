import { useState, useEffect, useRef } from 'react'
import { Footer } from '../components/Footer'
import { features, howSteps } from '../data/content'

/* ── Typewriter ──────────────────────────────────────────────────────────── */
const exchanges = [
  { q: 'When did I last hear from Marcus?',
    a: 'Last Thursday — he replied to your project brief. You haven\'t responded yet.' },
  { q: 'Add a task: follow up with Marcus, due Friday.',
    a: 'Task added and linked to Marcus. I\'ll remind you Thursday at 5 PM.' },
  { q: 'How much am I spending on subscriptions this month?',
    a: '₹4,820 across six. Notion renews tomorrow — ₹800/year.' },
]

function Typewriter() {
  const [step, setStep] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'q'|'gap'|'a'>('q')

  useEffect(() => {
    const e = exchanges[step]
    const target = phase === 'q' ? e.q : phase === 'a' ? e.a : ''

    if ((phase === 'q' || phase === 'a') && text.length < target.length) {
      const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 24)
      return () => clearTimeout(t)
    }
    if (phase === 'q' && text.length === target.length) {
      const t = setTimeout(() => { setPhase('gap'); setText('') }, 500)
      return () => clearTimeout(t)
    }
    if (phase === 'gap') {
      const t = setTimeout(() => setPhase('a'), 300)
      return () => clearTimeout(t)
    }
    if (phase === 'a' && text.length === target.length) {
      const t = setTimeout(() => {
        setStep(s => (s + 1) % exchanges.length)
        setPhase('q')
        setText('')
      }, 2800)
      return () => clearTimeout(t)
    }
  }, [text, step, phase])

  const past = exchanges.slice(0, step)
  const current = exchanges[step]

  return (
    <>
      {past.map((e, i) => (
        <div className="demo-pair" key={i}>
          <div className="demo-q">{e.q}</div>
          <div className="demo-a">{e.a}</div>
        </div>
      ))}
      <div className="demo-pair">
        {phase === 'q'
          ? <div className="demo-q">{text}<span className="cursor" /></div>
          : <div className="demo-q">{current.q}</div>}
        {phase === 'a' && <div className="demo-a">{text}<span className="cursor" /></div>}
      </div>
    </>
  )
}

/* ── Sections ────────────────────────────────────────────────────────────── */

function Hero({ go }: { go: (p: string) => void }) {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Personal Life OS &nbsp;·&nbsp; Windows
      </div>
      <h1 className="hero-headline">
        Your second brain.<br />
        <span className="accent">Local.</span>
      </h1>
      <p className="hero-tagline">
        A quiet Windows app that reads your email, watches your calendar, and tells you
        what matters before you think to ask. Nothing leaves your machine.
      </p>
      <div className="hero-ctas">
        <a href="#/getting-started" className="btn-primary"
           onClick={(e) => { e.preventDefault(); go('/getting-started') }}>
          Get started <span aria-hidden>→</span>
        </a>
        <a href="#/concepts/second-brain" className="btn-secondary"
           onClick={(e) => { e.preventDefault(); go('/concepts/second-brain') }}>
          How it works
        </a>
      </div>
      <div className="hero-meta">
        <span><strong>Windows 11</strong></span>
        <span className="dot" />
        <span><strong>100% local</strong></span>
        <span className="dot" />
        <span><strong>AI-powered</strong></span>
        <span className="dot" />
        <span><strong>Free</strong></span>
      </div>
    </section>
  )
}

function DemoSection() {
  return (
    <section className="demo-stage">
      <div className="demo-eyebrow">A conversation with CURA</div>
      <div className="demo-card">
        <Typewriter />
      </div>
    </section>
  )
}

function FeaturesSection({ go }: { go: (p: string) => void }) {
  return (
    <section className="features-section">
      <div className="features-heading">
        <div className="eyebrow">The product</div>
        <h2>Eight tools.<br />One quiet window.</h2>
      </div>
      <div className="features-list">
        {features.map(f => (
          <a className="feature-row" key={f.num} data-acc={f.acc}
             href={'#' + f.path}
             onClick={(e) => { e.preventDefault(); go(f.path) }}>
            <div className="feature-num">{f.num}</div>
            <div className="feature-body">
              <div className="feature-name">{f.name}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
            <span className="feature-tag">{f.tag}</span>
            <span className="feature-arrow" aria-hidden>→</span>
          </a>
        ))}
      </div>
    </section>
  )
}


function HowSection() {
  return (
    <section className="how-section">
      <div className="how-inner">
        <h2 className="how-heading">How it works.</h2>
        <p className="how-sub">Three steps. No configuration. No maintenance.</p>
        <div className="how-steps">
          {howSteps.map(s => (
            <div className="how-step" key={s.num}>
              <div className="how-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ── Home ──────────────────────────────────────────────────────────────── */

/* ── CURA intro overlay ───────────────────────────────────────────────────
   Zero React state — opacity driven by direct DOM mutation so there are
   no re-renders on scroll. GPU-composited via will-change: opacity.
   ──────────────────────────────────────────────────────────────────────── */
function CuraIntro() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return

    const fadeEnd = window.innerHeight * 0.6
    let hidden = false

    const onScroll = () => {
      const y = window.pageYOffset
      const o = Math.max(0, 1 - y / fadeEnd)

      // Direct DOM write — no React reconciler involved
      el.style.opacity = String(o)

      if (o === 0 && !hidden) {
        el.style.visibility = 'hidden'
        hidden = true
      } else if (o > 0 && hidden) {
        el.style.visibility = 'visible'
        hidden = false
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @keyframes cura-bob {
          0%, 100% { transform: translateY(0);   opacity: 0.4; }
          50%       { transform: translateY(8px); opacity: 0.85; }
        }
      `}</style>
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          pointerEvents: 'none',
          background: 'rgba(12,10,7,0.45)',
          /* tell the browser to composite this layer on the GPU */
          willChange: 'opacity',
        }}
      >
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: 'clamp(80px, 18vw, 200px)',
            fontWeight: 800,
            color: '#D4A843',
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            margin: 0,
            userSelect: 'none',
          }}
        >
          cura
        </h1>

        <p
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: 11,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(212,168,67,0.5)',
            margin: 0,
          }}
        >
          scroll to explore
        </p>

        <div
          style={{
            marginTop: 8,
            color: 'rgba(212,168,67,0.4)',
            fontSize: 22,
            animation: 'cura-bob 1.8s ease-in-out infinite',
          }}
        >
          ↓
        </div>
      </div>
    </>
  )
}

export default function Home({ go }: { go: (p: string) => void }) {
  return (
    <div className="home">
      {/* Full-screen CURA intro — fades on scroll */}
      <CuraIntro />

      {/* 100vh spacer: first screen shows only silk + CURA name */}
      <div style={{ height: '100vh' }} />

      {/* Site content revealed as user scrolls past the intro */}
      <div className="home-vignette" />
      <Hero go={go} />
      <DemoSection />
      <FeaturesSection go={go} />
      <HowSection />
      <Footer go={go} />
    </div>
  )
}
