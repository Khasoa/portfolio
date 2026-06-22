import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const scopeItems = ["Full-stack", "Backend-focused", "Systems & automation"]

export default function About() {
  return (
    <section id="about" className="s-wrap">
      <style>{`
        .about-intro { max-width: 600px; margin-bottom: clamp(28px, 4vw, 36px); }
        .about-lead {
          font-family: var(--font-serif);
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 400; line-height: 1.45; color: var(--cream);
          letter-spacing: -0.015em; margin-bottom: 20px;
        }
        .about-scope {
          display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; color: var(--muted2);
        }
        .about-scope-item { display: inline-flex; align-items: center; gap: 7px; }
        .about-scope-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .about-scope-sep { color: var(--border-strong); user-select: none; }
        .about-body { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(16px, 2.5vw, 24px); }
        .about-meta {
          display: flex; align-items: center; flex-wrap: wrap; gap: 10px 16px;
          margin-top: clamp(28px, 4vw, 36px); padding-top: 24px; border-top: 1px solid var(--border);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; color: var(--muted2);
        }
        .about-meta-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .about-meta-divider { width: 1px; height: 10px; background: var(--border2); }
        @media (max-width: 768px) { .about-body { grid-template-columns: 1fr; } }
      `}</style>

      <SectionLayout index="01">
        <SectionHeader eyebrow="About" description="Full-stack developer — building what teams depend on after launch." />
        <div className="about-intro">
          <p className="about-lead">
            I ship systems and operational automations that absorb complexity — so product teams spend less time firefighting and more time moving forward.
          </p>
          <div className="about-scope">
            {scopeItems.map((item, i) => (
              <span key={item} style={{ display: "contents" }}>
                {i > 0 && <span className="about-scope-sep" aria-hidden="true">·</span>}
                <span className="about-scope-item">
                  <span className="about-scope-dot" aria-hidden="true" />
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="about-body">
          <div className="about-panel">
            <div className="about-panel-top">
              <span className="surface-pill">What I build</span>
              <span className="about-panel-number">01</span>
            </div>
            <div className="about-panel-grid">
              <div className="about-panel-metric"><span>Operations</span></div>
              <div className="about-panel-metric"><span>Automations</span></div>
              <div className="about-panel-metric"><span>Internal Tools</span></div>
              <div className="about-panel-metric"><span>Workflows</span></div>
            </div>
            <p>Business systems that reduce manual work, improve visibility, and help teams operate more efficiently as they grow.</p>
          </div>
          <div className="about-panel">
            <div className="about-panel-top">
              <span className="surface-pill">What teams gain</span>
              <span className="about-panel-number">02</span>
            </div>
            <div className="about-panel-grid">
              <div className="about-panel-metric">↓ Manual Work</div>
              <div className="about-panel-metric">↑ Visibility</div>
              <div className="about-panel-metric">↑ Reliability</div>
              <div className="about-panel-metric">↑ Ownership</div>
            </div>
            <p>Fewer handoffs, tighter operational control, cleaner data flow, and infrastructure that continues working long after go-live.</p>
          </div>
        </div>
        <div className="about-meta">
          <span className="about-meta-dot" aria-hidden="true" />
          <span>Kenya</span>
          <span className="about-meta-divider" aria-hidden="true" />
          <span>Available remotely</span>
          <span className="about-meta-divider" aria-hidden="true" />
          <span>Open to SWE &amp; automation roles</span>
        </div>
      </SectionLayout>
    </section>
  )
}
