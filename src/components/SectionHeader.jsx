export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom:"36px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom: title || description ? "14px" : 0 }}>
        <span style={{
          fontSize:"10px", fontWeight:500, letterSpacing:"0.16em",
          textTransform:"uppercase", color:"var(--accent)",
        }}>{eyebrow}</span>
        <span style={{ width:"28px", height:"1px", background:"var(--accent)", opacity:0.4, display:"block" }}/>
      </div>
      {title && (
        <h2 style={{
          fontFamily:"'Instrument Serif',Georgia,serif",
          fontSize:"clamp(30px,3.5vw,44px)", fontWeight:400,
          color:"var(--cream)", letterSpacing:"-0.5px",
          lineHeight:1.1, marginBottom: description ? "14px" : 0,
        }}>{title}</h2>
      )}
      {description && (
        <p style={{
          fontSize:"15px", fontWeight:300, color:"var(--muted)",
          maxWidth:"520px", lineHeight:1.75,
        }}>{description}</p>
      )}
    </div>
  )
}
