import { useState } from "react"
import { projects } from "../data/index"
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
        display:"flex", alignItems:"center", gap:"6px",
        fontFamily:"'Geist Mono', 'Courier New', monospace",
        fontSize:"10px", fontWeight:400,
        letterSpacing:"0.06em",
        color: h || open ? "var(--accent)" : "var(--muted2)",
        background:"none", border:"none", cursor:"pointer",
        padding:"0 0 20px",
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

function ProjectCard({ project, isLast }) {
  const [h, setH] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div
      className="proj-card"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        borderLeft: `2px solid ${h || open ? "var(--accent)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        transition: "border-left-color 0.2s",
        overflow: "hidden",
      }}
    >
      {/* ── Always visible ── */}
      <div style={{ padding: "32px 36px 0" }}>

        <div style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted2)", marginBottom:"12px" }}>
          {project.num}
        </div>

        <div style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontSize:"26px", fontWeight:400, color:"var(--cream)", letterSpacing:"-0.3px", marginBottom:"7px" }}>
          {project.name}
        </div>

        <div style={{ fontSize:"14px", fontWeight:300, fontStyle:"italic", color:"var(--text)", marginBottom:"18px" }}>
          {project.tagline}
        </div>

        {/* Image slot */}
        {project.image ? (
          <img src={project.image} alt={project.name}
            style={{ width:"100%", height:"140px", objectFit:"cover", borderRadius:"6px", border:"1px solid var(--border)", marginBottom:"18px", display:"block" }}
          />
        ) : (
          <div style={{
            width:"100%", height:"140px",
            background:"linear-gradient(135deg, var(--accent-dim) 0%, rgba(255,255,255,0.02) 100%)",
            border:"1px solid var(--border)", borderRadius:"6px",
            display:"flex", alignItems:"center", justifyContent:"center",
            marginBottom:"18px",
          }}>
            <span style={{ fontFamily:"'Courier New',monospace", fontSize:"9px", color:"var(--muted2)", letterSpacing:"0.08em" }}>
              screenshot coming soon
            </span>
          </div>
        )}

        {/* Problem — always visible */}
        <div style={{ marginBottom:"16px" }}>
          <div style={{ fontSize:"9px", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--status-problem)", marginBottom:"5px" }}>
            Problem
          </div>
          <p style={{ fontSize:"12px", fontWeight:300, color:"var(--muted)", lineHeight:1.65 }}>
            {project.problem}
          </p>
        </div>

        {/* Stack */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"16px" }}>
          {project.stack.map(t => (
            <span key={t} style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted)", padding:"3px 9px", border:"1px solid var(--border2)" }}>{t}</span>
          ))}
        </div>

        {/* Expand toggle */}
        <ExpandToggle open={open} onClick={() => setOpen(!open)} />
      </div>

      {/* ── Expandable solution + links ── */}
      <div style={{ maxHeight: open ? "300px" : "0px", overflow:"hidden", transition:"max-height 0.35s ease" }}>
        <div style={{ padding:"0 36px 32px" }}>
          <div style={{ height:"1px", background:"var(--border)", marginBottom:"16px" }}/>
          <div style={{ fontSize:"9px", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--status-solution)", marginBottom:"5px" }}>
            Solution
          </div>
          <p style={{ fontSize:"12px", fontWeight:300, color:"var(--muted)", lineHeight:1.65, marginBottom:"16px" }}>
            {project.solution}
          </p>
          <div style={{ display:"flex", gap:"8px" }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted2)", textDecoration:"none", padding:"3px 9px", border:"1px solid var(--border2)", transition:"color 0.18s, border-color 0.18s" }}
                onMouseEnter={e => { e.target.style.color="var(--accent)"; e.target.style.borderColor="var(--accent-mid)" }}
                onMouseLeave={e => { e.target.style.color="var(--muted2)"; e.target.style.borderColor="var(--border2)" }}>GitHub ↗</a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer"
                style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted2)", textDecoration:"none", padding:"3px 9px", border:"1px solid var(--border2)", transition:"color 0.18s, border-color 0.18s" }}
                onMouseEnter={e => { e.target.style.color="var(--accent)"; e.target.style.borderColor="var(--accent-mid)" }}
                onMouseLeave={e => { e.target.style.color="var(--muted2)"; e.target.style.borderColor="var(--border2)" }}>Live ↗</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="s-wrap">
      <SectionLayout index="02">
        <SectionHeader eyebrow="Engineering work" title="Projects" description="Full-stack applications and backend systems built for real problems."/>
        <div className="proj-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", border:"1px solid var(--border)" }}>
          {projects.map((p,i) => <ProjectCard key={p.id} project={p} isLast={i===projects.length-1}/>)}
        </div>
      </SectionLayout>
    </section>
  )
}