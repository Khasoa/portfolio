export default function SectionHeader({ eyebrow, title, description, centered = false, titleId }) {
  const rootClass = ["section-header", centered && "section-header--center"].filter(Boolean).join(" ")
  const rowClass = ["section-header__row", !title && !description && "section-header__row--solo"].filter(Boolean).join(" ")

  return (
    <div className={rootClass}>
      <div className={rowClass}>
        <span className="section-header__eyebrow">{eyebrow}</span>
        <span className="section-header__rule" aria-hidden="true" />
      </div>
      {title && <h2 id={titleId} className="section-header__title">{title}</h2>}
      {description && <p className="section-header__desc">{description}</p>}
    </div>
  )
}
