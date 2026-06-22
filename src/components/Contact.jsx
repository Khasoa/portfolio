import { useState } from "react"
import { CalendarDays, Mail } from "lucide-react"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const fieldStyle = {
  width: "100%",
  background: "var(--input-bg)",
  border: "1px solid var(--input-border)",
  borderRadius: "var(--radius-sm)",
  padding: "13px 16px",
  fontFamily: "var(--font-sans)",
  fontSize: "14px",
  fontWeight: 300,
  color: "var(--text)",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  marginBottom: "12px",
  display: "block",
}

function Chip({ label }) {
  const [h, setH] = useState(false)
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontSize: "12px", fontWeight: 400,
        color: h ? "var(--accent)" : "var(--muted)",
        border: `1px solid ${h ? "var(--accent-mid)" : "var(--border)"}`,
        borderRadius: "var(--radius-sm)",
        padding: "6px 12px", cursor: "default", transition: "all 0.18s",
        background: h ? "var(--accent-dim)" : "transparent",
      }}
    >{label}</span>
  )
}

function TrustLink({ href, icon: Icon, label, sublabel }) {
  const [h, setH] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noreferrer"}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex", alignItems: "center", gap: "12px",
        padding: "14px 16px", borderRadius: "var(--radius-md)",
        border: `1px solid ${h ? "var(--accent-mid)" : "var(--border)"}`,
        background: h ? "var(--accent-dim)" : "rgba(255,255,255,0.015)",
        textDecoration: "none", transition: "border-color 0.2s, background 0.2s", minHeight: "44px",
      }}
    >
      <Icon size={18} color={h ? "var(--accent)" : "var(--muted2)"} />
      <div>
        <div style={{ fontSize: "13px", fontWeight: 400, color: h ? "var(--cream)" : "var(--text)" }}>{label}</div>
        {sublabel && <div style={{ fontSize: "11px", color: "var(--muted2)", marginTop: "2px" }}>{sublabel}</div>}
      </div>
    </a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" })
  const [sent, setSent] = useState(false)
  const [hs, setHs] = useState(false)

  const onFocus = e => {
    e.target.style.borderColor = "var(--input-focus)"
    e.target.style.background = "rgba(255,255,255,0.05)"
  }
  const onBlur = e => {
    e.target.style.borderColor = "var(--input-border)"
    e.target.style.background = "var(--input-bg)"
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "YOUR_WEB3FORMS_KEY", ...form }),
      })
      setSent(true)
    } catch (err) { console.error(err) }
  }

  return (
    <section id="contact" className="s-wrap">
      <style>{`
        .contact-form-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: clamp(24px, 4vw, 32px);
          box-shadow: var(--shadow-sm);
        }
        .contact-trust { display: flex; flex-direction: column; gap: 10px; margin-top: 24px; }
        .contact-response {
          display: flex; align-items: center; gap: 8px; margin-top: 20px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; color: var(--muted2);
        }
        .contact-response-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--status-solution); flex-shrink: 0; }
      `}</style>

      <SectionLayout index="05">
        <SectionHeader
          eyebrow="Get in touch"
          title="Contact"
          description="Open to junior software engineering roles, workflow automation contracts, and operations-focused technical roles. Based in Kenya, available remotely."
        />
        <div className="contact-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr",
          gap: "clamp(32px, 5vw, 56px)", alignItems: "start",
        }}>
          <div>
            <h3 style={{
              fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 2.5vw, 26px)",
              fontWeight: 400, color: "var(--cream)", marginBottom: "12px", lineHeight: 1.25,
            }}>Let's work together</h3>
            <p style={{
              fontSize: "var(--text-sm)", color: "var(--muted)",
              lineHeight: "var(--leading-normal)", marginBottom: "20px", maxWidth: "340px",
            }}>Recruiting, contracting, or exploring a fit — pick the path that works best.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
              {["Junior SWE", "Remote contracts", "Workflow automation", "Operations roles"].map(c => (
                <Chip key={c} label={c} />
              ))}
            </div>
            <div className="contact-trust">
              <TrustLink href="https://calendly.com/khasoalydia/30min" icon={CalendarDays} label="Book a 30-min call" sublabel="Best for discovery & scoping" />
              <TrustLink href="mailto:khasoalydia@gmail.com" icon={Mail} label="khasoalydia@gmail.com" sublabel="Direct email" />
            </div>
            <div className="contact-response">
              <span className="contact-response-dot" aria-hidden="true" />
              <span>Typical response within 24 hours</span>
            </div>
          </div>
          <div className="contact-form-card">
            {sent ? (
              <div style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-mid)", borderRadius: "var(--radius-md)", padding: "24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--accent)", marginBottom: "8px" }}>Message received.</p>
                <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--muted)", lineHeight: "var(--leading-normal)" }}>You'll hear back within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your name" required style={fieldStyle} onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input type="email" placeholder="Your email" required style={fieldStyle} onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({ ...form, email: e.target.value })} />
                <select required value={form.interest}
                  style={{ ...fieldStyle, appearance: "none", WebkitAppearance: "none", cursor: "pointer", color: form.interest ? "var(--text)" : "var(--muted2)" }}
                  onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({ ...form, interest: e.target.value })}>
                  <option value="" disabled>What are you reaching out about?</option>
                  <option value="swe">Software engineering role or contract</option>
                  <option value="automation">Workflow automation project</option>
                  <option value="both">Both</option>
                </select>
                <textarea placeholder="Tell me what you're working on" required
                  style={{ ...fieldStyle, resize: "none", height: "112px", marginBottom: "16px" }}
                  onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({ ...form, message: e.target.value })} />
                <button type="submit" className="btn btn-primary"
                  onMouseEnter={() => setHs(true)} onMouseLeave={() => setHs(false)}
                  style={{ width: "100%", background: hs ? "var(--accent-hover)" : undefined, borderColor: hs ? "var(--accent-hover)" : undefined }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
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
