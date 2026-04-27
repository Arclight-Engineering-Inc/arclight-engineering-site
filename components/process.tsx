const phases = [
  {
    num: "Phase 01",
    title: "Discovery & Programming",
    desc: "Project kickoff, utility coordination, load assessment, applicable code research, and design criteria establishment.",
  },
  {
    num: "Phase 02",
    title: "Schematic & Design Development",
    desc: "Single-line diagrams, fault current analysis, photometric modeling, and equipment selection with owner review.",
  },
  {
    num: "Phase 03",
    title: "Construction Documents",
    desc: "Permit-ready drawings, technical specifications, and bid-package coordination. Agency and DSA submittals as required.",
  },
  {
    num: "Phase 04",
    title: "Construction Administration",
    desc: "RFI responses, submittal review, field observations, and punch-list coordination through final project closeout and permit sign-off.",
  },
]

export function Process() {
  return (
    <section id="process" style={{ padding: "7rem 3rem", background: "#080a0f" }}>
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
        Our Approach
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
        From Concept to Closeout
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
        A structured engineering process ensures code compliance, constructability, and client confidence at
        every milestone.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          position: "relative",
        }}
        className="process-steps"
      >
        {/* Connecting line */}
        <div
          style={{
            position: "absolute",
            top: "1.75rem",
            left: "2.5rem",
            right: "2.5rem",
            height: "1px",
            background: "#1e2535",
            zIndex: 0,
          }}
          className="process-line"
        />

        {phases.map((p, i) => (
          <div
            key={p.num}
            style={{
              padding: "0 2rem 0 0",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Step dot */}
            <div
              style={{
                width: "3.5rem",
                height: "3.5rem",
                border: "1px solid #1e2535",
                background: "#080a0f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  background: i === 0 ? "#4da6ff" : "#1e2535",
                  transition: "background 0.3s",
                }}
              />
              {/* Blue top accent on first */}
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "#4da6ff",
                  }}
                />
              )}
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.65rem",
                color: "#4da6ff",
                letterSpacing: "0.2em",
                marginBottom: "0.6rem",
              }}
            >
              {p.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                textTransform: "uppercase",
                color: "#f0f4ff",
                letterSpacing: "0.03em",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              {p.title}
            </div>
            <p style={{ fontSize: "0.875rem", color: "#5a6a85", lineHeight: 1.75 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-steps { grid-template-columns: repeat(2, 1fr) !important; gap: 2.5rem !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 600px) {
          .process-steps { grid-template-columns: 1fr !important; }
          #process { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
