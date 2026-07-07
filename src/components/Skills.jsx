import { useEffect, useRef, useState } from "react"
import { Layers } from "lucide-react"
import { brandIcons } from "../data/brandIcons"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const PG_PATH = brandIcons.PostgreSQL.path
const GITHUB_PATH = brandIcons.GitHub.path
const NOTION_PATH = brandIcons.Notion.path

const DISPLAY_NAMES = {
  "OpenAI GPT-4o": "OpenAI",
}

/** Evenly spaced around a single orbit ellipse, starting at top (PostgreSQL)
 *  and proceeding clockwise. Mirrors left/right for a balanced ring. */
const CHIPS = [
  { name: "PostgreSQL", x: 50, y: 13, size: "large" },
  { name: "React", x: 72, y: 19, size: "medium" },
  { name: "OpenAI GPT-4o", x: 86, y: 35, size: "medium" },
  { name: "GitHub", x: 90, y: 55, size: "medium" },
  { name: "ClickUp", x: 80, y: 74, size: "small" },
  { name: "Notion", x: 61, y: 86, size: "small" },
  { name: "n8n", x: 39, y: 86, size: "small" },
  { name: "Zapier", x: 20, y: 74, size: "small" },
  { name: "JavaScript", x: 10, y: 55, size: "small" },
  { name: "Python", x: 14, y: 35, size: "medium" },
  { name: "FastAPI", x: 28, y: 19, size: "medium" },
]

/** Per-chip padding — tiny differences, not uniform pills */
const CHIP_STYLE = {
  PostgreSQL: { py: 13, px: 20, font: 11.5, icon: 16 },
  FastAPI: { py: 12, px: 17, font: 11, icon: 15 },
  React: { py: 12, px: 18, font: 11, icon: 15 },
  Python: { py: 12, px: 18, font: 11, icon: 15 },
  "OpenAI GPT-4o": { py: 13, px: 20, font: 11, icon: 15 },
  JavaScript: { py: 9, px: 13, font: 10, icon: 14 },
  GitHub: { py: 12, px: 18, font: 11, icon: 15 },
  Zapier: { py: 9, px: 13, font: 10, icon: 14 },
  ClickUp: { py: 9, px: 14, font: 10, icon: 14 },
  n8n: { py: 9, px: 13, font: 10, icon: 14 },
  Notion: { py: 9, px: 13, font: 10, icon: 14 },
}

const customSVGs = {
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="#000000" d={PG_PATH} />
      <path fill="#FFFFFF" d={PG_PATH} transform="translate(12 12) scale(0.93) translate(-12 -12)" />
      <path fill="#336791" d={PG_PATH} transform="translate(12 12) scale(0.86) translate(-12 -12)" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" width="15" height="15" aria-hidden="true">
      <path fill="#3776AB" d="M15.885 2.1c-7.1 0-6.651 3.071-6.651 3.071v3.179h6.752v.954H6.738S2 8.817 2 15.925c0 7.108 4.078 6.854 4.078 6.854h2.427v-3.327s-.139-4.078 4.019-4.078h6.934s3.907.062 3.907-3.778V5.971S23.176 2.1 15.885 2.1zM12.919 4.466a1.058 1.058 0 0 1 1.059 1.058 1.058 1.058 0 0 1-2.117 0 1.058 1.058 0 0 1 1.058-1.058z" />
      <path fill="#FFD43B" d="M16.115 29.9c7.1 0 6.651-3.071 6.651-3.071v-3.179h-6.752v-.954h9.238S30 23.183 30 16.075c0-7.108-4.078-6.854-4.078-6.854h-2.427v3.327s.139 4.078-4.019 4.078h-6.934s-3.907-.062-3.907 3.778v6.496S8.824 29.9 16.115 29.9zm3.966-2.366a1.058 1.058 0 0 1-1.059-1.058 1.058 1.058 0 0 1 2.117 0 1.058 1.058 0 0 1-1.058 1.058z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path fill="#181717" d={GITHUB_PATH} />
    </svg>
  ),
  Notion: (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path fill="#000000" d={NOTION_PATH} />
    </svg>
  ),
  ClickUp: (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <defs>
        <linearGradient id="clickup-upper" x1="2" y1="6" x2="22" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FD71AF" />
          <stop offset="100%" stopColor="#FFAB00" />
        </linearGradient>
        <linearGradient id="clickup-lower" x1="2" y1="21" x2="22" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7B68EE" />
          <stop offset="100%" stopColor="#49CCF9" />
        </linearGradient>
      </defs>
      <path fill="url(#clickup-upper)" d="M12.04 6.15 5.472 11.81 2.436 8.29 12.055 0l9.543 8.296-3.05 3.509z" />
      <path fill="url(#clickup-lower)" d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439z" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path fill="#F7DF1E" d={brandIcons.JavaScript.path} />
    </svg>
  ),
}

