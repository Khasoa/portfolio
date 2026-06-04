import { useState } from "react"
import { brandIcons } from "../data/brandIcons"

function Tag({ children, accent }) {
  const [h, setH] = useState(false)
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display:"inline-flex", alignItems:"center",
        borderRadius:"100px", padding:"7px 16px",
        fontSize:"11.5px", fontWeight:400,
        letterSpacing:"0.02em", whiteSpace:"nowrap",
        cursor:"default", transition:"all 0.2s",
        background: accent ? "var(--coral-dim)" : h ? "var(--coral-dim)" : "rgba(255,255,255,0.055)",
        border:`1px solid ${accent || h ? "var(--coral-mid)" : "var(--border2)"}`,
        color: accent || h ? "var(--coral)" : "var(--text)",
      }}
    >{children}</span>
  )
}

function BgIcon({ name, style }) {
  const icon = brandIcons[name]
  if (!icon) return null
  return (
    <div aria-hidden="true" style={{ position:"absolute", pointerEvents:"none", userSelect:"none", ...style }}>
      <svg viewBox="0 0 24 24" width="52" height="52" fill={icon.color}>
        <path d={icon.path}/>
      </svg>
    </div>
  )
}

export default function Hero() {
  const [h1, setH1] = useState(false)
  const [h2, setH2] = useState(false)

  return (
    <>
      <style>{`
        @keyframes floatBg1 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
        @keyframes floatBg2 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-9px)} }
        @keyframes floatBg3 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
        @keyframes floatBg4 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
            padding: 56px 24px !important;
          }
          .hero-vdiv  { display: none !important; }
          .hero-right { display: none !important; }
          .hero-mobile-row { display: flex !important; }
          .hero-bg-icons { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-grid { padding: 48px 20px !important; }
          .hero-name  { font-size: 46px !important; letter-spacing: -2px !important; }
        }
      `}</style>

      <section id="hero" style={{
        minHeight:"100vh",
        display:"flex", alignItems:"center",
        overflow:"hidden", position:"relative",
      }}>

        {/* ── Faint background icons in the empty middle-right zone ── */}
        <div className="hero-bg-icons" style={{
          position:"absolute", inset:0,
          pointerEvents:"none", zIndex:0,
        }}>
          {/*
            Content ends around 55% width.
            Divider is at ~65%. Right strip is far right.
            Icons placed 55%–75% horizontal, spread vertically.
          */}
          <BgIcon name="Python" style={{
            top:"15%", left:"57%",
            opacity:0.045,
            animation:"floatBg1 8s ease-in-out 0s infinite",
          }}/>
          <BgIcon name="React" style={{
            top:"46%", left:"65%",
            opacity:0.038,
            animation:"floatBg2 9.5s ease-in-out 1.8s infinite",
          }}/>
          <BgIcon name="n8n" style={{
            bottom:"20%", left:"58%",
            opacity:0.042,
            animation:"floatBg3 7.5s ease-in-out 3.2s infinite",
          }}/>
          <BgIcon name="JavaScript" style={{
            top:"28%", left:"72%",
            opacity:0.032,
            animation:"floatBg4 10s ease-in-out 0.6s infinite",
          }}/>
        </div>

        {/* ── Main grid ── */}
        <div className="hero-grid" style={{
          position:"relative", zIndex:1,
          width:"100%", maxWidth:"960px",
          display:"grid",
          gridTemplateColumns:"1fr 1px 80px",
          alignItems:"stretch",
          padding:"72px 0 72px 64px",
          animation:"fadeUp 0.7s ease 0.1s both",
        }}>

          {/* LEFT */}
          <div style={{
            paddingRight:"56px",
            display:"flex", flexDirection:"column", justifyContent:"center",
          }}>
            <h1 className="hero-name" style={{
              fontFamily:"'Instrument Serif',Georgia,serif",
              fontSize:"clamp(52px,6.5vw,88px)",
              fontWeight:400, lineHeight:0.92,
              letterSpacing:"-3px", color:"var(--cream)",
              marginBottom:"28px",
            }}>
              Lydia K<span style={{ color:"var(--coral)" }}>.</span>
            </h1>

            <div style={{ display:"flex", flexDirection:"column", gap:"10px", marginBottom:"28px" }}>
              <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                <Tag>Python · FastAPI</Tag>
                <Tag accent>Software Eng.</Tag>
              </div>
              <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                <Tag>Workflow Automation</Tag>
                <Tag>Kenya · Remote</Tag>
              </div>
            </div>

            <p style={{
              fontSize:"16px", fontWeight:300, color:"var(--muted)",
              lineHeight:1.75, maxWidth:"420px", marginBottom:"32px",
            }}>
              I build reliable, tested systems and automations — from backend
              APIs to business workflows that actually work.
            </p>

            <div style={{ display:"flex", gap:0 }}>
              <a href="#projects"
                onMouseEnter={() => setH1(true)} onMouseLeave={() => setH1(false)}
                style={{
                  fontFamily:"'Geist',system-ui", fontSize:"11px", fontWeight:600,
                  letterSpacing:"0.09em", textTransform:"uppercase",
                  textDecoration:"none", display:"inline-block",
                  padding:"13px 28px",
                  background: h1 ? "#d9897a" : "var(--coral)",
                  border:`1px solid ${h1 ? "#d9897a" : "var(--coral)"}`,
                  borderRadius:0, color:"#0f1117",
                  transition:"background 0.18s, border-color 0.18s",
                }}>View work</a>
              <a href="#contact"
                onMouseEnter={() => setH2(true)} onMouseLeave={() => setH2(false)}
                style={{
                  fontFamily:"'Geist',system-ui", fontSize:"11px", fontWeight:500,
                  letterSpacing:"0.09em", textTransform:"uppercase",
                  textDecoration:"none", display:"inline-block",
                  padding:"13px 28px",
                  background: h2 ? "var(--coral-dim)" : "transparent",
                  border:`1px solid ${h2 ? "var(--coral)" : "var(--coral-mid)"}`,
                  borderLeft:"none", borderRadius:0, color:"var(--coral)",
                  transition:"background 0.18s, border-color 0.18s",
                }}>Get in touch</a>
            </div>

            {/* Mobile-only footer */}
            <div className="hero-mobile-row" style={{
              display:"none", marginTop:"28px",
              alignItems:"center", gap:"20px", flexWrap:"wrap",
            }}>
              <span style={{ fontFamily:"'Courier New',monospace", fontSize:"11px", color:"var(--muted2)", letterSpacing:"0.04em" }}>
                <span style={{ color:"var(--coral)" }}>&gt; </span>software_engineer()
              </span>
              <div style={{ display:"flex", gap:"16px" }}>
                {[["github ↗","https://github.com/yourusername"],["linkedin ↗","https://linkedin.com/in/yourprofile"]].map(([l,h]) => (
                  <a key={l} href={h} target="_blank" rel="noreferrer"
                    style={{ fontFamily:"'Courier New',monospace", fontSize:"10px", color:"var(--muted2)", letterSpacing:"0.06em", textDecoration:"none", transition:"color 0.18s" }}
                    onMouseEnter={e => e.target.style.color="var(--coral)"}
                    onMouseLeave={e => e.target.style.color="var(--muted2)"}
                  >{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hero-vdiv" style={{
            alignSelf:"stretch",
            background:"linear-gradient(to bottom, transparent, var(--border2) 15%, var(--border2) 85%, transparent)",
            position:"relative",
          }}>
            <div style={{
              position:"absolute", top:"50%", left:"50%",
              transform:"translate(-50%,-50%)",
              width:"9px", height:"9px", borderRadius:"50%",
              background:"var(--coral)",
              boxShadow:"0 0 14px rgba(240,168,152,0.6)",
            }}/>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hero-right" style={{
            display:"flex", flexDirection:"column",
            alignItems:"center", justifyContent:"center",
            gap:"32px", paddingLeft:"20px", paddingRight:"24px",
          }}>
            <div style={{
              writingMode:"vertical-rl", transform:"rotate(180deg)",
              display:"flex", flexDirection:"row", alignItems:"center", gap:"6px",
              fontFamily:"'Courier New',monospace",
              fontSize:"13px", letterSpacing:"0.07em",
              color:"var(--muted2)", whiteSpace:"nowrap",
            }}>
              <span style={{ color:"var(--coral)", fontSize:"15px" }}>&gt;</span>
              <span>software_engineer()</span>
            </div>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"14px" }}>
              {[["github ↗","https://github.com/yourusername"],["linkedin ↗","https://linkedin.com/in/yourprofile"]].map(([l,h]) => (
                <a key={l} href={h} target="_blank" rel="noreferrer"
                  style={{
                    writingMode:"vertical-rl", transform:"rotate(180deg)",
                    fontFamily:"'Courier New',monospace",
                    fontSize:"11px", letterSpacing:"0.06em",
                    color:"var(--muted2)", textDecoration:"none", transition:"color 0.18s",
                  }}
                  onMouseEnter={e => e.target.style.color="var(--coral)"}
                  onMouseLeave={e => e.target.style.color="var(--muted2)"}
                >{l}</a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}