import React, { useEffect, useRef } from 'react'

/* ── Hero bottom fade overlay ───────────────────────────────────────────── */
function HeroAnimatedBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {/* bottom fade into page content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '100%', height: '35%',
        background: 'linear-gradient(to bottom, transparent, rgba(8,5,3,0.98))',
      }} />
    </div>
  )
}

/* ── Hero copy ─────────────────────────────────────────────────────────── */
function HeroContent({ go }: { go: (p: string) => void }) {
  return (
    <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-3xl">
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: 11, fontWeight: 600,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#D4A843',
        background: 'rgba(212,168,67,0.10)',
        border: '1px solid rgba(212,168,67,0.28)',
        borderRadius: 999, padding: '5px 14px',
        marginBottom: 28,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4A843', boxShadow: '0 0 8px #D4A843' }} />
        Personal Life OS · Windows · v2.0
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ letterSpacing: '-0.04em', fontFamily: 'var(--font-display, Inter Tight, system-ui)' }}>
        Your second brain.<br />
        <span style={{ color: '#D4A843' }}>Local.</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl"
         style={{ opacity: 0.75, fontFamily: 'var(--font-serif, Georgia, serif)', lineHeight: 1.7 }}>
        A quiet Windows app that reads your email, watches your calendar, and
        tells you what matters before you think to ask. Nothing leaves your machine.
      </p>

      <div className="flex pointer-events-auto flex-col sm:flex-row items-start gap-3">
        <button
          onClick={() => go('/getting-started')}
          className="text-white font-semibold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto"
          style={{
            background: 'rgba(212,168,67,0.18)',
            border: '1px solid rgba(212,168,67,0.4)',
            backdropFilter: 'blur(8px)',
            fontSize: 15,
          }}
        >
          Get started →
        </button>
        <button
          onClick={() => go('/concepts/second-brain')}
          className="font-medium py-3 px-8 rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.8)',
            fontSize: 15,
          }}
        >
          How it works
        </button>
      </div>

      {/* trust strip */}
      <div className="flex flex-wrap gap-5 mt-10"
           style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 11.5, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.38)' }}>
        {['Windows 11', '100% local', 'AI-powered', 'Free'].map((t, i) => (
          <React.Fragment key={t}>
            {i > 0 && <span style={{ alignSelf: 'center', width: 3, height: 3, borderRadius: '50%', background: 'currentColor', opacity: 0.5 }} />}
            <span><strong style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{t}</strong></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

/* ── Main export ───────────────────────────────────────────────────────── */
export function HeroSection({ go }: { go: (p: string) => void }) {
  const heroContentRef = useRef<HTMLDivElement>(null)

  // fade hero copy on scroll (parallax feel)
  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => {
        if (!heroContentRef.current) return
        const scrollY = window.pageYOffset
        const opacity = 1 - Math.min(scrollY / 380, 1)
        heroContentRef.current.style.opacity = opacity.toString()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <HeroAnimatedBackground />
      </div>

      {/* Hero copy — fades out on scroll */}
      <div
        ref={heroContentRef}
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100vh',
          display: 'flex', alignItems: 'center',
          zIndex: 10, pointerEvents: 'none',
        }}
      >
        <div className="container mx-auto pointer-events-auto">
          <HeroContent go={go} />
        </div>
      </div>
    </div>
  )
}
