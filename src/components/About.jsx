import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const scopeItems = ["Software development", "Workflow automation", "Virtual exec support"]

export default function About() {
  return (
    <section id="about" className="s-wrap s-wrap--about">
      <style>{`
        .about-intro {
          max-width: 560px;
          margin-bottom: clamp(36px, 5vw, 48px);
        }
        .about-lead {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 600;
          line-height: 1.55;
          color: var(--text);
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .about-scope {
          display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px;
          font-family: var(--font-mono); font-size: 10px; font-weight: 500;
          letter-spacing: 0.06em; color: var(--muted2);
        }
        .about-scope-item { display: inline-flex; align-items: center; gap: 8px; }
        .about-scope-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }
        .about-scope-sep { color: var(--border-strong); user-select: none; opacity: 0.6; }
        .about-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(20px, 3vw, 28px);
        }
        .about-meta {
          display: flex; align-items: center; flex-wrap: wrap; gap: 12px 18px;
          margin-top: clamp(36px, 5vw, 48px);
          padding-top: 28px;
          border-top: 1px solid var(--border);
          font-family: var(--font-mono); font-size: 10px; font-weight: 500;
          letter-spacing: 0.06em; color: var(--muted2);
        }
        .about-meta-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }
        .about-meta-divider { width: 1px; height: 10px; background: var(--border2); }
        @media (max-width: 768px) {
          .about-body { grid-template-columns: 1fr; }
          .about-lead { font-size: clamp(19px, 5vw, 22px); }
        }
      `}</style>

      <SectionLayout index="01">
        <SectionHeader eyebrow="About" description="Developer and operations partner — building systems teams rely on every day." />
        <div className="about-intro">
          <p className="about-lead">
          I build software, AI automations, and intelligent business systems that simplify operations and help teams focus on higher-value work. 
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
              <div className="about-panel-metric"><span>Backend Systems</span></div>
              <div className="about-panel-metric"><span>Automations</span></div>
              <div className="about-panel-metric"><span>Internal Tools</span></div>
              <div className="about-panel-metric"><span>Virtual Ops</span></div>
            </div>
            <p>Software and operational systems that reduce manual work, improve visibility, and help teams operate more efficiently as they grow.</p>
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
          <span>Open to SWE, automation &amp; ops support roles</span>
        </div>
      </SectionLayout>
    </section>
  )
}
