import { useState } from "react"
import { Maximize2, Play } from "lucide-react"
import { workflows } from "../data/index"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"
import { ImageLightbox, VideoLightbox } from "./MediaLightbox"

function ExpandToggle({ open, onClick }) {
  return (
    <button onClick={onClick} className="wf-expand">
      <span>{open ? "Show less" : "See solution"}</span>
      <span className="wf-expand-arrow" style={{ transform: open ? "rotate(90deg)" : "none" }}>→</span>
    </button>
  )
}

const tierMeta = {
  "Level 1": { level: "Level 1", sub: "intake" },
  "Level 2": { level: "Level 2", sub: "operations" },
  "Level 3": { level: "Level 3", sub: "enterprise" },
}

function TierBadge({ levelKey }) {
  const meta = tierMeta[levelKey]
  if (!meta) return null
  return (
    <span className="wf-tier-badge">
      <span className="wf-tier-level">{meta.level}</span>
      <span className="wf-tier-sub">· {meta.sub}</span>
    </span>
  )
}

function WfCard({ wf, isLast }) {
  const [open, setOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <article className={`wf-card${open ? " wf-card--open" : ""}`}>
      {!isLast && <div className="workflow-arrow" aria-hidden="true">→</div>}

      <div className="wf-card-inner">
        <div className="wf-card-header">
          {wf.level && (
            <div className="wf-card-tier">
              <TierBadge levelKey={wf.level} />
            </div>
          )}
          <h3 className="wf-card-title">{wf.name}</h3>
          <p className="wf-card-tagline">{wf.tagline}</p>
        </div>

        {wf.image && (
          <div className="wf-media">
            <div className="wf-image-frame">
              <button
                type="button"
                className="wf-image-enlarge"
                onClick={() => setImageOpen(true)}
                aria-label={`Enlarge ${wf.name} workflow diagram`}
              >
                <img
                  src={wf.image}
                  alt={`${wf.name} n8n workflow diagram`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="wf-image-enlarge__label">
                  <Maximize2 size={13} aria-hidden="true" />
                  View
                </span>
              </button>
            </div>

            {wf.demo && (
              <button type="button" className="wf-demo-bar" onClick={() => setDemoOpen(true)}>
                <span className="wf-demo-bar__icon" aria-hidden="true">
                  <Play size={11} fill="currentColor" />
                </span>
                <span className="wf-demo-bar__title">Watch demo</span>
                <span className="wf-demo-bar__arrow" aria-hidden="true">→</span>
              </button>
            )}
          </div>
        )}

        <div className="wf-card-block">
          <div className="status-label wf-problem-label">Problem</div>
          <p className="wf-card-text">{wf.problem}</p>
        </div>

        <div className="wf-stack">
          <div className="wf-stack-label">Built with</div>
          <p className="wf-stack-list">{wf.tools.join(" · ")}</p>
        </div>

        <ExpandToggle open={open} onClick={() => setOpen(!open)} />
      </div>

      <div className="wf-solution-panel" style={{ maxHeight: open ? "360px" : "0px" }}>
        <div className="wf-solution-inner">
          <div className="status-label wf-solution-label">Solution</div>
          <p className="wf-card-text">{wf.solution}</p>
        </div>
      </div>

      <ImageLightbox
        src={wf.image}
        alt={`${wf.name} workflow diagram`}
        open={imageOpen}
        onClose={() => setImageOpen(false)}
      />
      {wf.demo && (
        <VideoLightbox
          src={wf.demo}
          title={`${wf.name} demo`}
          open={demoOpen}
          onClose={() => setDemoOpen(false)}
        />
      )}
    </article>
  )
}

export default function Workflows() {
  return (
    <section id="automation" className="s-wrap s-wrap--workflow">
      <style>{`
        .wf-shell {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--surface-raised);
          box-shadow: var(--shadow-card);
        }
        .wf-shell-header {
          display: flex; align-items: center; gap: 10px;
          padding: 16px 24px;
          border-bottom: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.6);
        }
        .wf-shell-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent); opacity: 0.75;
        }
        .wf-shell-label {
          font-family: var(--font-mono); font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted2);
        }
        .wf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .wf-card {
          position: relative;
          border-right: 1px solid var(--border);
        }
        .wf-card:last-child { border-right: none; }
        .wf-card-inner {
          padding: clamp(28px, 3.5vw, 36px) clamp(24px, 3vw, 32px) 0;
        }
        .wf-card-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          margin-bottom: clamp(20px, 2.5vw, 24px);
        }
        .wf-card-tier {
          align-self: flex-end;
          margin-bottom: 14px;
        }
        .wf-tier-badge {
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted2);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 4px 10px;
          white-space: nowrap;
        }
        .wf-tier-sub {
          font-size: 8px;
          letter-spacing: 0.04em;
          text-transform: lowercase;
          color: var(--muted2);
          opacity: 0.85;
        }
        .wf-card-title {
          font-family: var(--font-display);
          font-size: clamp(19px, 2vw, 23px);
          font-weight: 700;
          color: var(--text);
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
          width: 100%;
        }
        .wf-card-tagline {
          font-size: var(--text-sm);
          font-weight: 400;
          font-style: italic;
          color: var(--muted);
          line-height: var(--leading-normal);
          margin: 0;
          width: 100%;
        }
        .wf-media {
          margin-bottom: clamp(18px, 2.5vw, 22px);
        }
        .wf-image-frame {
          margin-bottom: 10px;
        }
        .wf-image-enlarge {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #1E293B;
          cursor: zoom-in;
        }
        .wf-image-enlarge img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          object-position: center;
        }
        .wf-image-enlarge__label {
          position: absolute;
          right: 10px;
          bottom: 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(4px);
          padding: 6px 10px;
          border-radius: 999px;
          pointer-events: none;
        }
        .wf-demo-bar {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 7px 10px;
          border: 1px solid rgba(15, 118, 110, 0.18);
          border-radius: var(--radius-sm);
          background: rgba(20, 184, 166, 0.06);
          cursor: pointer;
          text-align: left;
        }
        .wf-demo-bar__icon {
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
        .wf-demo-bar__title {
          flex: 1;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text);
        }
        .wf-demo-bar__arrow {
          flex-shrink: 0;
          font-size: 12px;
          color: var(--accent);
        }
        .wf-stack {
          margin-bottom: 14px;
          padding-top: 2px;
        }
        .wf-stack-label {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted2);
          margin-bottom: 6px;
        }
        .wf-stack-list {
          font-size: 11px;
          line-height: 1.55;
          color: var(--muted);
          margin: 0;
        }
        .wf-card-block { margin-bottom: 18px; }
        .wf-problem-label { color: var(--status-problem); margin-bottom: 8px; }
        .wf-solution-label { color: var(--status-solution); margin-bottom: 8px; }
        .wf-card-text {
          font-size: var(--text-sm);
          font-weight: 400;
          line-height: var(--leading-normal);
          color: var(--muted);
          margin: 0;
        }
        .wf-expand {
          display: flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 10px; font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--accent);
          background: none; border: none; cursor: pointer;
          padding: 0 0 clamp(24px, 3vw, 28px);
          min-height: 44px;
        }
        .wf-expand-arrow {
          color: var(--accent);
          display: inline-block;
          transition: transform 0.25s ease;
          font-size: 11px;
        }
        .wf-solution-panel {
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .wf-solution-inner {
          padding: 0 clamp(24px, 3vw, 32px) clamp(28px, 3.5vw, 36px);
          border-top: 1px solid var(--border);
          padding-top: 20px;
          margin-top: 4px;
        }
        .workflow-arrow {
          position: absolute; right: -12px; top: 42%;
          transform: translateY(-50%);
          color: var(--accent); font-size: 15px; z-index: 5; opacity: 0.5;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .wf-grid { grid-template-columns: 1fr; }
          .workflow-arrow { display: none; }
          .wf-card {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .wf-card:last-child { border-bottom: none; }
          .wf-card-tier { align-self: flex-start; margin-bottom: 12px; }
        }
        @media (max-width: 768px) {
          .wf-card-inner { padding: 28px 24px 0; }
          .wf-solution-inner { padding: 0 24px 28px; }
        }
      `}</style>

      <SectionLayout index="02">
        <SectionHeader
          eyebrow="Operations & automation"
          title="Workflow Automation"
          description="Business systems that reduce manual work, improve visibility, and keep operations moving."
        />
        <div className="wf-shell">
          <div className="wf-shell-header">
            <span className="wf-shell-dot" />
            <span className="wf-shell-label">Operational pipeline · 3 systems</span>
          </div>
          <div className="wf-grid">
            {workflows.map((w, i) => <WfCard key={w.id} wf={w} isLast={i === workflows.length - 1} />)}
          </div>
        </div>
      </SectionLayout>
    </section>
  )
}
