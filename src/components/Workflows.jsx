import { useState } from "react"
import { workflows } from "../data/index"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

function ExpandToggle({ open, onClick }) {
  const [h, setH] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex", alignItems: "center", gap: "6px",
        fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.06em",
        color: h || open ? "var(--accent)" : "var(--muted2)",
        background: "none", border: "none", cursor: "pointer",
        padding: "0 0 20px", transition: "color 0.18s", minHeight: "44px",
      }}
    >
      <span>{open ? "Show less" : "See solution"}</span>
      <span style={{ color: "var(--accent)", display: "inline-block", transition: "transform 0.25s", transform: open ? "rotate(90deg)" : "none" }}>→</span>
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
    <span className="surface-pill surface-pill--sm wf-tier-badge">
      <span className="wf-tier-level">{meta.level}</span>
      <span className="wf-tier-sub">· {meta.sub}</span>
    </span>
  )
}

function WfCard({ wf, isLast }) {
  const [hover, setHover] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`wf-card card-item${hover || open ? " card-item--active" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderLeft: `2px solid ${hover || open ? "var(--accent)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        transition: "border-left-color 0.2s, background 0.2s",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isLast && <div className="workflow-arrow" aria-hidden="true">→</div>}

      <div style={{ padding: "clamp(22px, 3vw, 28px) clamp(22px, 3vw, 28px) 0" }}>
        {/* Header row: title left, level badge top-right */}
        <div className="wf-card-header">
          <div className="wf-card-header__main">
            <div style={{
              fontFamily: "var(--font-serif)", fontSize: "clamp(18px, 2vw, 22px)",
              fontWeight: 400, color: "var(--cream)", marginBottom: "6px", lineHeight: 1.25,
            }}>{wf.name}</div>
            <div style={{
              fontSize: "var(--text-sm)", fontWeight: 300, fontStyle: "italic",
              color: "var(--text)", marginBottom: "16px", lineHeight: 1.5,
            }}>{wf.tagline}</div>
          </div>
          {wf.level && (
            <div className="wf-card-header__badge">
              <TierBadge levelKey={wf.level} />
            </div>
          )}
        </div>

        <div style={{ marginBottom: "14px" }}>
          <div className="status-label" style={{ color: "var(--status-problem)", marginBottom: "6px" }}>Problem</div>
          <p style={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--muted)" }}>{wf.problem}</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
          {wf.tools.map(tool => <span key={tool} className="tag">{tool}</span>)}
        </div>

        <ExpandToggle open={open} onClick={() => setOpen(!open)} />
      </div>

      <div style={{ maxHeight: open ? "340px" : "0px", overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <div style={{ padding: "0 clamp(22px, 3vw, 28px) clamp(22px, 3vw, 28px)" }}>
          <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }} />
          <div className="status-label" style={{ color: "var(--status-solution)", marginBottom: "6px" }}>Solution</div>
          <p style={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--muted)", marginBottom: "14px" }}>{wf.solution}</p>
        </div>
      </div>
    </div>
  )
}

export default function Workflows() {
  return (
    <section id="automation" className="s-wrap">
      <style>{`
        .wf-shell {
          position: relative;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--surface);
          box-shadow: var(--shadow-sm);
        }
        .wf-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: 0.5;
          pointer-events: none;
        }
        .wf-shell-header {
          position: relative; z-index: 2;
          display: flex; align-items: center; gap: 12px;
          padding: 14px 20px;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,0.015);
        }
        .wf-shell-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); opacity: 0.7; }
        .wf-shell-label {
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted2);
        }
        .wf-grid { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(3, 1fr); }
        .workflow-arrow {
          position: absolute; right: -14px; top: 50%; transform: translateY(-50%);
          color: var(--accent); font-size: 16px; z-index: 5; opacity: 0.65;
        }
        .wf-tier-badge { display: inline-flex; align-items: baseline; gap: 4px; white-space: nowrap; }
        .wf-tier-level { color: var(--muted); }
        .wf-tier-sub { font-size: 8px; letter-spacing: 0.04em; text-transform: lowercase; color: var(--muted2); }

        .wf-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 0;
        }
        .wf-card-header__main { flex: 1; min-width: 0; }
        .wf-card-header__badge {
          flex-shrink: 0;
          padding-top: 2px;
        }

        @media (max-width: 900px) {
          .wf-grid { grid-template-columns: 1fr; }
          .workflow-arrow { display: none; }
          .wf-card { border-right: none !important; border-bottom: 1px solid var(--border); }
          .wf-card:last-child { border-bottom: none; }
        }
      `}</style>

      <SectionLayout index="03">
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
