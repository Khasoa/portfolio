import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = ["About","Projects","Automation","Skills","Contact"]

const linkStyle = {
  fontSize:"11px", fontWeight:400, letterSpacing:"0.08em",
  textTransform:"uppercase", color:"var(--muted)",
  textDecoration:"none", transition:"color 0.18s",
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{
      position:"sticky", top:0, zIndex:100,
      height:"56px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"0 var(--section-x)",
      background:"rgba(5,5,5,0.92)",
      borderBottom:"1px solid var(--border)",
      backdropFilter:"blur(20px)",
    }}>
      <a href="#hero" style={{
        fontFamily:"'Instrument Serif',Georgia,serif",
        fontSize:"18px", color:"var(--cream)", fontWeight:400,
        textDecoration:"none",
      }}>Lydia Khasoa</a>

      <ul className="nav-desktop" style={{ display:"flex", gap:"32px", listStyle:"none" }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={linkStyle}
              onMouseEnter={e => e.target.style.color = "var(--accent)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{l}</a>
          </li>
        ))}
      </ul>

      <button className="nav-mobile-toggle" onClick={() => setOpen(!open)}
        style={{
          display:"none", alignItems:"center", justifyContent:"center",
          background:"none", border:"none", color:"var(--muted)",
          cursor:"pointer", padding:"4px",
        }}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X size={20}/> : <Menu size={20}/>}
      </button>

      {open && (
        <div style={{
          position:"absolute", top:"56px", left:0, right:0,
          background:"rgba(5,5,5,0.98)",
          borderBottom:"1px solid var(--border)",
          padding:"8px 24px 20px", zIndex:99,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display:"block", padding:"12px 0",
                fontSize:"14px", letterSpacing:"0.06em",
                textTransform:"uppercase", color:"var(--muted)",
                textDecoration:"none", borderBottom:"1px solid var(--border)",
              }}
            >{l}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
