import { Code2, RefreshCw, Headset } from "lucide-react"

const pillars = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Building full-stack applications that combine thoughtful user experiences, scalable backend services, and reliable data architecture.",
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    description: "Replacing manual, repeatable processes with systems that run themselves — from lead intake to compliance pipelines.",
  },
  {
    icon: Headset,
    title: "Virtual Operations Support",
    description: "Remote tech and executive support that keeps teams running — documentation, coordination, and operational continuity.",
  },
]

export default function ScopeOfWork() {
  return (
    <>
      <style>{`
        .scope-section {
          padding: clamp(32px, 5vw, 48px) var(--section-x) clamp(48px, 7vw, 64px);
          max-width: var(--section-max);
          margin: 0 auto;
        }
        .scope-label {
          text-align: center;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--accent);
          margin-bottom: clamp(24px, 3.5vw, 32px);
        }
        .scope-panel {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--surface-raised);
          box-shadow: var(--shadow-card);
          overflow: hidden;
        }
        .scope-panel::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--accent-lit) 20%, var(--accent) 50%, var(--accent-lit) 80%, transparent 100%);
          opacity: 0.45;
        }
        .scope-card {
          position: relative;
          padding: clamp(28px, 3.5vw, 36px) clamp(24px, 3vw, 32px);
        }
        .scope-card:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 16%;
          bottom: 16%;
          right: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, var(--border) 18%, var(--border) 82%, transparent);
        }
        .scope-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: var(--accent-dim);
          color: var(--accent);
          margin-bottom: 18px;
        }
        .scope-title {
          font-family: var(--font-display);
          font-size: clamp(16px, 1.7vw, 19px);
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.02em;
          line-height: 1.35;
          margin-bottom: 10px;
        }
        .scope-desc {
          font-size: var(--text-sm);
          font-weight: 400;
          line-height: var(--leading-normal);
          color: var(--muted);
          margin: 0;
          max-width: 36ch;
        }
        @media (max-width: 768px) {
          .scope-section { padding: 32px var(--section-x) 48px; }
          .scope-panel { grid-template-columns: 1fr; }
          .scope-card:not(:last-child)::after {
            top: auto;
            bottom: 0;
            left: 8%;
            right: 8%;
            width: auto;
            height: 1px;
            background: var(--border);
          }
          .scope-desc { max-width: none; }
        }
      `}</style>

      <section id="services" className="scope-section" aria-labelledby="scope-heading">
        <p className="scope-label" id="scope-heading">&lt;SCOPE_OF_WORK /&gt;</p>
        <div className="scope-panel">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article key={title} className="scope-card">
              <div className="scope-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <h3 className="scope-title">{title}</h3>
              <p className="scope-desc">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
