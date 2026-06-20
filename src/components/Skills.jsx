import { brandIcons } from "../data/brandIcons"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

// Clockwise from 12 o'clock — same order is used to compute both the
// desktop and mobile ring, so the rotation always reads top -> right ->
// bottom -> left regardless of viewport.
const SKILLS = [
  "PostgreSQL",
  "React",
  "OpenAI GPT-4o",
  "GitHub",
  "ClickUp",
  "Notion",
  "n8n",
  "Zapier",
  "JavaScript",
  "Python",
  "FastAPI",
]

// rx/ry are radii expressed as a % of the constellation box's own
// width/height. Desktop's box is short+wide, mobile's is tall+narrow, so
// each gets its own radius pair — but both are generated from the same
// formula, which is what keeps every node clear of the center circle and
// inside the box edges at any screen size, instead of relying on hand
// -tuned x/y pairs that broke as soon as content or viewport changed.
const RADIUS = {
  desktop: { rx: 38, ry: 40 },
  mobile: { rx: 36, ry: 38 },
}

function ringPosition(index, total, rx, ry) {
  const angle = ((-90 + (360 / total) * index) * Math.PI) / 180
  return {
    x: 50 + rx * Math.cos(angle),
    y: 50 + ry * Math.sin(angle),
  }
}

const customSVGs = {
  "Anthropic Claude": (
    <svg viewBox="0 0 24 24" width="22" height="22">
      <g fill="#cc785c" transform="translate(12 12)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <rect
            key={a}
            x="-1.2"
            y="-9"
            width="2.4"
            height="7.5"
            rx="1.2"
            transform={`rotate(${a})`}
          />
        ))}
      </g>
    </svg>
  ),
}

