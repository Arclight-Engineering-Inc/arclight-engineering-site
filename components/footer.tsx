"use client"

import Image from "next/image"

const footerLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Markets", href: "#markets" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

const credentials = [
  "California PE",
  "California LC",
  "NEC 2023",
  "IEEE 1584",
  "Title 24 Pt. 6",
  "DSA · CEC",
]

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--section-alt)",
        borderTop: "1px solid var(--line)",
        padding: "5rem 3rem 2.5rem",
        position: "relative",
      }}
      className="footer-root"
    >
      {/* Decorative top spark line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -1,
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, var(--primary), transparent)",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 0.8fr 1fr",
          gap: "4rem",
          marginBottom: "3.5rem",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <Image
              src="/logos/Arclight-03.png"
              alt="Arclight Engineering"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--heading)",
              }}
            >
              Arclight Engineering
            </span>
          </div>
          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              maxWidth: "340px",
              marginBottom: "1.75rem",
            }}
          >
            Irvine-based electrical consulting. Power systems and lighting
            design for Southern California&apos;s most demanding projects.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <a
              href="mailto:abram.largoza@arclight-eng.com"
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                color: "var(--foreground)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")
              }
            >
              abram.largoza@arclight-eng.com
            </a>
            <a
              href="tel:9492883464"
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                color: "var(--foreground)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")
              }
            >
              (949) 288-3464
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div
            className="tech-mono"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
              marginBottom: "1.25rem",
            }}
          >
            Site
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem",
            }}
          >
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    color: "var(--text-soft)",
                    textDecoration: "none",
                    transition: "color 0.2s, padding-left 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = "var(--primary)"
                    el.style.paddingLeft = "4px"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = "var(--text-soft)"
                    el.style.paddingLeft = "0"
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Credentials */}
        <div>
          <div
            className="tech-mono"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
              marginBottom: "1.25rem",
            }}
          >
            Credentials
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
            }}
          >
            {credentials.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-soft)",
                  border: "1px solid var(--line)",
                  padding: "0.3rem 0.55rem",
                  background: "var(--surface-panel)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--line)",
          paddingTop: "1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "var(--text-faint)",
          }}
        >
          © {new Date().getFullYear()} Arclight Engineering Inc. · Irvine, CA
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "var(--text-faint)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 5,
              height: 5,
              background: "var(--primary)",
              borderRadius: "50%",
              boxShadow: "0 0 6px var(--primary)",
            }}
          />
          Abram Largoza, P.E., LC - Principal Engineer
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-root { padding: 3.5rem 1.5rem 2rem !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
