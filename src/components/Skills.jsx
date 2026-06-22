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

const PG_PATH = "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z"

const customSVGs = {
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      {/* Official Slonik: black outer → white inner → blue head (#336791) */}
      <path fill="#1C1C1C" d={PG_PATH} />
      <path fill="#FFFFFF" d={PG_PATH} transform="translate(12 12) scale(0.93) translate(-12 -12)" />
      <path fill="#336791" d={PG_PATH} transform="translate(12 12) scale(0.86) translate(-12 -12)" />
    </svg>
  ),

  Python: (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
      <path fill="#3776AB" d="M15.885 2.1c-7.1 0-6.651 3.071-6.651 3.071v3.179h6.752v.954H6.738S2 8.817 2 15.925c0 7.108 4.078 6.854 4.078 6.854h2.427v-3.327s-.139-4.078 4.019-4.078h6.934s3.907.062 3.907-3.778V5.971S23.176 2.1 15.885 2.1zM12.919 4.466a1.058 1.058 0 0 1 1.059 1.058 1.058 1.058 0 0 1-2.117 0 1.058 1.058 0 0 1 1.058-1.058z" />
      <path fill="#FFD43B" d="M16.115 29.9c7.1 0 6.651-3.071 6.651-3.071v-3.179h-6.752v-.954h9.238S30 23.183 30 16.075c0-7.108-4.078-6.854-4.078-6.854h-2.427v3.327s.139 4.078-4.019 4.078h-6.934s-3.907-.062-3.907 3.778v6.496S8.824 29.9 16.115 29.9zm3.966-2.366a1.058 1.058 0 0 1-1.059-1.058 1.058 1.058 0 0 1 2.117 0 1.058 1.058 0 0 1-1.058 1.058z" />
    </svg>
  ),

  ClickUp: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
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

  "Anthropic Claude": (
    <svg viewBox="0 0 24 24" width="22" height="22">
      <g fill="#cc785c" transform="translate(12 12)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
          <rect key={a} x="-1.2" y="-9" width="2.4" height="7.5" rx="1.2" transform={`rotate(${a})`} />
        ))}
      </g>
    </svg>
  ),
}

function BrandIcon({ name }) {
  if (customSVGs[name]) return customSVGs[name]
  const icon = brandIcons[name]
  if (!icon) return <span style={{ fontSize: "16px", color: "var(--accent)" }}>✦</span>
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={icon.color}>
      <path d={icon.path} />
    </svg>
  )
}

function SkillNode({ name, index, x, y }) {
  return (
    <div className="skill-node" data-i={index} style={{ left: `${x}%`, top: `${y}%` }}>
      <div className="skill-node-float" style={{
        animationDelay: `${(index * 0.37) % 3}s`,
        animationDuration: `${4.2 + (index % 3) * 0.5}s`,
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
    <section id="skills" className="s-wrap">
      <style>{`
        .constellation {
          position: relative;
          height: clamp(580px, 62vw, 640px);
          margin-top: clamp(24px, 4vw, 36px);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          background:
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.03), transparent 70%),
            var(--surface);
          box-shadow: var(--shadow-sm);
        }
        .constellation::before {
          content: "";
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px; opacity: 0.2; pointer-events: none;
        }
        .center-node {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: clamp(160px, 22vw, 200px); height: clamp(160px, 22vw, 200px);
          border-radius: 50%; display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          padding: 16px; box-sizing: border-box;
          border: 1px solid var(--border2);
          background: linear-gradient(180deg, var(--surface-raised), var(--surface));
          box-shadow: var(--shadow-md); z-index: 2;
        }
        .center-title {
          font-family: var(--font-serif); font-size: clamp(22px, 2.8vw, 28px);
          line-height: 1.1; color: var(--cream); letter-spacing: -0.02em;
        }
        .center-copy {
          margin-top: 10px; max-width: 160px;
          font-family: var(--font-mono); font-size: 9px; line-height: 1.6;
          color: var(--muted2); text-transform: uppercase; letter-spacing: 0.08em;
        }
        .skill-node { position: absolute; width: 72px; transform: translate(-50%, -50%); }
        .skill-node:hover { z-index: 5; }
        .skill-node-float {
          display: flex; flex-direction: column; align-items: center; gap: 7px;
          animation-name: skillFloat; animation-timing-function: ease-in-out;
          animation-iteration-count: infinite; will-change: transform;
        }
        @keyframes skillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @media (prefers-reduced-motion: reduce) { .skill-node-float { animation: none; } }
        .skill-node-icon {
          width: 46px; height: 46px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border-radius: var(--radius-md);
          background: var(--surface-raised); border: 1px solid var(--border2);
          box-shadow: var(--shadow-sm);
          transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }
        .skill-node:hover .skill-node-icon {
          transform: scale(1.08); border-color: var(--accent-mid); box-shadow: var(--shadow-md);
        }
        .skill-node-label {
          display: block; width: 100%; text-align: center; white-space: normal;
          font-family: var(--font-mono); font-size: 9px; line-height: 1.35;
          color: var(--muted); letter-spacing: 0.05em;
        }
        .skill-node:hover .skill-node-label { color: var(--cream); }
        @media (max-width: 768px) {
          .constellation { height: clamp(640px, 130vw, 720px); }
          .center-node { width: 140px; height: 140px; padding: 12px; }
          .center-title { font-size: 19px; }
          .center-copy { margin-top: 8px; max-width: 110px; font-size: 8px; }
          .skill-node { width: 60px; }
          .skill-node-float { gap: 5px; }
          .skill-node-icon { width: 36px; height: 36px; border-radius: 10px; }
          .skill-node-label { font-size: 8px; }
          ${mobileOverrides}
        }
      `}</style>

      <SectionLayout index="04">
        <SectionHeader eyebrow="Tech Stack" title="Skills" description="Software, automation workflows, and infrastructure that scale operationally." />
        <div className="constellation">
          <div className="center-node">
            <div className="center-title">Operational<br />Infrastructure</div>
            <div className="center-copy">Software systems, automations, and workflows that reduce manual work and keep teams moving.</div>
          </div>
          {SKILLS.map((name, i) => (
            <SkillNode key={name} name={name} index={i} x={desktopPos[i].x} y={desktopPos[i].y} />
          ))}
        </div>
      </SectionLayout>
    </section>
  )
}
