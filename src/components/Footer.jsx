import { FaGithub, FaLinkedin } from "react-icons/fa"
import { CalendarDays } from "lucide-react"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "var(--muted2)" }}>
          Lydia Khasoa
        </span>
        <span style={{
          display: "block", marginTop: "4px",
          fontFamily: "var(--font-mono)", fontSize: "10px",
          color: "var(--muted2)", letterSpacing: "0.04em",
        }}>
          Systems · Automation · Engineering
        </span>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <a href="https://www.linkedin.com/in/lydiakhasoa/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={17} /></a>
        <a href="https://github.com/Khasoa" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={17} /></a>
        <a href="https://calendly.com/khasoalydia/30min" target="_blank" rel="noreferrer" aria-label="Book a call"><CalendarDays size={17} /></a>
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted2)", letterSpacing: "0.04em" }}>
        © 2026 · built with react
      </span>
    </footer>
  )
}
