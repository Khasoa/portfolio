export default function SectionLayout({ index, children, className = "" }) {
  return (
    <div className={`section-grid ${className}`.trim()}>
      <div className="section-index" aria-hidden="true">
        <span className="section-num">{index}</span>
        <div className="section-index-line" />
      </div>
      <div className="section-content">{children}</div>
    </div>
  )
}
