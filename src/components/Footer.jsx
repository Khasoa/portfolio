import { FaGithub, FaLinkedin } from "react-icons/fa"
import { CalendarDays } from "lucide-react"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span
          style={{
            fontFamily:"'Instrument Serif',Georgia,serif",
            fontSize:"16px",
            color:"var(--muted2)"
          }}
        >
          Lydia Khasoa
        </span>
      </div>

      <div
        style={{
          display:"flex",
          gap:"16px",
          alignItems:"center"
        }}
      >
        <a
          href="https://www.linkedin.com/in/lydiakhasoa/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="https://github.com/Khasoa"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://calendly.com/khasoalydia/30min"
          target="_blank"
          rel="noreferrer"
        >
          <CalendarDays size={18} />
        </a>
      </div>

      <span
        style={{
          fontFamily:"'Courier New',monospace",
          fontSize:"10px",
          color:"var(--muted2)",
          letterSpacing:"0.04em"
        }}
      >
        © 2026 · built with react
      </span>
    </footer>
  )
}