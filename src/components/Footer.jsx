export default function Footer() {
  return (
    <footer style={{
      borderTop:"1px solid var(--border)",
      padding:"22px 64px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      maxWidth:"1100px", margin:"0 auto",
    }}>
      <span style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontSize:"16px", color:"var(--muted2)" }}>Lydia K.</span>
      <span style={{ fontFamily:"'Courier New',monospace", fontSize:"10px", color:"var(--muted2)", letterSpacing:"0.04em" }}>© 2026 · built with react</span>
    </footer>
  )
}