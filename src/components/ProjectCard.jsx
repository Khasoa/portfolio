import { useState } from "react"

export default function ProjectCard({ project, isLast }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      style={{
        padding: "26px 28px",
        borderLeft: `2px solid ${hov ? "var(--coral)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        cursor: "default",
        transition: "border-left-color 0.18s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "10px", color: "var(--muted2)", marginBottom: "10px",
      }}>
        {project.num}
      </div>

      <div style={{
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontSize: "22px", fontWeight: 400, color: "var(--cream)",
        letterSpacing: "-0.2px", marginBottom: "6px",
      }}>
        {project.name}
      </div>

      {/* Tagline — italic, not coral */}
      <div style={{
        fontSize: "12px", fontWeight: 300, fontStyle: "italic",
        color: "var(--text)", marginBottom: "18px", letterSpacing: "0.01em",
      }}>
        {project.tagline}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "9px", color: "var(--muted2)", textDecoration: "none",
            padding: "2px 8px", border: "1px solid var(--border)",
            transition: "color 0.18s, border-color 0.18s",
          }}
            onMouseEnter={e => { e.target.style.color = "var(--coral)"; e.target.style.borderColor = "var(--coral-mid)"; }}
            onMouseLeave={e => { e.target.style.color = "var(--muted2)"; e.target.style.borderColor = "var(--border)"; }}
          >
            GitHub ↗
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "9px", color: "var(--muted2)", textDecoration: "none",
            padding: "2px 8px", border: "1px solid var(--border)",
            transition: "color 0.18s, border-color 0.18s",
          }}
            onMouseEnter={e => { e.target.style.color = "var(--coral)"; e.target.style.borderColor = "var(--coral-mid)"; }}
            onMouseLeave={e => { e.target.style.color = "var(--muted2)"; e.target.style.borderColor = "var(--border)"; }}
          >
            Live ↗
          </a>
        )}
      </div>

      {/* Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {project.stack.map(tech => (
          <span key={tech} style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "9px", color: "var(--muted2)",
            padding: "2px 7px", border: "1px solid var(--border)",
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}