import { useState } from "react"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const fieldStyle = {
  width:"100%",
  background:"var(--input-bg)",
  border:"1px solid var(--input-border)",
  borderRadius:"8px",
  padding:"13px 16px",
  fontFamily:"'Geist',system-ui",
  fontSize:"14px", fontWeight:300,
  color:"var(--text)", outline:"none",
  transition:"border-color 0.2s, background 0.2s",
  marginBottom:"12px", display:"block",
}

function Chip({ label }) {
  const [h, setH] = useState(false)
  return (
    <span
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        fontSize:"12px", fontWeight:400,
        color: h ? "var(--accent)" : "var(--muted)",
        border:`1px solid ${h ? "var(--accent-mid)" : "var(--border)"}`,
        padding:"6px 14px", cursor:"default", transition:"all 0.18s",
      }}
    >{label}</span>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", interest:"", message:"" })
  const [sent, setSent] = useState(false)
  const [hs, setHs] = useState(false)

  const onFocus = e => {
    e.target.style.borderColor = "var(--input-focus)"
    e.target.style.background = "rgba(255,255,255,0.07)"
  }
  const onBlur = e => {
    e.target.style.borderColor = "var(--input-border)"
    e.target.style.background = "var(--input-bg)"
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch("https://api.web3forms.com/submit", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ access_key:"YOUR_WEB3FORMS_KEY", ...form }),
      })
      setSent(true)
    } catch(err) { console.error(err) }
  }

  return (
    <section id="contact" className="s-wrap">
      <SectionLayout index="05">
        <SectionHeader eyebrow="Get in touch" title="Contact" description="Open to junior software engineering roles, workflow automation contracts, and operations-focused technical roles. Based in Kenya, available remotely."/>
        <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:"64px", alignItems:"start" }}>
        <div>
          <h3 style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontSize:"24px", fontWeight:400, color:"var(--cream)", marginBottom:"18px" }}>Let's work together</h3>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
            {["Junior SWE","Remote contracts","Workflow automation","Operations roles"].map(c => <Chip key={c} label={c}/>)}
          </div>
        </div>
        <div>
          {sent ? (
            <div style={{ background:"var(--accent-dim)", border:"1px solid var(--accent-mid)", borderRadius:"8px", padding:"24px" }}>
              <p style={{ fontSize:"15px", fontWeight:500, color:"var(--accent)", marginBottom:"8px" }}>Message received.</p>
              <p style={{ fontSize:"13px", fontWeight:300, color:"var(--muted)", lineHeight:1.65 }}>You'll hear back within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your name" required style={fieldStyle} onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({...form,name:e.target.value})}/>
              <input type="email" placeholder="Your email" required style={fieldStyle} onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({...form,email:e.target.value})}/>
              <select required value={form.interest}
                style={{ ...fieldStyle, appearance:"none", WebkitAppearance:"none", cursor:"pointer", color: form.interest ? "var(--text)" : "var(--muted2)" }}
                onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({...form,interest:e.target.value})}>
                <option value="" disabled>What are you reaching out about?</option>
                <option value="swe">Software engineering role or contract</option>
                <option value="automation">Workflow automation project</option>
                <option value="both">Both</option>
              </select>
              <textarea placeholder="Tell me what you're working on" required
                style={{ ...fieldStyle, resize:"none", height:"108px", marginBottom:"16px" }}
                onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({...form,message:e.target.value})}/>
              <button type="submit"
                onMouseEnter={() => setHs(true)} onMouseLeave={() => setHs(false)}
                style={{
                  width:"100%",
                  background: hs ? "var(--accent-hover)" : "var(--accent-lit)",
                  color:"var(--on-accent)",
                  border:`1px solid ${hs ? "var(--accent-hover)" : "var(--accent-lit)"}`,
                  boxShadow: hs ? "0 4px 20px rgba(232,181,154,0.18)" : "0 2px 12px rgba(232,181,154,0.12)",
                  borderRadius:"8px", padding:"14px",
                  fontFamily:"'Geist',system-ui", fontSize:"11px", fontWeight:600,
                  letterSpacing:"0.09em", textTransform:"uppercase",
                  cursor:"pointer", transition:"background 0.18s, border-color 0.18s",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
                }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
      </SectionLayout>
    </section>
  )
}
