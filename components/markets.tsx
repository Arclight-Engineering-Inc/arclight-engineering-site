"use client"

const markets = [
  {
    code: "M01",
    name: "Commercial & Retail",
    desc: "Office, retail, mixed-use, and hospitality. Title 24 compliance baked into every fixture schedule.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    code: "M02",
    name: "Educational Facilities",
    desc: "K-12 and higher education, including DSA submittal experience for classroom power, lighting, and emergency systems.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    code: "M03",
    name: "EV Infrastructure",
    desc: "EV charging design, load analysis, service upgrade studies, and EVSE permitting for commercial and multi-tenant portfolios.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    code: "M04",
    name: "Industrial & Manufacturing",
    desc: "Motor control centers, power factor correction, feeder design, and industrial lighting for manufacturing and logistics.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    code: "M05",
    name: "Tenant Improvement",
    desc: "Fast-track TI for office, medical office, and retail build-outs. Permit-ready drawings without the bottleneck.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    code: "M06",
    name: "Multi-Family & Mixed-Use",
    desc: "Apartments and condos: service coordination, common area lighting, and CalGreen documentation handled end-to-end.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export function Markets() {
  return (
    <section
      id="markets"
      style={{
        padding: "8rem 3rem",
        background: "var(--background)",
        position: "relative",
        scrollMarginTop: "5rem",
      }}
      className="markets-section"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) 2fr",
          gap: "4rem",
          marginBottom: "4rem",
          alignItems: "end",
        }}
        className="markets-header"
      >
        <div>
          <div
            className="tech-mono"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "1.25rem",
            }}
          >
            (03) Sectors
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              color: "var(--text-faint)",
              lineHeight: 1.7,
            }}
          >
            Six markets we know
            <br />
            inside the conduit.
          </div>
        </div>
        <div>
          <h2
            className="display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "var(--heading)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Where Arclight
            <span style={{ color: "var(--primary)" }}> works</span>.
          </h2>
          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "620px",
            }}
          >
            Focused project types, deeply learned. Each one carries its own
            permitting path, code overlay, and AHJ rhythm. Arclight has a
            workflow for each one.
          </p>
        </div>
      </div>

      {/* Horizontal split-row list */}
      <div
        style={{
          borderTop: "1px solid var(--line)",
        }}
      >
        {markets.map((m, i) => (
          <MarketRow key={m.code} {...m} index={i + 1} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .markets-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
        @media (max-width: 600px) {
          .markets-section { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}

function MarketRow({
  code,
  name,
  desc,
  icon,
  index,
}: {
  code: string
  name: string
  desc: string
  icon: React.ReactNode
  index: number
}) {
  return (
    <div
      className="market-row"
      style={{
        display: "grid",
        gridTemplateColumns: "auto 60px 1fr 2fr auto",
        gap: "2rem",
        alignItems: "center",
        padding: "1.75rem 0.5rem",
        borderBottom: "1px solid var(--line)",
        transition: "background 0.3s ease, padding 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background =
          "linear-gradient(90deg, color-mix(in srgb, var(--primary) 4%, transparent), transparent 70%)"
        const code = el.querySelector(".market-code") as HTMLElement | null
        if (code) code.style.color = "var(--primary)"
        const ic = el.querySelector(".market-icon") as HTMLElement | null
        if (ic) {
          ic.style.borderColor = "var(--primary)"
          ic.style.color = "var(--accent-warm)"
        }
        const arrow = el.querySelector(".market-arrow") as HTMLElement | null
        if (arrow) {
          arrow.style.opacity = "1"
          arrow.style.transform = "translateX(0)"
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = "transparent"
        const code = el.querySelector(".market-code") as HTMLElement | null
        if (code) code.style.color = "var(--text-faint)"
        const ic = el.querySelector(".market-icon") as HTMLElement | null
        if (ic) {
          ic.style.borderColor = "var(--line)"
          ic.style.color = "var(--primary)"
        }
        const arrow = el.querySelector(".market-arrow") as HTMLElement | null
        if (arrow) {
          arrow.style.opacity = "0"
          arrow.style.transform = "translateX(-6px)"
        }
      }}
    >
      <span
        className="market-code tech-mono"
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.14em",
          color: "var(--text-faint)",
          transition: "color 0.3s",
          minWidth: 36,
        }}
      >
        {code}
      </span>

      <div
        className="market-icon"
        style={{
          width: 48,
          height: 48,
          border: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--primary)",
          transition: "border-color 0.3s, color 0.3s",
        }}
      >
        <span style={{ width: 22, height: 22, display: "block" }}>{icon}</span>
      </div>

      <div
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 600,
          fontSize: "1.2rem",
          color: "var(--heading)",
          letterSpacing: "-0.005em",
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>

      <p
        style={{
          fontSize: "0.92rem",
          color: "var(--text-soft)",
          lineHeight: 1.65,
        }}
        className="market-desc"
      >
        {desc}
      </p>

      <span
        className="market-arrow tech-mono"
        style={{
          fontSize: "0.78rem",
          letterSpacing: "0.12em",
          color: "var(--primary)",
          opacity: 0,
          transform: "translateX(-6px)",
          transition: "opacity 0.3s, transform 0.3s",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {String(index).padStart(2, "0")} →
      </span>

      <style>{`
        @media (max-width: 800px) {
          .market-row {
            grid-template-columns: 56px 1fr !important;
            gap: 1.25rem !important;
            padding: 1.5rem 0.25rem !important;
          }
          .market-row > .market-code,
          .market-row > .market-arrow { display: none !important; }
          .market-desc { grid-column: 2 / 3 !important; }
        }
      `}</style>
    </div>
  )
}
