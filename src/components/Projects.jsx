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
        display: "flex", alignItems: "center", gap: "6px",
        fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.06em",
        color: h || open ? "var(--accent)" : "var(--muted2)",
        background: "none", border: "none", cursor: "pointer",
        padding: "0 0 24px", transition: "color 0.18s", minHeight: "44px",
      }}
    >
      <span>{open ? "Show less" : "See solution"}</span>
      <span style={{ color: "var(--accent)", display: "inline-block", transition: "transform 0.25s", transform: open ? "rotate(90deg)" : "none", fontSize: "11px" }}>→</span>
    </button>
  )
}

function ProjectCard({ project, isLast }) {
  const [h, setH] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`proj-card card-item${h || open ? " card-item--active" : ""}`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        borderLeft: `2px solid ${h || open ? "var(--accent)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        transition: "border-left-color 0.2s, background 0.2s",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "clamp(24px, 3vw, 32px) clamp(24px, 3vw, 32px) 0" }}>
        <div className="meta-label" style={{ marginBottom: "10px" }}>{project.num}</div>

        <div style={{
          fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 2.5vw, 26px)",
          fontWeight: 400, color: "var(--cream)", letterSpacing: "-0.02em",
          marginBottom: "6px", lineHeight: 1.2,
        }}>{project.name}</div>

        <div style={{
          fontSize: "var(--text-sm)", fontWeight: 300, fontStyle: "italic",
          color: "var(--text)", marginBottom: "16px", lineHeight: 1.5,
        }}>{project.tagline}</div>

        {project.image ? (
          <div className="proj-image-frame">
            <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
          </div>
        ) : (
          <div className="proj-image-frame">
            <span className="meta-label" style={{ letterSpacing: "0.08em" }}>screenshot coming soon</span>
          </div>
        )}

        <div style={{ marginBottom: "14px" }}>
          <div className="status-label" style={{ color: "var(--status-problem)", marginBottom: "6px" }}>Problem</div>
          <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--muted)", lineHeight: "var(--leading-normal)" }}>
            {project.problem}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
          {project.stack.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <ExpandToggle open={open} onClick={() => setOpen(!open)} />
      </div>

      <div style={{ maxHeight: open ? "320px" : "0px", overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <div style={{ padding: "0 clamp(24px, 3vw, 32px) clamp(24px, 3vw, 32px)" }}>
          <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }} />
          <div className="status-label" style={{ color: "var(--status-solution)", marginBottom: "6px" }}>Solution</div>
          <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--muted)", lineHeight: "var(--leading-normal)", marginBottom: "16px" }}>
            {project.solution}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="link-chip">GitHub ↗</a>}
            {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="link-chip">Live ↗</a>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="s-wrap">
      <style>{`
        .proj-shell {
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--surface);
          box-shadow: var(--shadow-sm);
        }
        .proj-grid { display: grid; grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .proj-grid .proj-card { border-right: none !important; border-bottom: 1px solid var(--border); }
          .proj-grid .proj-card:last-child { border-bottom: none; }
        }
      `}</style>

      <SectionLayout index="02">
        <SectionHeader eyebrow="Engineering work" title="Projects" description="Full-stack applications and backend systems built for real problems." />
        <div className="proj-shell">
          <div className="proj-grid">
            {projects.map((p, i) => <ProjectCard key={p.id} project={p} isLast={i === projects.length - 1} />)}
          </div>
        </div>
      </SectionLayout>
    </section>
  )
}
