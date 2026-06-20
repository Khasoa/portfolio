import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const scopeItems = ["Full-stack", "Backend-focused", "Systems & automation"]

export default function About() {
  return (
    <section id="about" className="s-wrap">
      <style>{`
        .about-intro {
          max-width: 640px;
          margin-bottom: 36px;
        }
        .about-lead {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: clamp(21px, 2.6vw, 28px);
          font-weight: 400;
          line-height: 1.5;
          color: var(--cream);
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .about-scope {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px 12px;
          font-family: "Geist Mono", "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }
        .about-scope-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .about-scope-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .about-scope-sep {
          color: var(--accent-mid);
          user-select: none;
        }
        .about-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(20px, 3vw, 28px);
        }
        .about-block {
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .about-block:hover {
          transform: translateY(-3px);
          border-color: var(--accent-mid);
        }
        .about-block-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .about-block-index {
          font-family: "Geist Mono", "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--accent-mid);
          transition: color 0.3s ease;
        }
        .about-block:hover .about-block-index {
          color: var(--accent);
        }
        .about-block-rule {
          display: block;
          width: 28px;
          height: 2px;
          margin-bottom: 18px;
          background: linear-gradient(90deg, var(--accent), transparent);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .about-block:hover .about-block-rule {
          width: 44px;
        }
        .about-block p {
          font-size: 15px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
          margin: 0;
        }
        .about-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px 20px;
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
          font-family: "Geist Mono", "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }
        .about-meta-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .about-meta-divider {
          width: 1px;
          height: 11px;
          background: var(--accent-mid);
        }
        @media (max-width: 768px) {
          .about-body { grid-template-columns: 1fr; }
        }
      `}</style>

      <SectionLayout index="01">
        <SectionHeader
          eyebrow="About"
          description="Full-stack engineer, backend-focused — building what teams depend on after launch."
        />

        <div className="about-intro">
          <p className="about-lead">
            I ship systems and operational automations that absorb
            complexity — so product teams spend less time firefighting and
            more time moving forward.
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
          <div className="surface-bubble surface-bubble--hover about-block">
            <div className="about-block-head">
              <span className="surface-pill">What I build</span>
              <span className="about-block-index" aria-hidden="true">01</span>
            </div>
            <span className="about-block-rule" aria-hidden="true" />
            <p>
              FastAPI and PostgreSQL backends, tested REST APIs, React frontends
              when needed, and n8n workflows with AI routing — always with clear
              ownership and observability built in.
            </p>
          </div>
          <div className="surface-bubble surface-bubble--hover about-block">
            <div className="about-block-head">
              <span className="surface-pill">What teams gain</span>
              <span className="about-block-index" aria-hidden="true">02</span>
            </div>
            <span className="about-block-rule" aria-hidden="true" />
            <p>
              Fewer manual handoffs, tighter operational control, and infrastructure
              that holds up under real load — less downtime, clearer data flow,
              and systems that keep working long after go-live.
            </p>
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