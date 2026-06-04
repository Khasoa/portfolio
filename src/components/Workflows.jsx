import { useState } from "react"
import { workflows } from "../data/index"
import SectionHeader from "./SectionHeader"

function WfCard({ wf, isLast }) {
  const [h, setH] = useState(false)
  const hasLinks = wf.github || wf.notion || wf.live

  return (
    <div
      className="wf-card"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "28px",
        borderLeft: `2px solid ${h ? "var(--coral)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        opacity: wf.comingSoon ? (h ? 0.82 : 0.52) : 1,
        transition: "all 0.2s",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header row */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", marginBottom: "12px",
      }}>
        <span style={{
          fontFamily: "'Courier New',monospace",
          fontSize: "11px", color: "var(--muted2)",
        }}>
          {wf.num}
        </span>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {wf.level && (
            <span style={{
              fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "var(--coral)",
              border: "1px solid var(--coral-mid)", padding: "2px 7px",
            }}>
              {wf.level}
            </span>
          )}
          {wf.comingSoon && (
            <span style={{
              fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "var(--muted2)",
              border: "1px solid var(--border)", padding: "2px 7px",
            }}>
              Coming soon
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <div style={{
        fontSize: "15px", fontWeight: 500,
        color: "var(--cream)", marginBottom: "5px",
      }}>
        {wf.name}
      </div>

      {/* Tagline */}
      <div style={{
        fontSize: "13px", fontWeight: 300, fontStyle: "italic",
        color: "var(--text)", marginBottom: "12px",
      }}>
        {wf.tagline}
      </div>

      {/* Description */}
      <p style={{
        fontSize: "13px", fontWeight: 300, color: "var(--muted)",
        lineHeight: 1.65, marginBottom: "14px",
        flexGrow: 1,
      }}>
        {wf.description}
      </p>

      {/* Tools */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "5px",
        marginBottom: hasLinks ? "16px" : 0,
      }}>
        {wf.tools.map(t => (
          <span key={t} style={{
            fontFamily: "'Courier New',monospace", fontSize: "11px",
            color: "var(--muted)", padding: "2px 7px",
            border: "1px solid var(--border2)",
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      {hasLinks && (
        <div style={{
          display: "flex", gap: "16px",
          paddingTop: "14px",
          borderTop: "1px solid var(--border)",
          marginTop: "auto",
        }}>
          {wf.github && (
            <a
              href={wf.github}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Courier New',monospace",
                fontSize: "11px", color: "var(--muted2)",
                textDecoration: "none", letterSpacing: "0.05em",
                transition: "color 0.18s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--coral)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted2)"}
            >
              github ↗
            </a>
          )}
          {wf.notion && (
            <a
              href={wf.notion}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Courier New',monospace",
                fontSize: "11px", color: "var(--muted2)",
                textDecoration: "none", letterSpacing: "0.05em",
                transition: "color 0.18s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--coral)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted2)"}
            >
              case study ↗
            </a>
          )}
          {wf.live && (
            <a
              href={wf.live}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Courier New',monospace",
                fontSize: "11px", color: "var(--coral)",
                textDecoration: "none", letterSpacing: "0.05em",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--cream)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--coral)"}
            >
              live demo ↗
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Workflows() {
  return (
    <section
      id="automation"
      className="s-wrap"
      style={{ padding: "64px 64px 56px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <SectionHeader
        eyebrow="Operations & automation"
        title="Workflow Automation"
        description="Business process automations built with n8n — visual workflow design with custom code nodes."
      />
      <div
        className="wf-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          border: "1px solid var(--border)",
        }}
      >
        {workflows.map((w, i) => (
          <WfCard key={w.id} wf={w} isLast={i === workflows.length - 1} />
        ))}
      </div>
    </section>
  )
}