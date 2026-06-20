import { useState } from "react"
import heroPortrait from "../assets/hero-portrait.png"

const LINKS = {
  linkedin: "https://www.linkedin.com/in/lydiakhasoa/",
  github:   "https://github.com/Khasoa",
  email:    "khasoalydia@gmail.com",
}

function Rail({ labels, side, linkMap, className = "" }) {
  return (
    <aside
      className={`hero-rail hero-rail--${side} ${className}`.trim()}
      aria-hidden={!linkMap}
    >
      <div className="hero-rail__track">
        <div className="hero-rail__line" />
        <div className="hero-rail__dot" />
      </div>
      <div className="hero-rail__labels">
        {labels.map(label => {
          const href = linkMap?.[label]
          const text = `<${label} />`
          const style = {
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: side === "left" ? "rotate(180deg)" : "none",
          }
          if (href) {
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                className="hero-rail__label hero-rail__label--link"
                style={style}
              >{text}</a>
            )
          }
          return (
            <span key={label} className="hero-rail__label" style={style}>{text}</span>
          )
        })}
      </div>
    </aside>
  )
}

function MobileRailGroup({ labels, linkMap }) {
  return (
    <div className="hero-mobile-rail">
      <div className="hero-mobile-rail__track">
        <div className="hero-mobile-rail__line" />
        <div className="hero-mobile-rail__dot" />
      </div>
      <div className="hero-mobile-rail__labels">
        {labels.map(label => {
          const href = linkMap?.[label]
          const text = `<${label} />`
          if (href) {
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                className="hero-rail__label hero-rail__label--link"
              >{text}</a>
            )
          }
          return <span key={label} className="hero-rail__label">{text}</span>
        })}
      </div>
    </div>
  )
}

