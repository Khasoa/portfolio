export default function Divider() {
  return (
    <div style={{ padding:"0 64px" }}>
      <hr style={{
        border:"none", height:"1px",
        background:"linear-gradient(to right, transparent, var(--border2), transparent)",
      }}/>
    </div>
  )
}