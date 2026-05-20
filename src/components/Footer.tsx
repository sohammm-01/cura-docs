import { Logo } from './Logo'

export function Footer({ go }: { go: (p: string) => void }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-brand"><Logo size={32} /></div>
          <div className="footer-tag">A quiet Windows app for your second brain. Local-first, consent-gated.</div>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <a href="#/getting-started"  onClick={(e) => { e.preventDefault(); go('/getting-started') }}>Get started</a>
          <a href="#/features/ai-chat" onClick={(e) => { e.preventDefault(); go('/features/ai-chat') }}>Features</a>
          <a href="#/roadmap"          onClick={(e) => { e.preventDefault(); go('/roadmap') }}>Roadmap</a>
        </div>
        <div className="footer-col">
          <h5>Reference</h5>
          <a href="#/concepts/second-brain" onClick={(e) => { e.preventDefault(); go('/concepts/second-brain') }}>Concepts</a>
          <a href="#/privacy"               onClick={(e) => { e.preventDefault(); go('/privacy') }}>Privacy & data</a>
          <a href="#/faq"                   onClick={(e) => { e.preventDefault(); go('/faq') }}>FAQ</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div>v2.0 · May 2026 · Windows 11</div>
        <div>Local-first by design.</div>
      </div>
    </footer>
  )
}
