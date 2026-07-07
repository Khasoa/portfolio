import { ArrowUpRight } from "lucide-react"
import scopeSoftware from "../assets/scope-software-development.png"
import scopeAutomation from "../assets/scope-workflow-automation.png"
import scopeOperations from "../assets/scope-virtual-operations.png"

const ACCENT = "#0F766E"
const WARM = "#D9725A"

const pillars = [
  {
    number: "01",
    accent: ACCENT,
    title: "Software Development",
    description: "Reliable software that scales with your business instead of slowing it down.",
    bullets: ["Clean Architecture", "Robust APIs", "Performance & Reliability"],
    cta: "Ship with quality, and scale with confidence.",
    image: scopeSoftware,
    imageAlt: "Isometric software development illustration",
  },
  {
    number: "02",
    accent: WARM,
    title: "Workflow Automation",
    description: "Hours of repetitive work replaced with automated systems that run reliably.",
    bullets: ["End-to-End Automations", "System Integrations", "Process Optimization"],
    cta: "Fewer handoffs. Faster outcomes.",
    image: scopeAutomation,
    imageAlt: "Isometric workflow automation illustration",
  },
  {
    number: "03",
    accent: ACCENT,
    title: "Virtual Executive & Operations Support",
    description: "Clear documentation, organized operations, and fewer things falling through the cracks.",
    bullets: ["Documentation & SOPs", "Team Coordination", "Operational Continuity"],
    cta: "Stay organized and in control.",
    image: scopeOperations,
    imageAlt: "Virtual operations support illustration",
  },
]

export default function ScopeOfWork() {
  return (
    <>
      <style>{`
        .how-section {
          position: relative;
          padding: clamp(36px, 5vw, 52px) var(--section-x) clamp(44px, 6vw, 64px);
          max-width: var(--section-max);
          margin: 0 auto;
        }
        .how-header {
          text-align: center;
          max-width: 520px;
          margin: 0 auto clamp(24px, 3.5vw, 32px);
        }
        .how-eyebrow {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .how-intro {
          font-family: var(--font-display);
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 1.6vw, 20px);
          align-items: stretch;
          max-width: min(100%, 880px);
          margin: 0 auto;
        }
        .how-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          padding: 0 clamp(10px, 1.4vw, 16px);
        }
        .how-card:first-child { padding-left: 0; }
        .how-card:last-child { padding-right: 0; }
        .how-card:not(:first-child)::before {
          content: "";
          position: absolute;
          top: 4%;
          bottom: 4%;
          left: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, var(--border) 15%, var(--border) 85%, transparent);
        }
        .how-index-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
          min-height: 18px;
        }
        .how-index {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
        }
        .how-index-rule {
          width: 24px;
          height: 1px;
          background: var(--border);
          flex-shrink: 0;
        }
        .how-art {
          display: flex;
          align-items: center;
          justify-content: center;
          height: clamp(88px, 9vw, 104px);
          margin: 0 0 8px;
          flex-shrink: 0;
        }
        .how-art img {
          display: block;
          width: auto;
          height: 100%;
          max-width: 92%;
          object-fit: contain;
          object-position: center;
        }
        .how-copy {
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .how-title {
          font-family: var(--font-display);
          font-size: clamp(15px, 1.45vw, 17px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text);
          margin: 0 0 6px;
          line-height: 1.25;
          min-height: 2.5em;
        }
        .how-desc {
          font-size: 12.5px;
          line-height: 1.55;
          color: var(--muted);
          margin: 0 0 12px;
          min-height: 2.95em;
        }
        .how-divider {
          height: 1px;
          background: var(--border);
          margin-bottom: 10px;
          flex-shrink: 0;
        }
        .how-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 12px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          flex: 1;
        }
        .how-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 12px;
          color: var(--text);
          line-height: 1.35;
        }
        .how-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 5px;
        }
        .how-cta {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 8px 12px;
          font-size: 11.5px;
          font-weight: 500;
          line-height: 1.35;
          background: var(--bg-subtle);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .how-cta svg {
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .how-card:hover .how-cta {
          box-shadow: var(--shadow-sm);
        }
        .how-card:hover .how-cta svg {
          transform: translate(1px, -1px);
        }
        .how-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px 18px;
          margin-top: clamp(32px, 4vw, 44px);
          padding-top: clamp(24px, 3vw, 32px);
          border-top: 1px solid var(--border);
          max-width: min(100%, 880px);
          margin-left: auto;
          margin-right: auto;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--muted2);
        }
        .how-meta-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .how-meta-divider {
          width: 1px;
          height: 10px;
          background: var(--border2);
        }
        @media (max-width: 900px) {
          .how-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            max-width: 380px;
          }
          .how-card { padding: 0; }
          .how-card:not(:first-child)::before {
            top: 0;
            bottom: auto;
            left: 0;
            right: 0;
            width: auto;
            height: 1px;
            background: var(--border);
          }
          .how-art { height: 96px; }
          .how-title, .how-desc { min-height: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .how-cta, .how-cta svg { transition: none; }
          .how-card:hover .how-cta svg { transform: none; }
        }
      `}</style>

      <section id="services" className="how-section" aria-labelledby="scope-heading">
        <div className="how-header">
          <p className="how-eyebrow" id="scope-heading">&lt;SCOPE_OF_WORK /&gt;</p>
          <p className="how-intro">
            Software, automation, and operations support — one partner across all three.
          </p>
        </div>

        <div className="how-grid">
          {pillars.map(({ number, accent, title, description, bullets, cta, image, imageAlt }) => (
            <article className="how-card" key={title}>
              <div className="how-index-row">
                <span className="how-index" style={{ color: accent }}>{number}</span>
                <span className="how-index-rule" />
              </div>

              <div className="how-art">
                <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
              </div>

              <div className="how-copy">
                <h3 className="how-title">{title}</h3>
                <p className="how-desc">{description}</p>
                <div className="how-divider" />
                <ul className="how-bullets">
                  {bullets.map(b => (
                    <li key={b}>
                      <span className="how-dot" style={{ background: accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="how-cta" style={{ color: accent, borderColor: `${accent}33` }}>
                <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
                {cta}
              </div>
            </article>
          ))}
        </div>

        <div className="how-meta">
          <span className="how-meta-dot" aria-hidden="true" />
          <span>Kenya</span>
          <span className="how-meta-divider" aria-hidden="true" />
          <span>Available remotely</span>
          <span className="how-meta-divider" aria-hidden="true" />
          <span>Open to SWE, automation &amp; ops support roles</span>
        </div>
      </section>
    </>
  )
}
