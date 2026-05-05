"use client"

const solutions = [
  {
    num: "01",
    title: "Power Distribution Design",
    desc: "Utility entrance, switchgear and MCC layouts, feeder sizing, panel schedules, and one-line diagrams that support utility coordination and AHJ review.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="8" width="32" height="28" rx="1" />
        <line x1="6" y1="16" x2="38" y2="16" />
        <line x1="6" y1="28" x2="38" y2="28" />
        <line x1="18" y1="8" x2="18" y2="36" />
        <circle cx="12" cy="22" r="2" fill="currentColor" stroke="none" />
        <circle cx="26" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Lighting Design",
    desc: "Photometric analysis, Title 24 Part 6 compliance, fixture schedules, and emergency egress lighting for interior and exterior environments.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="22" cy="18" r="8" />
        <line x1="22" y1="4" x2="22" y2="8" />
        <line x1="22" y1="32" x2="22" y2="40" />
        <line x1="8" y1="18" x2="4" y2="18" />
        <line x1="38" y1="18" x2="34" y2="18" />
        <line x1="12.5" y1="7.5" x2="15.3" y2="10.3" />
        <line x1="31.5" y1="7.5" x2="28.7" y2="10.3" />
        <line x1="18" y1="36" x2="26" y2="36" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Emergency & Standby Systems",
    desc: "Generator sizing, ATS coordination, NFPA 110 compliance, and NEC Article 700/701/702 emergency system design for facilities that cannot go dark.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="22,4 38,36 6,36" />
        <line x1="22" y1="16" x2="22" y2="24" />
        <circle cx="22" cy="30" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Short Circuit & Arc Flash Studies",
    desc: "ETAP-based load flow, short circuit, coordination, and IEEE 1584 arc flash analysis. Protective device coordination and PPE labeling delivered with the report.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="10" width="32" height="24" rx="1" />
        <line x1="14" y1="10" x2="14" y2="34" />
        <line x1="30" y1="10" x2="30" y2="34" />
        <line x1="6" y1="22" x2="38" y2="22" />
        <circle cx="22" cy="16" r="2" fill="currentColor" stroke="none" />
        <circle cx="22" cy="28" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Street & Site Lighting",
    desc: "IES roadway classifications, photometric modeling, and code-compliant street and site lighting distribution for public agencies and developers.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 34 L8 18 L22 8 L36 18 L36 34 Z" />
        <rect x="17" y="24" width="10" height="10" />
        <line x1="22" y1="8" x2="22" y2="4" />
        <line x1="16" y1="22" x2="28" y2="22" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Construction Support & Closeout",
    desc: "RFI response, submittal review, field observation, and punch-list support through closeout. Arclight marks up comments in Bluebeam and returns answers quickly.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="10" y="6" width="24" height="32" rx="1" />
        <line x1="10" y1="14" x2="34" y2="14" />
        <line x1="10" y1="30" x2="34" y2="30" />
        <circle cx="22" cy="22" r="4" />
        <line x1="22" y1="18" x2="22" y2="26" />
        <line x1="18" y1="22" x2="26" y2="22" />
      </svg>
    ),
  },
]

export function Solutions() {
  return (
    <section
      id="solutions"
      style={{
        padding: "8rem 3rem 7rem",
        background: "var(--background)",
        position: "relative",
        scrollMarginTop: "5rem",
      }}
      className="solutions-section"
    >
      {/* Section header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(200px, 1fr) 2fr",
          gap: "4rem",
          marginBottom: "5rem",
          alignItems: "end",
        }}
        className="solutions-header"
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
            (01) Capabilities
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
            Full-scope electrical
            <br />
            engineering, in-house.
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
            From the one-line to
            <span style={{ color: "var(--primary)" }}> closeout</span>.
          </h2>
          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "620px",
            }}
          >
            Six solution areas, one principal engineer of record. Every drawing,
            calculation, and submittal carries the same stamp.
          </p>
        </div>
      </div>

      {/* Solutions grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--line)",
          border: "1px solid var(--line)",
        }}
        className="solutions-grid"
      >
        {solutions.map((s) => (
          <SolutionCard key={s.num} {...s} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solutions-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .solutions-grid { grid-template-columns: 1fr !important; }
          .solutions-section { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}

function SolutionCard({
  num,
  title,
  desc,
  icon,
}: {
  num: string
  title: string
  desc: string
  icon: React.ReactNode
}) {
  return (
    <div
      className="solution-card"
      style={{
        background: "var(--background)",
        padding: "2.5rem 2rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.35s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = "var(--surface-raised)"
        const bar = el.querySelector(".solution-top-bar") as HTMLElement | null
        if (bar) bar.style.transform = "scaleX(1)"
        const ic = el.querySelector(".solution-icon") as HTMLElement | null
        if (ic) ic.style.color = "var(--accent-warm)"
        const link = el.querySelector(".solution-link") as HTMLElement | null
        if (link) {
          link.style.opacity = "1"
          link.style.transform = "translateX(0)"
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = "var(--background)"
        const bar = el.querySelector(".solution-top-bar") as HTMLElement | null
        if (bar) bar.style.transform = "scaleX(0)"
        const ic = el.querySelector(".solution-icon") as HTMLElement | null
        if (ic) ic.style.color = "var(--primary)"
        const link = el.querySelector(".solution-link") as HTMLElement | null
        if (link) {
          link.style.opacity = "0"
          link.style.transform = "translateX(-4px)"
        }
      }}
    >
      <div
        className="solution-top-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--primary) 50%, var(--accent-warm) 90%, transparent)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Top row: number + icon */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 300,
            fontSize: "2.5rem",
            color: "var(--line)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {num}
        </div>
        <div
          className="solution-icon"
          style={{
            width: 36,
            height: 36,
            color: "var(--primary)",
            transition: "color 0.3s ease",
          }}
        >
          {icon}
        </div>
      </div>

      <div
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 600,
          fontSize: "1.18rem",
          color: "var(--heading)",
          marginBottom: "0.85rem",
          letterSpacing: "-0.005em",
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--text-soft)",
          lineHeight: 1.7,
        }}
      >
        {desc}
      </p>
      <a
        href="#contact"
        className="solution-link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1.5rem",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--primary)",
          textDecoration: "none",
          opacity: 0,
          transform: "translateX(-4px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        Discuss scope <span aria-hidden>→</span>
      </a>
    </div>
  )
}
