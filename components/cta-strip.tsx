"use client"

export function CtaStrip() {
  return (
    <div
      style={{
        background: "#111520",
        borderTop: "1px solid #1e2535",
        borderBottom: "1px solid #1e2535",
        padding: "4rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
          textTransform: "uppercase",
          color: "#f0f4ff",
          letterSpacing: "0.02em",
        }}
      >
        Ready to Power Your Next Project?
      </div>
      <a
        href="#contact"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          background: "#4da6ff",
          color: "#080a0f",
          border: "none",
          padding: "1rem 2.5rem",
          cursor: "pointer",
          transition: "box-shadow 0.2s, transform 0.1s",
          textDecoration: "none",
          display: "inline-block",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = "0 0 24px rgba(77,166,255,0.5)"
          el.style.transform = "translateY(-1px)"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = "none"
          el.style.transform = "translateY(0)"
        }}
      >
        Request a Proposal
      </a>
    </div>
  )
}
