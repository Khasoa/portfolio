import { useState } from "react"
import SectionHeader from "./SectionHeader"

export default function About() {
  const [h, setH] = useState(false)
  return (
    <section id="about" className="s-wrap" style={{ padding:"64px 64px 56px", maxWidth:"1100px", margin:"0 auto" }}>
      <SectionHeader eyebrow="About" title="Who I am"/>
      <div style={{ maxWidth:"640px" }}>
        <p style={{ fontSize:"16px", fontWeight:300, color:"var(--muted)", lineHeight:1.85, marginBottom:"16px" }}>
          Write your first 2–3 sentences here in your own voice.
        </p>
        <p style={{ fontSize:"16px", fontWeight:300, color:"var(--muted)", lineHeight:1.85, marginBottom:"28px" }}>
          I build backend systems and automations that solve real problems.
        </p>
        <div
          onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
          style={{
            display:"inline-flex", alignItems:"center", gap:"10px",
            fontSize:"12px", fontWeight:400, letterSpacing:"0.05em",
            color: h ? "var(--coral)" : "var(--muted)",
            border:`1px solid ${h ? "var(--coral-mid)" : "var(--border)"}`,
            padding:"8px 16px", cursor:"default",
            transition:"color 0.18s, border-color 0.18s",
          }}
        >
          <span style={{ color:"var(--coral)", fontSize:"9px" }}>●</span>
          Kenya · Available remotely
        </div>
      </div>
    </section>
  )
}