import { useState } from "react"
import { skills } from "../data/index"
import { brandIcons } from "../data/brandIcons"
import SectionHeader from "./SectionHeader"

/* Inline custom SVGs for tools that have no clean brand icon path */
const customSVGs = {
  "REST APIs": (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <rect x="2" y="7" width="7" height="10" rx="2" stroke="#818cf8" strokeWidth="1.5"/>
      <rect x="15" y="7" width="7" height="10" rx="2" stroke="#a78bfa" strokeWidth="1.5"/>
      <path d="M9 12h6M13 10l2 2-2 2" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  "Anthropic Claude": (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <g fill="#cc785c" transform="translate(12 12)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="-1.2"
            y="-9"
            width="2.4"
            height="7.5"
            rx="1.2"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
    </svg>
  ),
}

/* Renders correct icon — customSVGs first, brandIcons fallback, gear if neither */
function BrandIcon({ name, size = 26 }) {
  if (customSVGs[name]) return customSVGs[name]

  const icon = brandIcons[name]
  if (!icon) return <span style={{ fontSize: "20px", opacity: 0.4 }}>⚙</span>

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={icon.color} aria-label={name}>
      <path d={icon.path} />
    </svg>
  )
}

function SkillCard({ name, ci, si }) {
  const [h, setH] = useState(false)

  const rowBase = ci * 0.25
  const itemOffset = si * 0.05
  const delay = rowBase + itemOffset

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "9px",
        cursor: "default",
        animation: `skillFloat 5.5s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          background: h ? "var(--coral-dim)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${h ? "var(--coral-mid)" : "var(--border2)"}`,
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          transform: h ? "translateY(-5px)" : "translateY(0)",
          boxShadow: h ? "0 10px 28px rgba(240,168,152,0.12)" : "none",
        }}
      >
        <BrandIcon name={name} />
      </div>

      <span
        style={{
          fontFamily: "'Courier New',monospace",
          fontSize: "9px",
          color: h ? "var(--coral)" : "var(--muted2)",
          letterSpacing: "0.05em",
          textAlign: "center",
          transition: "color 0.2s",
          lineHeight: 1.3,
          maxWidth: "60px",
        }}
      >
        {name}
      </span>
    </div>
  )
}

const nameMap = {
  "Next.js": "Nextjs",
  "HTML / CSS": "HTML/CSS",
}

function resolvedName(raw) {
  return nameMap[raw] || raw
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="s-wrap"
      style={{ padding: "64px 64px 56px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <style>{`
        @keyframes skillFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>

      <SectionHeader eyebrow="Technical stack" title="Skills" />

      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        {Object.entries(skills).map(([cat, items], ci, arr) => (
          <div key={cat}>
            <div
              style={{
                fontFamily: "'Courier New',monospace",
                fontSize: "10px",
                color: "var(--coral)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {cat}
              <span
                style={{
                  flex: 1,
                  height: "1px",
                  background: "var(--border)",
                  display: "block",
                }}
              />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {items.map((skill, si) => (
                <SkillCard
                  key={skill}
                  name={resolvedName(skill)}
                  ci={ci}
                  si={si}
                />
              ))}
            </div>

            {ci < arr.length - 1 && (
              <div
                style={{
                  marginTop: "32px",
                  height: "1px",
                  background: "var(--border)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}