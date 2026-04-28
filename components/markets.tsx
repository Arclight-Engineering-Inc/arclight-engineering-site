"use client"

const markets = [
  {
    name: "Commercial & Retail",
    desc: "Office buildings, retail centers, mixed-use developments, and restaurant/hospitality facilities with Title 24 compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Educational Facilities",
    desc: "K–12 and higher education projects with DSA submittal experience, including classroom lighting, power, and emergency systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    name: "EV Infrastructure",
    desc: "EV charging station design, load analysis, service upgrade studies, and EVSE permitting for commercial and multi-tenant portfolios.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: "Industrial & Manufacturing",
    desc: "Motor control centers, power factor correction, feeder design, and industrial lighting for manufacturing and logistics facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: "Tenant Improvement",
    desc: "Fast-track TI electrical design for office, medical office, and retail build-outs requiring code-compliant permit-ready drawings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Multi-Family & Mixed-Use",
    desc: "Apartment and condo projects requiring service coordination, common area lighting design, and CalGreen compliance documentation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export function Markets() {
  return (
    <section id="markets" style={{ padding: "7rem 3rem", background: "#0d1017" }}>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4da6ff",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
        }}
      >
        <span style={{ display: "block", width: "2rem", height: "1px", background: "#4da6ff", flexShrink: 0 }} />
        Markets Served
      </div>
      <h2
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
          textTransform: "uppercase",
          color: "#f0f4ff",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        Where We Work
      </h2>
      <p
        style={{
          color: "#5a6a85",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          maxWidth: "500px",
          marginBottom: "3rem",
        }}
      >
        Arclight serves a focused range of market sectors where precision engineering and deep code knowledge
        drive project success.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "#1e2535",
          border: "1px solid #1e2535",
        }}
        className="markets-grid"
      >
        {markets.map((m) => (
          <MarketTile key={m.name} {...m} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .markets-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .markets-grid { grid-template-columns: 1fr !important; }
          #markets { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}

function MarketTile({
  name,
  desc,
  icon,
}: {
  name: string
  desc: string
  icon: React.ReactNode
}) {
  return (
    <div
      style={{
        background: "#080a0f",
        padding: "2rem 1.8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
        transition: "background 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#111520")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#080a0f")}
    >
      <div
        style={{
          width: 42,
          height: 42,
          border: "1px solid #1e2535",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4da6ff",
          transition: "border-color 0.3s",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#f0f4ff",
        }}
      >
        {name}
      </div>
      <p style={{ fontSize: "0.85rem", color: "#5a6a85", lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}
