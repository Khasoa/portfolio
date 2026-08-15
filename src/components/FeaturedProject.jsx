import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import { featuredProject } from "../data/index"
import { VideoLightbox } from "./MediaLightbox"

function ArchNode({ name, tone = "default", delay, visible }) {
  return (
    <div
      className={`arch-node arch-node--${tone}`}
      style={{ "--reveal-delay": `${delay}s` }}
      data-visible={visible ? "true" : "false"}
    >
      {name}
    </div>
  )
}

export default function FeaturedProject() {
  const rootRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const { name, category, tagline, lede, problem, solution, architecture, positioning, stack, live, demo, github } = featuredProject
  const hasCta = Boolean(live || github)
  const TAG_DELAY_BASE = 0.08
  const TAG_DELAY_STEP = 0.04

  return (
    <div ref={rootRef} className={`featured-shell${visible ? " featured-shell--visible" : ""}`}>
      <style>{`
        .featured-shell {
          position: relative;
          margin-bottom: clamp(24px, 3vw, 32px);
          padding: clamp(30px, 4vw, 44px) clamp(26px, 4vw, 44px);
          border-radius: var(--radius-lg);
          background: var(--surface-raised);
          box-shadow: var(--shadow-card);
          border: 1px solid var(--border);
          overflow: hidden;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }
        .featured-shell::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-lit) 55%, transparent 100%);
        }
        .featured-shell--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .featured-shell:hover {
          box-shadow: var(--shadow-lg), var(--shadow-accent);
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-dim);
          border: 1px solid rgba(15, 118, 110, 0.18);
          border-radius: 999px;
          padding: 6px 13px 6px 10px;
          margin-bottom: clamp(18px, 2.5vw, 24px);
        }
        .featured-badge__dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent-lit);
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.18);
          animation: featuredDotGlow 3.2s ease-in-out infinite;
        }
        @keyframes featuredDotGlow {
          0%, 100% { opacity: 0.75; box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.14); }
          50% { opacity: 1; box-shadow: 0 0 0 5px rgba(20, 184, 166, 0.22); }
        }

        .featured-category {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted2);
          margin: 0 0 10px;
        }
        .featured-title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--text);
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 0 0 10px;
        }
        .featured-subtitle {
          font-size: var(--text-sm);
          font-weight: 400;
          font-style: italic;
          color: var(--muted);
          line-height: var(--leading-normal);
          margin: 0 0 clamp(22px, 3vw, 28px);
          max-width: 620px;
        }

        .featured-copy {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 720px;
          margin-bottom: clamp(28px, 3.5vw, 36px);
        }
        .featured-copy p {
          font-size: var(--text-sm);
          font-weight: 400;
          color: var(--muted);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .featured-arch {
          border-radius: var(--radius-md);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          padding: clamp(22px, 3vw, 30px) clamp(18px, 3vw, 28px);
          margin-bottom: clamp(28px, 3.5vw, 36px);
        }
        .featured-arch-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: clamp(10px, 1.6vw, 16px);
        }
        .arch-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .arch-group-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--muted2);
        }
        .arch-sources {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-right: 16px;
        }
        .arch-sources::after {
          content: "";
          position: absolute;
          top: 10%;
          bottom: 10%;
          right: 0;
          width: 10px;
          border-top: 1.5px solid var(--border-strong);
          border-right: 1.5px solid var(--border-strong);
          border-bottom: 1.5px solid var(--border-strong);
          border-radius: 0 6px 6px 0;
        }
        .arch-node {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          background: var(--surface-raised);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          white-space: nowrap;
          box-shadow: var(--shadow-sm);
          opacity: 0;
          transform: translateY(6px) scale(0.97);
          transition: opacity 0.4s ease var(--reveal-delay, 0s),
                      transform 0.4s ease var(--reveal-delay, 0s);
        }
        .arch-node[data-visible="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .arch-node--source {
          font-size: 11.5px;
          font-weight: 500;
          color: var(--muted);
        }
        .arch-node--core {
          color: var(--accent);
          border-color: rgba(15, 118, 110, 0.28);
          background: var(--accent-dim);
        }
        .arch-node--app {
          color: var(--on-accent);
          background: var(--text);
          border-color: var(--text);
          font-weight: 700;
        }
        .arch-connector {
          flex-shrink: 0;
          color: var(--accent);
          font-size: 15px;
          opacity: 0.55;
        }
        .featured-demo-bar {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 9px 12px;
          border: 1px solid rgba(15, 118, 110, 0.18);
          border-radius: var(--radius-sm);
          background: rgba(20, 184, 166, 0.06);
          cursor: pointer;
          text-align: left;
          margin-bottom: clamp(26px, 3vw, 32px);
        }
        .featured-demo-bar__icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--text);
          color: var(--on-accent);
        }
        .featured-demo-bar__title {
          flex: 1;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text);
        }
        .featured-demo-bar__arrow {
          flex-shrink: 0;
          font-size: 12px;
          color: var(--accent);
        }
        .featured-arch-caption {
          text-align: center;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--muted2);
          margin: clamp(18px, 2.5vw, 22px) 0 0;
        }

        .featured-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 3vw, 40px);
          margin-bottom: clamp(26px, 3vw, 32px);
        }
        .featured-block-label { margin-bottom: 8px; }
        .featured-problem-label { color: var(--status-problem); }
        .featured-solution-label { color: var(--status-solution); }

        .featured-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding-top: clamp(20px, 2.5vw, 26px);
          border-top: 1px solid var(--border);
        }
        .featured-stack-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted2);
          margin-bottom: 10px;
        }
        .featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .featured-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          color: var(--muted);
          padding: 6px 12px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          background: var(--surface-raised);
          opacity: 0;
          transform: translateY(5px);
          transition: opacity 0.35s ease var(--reveal-delay, 0s),
                      transform 0.35s ease var(--reveal-delay, 0s),
                      border-color 0.18s ease, color 0.18s ease;
        }
        .featured-tag[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }
        .featured-tag:hover {
          color: var(--accent);
          border-color: var(--accent-mid);
        }
        .featured-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .featured-split { grid-template-columns: 1fr; gap: 18px; }
          .featured-arch-flow { gap: clamp(6px, 1.2vw, 10px); }
          .arch-node { font-size: 11px; padding: 7px 10px; }
          .arch-node--source { font-size: 10.5px; }
        }

        @media (max-width: 768px) {
          .featured-shell { padding: clamp(24px, 6vw, 30px) clamp(20px, 5vw, 26px); border-radius: var(--radius-md); }
          .featured-arch-flow { flex-direction: column; }
          .arch-sources { flex-direction: column; padding-right: 0; padding-bottom: 14px; }
          .arch-sources::after {
            top: auto; bottom: 0; left: 10%; right: 10%; width: auto; height: 10px;
            border: none;
            border-left: 1.5px solid var(--border-strong);
            border-bottom: 1.5px solid var(--border-strong);
            border-right: 1.5px solid var(--border-strong);
            border-radius: 0 0 6px 6px;
          }
          .arch-connector { transform: rotate(90deg); }
          .featured-footer { flex-direction: column; align-items: flex-start; }
        }

        @media (prefers-reduced-motion: reduce) {
          .featured-shell, .arch-node, .featured-tag {
            transition: none;
            opacity: 1;
            transform: none;
          }
          .featured-badge__dot { animation: none; }
        }
      `}</style>

      <div className="featured-badge">
        <span className="featured-badge__dot" aria-hidden="true" />
        Featured system
      </div>

      <p className="featured-category">{category}</p>
      <h3 className="featured-title">{name}</h3>
      <p className="featured-subtitle">{tagline}</p>

      <div className="featured-copy">
        {lede.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="featured-arch">
        <div className="featured-arch-flow">
          <div className="arch-group">
            <span className="arch-group-label">{architecture.sourcesLabel}</span>
            <div className="arch-sources">
              {architecture.sources.map((s, i) => (
                <ArchNode key={s} name={s} tone="source" delay={0.05 + i * 0.06} visible={visible} />
              ))}
            </div>
          </div>

          <span className="arch-connector" aria-hidden="true">→</span>

          <div className="arch-group">
            <span className="arch-group-label">{architecture.orchestration.label}</span>
            <ArchNode name={architecture.orchestration.name} tone="core" delay={0.3} visible={visible} />
          </div>

          <span className="arch-connector" aria-hidden="true">→</span>

          <div className="arch-group">
            <span className="arch-group-label">{architecture.decision.label}</span>
            <ArchNode name={architecture.decision.name} tone="core" delay={0.38} visible={visible} />
          </div>

          <span className="arch-connector" aria-hidden="true">→</span>

          <div className="arch-group">
            <span className="arch-group-label">{architecture.application.label}</span>
            <ArchNode name={architecture.application.name} tone="app" delay={0.46} visible={visible} />
          </div>
        </div>

        <p className="featured-arch-caption">{positioning}</p>
      </div>

      {demo && (
        <button type="button" className="featured-demo-bar" onClick={() => setDemoOpen(true)}>
          <span className="featured-demo-bar__icon" aria-hidden="true">
            <Play size={11} fill="currentColor" />
          </span>
          <span className="featured-demo-bar__title">Watch demo</span>
          <span className="featured-demo-bar__arrow" aria-hidden="true">→</span>
        </button>
      )}

      <div className="featured-split">
        <div>
          <div className="status-label featured-block-label featured-problem-label">Problem</div>
          <p className="proj-text">{problem}</p>
        </div>
        <div>
          <div className="status-label featured-block-label featured-solution-label">Solution</div>
          <p className="proj-text">{solution}</p>
        </div>
      </div>

      <div className="featured-footer">
        <div>
          <div className="featured-stack-label">Built with</div>
          <div className="featured-tags">
            {stack.map((tech, i) => (
              <span
                key={tech}
                className="featured-tag"
                style={{ "--reveal-delay": `${TAG_DELAY_BASE + i * TAG_DELAY_STEP}s` }}
                data-visible={visible ? "true" : "false"}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {hasCta && (
          <div className="featured-actions">
            {live && <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>}
            {!live && github && <a href={github} target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>}
          </div>
        )}
      </div>

      {demo && (
        <VideoLightbox
          src={demo}
          title="Briefly demo"
          open={demoOpen}
          onClose={() => setDemoOpen(false)}
        />
      )}
    </div>
  )
}