export default function Hero() {
  const [hPrimary, setHPrimary] = useState(false)
  const [hSecondary, setHSecondary] = useState(false)

  return (
    <>
      <style>{`
        @keyframes heroDotGlow {
          0%, 100% {
            box-shadow:
              0 0 0 1px rgba(215, 155, 125, 0.18),
              0 0 8px 2px rgba(215, 155, 125, 0.22),
              0 0 18px 4px rgba(215, 155, 125, 0.08);
            opacity: 0.88;
          }
          50% {
            box-shadow:
              0 0 0 2px rgba(215, 155, 125, 0.35),
              0 0 14px 4px rgba(215, 155, 125, 0.45),
              0 0 32px 10px rgba(215, 155, 125, 0.18),
              0 0 48px 16px rgba(215, 155, 125, 0.06);
            opacity: 1;
          }
        }
        @keyframes heroPortraitIn {
          from { opacity: 0; transform: scale(1.015); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          width: 100%;
          padding: 28px clamp(24px, 4vw, 64px) 48px;
          position: relative;
        }

        .hero-rail {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-top: 2vh;
          padding-bottom: 4vh;
          width: clamp(72px, 8vw, 110px);
          flex-shrink: 0;
          align-self: stretch;
        }
        .hero-rail--left  { justify-content: flex-end; }
        .hero-rail--right { justify-content: flex-start; }

        .hero-rail__track {
          position: relative;
          align-self: stretch;
          width: 1px;
          flex-shrink: 0;
        }
        .hero-rail__line {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255,255,255,0.12) 12%,
            rgba(255,255,255,0.12) 88%,
            transparent 100%
          );
        }
        .hero-rail__dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          animation: heroDotGlow 3.5s ease-in-out infinite;
        }
        .hero-rail--right .hero-rail__dot {
          animation-delay: 1.75s;
        }

        .hero-rail__labels {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 28px;
          opacity: 0.58;
        }
        .hero-rail__label {
          font-family: "Geist Mono", "Courier New", monospace;
          font-size: 13px;
          letter-spacing: 0.05em;
          color: var(--muted);
          white-space: nowrap;
          user-select: none;
        }
        .hero-rail__label--link {
          text-decoration: none;
          transition: color 0.2s, opacity 0.2s;
        }
        .hero-rail__label--link:hover {
          color: var(--accent);
          opacity: 1;
        }

        .hero-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 clamp(16px, 3vw, 40px);
          max-width: 760px;
          margin: 0 auto;
        }

        .hero-title {
          animation: heroFadeUp 0.9s ease 0.05s both;
        }
        .hero-role {
          animation: heroFadeUp 0.9s ease 0.15s both;
        }
        .hero-copy {
          animation: heroFadeUp 0.9s ease 0.35s both;
        }
        .hero-actions {
          animation: heroFadeUp 0.9s ease 0.45s both;
          margin-top: 56px;
          padding-top: 8px;
        }
        .hero-portrait-wrap {
          position: relative;
          width: min(100%, 560px);
          height: clamp(260px, 42vh, 440px);
          margin: 18px auto 14px;
          pointer-events: none;
          animation: heroPortraitIn 1.4s ease 0.25s both;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.05) 4%,
            rgba(0,0,0,0.98) 16%,
            rgba(0,0,0,0.98) 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.05) 4%,
            rgba(0,0,0,0.98) 16%,
            rgba(0,0,0,0.98) 94%,
            transparent 100%
          );
        }
        .hero-portrait-wrap::after {
          content: "";
          position: absolute;
          inset: -4px -10px -16px;
          background: radial-gradient(
            ellipse 92% 88% at 50% 38%,
            transparent 66%,
            var(--bg) 100%
          );
          pointer-events: none;
        }
        .hero-portrait {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 22%;
          filter: grayscale(100%) brightness(1.06);
          opacity: 0.68;
        }

        .hero-rails-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            align-items: center;
            padding: 20px 24px 40px;
          }
          .hero-rail--desktop {
            display: none !important;
          }
          .hero-rails-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            width: 100%;
            margin-top: 48px;
          }
          .hero-mobile-rail {
            width: 100%;
            max-width: 520px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .hero-mobile-rail__track {
            position: relative;
            width: min(140px, 38vw);
            height: 1px;
          }
          .hero-mobile-rail__line {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(255,255,255,0.14) 22%,
              rgba(255,255,255,0.14) 78%,
              transparent 100%
            );
          }
          .hero-mobile-rail__dot {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent);
            animation: heroDotGlow 3.5s ease-in-out infinite;
          }
          .hero-mobile-rail:last-child .hero-mobile-rail__dot {
            animation-delay: 1.75s;
          }
          .hero-mobile-rail__labels {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 12px 20px;
            width: 100%;
            opacity: 0.58;
          }
          .hero-mobile-rail__labels .hero-rail__label {
            font-size: 12px;
          }
          .hero-portrait-wrap {
            height: clamp(240px, 48vw, 360px);
            width: min(100%, 440px);
            margin: 14px auto 12px;
          }
          .hero-actions {
            margin-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .hero-name { font-size: clamp(42px, 12vw, 52px) !important; letter-spacing: -0.04em !important; }
          .hero-actions { flex-direction: column; width: 100%; max-width: 280px; }
          .hero-actions a { width: 100%; text-align: center; }
        }
      `}</style>

      <section id="hero" className="hero">

        <Rail
          className="hero-rail--desktop"
          side="left"
          labels={["linkedin", "github", "email"]}
          linkMap={LINKS}
        />

        <div className="hero-center">
          <h1
            className="hero-title hero-name"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(52px, 6.5vw, 88px)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: "12px",
            }}
          >
            Lydia K<span style={{ color: "var(--accent)" }}>.</span>
          </h1>

          <div
            className="hero-role"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <p style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--cream)",
            }}>
              Software Engineer
            </p>
            <p style={{
              fontSize: "clamp(13px, 1.4vw, 15px)",
              fontWeight: 300,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}>
              Systems &amp; Automation
            </p>
          </div>

          <div className="hero-portrait-wrap">
            <img
              src={heroPortrait}
              alt=""
              className="hero-portrait"
              draggable={false}
            />
          </div>

          <p
            className="hero-copy"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: "600px",
              marginBottom: "20px",
            }}
          >
            Building systems that cut manual work, reduce operational
            friction, and scale without adding headcount.
          </p>

          <div
            className="hero-actions"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
          >
            <a
              href="#projects"
              onMouseEnter={() => setHPrimary(true)}
              onMouseLeave={() => setHPrimary(false)}
              style={{
                fontFamily: "'Geist', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 32px",
                background: hPrimary ? "var(--accent-hover)" : "var(--accent-lit)",
                border: "1px solid var(--accent-lit)",
                color: "var(--on-accent)",
                transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                boxShadow: hPrimary ? "0 4px 20px rgba(232,181,154,0.18)" : "0 2px 12px rgba(232,181,154,0.12)",
              }}
            >
              View Projects
            </a>
            <a
              href="https://calendly.com/khasoalydia/30min"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHSecondary(true)}
              onMouseLeave={() => setHSecondary(false)}
              style={{
                fontFamily: "'Geist', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 32px",
                background: hSecondary ? "var(--accent-dim)" : "transparent",
                border: `1px solid ${hSecondary ? "var(--accent)" : "var(--input-border)"}`,
                color: hSecondary ? "var(--accent)" : "var(--cream)",
                transition: "background 0.2s, border-color 0.2s, color 0.2s",
              }}
            >
              Book a Call
            </a>
          </div>

          <div className="hero-rails-mobile" aria-label="Links and roles">
            <MobileRailGroup
              labels={["linkedin", "github", "email"]}
              linkMap={LINKS}
            />
            <MobileRailGroup
              labels={["software_engineer", "systems_automation", "backend_engineer"]}
            />
          </div>
        </div>

        <Rail
          className="hero-rail--desktop"
          side="right"
          labels={["software_engineer", "systems_automation", "backend_engineer"]}
        />

      </section>
    </>
  )
}
