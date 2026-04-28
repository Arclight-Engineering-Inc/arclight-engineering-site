const items = [
  { label: "Codes & Standards", value: "NEC 2023 · NFPA 70 · NFPA 110" },
  { label: "Analysis Software", value: "ETAP · Lithonia Visual · Bluebeam" },
  { label: "Certifications", value: "CA Licensed PE · LC" },
  { label: "Energy Compliance", value: "Title 24 Part 6 · CalGreen" },
  { label: "AHJ Experience", value: "DSA · CEC" },
]

export function ExpertiseBand() {
  return (
    <div
      style={{
        background: "#111520",
        borderTop: "1px solid #1e2535",
        borderBottom: "1px solid #1e2535",
        padding: "3.5rem 3rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 0,
        }}
        className="expertise-inner"
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            style={{
              flex: 1,
              padding: "0 2.5rem",
              borderRight: i < items.length - 1 ? "1px solid #1e2535" : "none",
              display: "flex",
              flexDirection: "column",
              paddingLeft: i === 0 ? 0 : undefined,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#5a6a85",
                marginBottom: "0.5rem",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#f0f4ff",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .expertise-inner {
            flex-wrap: wrap !important;
            gap: 1.5rem !important;
          }
          .expertise-inner > div {
            flex: 1 1 45% !important;
            border-right: none !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 500px) {
          .expertise-inner > div { flex: 1 1 100% !important; }
        }
      `}</style>
    </div>
  )
}
