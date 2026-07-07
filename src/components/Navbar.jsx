import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Automation", href: "#automation" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--section-x)",
      background: "rgba(244, 246, 249, 0.90)",
      borderBottom: "1px solid var(--border)",
      backdropFilter: "blur(16px)",
    }}>
      <a href="#hero" style={{
        fontFamily: "var(--font-display)",
        fontSize: "16px",
        color: "var(--text)",
        fontWeight: 700,
        textDecoration: "none",
        letterSpacing: "-0.02em",
      }}>Lydia Khasoa</a>

      <ul className="nav-desktop" style={{ display: "flex", gap: "28px", listStyle: "none", alignItems: "center" }}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <a
          href="https://calendly.com/khasoalydia/30min"
          target="_blank"
          rel="noreferrer"
          className="nav-cv-btn btn btn-primary"
          style={{ display: "none", padding: "9px 18px", minHeight: "36px", fontSize: "11px" }}
        >
          Book a Call
        </a>

        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            color: "var(--muted)",
            cursor: "pointer",
            padding: "8px",
          }}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{
          position: "absolute",
          top: "56px",
          left: 0,
          right: 0,
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
          padding: "4px var(--section-x) 16px",
          zIndex: 99,
          boxShadow: "var(--shadow-md)",
        }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 0",
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                minHeight: "44px",
              }}
            >{label}</a>
          ))}
          <a
            href="https://calendly.com/khasoalydia/30min"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 0",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--accent)",
              textDecoration: "none",
              minHeight: "44px",
            }}
          >Book a Call</a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .nav-cv-btn { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  )
}
