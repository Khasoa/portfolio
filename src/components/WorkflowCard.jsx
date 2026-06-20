import { useState } from "react"

export default function WorkflowCard({ workflow, isLast }) {
  const [hov, setHov] = useState(false)

  const renderDescription = () => {
    if (Array.isArray(workflow.description)) {
      return workflow.description.map((line, i) => {
        const isHeader =
          line.endsWith(":") ||
          line === "Problem:" ||
          line === "System:" ||
          line === "Outcome:"

        return (
          <div
            key={i}
            style={{
              marginBottom: "6px",
              fontWeight: isHeader ? 500 : 300,
              color: isHeader ? "var(--cream)" : "var(--muted)",
            }}
          >
            {line}
          </div>
        )
      })
    }

    return workflow.description
  }

  return (
    <div
      style={{
        padding: "22px 24px",
        borderLeft: `2px solid ${hov ? "var(--accent)" : "transparent"}`,
        borderRight: isLast ? "none" : "1px solid var(--border)",
        opacity: 1,
        transition: "border-left-color 0.18s, opacity 0.18s",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            color: "var(--muted2)",
          }}
        >
          {workflow.num}
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--cream)",
          marginBottom: "4px",
        }}
      >
        {workflow.name}
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "11px",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--text)",
          marginBottom: "10px",
        }}
      >
        {workflow.tagline}
      </div>

      {/* Description (structured or plain) */}
      <div
        style={{
          fontSize: "11px",
          fontWeight: 300,
          color: "var(--muted)",
          lineHeight: 1.6,
          marginBottom: "12px",
          whiteSpace: "pre-line",
        }}
      >
        {renderDescription()}
      </div>

      {/* Tools */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {workflow.tools.map((tool) => (
          <span
            key={tool}
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "9px",
              color: "var(--muted2)",
              padding: "2px 6px",
              border: "1px solid var(--border)",
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}