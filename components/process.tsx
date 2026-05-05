const phases = [
  {
    num: "01",
    title: "Discovery & Programming",
    desc: "Kickoff, utility coordination, load assessment, and design criteria. We surface the constraints before they become RFIs.",
    deliverables: ["Basis of Design", "Utility Coord. Memo", "Load Calc Draft"],
  },
  {
    num: "02",
    title: "Schematic & Design Development",
    desc: "Single-line diagrams, fault current and photometric analysis, equipment selection. Owner reviews at SD and DD with red-line cycles.",
    deliverables: ["One-Line Diagram", "Photometrics", "Equipment Cuts"],
  },
  {
    num: "03",
    title: "Construction Documents",
    desc: "Permit-ready drawings, technical specifications, and bid coordination. DSA and agency submittals as required.",
    deliverables: ["100% CDs", "Specs", "AHJ Submittal"],
  },
  {
    num: "04",
    title: "Construction Administration",
    desc: "RFIs, submittal review, field observation, and punch list through closeout. Permits signed off, owner walkthrough complete.",
    deliverables: ["RFI Log", "Field Reports", "Closeout Package"],
  },
]

export function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "8rem 3rem",
        background: "var(--section-alt)",
        position: "relative",
        scrollMarginTop: "5rem",
      }}
      className="process-section"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) 2fr",
          gap: "4rem",
          marginBottom: "5rem",
          alignItems: "end",
        }}
        className="process-header"
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
            (04) Approach
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
            Four phases.
            <br />
            No black boxes.
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
            Concept to
            <span style={{ color: "var(--primary)" }}> closeout</span>, on a schedule
            you can plan around.
          </h2>
          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            Every phase ends with a deliverable in your inbox and a checkpoint
            on the calendar. You always know what&apos;s being engineered, what
            arrives next, and when.
          </p>
        </div>
      </div>

      {/* Phase cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
          position: "relative",
        }}
        className="process-steps"
      >
        {/* Connecting line */}
        <div
          style={{
            position: "absolute",
            top: "1.4rem",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, var(--primary) 0%, var(--line) 12%, var(--line) 88%, transparent)",
            zIndex: 0,
          }}
          className="process-line"
        />

        {phases.map((p, i) => (
          <div
            key={p.num}
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
            className="process-step"
          >
            {/* Marker */}
            <div
              style={{
                width: "2.8rem",
                height: "2.8rem",
                border: "1px solid var(--line)",
                background: i === 0 ? "var(--primary)" : "var(--section-alt)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                color: i === 0 ? "var(--section-alt)" : "var(--text-faint)",
                fontWeight: 600,
                transition: "all 0.3s",
              }}
              className="process-marker"
            >
              {p.num}
            </div>

            <div
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "var(--heading)",
                letterSpacing: "-0.005em",
                lineHeight: 1.25,
              }}
            >
              {p.title}
            </div>

            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-soft)",
                lineHeight: 1.65,
              }}
            >
              {p.desc}
            </p>

            {/* Deliverables */}
            <div
              style={{
                marginTop: "auto",
                paddingTop: "1.25rem",
                borderTop: "1px dashed var(--line)",
              }}
            >
              <div
                className="tech-mono"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-faint)",
                  marginBottom: "0.6rem",
                }}
              >
                Deliverables
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                {p.deliverables.map((d) => (
                  <li
                    key={d}
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.78rem",
                      color: "var(--foreground)",
                      letterSpacing: "0.04em",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--primary)", fontSize: "0.72rem" }}>
                      ◆
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .process-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .process-steps { grid-template-columns: repeat(2, 1fr) !important; gap: 2.5rem !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 600px) {
          .process-steps { grid-template-columns: 1fr !important; }
          .process-section { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
