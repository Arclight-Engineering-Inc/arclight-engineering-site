"use client"

import Image from "next/image"

const credentials = [
  "Licensed Professional Electrical Engineer — State of California",
  "NEC 2023 / NFPA 70 / NFPA 110 Compliant Design",
  "IEEE 1584 Arc Flash Analysis",
  "Title 24 Part 6 Energy Code Expertise",
  "DSA Submittal Experience",
  "CalGreen Compliance Documentation",
]

export function About() {
  return (
    <section id="about" style={{ padding: "7rem 3rem", background: "#080a0f" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Visual */}
        <div
          style={{
            position: "relative",
            aspectRatio: "4/5",
            background: "#111520",
            border: "1px solid #1e2535",
            overflow: "hidden",
          }}
        >
          {/* Corner accents */}
          {(["tl", "tr", "bl", "br"] as const).map((pos) => (
            <div
              key={pos}
              style={{
                position: "absolute",
                width: 20,
                height: 20,
                borderColor: "#4da6ff",
                borderStyle: "solid",
                ...(pos === "tl"
                  ? { top: 12, left: 12, borderWidth: "1px 0 0 1px" }
                  : pos === "tr"
                    ? { top: 12, right: 12, borderWidth: "1px 1px 0 0" }
                    : pos === "bl"
                      ? { bottom: 12, left: 12, borderWidth: "0 0 1px 1px" }
                      : { bottom: 12, right: 12, borderWidth: "0 1px 1px 0" }),
              }}
            />
          ))}

          {/* Logo display */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "2rem",
              padding: "2rem",
            }}
          >
            <Image
              src="/logos/Arclight-01.png"
              alt="Arclight Engineering"
              width={280}
              height={280}
              style={{ objectFit: "contain", animation: "schemaPulse 4s ease-in-out infinite" }}
            />
          </div>

          {/* Scan line overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(77,166,255,0.015) 2px, rgba(77,166,255,0.015) 4px)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Text */}
        <div>
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
            <span
              style={{ display: "block", width: "2rem", height: "1px", background: "#4da6ff", flexShrink: 0 }}
            />
            About Arclight
          </div>

          <h2
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              textTransform: "uppercase",
              color: "#f0f4ff",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Engineering Expertise.
            <br />
            Built Into Every Circuit.
          </h2>

          <blockquote
            style={{
              borderLeft: "2px solid #4da6ff",
              paddingLeft: "1.5rem",
              margin: "1.5rem 0 2rem",
              fontSize: "1.05rem",
              color: "#c8d4e8",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            &ldquo;We bring the rigor of large-firm engineering to the accessibility and responsiveness of a
            focused boutique practice.&rdquo;
          </blockquote>

          <p
            style={{
              color: "#5a6a85",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            Arclight Engineering Inc. is an Irvine-based electrical engineering consulting firm specializing
            in power systems and lighting design for commercial developers, educational institutions, and
            private owners across Southern California.
          </p>
          <p
            style={{
              color: "#5a6a85",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Principal engineer Abram Largoza, P.E., LC, delivers rigorous, code-compliant design with the
            agility and direct accountability that complex projects demand.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {credentials.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "#5a6a85",
                }}
              >
                <span style={{ color: "#4da6ff", fontSize: "0.65rem" }}>‣</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes schemaPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          #about { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
