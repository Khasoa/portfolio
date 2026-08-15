import { useState } from "react"
import { projects } from "../data/index"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"
import FeaturedProject from "./FeaturedProject"

function ExpandToggle({ open, onClick }) {
  return (
    <button onClick={onClick} className="proj-expand">
      <span>{open ? "Show less" : "See solution"}</span>
      <span className="proj-expand-arrow" style={{ transform: open ? "rotate(90deg)" : "none" }}>→</span>
    </button>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`proj-card${open ? " proj-card--open" : ""}`}>
      <div className="proj-card-inner">
        <div className="meta-label proj-num">{project.num}</div>

        <h3 className="proj-title">{project.name}</h3>
        <p className="proj-tagline">{project.tagline}</p>

        {project.image ? (
          <div className="proj-image-frame">
            <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
          </div>
        ) : (
          <div className="proj-image-frame">
            <span className="meta-label">screenshot coming soon</span>
          </div>
        )}

        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="proj-live-link">
            View live site →
          </a>
        )}

        <div className="proj-block">
          <div className="status-label proj-problem-label">Problem</div>
          <p className="proj-text">{project.problem}</p>
        </div>

        <div className="proj-stack">
          <div className="proj-stack-label">Stack</div>
          <p className="proj-stack-list">{project.stack.join(" · ")}</p>
        </div>

        <ExpandToggle open={open} onClick={() => setOpen(!open)} />
      </div>

      <div className="proj-solution-panel" style={{ maxHeight: open ? "340px" : "0px" }}>
        <div className="proj-solution-inner">
          <div className="status-label proj-solution-label">Solution</div>
          <p className="proj-text">{project.solution}</p>
          {project.github && (
            <div className="proj-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="link-chip">GitHub ↗</a>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="s-wrap">
      <style>{`
        .proj-shell {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--surface-raised);
          box-shadow: var(--shadow-card);
        }
        .proj-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .proj-card {
          position: relative;
          border-right: 1px solid var(--border);
        }
        .proj-card:last-child { border-right: none; }
        .proj-card-inner {
          padding: clamp(28px, 3.5vw, 36px) clamp(28px, 3.5vw, 36px) 0;
        }
        .proj-num { margin-bottom: 12px; }
        .proj-title {
          font-family: var(--font-display);
          font-size: var(--type-card-title);
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 8px;
        }
        .proj-tagline {
          font-size: var(--text-sm);
          font-weight: 400;
          font-style: italic;
          color: var(--muted);
          line-height: var(--leading-normal);
          margin: 0 0 clamp(20px, 2.5vw, 24px);
        }
        .proj-live-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin: -8px 0 clamp(18px, 2.5vw, 22px);
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--accent);
        }
        .proj-block { margin-bottom: 20px; }
        .proj-problem-label { color: var(--status-problem); margin-bottom: 8px; }
        .proj-solution-label { color: var(--status-solution); margin-bottom: 8px; }
        .proj-text {
          font-size: var(--text-sm);
          font-weight: 400;
          color: var(--muted);
          line-height: var(--leading-normal);
          margin: 0;
        }
        .proj-stack {
          margin-bottom: 14px;
        }
        .proj-stack-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted2);
          margin-bottom: 6px;
        }
        .proj-stack-list {
          font-family: var(--font-sans);
          font-size: var(--text-sm);
          line-height: var(--leading-normal);
          color: var(--muted);
          margin: 0;
        }
        .proj-expand {
          display: flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 10px; font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--accent);
          background: none; border: none; cursor: pointer;
          padding: 0 0 clamp(28px, 3.5vw, 36px);
          min-height: 44px;
        }
        .proj-expand-arrow {
          color: var(--accent);
          transition: transform 0.25s ease;
          font-size: 10px;
        }
        .proj-solution-panel {
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .proj-solution-inner {
          padding: 0 clamp(28px, 3.5vw, 36px) clamp(28px, 3.5vw, 36px);
          border-top: 1px solid var(--border);
          padding-top: 20px;
          margin-top: 4px;
        }
        .proj-links { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }

        @media (max-width: 768px) {
          .proj-grid { grid-template-columns: 1fr; }
          .proj-card {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .proj-card:last-child { border-bottom: none; }
          .proj-card-inner { padding: clamp(22px, 5vw, 28px) clamp(18px, 4.5vw, 24px) 0; }
          .proj-solution-inner { padding: 0 clamp(18px, 4.5vw, 24px) clamp(22px, 5vw, 28px); }
        }
      `}</style>

      <SectionLayout index="01">
        <SectionHeader eyebrow="Engineering + automation" title="Projects" description="Systems built for real operational problems." />
        <FeaturedProject />
        <div className="proj-shell">
          <div className="proj-grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </SectionLayout>
    </section>
  )
}
