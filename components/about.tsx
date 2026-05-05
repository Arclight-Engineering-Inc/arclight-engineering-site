"use client"

import Image from "next/image"

const credentials = [
  { code: "PE", label: "Licensed Professional Electrical Engineer (CA)" },
  { code: "LC", label: "Lighting Certified - NCQLP" },
  { code: "NEC", label: "NEC 2023 / NFPA 70 / NFPA 110 design" },
  { code: "1584", label: "IEEE 1584 Arc Flash analysis" },
  { code: "T24", label: "Title 24 Part 6 energy compliance" },
  { code: "DSA", label: "Division of the State Architect submittals" },
]

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 3rem",
        background: "var(--section-alt)",
        scrollMarginTop: "5rem",
      }}
      className="about-section"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.85fr 1.1fr",
          gap: "5rem",
          alignItems: "stretch",
        }}
        className="about-grid"
      >
        {/* Left principal card */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Logo plate */}
          <div
            style={{
              position: "relative",
              background:
                "linear-gradient(160deg, var(--surface-raised) 0%, var(--surface) 60%, var(--background) 100%)",
              border: "1px solid var(--line)",
              padding: "3rem 2.5rem",
              flex: 1,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            {/* Corner brackets */}
            {(["tl", "tr", "bl", "br"] as const).map((pos) => (
              <div
                key={pos}
                aria-hidden
                style={{
                  position: "absolute",
                  width: 18,
                  height: 18,
                  borderColor: "var(--primary)",
                  borderStyle: "solid",
                  ...(pos === "tl"
                    ? { top: 10, left: 10, borderWidth: "1px 0 0 1px" }
                    : pos === "tr"
                      ? { top: 10, right: 10, borderWidth: "1px 1px 0 0" }
                      : pos === "bl"
                        ? { bottom: 10, left: 10, borderWidth: "0 0 1px 1px" }
                        : { bottom: 10, right: 10, borderWidth: "0 1px 1px 0" }),
                }}
              />
            ))}

            {/* Top file marker */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-faint)",
              }}
            >
              <div>
                <div style={{ color: "var(--primary)", marginBottom: 4 }}>
                  Principal
                </div>
                <div>Arclight / 2026</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div>Sheet</div>
                <div style={{ color: "var(--foreground)" }}>A-001</div>
              </div>
            </div>

            {/* Logo center */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "1rem 0",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 240,
                  height: 240,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Glow halo */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: -40,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, color-mix(in srgb, var(--accent-warm) 15%, transparent), transparent 65%)",
                  }}
                />
                <Image
                  src="/logos/Arclight-01.png"
                  alt="Arclight Engineering"
                  width={240}
                  height={240}
                  style={{
                    position: "relative",
                    objectFit: "contain",
                    animation: "schemaPulse 5s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Bottom engineer of record */}
            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  className="tech-mono"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    marginBottom: 6,
                  }}
                >
                  Engineer of Record
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "var(--heading)",
                    letterSpacing: "0.01em",
                  }}
                >
                  Abram Largoza
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.78rem",
                    color: "var(--primary)",
                    letterSpacing: "0.16em",
                    marginTop: 2,
                  }}
                >
                  P.E. · LC
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  color: "var(--text-faint)",
                  textAlign: "right",
                  lineHeight: 1.6,
                }}
              >
                <div>Irvine, CA</div>
                <div>92618</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right narrative */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="tech-mono"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "1.5rem",
            }}
          >
            (02) The Firm
          </div>

          <h2
            className="display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "var(--heading)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              marginBottom: "1.75rem",
            }}
          >
            Big-firm rigor.
            <br />
            <span style={{ color: "var(--primary)" }}>Boutique </span>
            <span style={{ fontStyle: "italic", fontWeight: 600 }}>
              accountability.
            </span>
          </h2>

          <p
            style={{
              color: "var(--foreground)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Arclight Engineering is an Irvine-based electrical consulting firm
            serving commercial developers, educational institutions, and
            private owners across Southern California.
          </p>
          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "0.98rem",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            Principal engineer Abram Largoza, P.E., LC, brings the technical
            depth of a major-market practice, plus the direct line that complex
            projects actually need. You talk to the engineer signing the
            drawings. Calls get returned. RFIs get answered.
          </p>

          {/* Credentials list as a compact data block */}
          <div
            style={{
              border: "1px solid var(--line)",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--surface-raised) 40%, transparent), color-mix(in srgb, var(--surface) 40%, transparent))",
              padding: "1.5rem 1.75rem",
            }}
          >
            <div
              className="tech-mono"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-faint)",
                marginBottom: "1rem",
              }}
            >
              Credentials & Standards
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem 1.5rem",
              }}
              className="creds-grid"
            >
              {credentials.map((c) => (
                <div
                  key={c.code}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      minWidth: 42,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.2rem 0.45rem",
                      border: "1px solid var(--line-strong)",
                      background: "color-mix(in srgb, var(--primary) 6%, transparent)",
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      color: "var(--primary)",
                    }}
                  >
                    {c.code}
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--foreground)",
                      lineHeight: 1.5,
                      paddingTop: 2,
                    }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes schemaPulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        @media (max-width: 1000px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .about-section { padding: 5rem 1.5rem !important; }
          .creds-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
