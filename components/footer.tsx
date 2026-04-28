"use client"

import Image from "next/image"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Markets", href: "#markets" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer
      style={{
        background: "#080a0f",
        borderTop: "1px solid #1e2535",
        padding: "4rem 3rem 2.5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "4rem",
          marginBottom: "3rem",
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
              marginBottom: "1.25rem",
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
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#f0f4ff",
              }}
            >
              Arc<span style={{ color: "#4da6ff" }}>light</span> Engineering
            </span>
          </div>
          <p
            style={{
              color: "#5a6a85",
              fontSize: "0.85rem",
              lineHeight: 1.75,
              maxWidth: "280px",
            }}
          >
            Irvine-based electrical engineering consulting. Power systems and lighting design for Southern
            California&apos;s most demanding projects.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "#5a6a85",
              lineHeight: 1.8,
            }}
          >
            <div>
              <a
                href="mailto:abram.largoza@arclight-eng.com"
                style={{ color: "#5a6a85", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4da6ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5a6a85")}
              >
                abram.largoza@arclight-eng.com
              </a>
            </div>
            <div>
              <a
                href="tel:9492883464"
                style={{ color: "#5a6a85", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4da6ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5a6a85")}
              >
                (949) 288-3464
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5a6a85",
              marginBottom: "1.25rem",
            }}
          >
            Navigation
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "#5a6a85",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c8d4e8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5a6a85")}
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
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5a6a85",
              marginBottom: "1.25rem",
            }}
          >
            Credentials
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.05em",
              color: "#5a6a85",
              lineHeight: 1.6,
            }}
          >
            {[
              "CA Licensed PE",
              "CA Licensed LC",
              "NFPA 70 · NEC 2023",
              "IEEE 1584 Arc Flash",
              "Title 24 Part 6",
              "DSA · CEC",
            ].map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#4da6ff", fontSize: "0.5rem" }}>◆</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1e2535",
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
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "#5a6a85",
          }}
        >
          © {new Date().getFullYear()} Arclight Engineering Inc. · Irvine, CA · All Rights Reserved
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "#5a6a85",
          }}
        >
          Abram Largoza, P.E., LC — Principal Engineer
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
          footer { padding: 3rem 1.5rem 2rem !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
