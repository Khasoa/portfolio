import { useState } from "react"
import { projects } from "../data/index"
import SectionHeader from "./SectionHeader"

function ProjectCard({ project, isLast }) {
  const [h, setH] = useState(false)
  return (
    <div className="proj-card"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding:"32px 36px",
        borderLeft:`2px solid ${h ? "var(--coral)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        transition:"border-left-color 0.2s", cursor:"default",
      }}>
      <div style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted2)", marginBottom:"12px" }}>{project.num}</div>
      <div style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontSize:"26px", fontWeight:400, color:"var(--cream)", letterSpacing:"-0.3px", marginBottom:"7px" }}>{project.name}</div>
      <div style={{ fontSize:"14px", fontWeight:300, fontStyle:"italic", color:"var(--text)", marginBottom:"18px" }}>{project.tagline}</div>
      <div style={{ display:"flex", gap:"8px", marginBottom:"18px" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted2)", textDecoration:"none", padding:"3px 9px", border:"1px solid var(--border2)", transition:"color 0.18s, border-color 0.18s" }}
            onMouseEnter={e => { e.target.style.color="var(--coral)"; e.target.style.borderColor="var(--coral-mid)" }}
            onMouseLeave={e => { e.target.style.color="var(--muted2)"; e.target.style.borderColor="var(--border2)" }}>GitHub ↗</a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted2)", textDecoration:"none", padding:"3px 9px", border:"1px solid var(--border2)", transition:"color 0.18s, border-color 0.18s" }}
            onMouseEnter={e => { e.target.style.color="var(--coral)"; e.target.style.borderColor="var(--coral-mid)" }}
            onMouseLeave={e => { e.target.style.color="var(--muted2)"; e.target.style.borderColor="var(--border2)" }}>Live ↗</a>
        )}
      </div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
        {project.stack.map(t => (
          <span key={t} style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted)", padding:"3px 9px", border:"1px solid var(--border2)" }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="s-wrap" style={{ padding:"64px 64px 56px", maxWidth:"1100px", margin:"0 auto" }}>
      <SectionHeader eyebrow="Engineering work" title="Projects" description="Full-stack applications and backend systems built for real problems."/>
      <div className="proj-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", border:"1px solid var(--border)" }}>
        {projects.map((p,i) => <ProjectCard key={p.id} project={p} isLast={i===projects.length-1}/>)}
      </div>
    </section>
  )
}