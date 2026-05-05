"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Markets", href: "#markets" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

function subscribe() {
  return () => {}
}

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

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
        padding: scrolled ? "0.8rem 3rem" : "1rem 3rem",
        background: scrolled ? "var(--nav-bg-solid)" : "var(--nav-bg)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "padding 0.25s ease, background 0.25s ease, border-color 0.25s ease",
      }}
      className="nav-root"
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: 2,
              background: "radial-gradient(circle, var(--brand-glow), transparent 70%)",
              filter: "blur(6px)",
            }}
          />
          <Image
            src="/logos/Arclight-03.png"
            alt=""
            width={34}
            height={34}
            style={{ position: "relative", objectFit: "contain" }}
          />
        </span>
        <span
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--heading)",
          }}
        >
          Arclight
        </span>
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2.25rem",
          listStyle: "none",
        }}
        className="nav-links"
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="nav-link"
              style={{
                position: "relative",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-soft)",
                textDecoration: "none",
                paddingBottom: "4px",
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        style={{
          width: 34,
          height: 34,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--line)",
          background: "var(--surface-panel)",
          color: "var(--heading)",
          cursor: "pointer",
        }}
        className="theme-toggle"
      >
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </button>

      {/* Mobile hamburger */}
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="nav-hamburger"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--heading)",
          flexDirection: "column",
          gap: "5px",
          padding: 6,
        }}
      >
        <span
          style={{
            display: "block",
            width: 22,
            height: 1.5,
            background: "currentColor",
            transition: "transform 0.2s",
            transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: 22,
            height: 1.5,
            background: "currentColor",
            opacity: open ? 0 : 1,
            transition: "opacity 0.2s",
          }}
        />
        <span
          style={{
            display: "block",
            width: 22,
            height: 1.5,
            background: "currentColor",
            transition: "transform 0.2s",
            transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Mobile drawer */}
      <div
        className="nav-drawer"
        aria-hidden={!open}
        style={{
          position: "fixed",
          top: scrolled ? 60 : 70,
          left: 0,
          right: 0,
          background: "var(--nav-bg-solid)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--line)",
          padding: "1.5rem 1.5rem 2rem",
          maxHeight: 500,
          overflow: "hidden",
          transition: "max-height 0.3s ease, padding 0.3s ease",
          display: "none",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--heading)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover {
          color: var(--heading) !important;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        @media (max-width: 860px) {
          .nav-root { padding: 0.95rem 1.25rem !important; }
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-drawer[aria-hidden="false"] { display: block !important; }
          .theme-toggle { margin-left: auto; }
        }
      `}</style>
    </nav>
  )
}
