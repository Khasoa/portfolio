export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: "clamp(28px, 4vw, 40px)" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: title || description ? "12px" : 0,
      }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}>{eyebrow}</span>
        <span style={{
          width: "24px",
          height: "1px",
          background: "var(--accent)",
          opacity: 0.35,
          display: "block",
        }} />
      </div>
      {title && (
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-xl)",
          fontWeight: 400,
          color: "var(--cream)",
          letterSpacing: "-0.02em",
          lineHeight: "var(--leading-tight)",
          marginBottom: description ? "12px" : 0,
        }}>{title}</h2>
      )}
      {description && (
        <p style={{
          fontSize: "var(--text-base)",
          fontWeight: 300,
          color: "var(--muted)",
          maxWidth: "540px",
          lineHeight: "var(--leading-relaxed)",
        }}>{description}</p>
      )}
    </div>
  )
}
