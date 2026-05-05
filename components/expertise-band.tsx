const items = [
  { label: "Codes", value: "NEC 2023 · NFPA 70 · NFPA 110" },
  { label: "Software", value: "ETAP · Visual · Bluebeam" },
  { label: "Licensing", value: "California PE · LC" },
  { label: "Energy", value: "Title 24 Part 6 · CalGreen" },
  { label: "AHJ", value: "DSA · CEC" },
]

export function ExpertiseBand() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, var(--surface) 0%, var(--surface-raised) 50%, var(--surface) 100%)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "3rem 3rem",
        overflow: "hidden",
        position: "relative",
      }}
      className="expertise-band"
    >
      {/* Subtle marker line on left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: 24,
          width: 3,
          background: "var(--primary)",
          boxShadow: "0 0 16px color-mix(in srgb, var(--primary) 50%, transparent)",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="expertise-row"
      >
        <div
          className="tech-mono"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            whiteSpace: "nowrap",
          }}
        >
          Expertise
        </div>

        <div
          style={{
            display: "flex",
            gap: 0,
            justifyContent: "space-between",
          }}
          className="expertise-inner"
        >
          {items.map((item, i) => (
            <div
              key={item.label}
              style={{
                flex: 1,
                padding: i === 0 ? "0 2rem 0 0" : "0 2rem",
                borderRight:
                  i < items.length - 1 ? "1px solid var(--line)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div
                className="tech-mono"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-faint)",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  color: "var(--heading)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.3,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .expertise-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .expertise-inner {
            flex-wrap: wrap !important;
            gap: 1.5rem !important;
          }
          .expertise-inner > div {
            flex: 1 1 45% !important;
            border-right: none !important;
            padding: 0 !important;
          }
        }
        @media (max-width: 600px) {
          .expertise-band { padding: 2.5rem 1.5rem !important; }
          .expertise-inner > div { flex: 1 1 100% !important; }
        }
      `}</style>
    </div>
  )
}
