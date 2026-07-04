import { brandIcons } from "../data/brandIcons"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const SKILLS = [
  "PostgreSQL", "React", "OpenAI GPT-4o", "GitHub", "ClickUp", "Notion",
  "n8n", "Zapier", "JavaScript", "Python", "FastAPI",
]

const RADIUS = {
  desktop: { rx: 37, ry: 39 },
  mobile: { rx: 35, ry: 37 },
}

function ringPosition(index, total, rx, ry) {
  const angle = ((-90 + (360 / total) * index) * Math.PI) / 180
  return { x: 50 + rx * Math.cos(angle), y: 50 + ry * Math.sin(angle) }
}

const PG_PATH = brandIcons.PostgreSQL.path
const GITHUB_PATH = brandIcons.GitHub.path
const NOTION_PATH = brandIcons.Notion.path

const customSVGs = {
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path fill="#000000" d={PG_PATH} />
      <path fill="#FFFFFF" d={PG_PATH} transform="translate(12 12) scale(0.93) translate(-12 -12)" />
      <path fill="#336791" d={PG_PATH} transform="translate(12 12) scale(0.86) translate(-12 -12)" />
    </svg>
  ),

  Python: (
    <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
      <path fill="#3776AB" d="M15.885 2.1c-7.1 0-6.651 3.071-6.651 3.071v3.179h6.752v.954H6.738S2 8.817 2 15.925c0 7.108 4.078 6.854 4.078 6.854h2.427v-3.327s-.139-4.078 4.019-4.078h6.934s3.907.062 3.907-3.778V5.971S23.176 2.1 15.885 2.1zM12.919 4.466a1.058 1.058 0 0 1 1.059 1.058 1.058 1.058 0 0 1-2.117 0 1.058 1.058 0 0 1 1.058-1.058z" />
      <path fill="#FFD43B" d="M16.115 29.9c7.1 0 6.651-3.071 6.651-3.071v-3.179h-6.752v-.954h9.238S30 23.183 30 16.075c0-7.108-4.078-6.854-4.078-6.854h-2.427v3.327s.139 4.078-4.019 4.078h-6.934s-3.907-.062-3.907 3.778v6.496S8.824 29.9 16.115 29.9zm3.966-2.366a1.058 1.058 0 0 1-1.059-1.058 1.058 1.058 0 0 1 2.117 0 1.058 1.058 0 0 1-1.058 1.058z" />
    </svg>
  ),

  GitHub: (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path fill="#181717" d={GITHUB_PATH} />
    </svg>
  ),

  Notion: (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path fill="#000000" d={NOTION_PATH} />
    </svg>
  ),

  ClickUp: (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <defs>
        <linearGradient id="cu-top" x1="2" y1="0" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF8989" />
          <stop offset="55%" stopColor="#FF7A59" />
          <stop offset="100%" stopColor="#FF4F00" />
        </linearGradient>
        <linearGradient id="cu-bottom" x1="2" y1="14" x2="22" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7B68EE" />
          <stop offset="50%" stopColor="#6B5CE7" />
          <stop offset="100%" stopColor="#49CCF9" />
        </linearGradient>
      </defs>
      <path fill="url(#cu-top)" d="M12.04 6.15 5.472 11.81 2.436 8.29 12.055 0l9.543 8.296-3.05 3.509z" />
      <path fill="url(#cu-bottom)" d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439z" />
    </svg>
  ),

  JavaScript: (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path fill="#F7DF1E" d={brandIcons.JavaScript.path} />
    </svg>
  ),
}

