import heroPortrait from "../assets/hero-portrait.png"

const LINKS = {
  linkedin: "https://www.linkedin.com/in/lydiakhasoa/",
  github:   "https://github.com/Khasoa",
  email:    "khasoalydia@gmail.com",
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
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noreferrer"}
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
  return (
    <>
      <style>{`
        @keyframes heroDotGlow {
          0%, 100% { box-shadow: 0 0 0 2px rgba(215,155,125,0.15), 0 0 6px 1px rgba(215,155,125,0.18); opacity: 0.85; }
          50% { box-shadow: 0 0 0 4px rgba(215,155,125,0.28), 0 0 12px 3px rgba(215,155,125,0.22); opacity: 1; }
        }
        @keyframes heroPortraitIn { from { opacity: 0; transform: scale(1.01); } to { opacity: 1; transform: scale(1); } }
        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

        .hero {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          width: 100%;
          padding: 24px var(--section-x) 40px;
          position: relative;
        }
        .hero-rail {
          display: flex; align-items: center; gap: 16px;
          padding-top: 2vh; padding-bottom: 4vh;
          width: clamp(64px, 7vw, 96px); flex-shrink: 0; align-self: stretch;
        }
        .hero-rail--left { justify-content: flex-end; }
        .hero-rail--right { justify-content: flex-start; }
        .hero-rail__track { position: relative; align-self: stretch; width: 1px; flex-shrink: 0; }
        .hero-rail__line {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.10) 12%, rgba(255,255,255,0.10) 88%, transparent 100%);
        }
        .hero-rail__dot {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
          animation: heroDotGlow 4s ease-in-out infinite;
        }
        .hero-rail--right .hero-rail__dot { animation-delay: 2s; }
        .hero-rail__labels { display: flex; flex-direction: column; justify-content: center; gap: 24px; opacity: 0.55; }
        .hero-rail__label {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.04em;
          color: var(--muted2); white-space: nowrap; user-select: none;
        }
        .hero-rail__label--link { text-decoration: none; transition: color 0.2s, opacity 0.2s; }
        .hero-rail__label--link:hover { color: var(--accent); opacity: 1; }
        .hero-center {
          flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center;
          padding: 0 clamp(12px, 3vw, 32px); max-width: 680px; margin: 0 auto;
        }
        .hero-title { animation: heroFadeUp 0.85s ease 0.05s both; }
        .hero-role { animation: heroFadeUp 0.85s ease 0.15s both; }
        .hero-copy { animation: heroFadeUp 0.85s ease 0.35s both; margin-top: 0; }
        .hero-actions { animation: heroFadeUp 0.85s ease 0.45s both; margin-top: clamp(20px, 3vw, 28px); }
        .hero-portrait-wrap {
          position: relative; width: min(100%, 540px);
          height: clamp(280px, 45vh, 440px); margin: 20px auto 28px;
          pointer-events: none; animation: heroPortraitIn 1.2s ease 0.25s both;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 3%, rgba(0,0,0,0.98) 10%, rgba(0,0,0,0.98) 92%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 3%, rgba(0,0,0,0.98) 10%, rgba(0,0,0,0.98) 92%, transparent 100%);
        }
        .hero-portrait-wrap::after {
          content: ""; position: absolute; inset: -4px -8px -12px;
          background: radial-gradient(ellipse 90% 85% at 50% 38%, transparent 58%, var(--bg) 100%);
          pointer-events: none;
        }
        .hero-portrait {
          display: block; width: 100%; height: 100%; object-fit: cover;
          object-position: center 14%; filter: grayscale(100%) brightness(1.04); opacity: 0.72;
        }
        .hero-rails-mobile { display: none; }

        @media (max-width: 768px) {
          .hero { flex-direction: column; align-items: center; padding: 16px var(--section-x) 32px; }
          .hero-rail--desktop { display: none !important; }
          .hero-rails-mobile { display: flex; flex-direction: column; align-items: center; gap: 28px; width: 100%; margin-top: 40px; }
          .hero-mobile-rail { width: 100%; max-width: 480px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
          .hero-mobile-rail__track { position: relative; width: min(120px, 34vw); height: 1px; }
          .hero-mobile-rail__line {
            position: absolute; inset: 0;
            background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 22%, rgba(255,255,255,0.12) 78%, transparent 100%);
          }
          .hero-mobile-rail__dot {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
            animation: heroDotGlow 4s ease-in-out infinite;
          }
          .hero-mobile-rail:last-child .hero-mobile-rail__dot { animation-delay: 2s; }
          .hero-mobile-rail__labels { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 16px; width: 100%; opacity: 0.55; }
          .hero-mobile-rail__labels .hero-rail__label { font-size: 11px; }
          .hero-portrait-wrap { height: clamp(260px, 56vw, 360px); width: min(100%, 420px); margin-bottom: 24px; }
        }
        @media (max-width: 390px) {
          .hero-actions { flex-direction: column; width: 100%; max-width: 300px; }
          .hero-actions .btn { width: 100%; }
        }
      `}</style>

      <section id="hero" className="hero">
        <Rail className="hero-rail--desktop" side="left" labels={["linkedin", "github", "email"]} linkMap={LINKS} />
        <div className="hero-center">
          <h1 className="hero-title" style={{
            fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 400,
            lineHeight: 0.98, letterSpacing: "-0.03em", color: "var(--cream)", marginBottom: "10px",
          }}>
            Lydia K<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <div className="hero-role" style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cream)" }}>
              Software Engineer
            </p>
            <p style={{ fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
              Systems &amp; Automation
            </p>
          </div>
          <div className="hero-portrait-wrap">
            <img src={heroPortrait} alt="" className="hero-portrait" draggable={false} />
          </div>
          <p className="hero-copy" style={{
            fontSize: "var(--text-base)", fontWeight: 300, lineHeight: "var(--leading-relaxed)",
            color: "var(--muted)", maxWidth: "520px",
          }}>
            Building systems that cut manual work, reduce operational friction, and scale without adding headcount.
          </p>
          <div className="hero-actions" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://calendly.com/khasoalydia/30min" target="_blank" rel="noreferrer" className="btn btn-secondary">Book a Call</a>
          </div>
          <div className="hero-rails-mobile" aria-label="Links and roles">
            <MobileRailGroup labels={["linkedin", "github", "email"]} linkMap={LINKS} />
            <MobileRailGroup labels={["software_engineer", "systems_automation", "backend_engineer"]} />
          </div>
        </div>
        <Rail className="hero-rail--desktop" side="right" labels={["software_engineer", "systems_automation", "backend_engineer"]} />
      </section>
    </>
  )
}