function BrandIcon({ name, size = 15 }) {
  if (customSVGs[name]) {
    const svg = customSVGs[name]
    return svg
  }
  const icon = brandIcons[name]
  if (!icon) return null
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={icon.color} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

function ArcGuides({ visible }) {
  return (
    <svg className="arc-guides" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="37"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.28"
        className="arc-guides__arc"
        data-visible={visible ? "true" : "false"}
      />
    </svg>
  )
}

function SkillChip({ name, size }) {
  const label = DISPLAY_NAMES[name] ?? name
  const style = CHIP_STYLE[name] ?? { py: 10, px: 15, font: 10.5, icon: 15 }

  return (
    <div
      className={`skill-chip skill-chip--${size}`}
      style={{
        padding: `${style.py}px ${style.px}px ${style.py}px ${style.px - 3}px`,
        fontSize: `${style.font}px`,
      }}
    >
      <span className="skill-chip__icon">
        <BrandIcon name={name} size={style.icon} />
      </span>
      <span className="skill-chip__label">{label}</span>
    </div>
  )
}

function PlacedChip({ chip, delay, visible }) {
  return (
    <div
      className="skill-placed"
      style={{
        left: `${chip.x}%`,
        top: `${chip.y}%`,
        "--reveal-delay": `${delay}s`,
      }}
      data-visible={visible ? "true" : "false"}
    >
      <SkillChip name={chip.name} size={chip.size} />
    </div>
  )
}

export default function Skills() {
  const fieldRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = fieldRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -4% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  let chipDelay = 0.28

  return (
    <section id="skills" className="s-wrap s-wrap--skills s-wrap--anchor">
      <style>{`
        .constellation-wrap {
          margin-top: clamp(28px, 4vw, 40px);
          padding: 20px 16px;
        }
        .constellation {
          position: relative;
          height: clamp(580px, 56vw, 660px);
          border-radius: var(--radius-lg);
          background: var(--surface-raised);
          box-shadow: var(--shadow-card);
        }
        .constellation__blush {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background:
            radial-gradient(circle 44% at 48% 46%, rgba(15, 118, 110, 0.07) 0%, transparent 70%),
            radial-gradient(circle 40% at 58% 54%, rgba(196, 160, 180, 0.06) 0%, transparent 68%),
            radial-gradient(circle 30% at 50% 50%, rgba(248, 251, 250, 0.55) 0%, transparent 72%);
        }
        .arc-guides {
          position: absolute;
          inset: 3%;
          width: 94%;
          height: 94%;
          color: rgba(15, 23, 42, 0.09);
          pointer-events: none;
          z-index: 1;
        }
        .arc-guides__arc {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .arc-guides__arc[data-visible="true"] { opacity: 1; }

        .center-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) translateY(8px);
          width: clamp(168px, 22vw, 195px);
          height: clamp(168px, 22vw, 195px);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 28px 24px;
          box-sizing: border-box;
          background: #FFFFFF;
          border: 1.5px solid rgba(15, 118, 110, 0.12);
          box-shadow:
            0 1px 2px rgba(15, 23, 42, 0.04),
            0 10px 28px rgba(15, 23, 42, 0.07),
            0 28px 56px rgba(15, 23, 42, 0.04);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .constellation--visible .center-node {
          opacity: 1;
          transform: translate(-50%, -50%) translateY(0);
        }
        .center-node__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          color: var(--accent);
        }
        .center-title {
          font-family: var(--font-display);
          font-size: var(--type-card-title);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .center-words {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: center;
        }
        .center-words span {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted2);
          line-height: 1;
        }

        .skill-placed {
          position: absolute;
          transform: translate(-50%, -50%) translateY(4px);
          z-index: 4;
          opacity: 0;
          transition: opacity 0.38s ease var(--reveal-delay, 0.28s),
                      transform 0.38s ease var(--reveal-delay, 0.28s);
        }
        .skill-placed[data-visible="true"] {
          opacity: 1;
          transform: translate(-50%, -50%) translateY(0);
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-radius: 999px;
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .skill-chip:hover {
          transform: translateY(-1px);
          border-color: rgba(15, 118, 110, 0.16);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.07), 0 6px 16px rgba(15, 23, 42, 0.04);
        }
        .skill-chip--large {
          box-shadow: 0 2px 4px rgba(15, 23, 42, 0.06), 0 6px 18px rgba(15, 23, 42, 0.04);
        }
        .skill-chip__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          opacity: 0.84;
          transition: opacity 0.2s ease;
        }
        .skill-chip:hover .skill-chip__icon { opacity: 1; }
        .skill-chip__label {
          font-family: var(--font-sans);
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--text);
        }

        @media (max-width: 768px) {
          .constellation-wrap {
            margin-top: clamp(20px, 5vw, 28px);
            padding: 0;
          }
          .constellation {
            height: clamp(520px, 128vw, 600px);
            overflow: clip;
            border-radius: var(--radius-md);
          }
          .center-node {
            width: 148px;
            height: 148px;
            padding: 20px 16px;
          }
          .center-title { font-size: var(--type-card-title); }
          .center-words span { font-size: 10px; }
          .skill-placed .skill-chip {
            transform: scale(0.9);
          }
          .skill-chip:hover {
            transform: scale(0.9);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .center-node, .skill-placed, .arc-guides__arc {
            transition: none;
            opacity: 1;
          }
          .skill-placed { transform: translate(-50%, -50%); }
          .constellation--visible .center-node { transform: translate(-50%, -50%); }
          .skill-chip { transition: none; }
          .skill-chip:hover { transform: none; }
        }
      `}</style>

      <SectionLayout index="03">
        <SectionHeader
          eyebrow="Tech stack"
          title="Skills & Technologies"
          description="Software, automation workflows, and infrastructure that scale operationally."
        />
        <div className="constellation-wrap">
          <div
            ref={fieldRef}
            className={`constellation${visible ? " constellation--visible" : ""}`}
          >
            <div className="constellation__blush" aria-hidden="true" />
            <ArcGuides visible={visible} />
            <div className="center-node">
              <div className="center-node__icon">
                <Layers size={21} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div className="center-title">Operational<br />Infrastructure</div>
              <div className="center-words" aria-label="Build, automate, scale">
                <span>Build</span>
                <span>Automate</span>
                <span>Scale</span>
              </div>
            </div>
            {CHIPS.map(chip => {
              const delay = chipDelay
              chipDelay += 0.03
              return (
                <PlacedChip key={chip.name} chip={chip} delay={delay} visible={visible} />
              )
            })}
          </div>
        </div>
      </SectionLayout>
    </section>
  )
}