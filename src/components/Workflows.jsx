import { useState } from "react"
import { workflows } from "../data/index"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

function ExpandToggle({ open, onClick, padBottom = "18px" }) {
  const [h, setH] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display:"flex", alignItems:"center", gap:"6px",
        fontFamily:"'Geist Mono', 'Courier New', monospace",
        fontSize:"10px", fontWeight:400,
        letterSpacing:"0.06em",
        color: h || open ? "var(--accent)" : "var(--muted2)",
        background:"none", border:"none", cursor:"pointer",
        padding:`0 0 ${padBottom}`,
        transition:"color 0.18s",
      }}
    >
      <span>{open ? "Show less" : "See solution"}</span>
      <span style={{
        color: "var(--accent)",
        display:"inline-block",
        transition:"transform 0.25s",
        transform: open ? "rotate(90deg)" : "none",
        fontSize:"11px",
      }}>→</span>
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
  const [h, setH] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div
      className="wf-card"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        borderLeft: `2px solid ${h || open ? "var(--accent)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        overflow: "hidden",
        transition: "border-left-color 0.2s",
        display: "flex", flexDirection: "column",
      }}
    >
      <div style={{ padding: "24px 24px 0" }}>

        <div style={{ marginBottom:"12px" }}>
          {wf.level && <TierBadge levelKey={wf.level} />}
        </div>

        <div style={{ fontSize:"15px", fontWeight:500, color:"var(--cream)", marginBottom:"5px" }}>{wf.name}</div>
        <div style={{ fontSize:"12px", fontWeight:300, fontStyle:"italic", color:"var(--text)", marginBottom:"14px" }}>{wf.tagline}</div>

        <div style={{ marginBottom:"14px" }}>
          <div style={{ fontSize:"9px", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--status-problem)", marginBottom:"5px" }}>Problem</div>
          <p style={{ fontSize:"12px", fontWeight:300, color:"var(--muted)", lineHeight:1.65 }}>{wf.problem}</p>
        </div>

        <div style={{ display:"flex", flexWrap:"wrap", gap:"5px", marginBottom:"14px" }}>
          {wf.tools.map(t => (
            <span key={t} style={{ fontFamily:"'Courier New',monospace", fontSize:"10px", color:"var(--muted)", padding:"2px 7px", border:"1px solid var(--border2)" }}>{t}</span>
          ))}
        </div>

        <ExpandToggle open={open} onClick={() => setOpen(!open)} />
      </div>

      <div style={{ maxHeight: open ? "300px" : "0px", overflow:"hidden", transition:"max-height 0.35s ease" }}>
        <div style={{ padding:"0 24px 22px" }}>
          <div style={{ height:"1px", background:"var(--border)", marginBottom:"14px" }}/>
          <div style={{ fontSize:"9px", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--status-solution)", marginBottom:"5px" }}>Solution</div>
          <p style={{ fontSize:"12px", fontWeight:300, color:"var(--muted)", lineHeight:1.65, marginBottom:"14px" }}>{wf.solution}</p>
          <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
            {wf.github && (
              <a href={wf.github} target="_blank" rel="noreferrer"
                style={{ fontFamily:"'Courier New',monospace", fontSize:"10px", color:"var(--muted2)", textDecoration:"none", padding:"3px 9px", border:"1px solid var(--border2)", transition:"color 0.18s, border-color 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.color="var(--accent)"; e.currentTarget.style.borderColor="var(--accent-mid)" }}
                onMouseLeave={e => { e.currentTarget.style.color="var(--muted2)"; e.currentTarget.style.borderColor="var(--border2)" }}>github ↗</a>
            )}
            {wf.notion && (
              <a href={wf.notion} target="_blank" rel="noreferrer"
                style={{ fontFamily:"'Courier New',monospace", fontSize:"10px", color:"var(--muted2)", textDecoration:"none", padding:"3px 9px", border:"1px solid var(--border2)", transition:"color 0.18s, border-color 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.color="var(--accent)"; e.currentTarget.style.borderColor="var(--accent-mid)" }}
                onMouseLeave={e => { e.currentTarget.style.color="var(--muted2)"; e.currentTarget.style.borderColor="var(--border2)" }}>case study ↗</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Workflows() {
  return (
    <section id="automation" className="s-wrap">
      <style>{`
        .wf-tier-badge {
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
        }
        .wf-tier-level { color: var(--muted); }
        .wf-tier-sub {
          font-size: 7px;
          letter-spacing: 0.04em;
          text-transform: lowercase;
          color: var(--muted2);
        }
      `}</style>
      <SectionLayout index="03">
        <SectionHeader
          eyebrow="Operations & automation"
          title="Workflow Automation"
          description="AI-powered business process automations built with n8n — from lead scoring to enterprise compliance."
        />
        <div className="wf-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", border:"1px solid var(--border)" }}>
          {workflows.map((w,i) => <WfCard key={w.id} wf={w} isLast={i===workflows.length-1}/>)}
        </div>
      </SectionLayout>
    </section>
  )
}