function BrandIcon({ name }) {
  if (customSVGs[name]) return customSVGs[name]

  const icon = brandIcons[name]

  if (!icon) {
    return (
      <span style={{ fontSize: "18px", color: "var(--accent)" }}>
        ✦
      </span>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={icon.color}
      style={{
        filter: "drop-shadow(0 0 10px rgba(255,255,255,.18))",
      }}
    >
      <path d={icon.path} />
    </svg>
  )
}

// No hover state needed — scale-on-hover and the z-index bump are both
// pure CSS (:hover), kept deliberately separate from the floating
// keyframe animation below so the two never fight over the `transform`
// property on the same element.
function SkillNode({ name, index, x, y }) {
  const floatStyle = {
    animationDelay: `${(index * 0.37) % 3}s`,
    animationDuration: `${4.2 + (index % 3) * 0.5}s`,
  }

  return (
    <div
      className="skill-node"
      data-i={index}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="skill-node-float" style={floatStyle}>
        <div className="skill-node-icon">
          <BrandIcon name={name} />
        </div>

        <span className="skill-node-label">
          {name}
        </span>
      </div>
    </div>
  )
}

export default function Skills() {
  const total = SKILLS.length

  const desktopPos = SKILLS.map((_, i) =>
    ringPosition(i, total, RADIUS.desktop.rx, RADIUS.desktop.ry)
  )
  const mobilePos = SKILLS.map((_, i) =>
    ringPosition(i, total, RADIUS.mobile.rx, RADIUS.mobile.ry)
  )

  const mobileOverrides = mobilePos
    .map(
      (p, i) =>
        `.skill-node[data-i="${i}"] { left: ${p.x.toFixed(2)}%; top: ${p.y.toFixed(2)}%; }`
    )
    .join("\n          ")

  return (
    <section id="skills" className="s-wrap">
      <style>{`
        .constellation {
          position: relative;
          height: 680px;
          margin-top: 40px;
          border-radius: 26px;
          overflow: hidden;

          border: 1px solid rgba(255,255,255,0.08);

          /* GRAPHITE GLASS (replaces brown glow) */
          background:
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.04),
              rgba(255,255,255,0.015) 55%,
              transparent 100%
            );

          backdrop-filter: blur(14px);
        }

        /* subtle grid but cleaner */
        .constellation::before {
          content:"";
          position:absolute;
          inset:0;
          background-image:
            radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px);
          background-size:42px 42px;
          opacity:0.25;
        }

        /* soft neutral halo (NOT brown) */
        .constellation::after {
          content:"";
          position:absolute;
          inset:-40%;
          background:
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.06),
              transparent 60%
            );
          opacity:0.4;
          pointer-events:none;
        }

        .center-node {
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);

          width:210px;
          height:210px;
          border-radius:50%;

          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          padding:16px;
          box-sizing:border-box;

          border: 1px solid rgba(255,255,255,0.10);

          background:
            radial-gradient(
              circle,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.02) 70%,
              transparent 100%
            );

          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.05),
            0 0 40px rgba(255,255,255,0.04);

          z-index: 2;
        }

        .center-title {
          font-family:"Instrument Serif", serif;
          font-size:30px;
          line-height:1.05;
          color:var(--cream);
          letter-spacing:-0.03em;
        }

        .center-copy {
          margin-top:12px;
          max-width:170px;

          font-size:10px;
          line-height:1.65;
          color:var(--muted);

          text-transform:uppercase;
          letter-spacing:0.09em;
        }

        .skill-node {
          position:absolute;
          width:76px;
          transform:translate(-50%, -50%);
        }

        .skill-node:hover {
          z-index:5;
        }

        .skill-node-float {
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:8px;

          animation-name: skillFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        @keyframes skillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-node-float {
            animation: none;
          }
        }

        .skill-node-icon {
          width:50px;
          height:50px;
          flex-shrink:0;

          display:flex;
          align-items:center;
          justify-content:center;

          border-radius:14px;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.10),
              rgba(255,255,255,0.04)
            );

          border:1px solid rgba(255,255,255,0.14);

          box-shadow:
            0 0 18px rgba(255,255,255,0.08),
            0 0 40px rgba(255,255,255,0.05);

          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .skill-node:hover .skill-node-icon {
          transform: scale(1.12);
          border-color: rgba(255,255,255,0.26);
          box-shadow:
            0 0 22px rgba(255,255,255,0.14),
            0 0 46px rgba(255,255,255,0.08);
        }

        .skill-node-label {
          display:block;
          width:100%;
          text-align:center;
          white-space:normal;

          font-size:10px;
          line-height:1.3;
          color:var(--cream);
          letter-spacing:0.07em;
          font-family:"Geist Mono","Courier New",monospace;
        }

        @media (max-width:768px) {
          .constellation {
            height:760px;
          }

          .center-node {
            width:150px;
            height:150px;
            padding:12px;
          }

          .center-title {
            font-size:19px;
          }

          .center-copy {
            margin-top:8px;
            max-width:120px;
            font-size:8.5px;
            line-height:1.5;
            letter-spacing:0.06em;
          }

          .skill-node {
            width:64px;
          }

          .skill-node-float {
            gap:5px;
          }

          .skill-node-icon {
            width:34px;
            height:34px;
            border-radius:10px;
          }

          .skill-node-label {
            font-size:8.5px;
          }

          /* Same ring formula, recalculated for a tall+narrow box instead
             of a short+wide one — this is what actually fixes the n8n /
             center-circle overlap and the lopsided text-wrapping seen on
             mobile, rather than reusing the desktop coordinates as-is. */
          ${mobileOverrides}
        }
      `}</style>

      <SectionLayout index="04">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills"
          description="Engineering systems, automation workflows, and infrastructure that scale operationally."
        />

        <div className="constellation">

          <div className="center-node">
            <div className="center-title">
              Operational<br />
              Infrastructure
            </div>

            <div className="center-copy">
              Software systems, automations, and workflows that reduce manual work and keep teams moving.
            </div>
          </div>

          {SKILLS.map((name, i) => (
            <SkillNode
              key={name}
              name={name}
              index={i}
              x={desktopPos[i].x}
              y={desktopPos[i].y}
            />
          ))}

        </div>
      </SectionLayout>
    </section>
  )
}