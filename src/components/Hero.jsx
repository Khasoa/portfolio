import heroPortrait from "../assets/hero-portrait.png"

const LINKS = {
  linkedin: "https://www.linkedin.com/in/lydiakhasoa/",
  github:   "https://github.com/Khasoa",
}

function Rail({ labels, side, linkMap, className = "" }) {
  return (
    <aside className={`hero-rail hero-rail--${side} ${className}`.trim()} aria-hidden={!linkMap}>
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
              <a key={label} href={href}
                target="_blank"
                rel="noreferrer"
                className="hero-rail__label hero-rail__label--link"
                style={style}
              >{text}</a>
            )
          }
          return <span key={label} className="hero-rail__label" style={style}>{text}</span>
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
              <a key={label} href={href}
                target="_blank"
                rel="noreferrer"
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
  return (
    <>
      <style>{`
        @keyframes heroDotGlow {
          0%, 100% {
            box-shadow:
              0 0 0 3px rgba(20, 184, 166, 0.14),
              0 0 10px 3px rgba(20, 184, 166, 0.24);
            opacity: 0.92;
          }
          50% {
            box-shadow:
              0 0 0 5px rgba(20, 184, 166, 0.22),
              0 0 16px 5px rgba(20, 184, 166, 0.32);
            opacity: 1;
          }
        }
        @keyframes heroPortraitIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero {
          min-height: calc(100vh - 56px);
          min-height: calc(100dvh - 56px);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          padding: 0 var(--section-x) clamp(28px, 4vw, 40px);
          position: relative;
          overflow: visible;
        }
        .hero-deco {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }
        .hero-deco--arc {
          top: 14%;
          right: 5%;
          width: clamp(110px, 16vw, 180px);
          height: clamp(110px, 16vw, 180px);
          border: 1px solid rgba(15, 23, 42, 0.05);
          border-radius: 50%;
          border-bottom-color: transparent;
          border-left-color: transparent;
          transform: rotate(-30deg);
        }
        .hero-deco--arc2 {
          bottom: 22%;
          left: 3%;
          width: clamp(70px, 10vw, 120px);
          height: clamp(70px, 10vw, 120px);
          border: 1px solid rgba(15, 23, 42, 0.04);
          border-radius: 50%;
          border-top-color: transparent;
          border-right-color: transparent;
          transform: rotate(20deg);
        }
        .hero-rail {
          display: flex; align-items: center; gap: 16px;
          padding-top: 0; padding-bottom: 2vh;
          width: clamp(56px, 6vw, 88px); flex-shrink: 0; align-self: stretch;
          position: relative; z-index: 2;
        }
        .hero-rail--left { justify-content: flex-end; }
        .hero-rail--right { justify-content: flex-start; }
        .hero-rail__track { position: relative; align-self: stretch; width: 1px; flex-shrink: 0; }
        .hero-rail__line {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(15,23,42,0.07) 14%, rgba(15,23,42,0.07) 86%, transparent 100%);
        }
        .hero-rail__dot {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 9px; height: 9px; border-radius: 50%;
          background: var(--accent-lit);
          animation: heroDotGlow 4.5s ease-in-out infinite;
        }
        .hero-rail--right .hero-rail__dot { animation-delay: 2.2s; }
        .hero-rail__labels { display: flex; flex-direction: column; justify-content: center; gap: 28px; }
        .hero-rail__label {
          font-family: var(--font-mono); font-size: 10px; font-weight: 500; letter-spacing: 0.03em;
          color: var(--muted2); white-space: nowrap; user-select: none;
        }
        .hero-rail__label--link { text-decoration: none; transition: color 0.2s; }
        .hero-rail__label--link:hover { color: var(--accent); }
        .hero-center {
          flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center;
          padding: 0 clamp(12px, 3vw, 32px); max-width: 720px; margin: 0 auto;
          position: relative; z-index: 2;
          overflow: visible;
        }
        .hero-visual {
          position: relative;
          width: min(100%, 480px);
          height: clamp(400px, 50vh, 540px);
          margin: clamp(-56px, -8vh, -32px) auto clamp(24px, 3.5vw, 32px);
          overflow: visible;
        }
        .hero-arch {
          position: absolute;
          bottom: 4%;
          left: 50%;
          transform: translateX(-50%);
          width: 72%;
          height: 52%;
          z-index: 1;
          background: linear-gradient(175deg, var(--arch-fill) 0%, var(--arch-fill-end) 100%);
          border-radius: 50% 50% 8px 8px / 100% 100% 8px 8px;
          box-shadow:
            inset 0 2px 14px rgba(255, 255, 255, 0.55),
            0 8px 28px rgba(15, 23, 42, 0.05);
        }
        .hero-portrait {
          position: absolute;
          bottom: -4%;
          left: 50%;
          width: 112%;
          height: auto;
          max-width: none;
          object-fit: contain;
          object-position: 50% 100%;
          transform: translateX(-50%);
          transform-origin: center bottom;
          z-index: 2;
          animation: heroPortraitIn 1s ease 0.12s both;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .hero-title {
          animation: heroFadeUp 0.8s ease 0.28s both;
          font-family: var(--font-display);
          font-size: var(--text-hero);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--text);
          margin-bottom: 14px;
        }
        .hero-role { animation: heroFadeUp 0.8s ease 0.36s both; }
        .hero-copy {
          animation: heroFadeUp 0.8s ease 0.44s both;
          font-size: var(--text-base);
          font-weight: 400;
          line-height: var(--leading-relaxed);
          color: var(--muted);
          max-width: 480px;
          margin-top: clamp(18px, 2.5vw, 24px);
        }
        .hero-actions {
          animation: heroFadeUp 0.8s ease 0.52s both;
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
          margin-top: clamp(24px, 3.5vw, 32px);
        }
        .hero-rails-mobile { display: none; }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            align-items: center;
            padding: 8px var(--section-x) clamp(40px, 8vw, 56px);
            min-height: auto;
            overflow-x: clip;
          }
          .hero-center {
            overflow-x: clip;
            max-width: 100%;
            width: 100%;
            padding: 0 2px;
          }
          .hero-title { font-size: clamp(36px, 11vw, 52px); }
          .hero-copy {
            width: 100%;
            max-width: 100%;
            padding: 0 2px;
          }
          .hero-rail--desktop { display: none !important; }
          .hero-deco { display: none; }
          .hero-visual {
            height: clamp(340px, 70vw, 440px);
            width: min(100%, 340px);
            margin: clamp(-40px, -6vw, -24px) auto clamp(20px, 5vw, 28px);
            overflow: hidden;
          }
          .hero-portrait {
            width: 100%;
            bottom: -5%;
          }
          .hero-arch { width: 72%; height: 52%; bottom: 4%; }
          .hero-rails-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            width: 100%;
            margin-top: clamp(28px, 6vw, 36px);
          }
          .hero-mobile-rail {
            width: 100%;
            max-width: 420px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .hero-mobile-rail__track { position: relative; width: min(100px, 30vw); height: 1px; }
          .hero-mobile-rail__line {
            position: absolute; inset: 0;
            background: linear-gradient(to right, transparent, rgba(15,23,42,0.08) 25%, rgba(15,23,42,0.08) 75%, transparent);
          }
          .hero-mobile-rail__dot {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 9px; height: 9px; border-radius: 50%;
            background: var(--accent-lit);
            animation: heroDotGlow 4.5s ease-in-out infinite;
          }
          .hero-mobile-rail:last-child .hero-mobile-rail__dot { animation-delay: 2.2s; }
          .hero-mobile-rail__labels {
            display: flex; flex-wrap: wrap; justify-content: center;
            gap: 12px 18px; width: 100%;
          }
          .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
          .hero-actions .btn { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-portrait, .hero-rail__dot { animation: none; }
        }
      `}</style>

      <section id="hero" className="hero">
        <div className="hero-deco hero-deco--arc" aria-hidden="true" />
        <div className="hero-deco hero-deco--arc2" aria-hidden="true" />

        <Rail className="hero-rail--desktop" side="left" labels={["linkedin", "github"]} linkMap={LINKS} />
        <div className="hero-center">
          <div className="hero-visual">
            <div className="hero-arch" aria-hidden="true" />
            <img
              src={heroPortrait}
              alt="Lydia Khasoa, software engineer"
              className="hero-portrait"
              width={659}
              height={379}
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
          </div>

          <h1 className="hero-title">
            Lydia K<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <div className="hero-role" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontSize: "clamp(13px, 1.4vw, 15px)", fontWeight: 700, letterSpacing: "0.11em", textTransform: "uppercase", color: "var(--text)" }}>
              Systems &amp; AI Automation | Operations Support
            </p>
            <p style={{ fontSize: "clamp(12px, 1.2vw, 14px)", fontWeight: 500, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--muted)" }}>
              Software Engineer
            </p>
          </div>
          <p className="hero-copy">
          Building intelligent systems that reduce manual work, streamline operations, and help teams focus on higher-value work.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">What I Do</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-rails-mobile" aria-label="Links and roles">
            <MobileRailGroup labels={["linkedin", "github"]} linkMap={LINKS} />
            <MobileRailGroup labels={["software_development", "automation", "executive_support"]} />
          </div>
        </div>
        <Rail className="hero-rail--desktop" side="right" labels={["software_development", "automation", "executive_support"]} />
      </section>
    </>
  )
}
