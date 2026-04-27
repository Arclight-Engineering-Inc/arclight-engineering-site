"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Markets", href: "#markets" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 3rem",
        background: "rgba(8,10,15,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #1e2535",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image
          src="/logos/Arclight-03.png"
          alt="Arclight Engineering"
          width={36}
          height={36}
          style={{ objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 800,
            fontSize: "1.25rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#f0f4ff",
          }}
        >
          Arc<span style={{ color: "#4da6ff" }}>light</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
        }}
        className="nav-links"
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5a6a85",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#4da6ff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5a6a85")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          background: "transparent",
          border: "1px solid #4da6ff",
          color: "#4da6ff",
          padding: "0.55rem 1.4rem",
          cursor: "pointer",
          transition: "background 0.2s, color 0.2s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = "#4da6ff"
          el.style.color = "#080a0f"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = "transparent"
          el.style.color = "#4da6ff"
        }}
      >
        Get a Proposal
      </a>

      {/* Mobile hamburger — hidden on desktop via CSS */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="nav-hamburger"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#c8d4e8",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <span style={{ display: "block", width: 22, height: 1.5, background: "currentColor" }} />
        <span style={{ display: "block", width: 22, height: 1.5, background: "currentColor" }} />
        <span style={{ display: "block", width: 22, height: 1.5, background: "currentColor" }} />
      </button>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
