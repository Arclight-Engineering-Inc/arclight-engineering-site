"use client"

const services = [
  {
    num: "01",
    title: "Power Distribution Design",
    desc: "Service entrance design, switchgear/MCC layouts, feeder sizing, panel schedules, and NEC-compliant one-line diagrams for commercial and institutional projects.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 44, height: 44, color: "#4da6ff" }}>
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
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 44, height: 44, color: "#4da6ff" }}>
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
    desc: "Generator sizing, ATS coordination, NFPA 110 compliance, and NEC Article 700/701/702 emergency system design for critical facilities.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 44, height: 44, color: "#4da6ff" }}>
        <polygon points="22,4 38,36 6,36" />
        <line x1="22" y1="16" x2="22" y2="24" />
        <circle cx="22" cy="30" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Short Circuit & Arc Flash Studies",
    desc: "ETAP-based load flow, short circuit, coordination, and arc flash hazard analysis per IEEE 1584. Protective device coordination and PPE labeling.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 44, height: 44, color: "#4da6ff" }}>
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
    desc: "IES roadway classifications, photometric modeling, and NEC-compliant street lighting distribution systems for public agencies.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 44, height: 44, color: "#4da6ff" }}>
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
    desc: "RFI response, submittal review, field observation, and punch-list support through project closeout. Bluebeam-based collaborative review workflows.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 44, height: 44, color: "#4da6ff" }}>
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

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  )
}

export function Services() {
  return (
    <section
      id="services"
      style={{ padding: "7rem 3rem", background: "#0d1017" }}
    >
      <SectionTag>What We Do</SectionTag>
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
        Engineering Services
      </h2>
      <p
        style={{
          color: "#5a6a85",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          maxWidth: "500px",
          marginBottom: "4rem",
        }}
      >
        From concept through closeout, Arclight provides full-scope electrical engineering for complex
        commercial, educational, and infrastructure projects.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "#1e2535",
          border: "1px solid #1e2535",
        }}
        className="services-grid"
      >
        {services.map((s) => (
          <ServiceCard key={s.num} {...s} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          #services { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({
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
      className="service-card"
      style={{
        background: "#0d1017",
        padding: "2.5rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = "#111520"
        const bar = el.querySelector(".service-top-bar") as HTMLElement | null
        if (bar) bar.style.opacity = "1"
        const link = el.querySelector(".service-link") as HTMLElement | null
        if (link) link.style.opacity = "1"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = "#0d1017"
        const bar = el.querySelector(".service-top-bar") as HTMLElement | null
        if (bar) bar.style.opacity = "0"
        const link = el.querySelector(".service-link") as HTMLElement | null
        if (link) link.style.opacity = "0"
      }}
    >
      <div
        className="service-top-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #4da6ff, transparent)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.65rem",
          color: "#5a6a85",
          letterSpacing: "0.2em",
          marginBottom: "1.5rem",
        }}
      >
        {num} —
      </div>
      <div style={{ marginBottom: "1.5rem" }}>{icon}</div>
      <div
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#f0f4ff",
          marginBottom: "0.8rem",
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: "0.875rem", color: "#5a6a85", lineHeight: 1.75 }}>{desc}</p>
      <a
        href="#contact"
        className="service-link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1.5rem",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#4da6ff",
          textDecoration: "none",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        Inquire →
      </a>
    </div>
  )
}
