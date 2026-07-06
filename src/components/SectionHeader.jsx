export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: "clamp(32px, 5vw, 48px)" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: title || description ? "14px" : 0,
      }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}>{eyebrow}</span>
        <span style={{
          width: "28px",
          height: "1px",
          background: "var(--accent)",
          opacity: 0.3,
          display: "block",
        }} />
      </div>
      {title && (
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-xl)",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.025em",
          lineHeight: "var(--leading-tight)",
          marginBottom: description ? "14px" : 0,
        }}>{title}</h2>
      )}
      {description && (
        <p style={{
          fontSize: "var(--text-base)",
          fontWeight: 400,
          color: "var(--muted)",
          maxWidth: "520px",
          lineHeight: "var(--leading-normal)",
        }}>{description}</p>
      )}
    </div>
  )
}
