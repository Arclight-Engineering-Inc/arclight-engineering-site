"use client"

export function CtaStrip() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, var(--surface) 0%, var(--surface-raised) 50%, var(--surface) 100%)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "5rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}
      className="cta-strip"
    >
      {/* Diagonal accent line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: "10%",
          width: 1,
          height: "100%",
          background:
            "linear-gradient(180deg, transparent, var(--primary) 50%, transparent)",
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, color-mix(in srgb, var(--primary) 8%, transparent), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
          position: "relative",
          maxWidth: 1400,
          margin: "0 auto",
        }}
        className="cta-inner"
      >
        <div>
          <div
            className="tech-mono"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                background: "var(--accent-warm)",
                borderRadius: "50%",
                boxShadow: "0 0 8px var(--accent-warm)",
              }}
            />
            Open for new work
          </div>
          <h3
            className="display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "var(--heading)",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              maxWidth: 720,
            }}
          >
            Have drawings that need a stamp,
            <br />
            <span style={{ color: "var(--primary)" }}>
              or a project that needs a plan?
            </span>
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "var(--primary)",
              color: "var(--section-alt)",
              border: "none",
              padding: "1rem 2.25rem",
              cursor: "pointer",
              transition: "box-shadow 0.2s, transform 0.15s",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.boxShadow = "0 0 32px color-mix(in srgb, var(--primary) 55%, transparent)"
              el.style.transform = "translateY(-1px)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.boxShadow = "none"
              el.style.transform = "translateY(0)"
            }}
          >
            Start a Project
            <span aria-hidden style={{ fontSize: "0.85rem" }}>→</span>
          </a>
          <a
            href="mailto:abram.largoza@arclight-eng.com"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              textDecoration: "none",
              padding: "1rem 0.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")
            }
          >
            or email direct
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .cta-strip { padding: 3.5rem 1.5rem !important; }
          .cta-inner { gap: 2rem !important; }
        }
      `}</style>
    </div>
  )
}