function BrandIcon({ name }) {
  if (customSVGs[name]) return customSVGs[name]
  const icon = brandIcons[name]
  if (!icon) return <span style={{ fontSize: "16px", color: "var(--accent)" }}>✦</span>
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill={icon.color} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

function SkillNode({ name, index, x, y }) {
  return (
    <div className="skill-node" data-i={index} style={{ left: `${x}%`, top: `${y}%` }}>
      <div className="skill-node-float" style={{
        animationDelay: `${(index * 0.37) % 3}s`,
        animationDuration: `${5 + (index % 3) * 0.6}s`,
      }}>
        <div className="skill-node-icon"><BrandIcon name={name} /></div>
        <span className="skill-node-label">{name}</span>
      </div>
    </div>
  )
}

export default function Skills() {
  const total = SKILLS.length
  const desktopPos = SKILLS.map((_, i) => ringPosition(i, total, RADIUS.desktop.rx, RADIUS.desktop.ry))
  const mobilePos = SKILLS.map((_, i) => ringPosition(i, total, RADIUS.mobile.rx, RADIUS.mobile.ry))
  const mobileOverrides = mobilePos
    .map((p, i) => `.skill-node[data-i="${i}"] { left: ${p.x.toFixed(2)}%; top: ${p.y.toFixed(2)}%; }`)
    .join("\n          ")

  return (
    <section id="skills" className="s-wrap s-wrap--skills">
      <style>{`
        .constellation {
          position: relative;
          height: clamp(600px, 64vw, 680px);
          margin-top: clamp(32px, 5vw, 48px);
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: none;
          background: var(--surface-raised);
          box-shadow: var(--shadow-card);
        }
        .center-node {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: clamp(168px, 22vw, 210px); height: clamp(168px, 22vw, 210px);
          border-radius: 50%; display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          padding: 20px; box-sizing: border-box;
          border: 1px solid rgba(20, 184, 166, 0.14);
          background: linear-gradient(160deg, #FFFFFF 0%, #F8FAFB 100%);
          box-shadow:
            0 4px 12px rgba(15, 23, 42, 0.04),
            0 12px 32px rgba(15, 23, 42, 0.05),
            0 0 0 1px rgba(255, 255, 255, 0.8) inset,
            0 0 28px rgba(20, 184, 166, 0.1);
          z-index: 2;
        }
        .center-node::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: radial-gradient(circle, transparent 58%, rgba(20, 184, 166, 0.07) 72%, rgba(20, 184, 166, 0.14) 100%);
          z-index: -1;
          pointer-events: none;
        }
        .center-title {
          font-family: var(--font-display); font-size: clamp(21px, 2.6vw, 26px);
          font-weight: 700;
          line-height: 1.15; color: var(--text); letter-spacing: -0.02em;
        }
        .center-copy {
          margin-top: 12px; max-width: 170px;
          font-family: var(--font-mono); font-size: 9px; line-height: 1.65;
          color: var(--muted2); text-transform: uppercase; letter-spacing: 0.07em;
        }
        .skill-node { position: absolute; width: 76px; transform: translate(-50%, -50%); }
        .skill-node-float {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          animation-name: skillFloat; animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes skillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @media (prefers-reduced-motion: reduce) { .skill-node-float { animation: none; } }
        .skill-node-icon {
          width: 48px; height: 48px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border-radius: var(--radius-md);
          background: var(--surface-raised);
          box-shadow: var(--shadow-sm);
        }
        .skill-node-label {
          display: block; width: 100%; text-align: center; white-space: normal;
          font-family: var(--font-mono); font-size: 9px; font-weight: 500;
          line-height: 1.35; color: var(--muted); letter-spacing: 0.04em;
        }
        @media (max-width: 768px) {
          .constellation { height: clamp(660px, 132vw, 760px); margin-top: 28px; }
          .center-node { width: 148px; height: 148px; padding: 14px; }
          .center-title { font-size: 18px; }
          .center-copy { margin-top: 8px; max-width: 120px; font-size: 8px; }
          .skill-node { width: 64px; }
          .skill-node-icon { width: 40px; height: 40px; }
          .skill-node-icon svg { width: 20px; height: 20px; }
          .skill-node-label { font-size: 8px; }
          ${mobileOverrides}
        }
      `}</style>

      <SectionLayout index="04">
        <SectionHeader eyebrow="Tech Stack" title="Skills" description="Software, automation workflows, and infrastructure that scale operationally." />
        <div className="constellation">
          <div className="center-node">
            <div className="center-title">Operational<br />Infrastructure</div>
            <div className="center-copy">Systems, automations, and workflows that reduce manual work.</div>
          </div>
          {SKILLS.map((name, i) => (
            <SkillNode key={name} name={name} index={i} x={desktopPos[i].x} y={desktopPos[i].y} />
          ))}
        </div>
      </SectionLayout>
    </section>
  )
}
