import { useState } from "react"
import { CalendarDays } from "lucide-react"
import SectionHeader from "./SectionHeader"
import SectionLayout from "./SectionLayout"

const fieldStyle = {
  width: "100%",
  background: "var(--input-bg)",
  border: "1px solid var(--input-border)",
  borderRadius: "var(--radius-md)",
  padding: "14px 16px",
  fontFamily: "var(--font-sans)",
  fontSize: "15px",
  fontWeight: 400,
  color: "var(--text)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  marginBottom: "14px",
  display: "block",
}

function Chip({ label }) {
  return <span className="contact-chip">{label}</span>
}

function TrustLink({ href, icon: Icon, label, sublabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="contact-trust-link"
    >
      <Icon size={18} className="contact-trust-link__icon" aria-hidden="true" />
      <div>
        <div className="contact-trust-link__label">{label}</div>
        {sublabel && <div className="contact-trust-link__sub">{sublabel}</div>}
      </div>
    </a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" })
  const [sent, setSent] = useState(false)

  const onFocus = e => {
    e.target.style.borderColor = "var(--input-focus)"
    e.target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, 0.08)"
  }
  const onBlur = e => {
    e.target.style.borderColor = "var(--input-border)"
    e.target.style.boxShadow = "none"
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch("https://n8n.khasoalydia.com/webhook-test/lead-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "YOUR_WEB3FORMS_KEY", ...form }),
      })
      setSent(true)
    } catch (err) { console.error(err) }
  }

  return (
    <section id="contact" className="s-wrap s-wrap--contact">
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: clamp(40px, 6vw, 72px);
          align-items: start;
        }
        .contact-intro h3 {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.5vw, 26px);
          font-weight: 700;
          color: var(--text);
          margin-bottom: 14px;
          line-height: 1.25;
        }
        .contact-intro p {
          font-size: var(--text-sm);
          color: var(--muted);
          line-height: var(--leading-normal);
          margin-bottom: 24px;
          max-width: 360px;
        }
        .contact-chips {
          display: flex; flex-wrap: wrap; gap: 10px;
          margin-bottom: 12px;
        }
        .contact-chip {
          font-size: 12px;
          font-weight: 500;
          color: var(--muted);
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 7px 14px;
          background: var(--bg-subtle);
        }
        .contact-trust-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          background: var(--bg-subtle);
          text-decoration: none;
          min-height: 44px;
        }
        .contact-trust-link__icon { color: var(--muted2); flex-shrink: 0; }
        .contact-trust-link__label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
        }
        .contact-trust-link__sub {
          font-size: 12px;
          color: var(--muted2);
          margin-top: 3px;
        }
        .contact-trust {
          display: flex; flex-direction: column; gap: 12px;
          margin-top: 28px;
        }
        .contact-response {
          display: flex; align-items: center; gap: 8px;
          margin-top: 24px;
          font-family: var(--font-mono); font-size: 10px; font-weight: 500;
          letter-spacing: 0.06em; color: var(--muted2);
        }
        .contact-response-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--status-solution); flex-shrink: 0;
        }
        .contact-form-card {
          background: var(--surface-raised);
          border: none;
          border-radius: var(--radius-xl);
          padding: clamp(28px, 4vw, 36px);
          box-shadow: var(--shadow-card);
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>

      <SectionLayout index="04">
        <SectionHeader
          eyebrow="Get in touch"
          title="Contact"
          description="Open to software engineering roles, workflow automation contracts, and virtual ops support engagements."
        />
        <div className="contact-grid">
          <div className="contact-intro">
            <h3>Let's work together</h3>
            <p>Recruiting, contracting, or exploring a fit — pick the path that works best.</p>
            <div className="contact-chips">
              {["Software engineering", "Workflow automation", "Virtual ops support", "Remote contracts"].map(c => (
                <Chip key={c} label={c} />
              ))}
            </div>
            <div className="contact-trust">
              <TrustLink href="https://calendly.com/khasoalydia/30min" icon={CalendarDays} label="Book a 30-min call" sublabel="Best for discovery & scoping" />
            </div>
            <div className="contact-response">
              <span className="contact-response-dot" aria-hidden="true" />
              <span>Typical response within 24 hours</span>
            </div>
          </div>
          <div className="contact-form-card">
            {sent ? (
              <div style={{
                background: "var(--accent-dim)",
                borderRadius: "var(--radius-md)",
                padding: "28px",
              }}>
                <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--accent)", marginBottom: "8px" }}>Message received.</p>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--muted)", lineHeight: "var(--leading-normal)" }}>You'll hear back within 24 hours.</p>
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
                  <option value="virtual-ops">Virtual operations support</option>
                  <option value="both">Multiple areas</option>
                </select>
                <textarea placeholder="Tell me what you're working on" required
                  style={{ ...fieldStyle, resize: "none", height: "120px", marginBottom: "20px" }}
                  onFocus={onFocus} onBlur={onBlur} onChange={e => setForm({ ...form, message: e.target.value })} />
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
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
