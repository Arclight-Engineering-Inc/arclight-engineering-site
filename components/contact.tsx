"use client"

import { useState } from "react"

const contactItems = [
  {
    label: "Location",
    value: "Irvine, California 92618",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "abram.largoza@arclight-eng.com",
    href: "mailto:abram.largoza@arclight-eng.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(949) 288-3464",
    href: "tel:9492883464",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16h.27a2 2 0 0 1-.08.92z" />
      </svg>
    ),
  },
  {
    label: "Typical Response",
    value: "Within 24 Business Hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#111520",
  border: "1px solid #1e2535",
  color: "#c8d4e8",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  fontFamily: "var(--font-body), sans-serif",
  fontWeight: 300,
  outline: "none",
  transition: "border-color 0.2s",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono), monospace",
  fontSize: "0.65rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#5a6a85",
  marginBottom: "0.5rem",
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ padding: "7rem 3rem", background: "#0d1017" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "6rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Info */}
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
            Contact
          </div>

          <h2
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              color: "#f0f4ff",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Work Together
          </h2>

          <p
            style={{
              color: "#5a6a85",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "380px",
            }}
          >
            Whether you&apos;re a developer scoping a new project or an A/E firm seeking a focused electrical
            subconsultant, Arclight Engineering is ready to deliver.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {contactItems.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid #1e2535",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#4da6ff",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#5a6a85",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: "0.9rem",
                        color: "#c8d4e8",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4da6ff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#c8d4e8")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: "0.9rem", color: "#c8d4e8" }}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div
              style={{
                background: "#111520",
                border: "1px solid #1e2535",
                padding: "3rem",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#4da6ff", fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
              <div
                style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  color: "#f0f4ff",
                  marginBottom: "0.75rem",
                }}
              >
                Inquiry Received
              </div>
              <p style={{ color: "#5a6a85", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Thank you — Arclight Engineering will respond within 24 business hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    required
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4da6ff")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e2535")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    required
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4da6ff")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e2535")}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Company / Agency</label>
                <input
                  type="text"
                  placeholder="Your organization"
                  style={inputStyle}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4da6ff")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e2535")}
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4da6ff")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e2535")}
                />
              </div>

              <div>
                <label style={labelStyle}>Project Type</label>
                <select
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4da6ff")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e2535")}
                >
                  <option value="">— Select a service area —</option>
                  <option>Power Distribution Design</option>
                  <option>Lighting Design</option>
                  <option>Emergency / Standby Systems</option>
                  <option>Short Circuit &amp; Arc Flash Study</option>
                  <option>Street &amp; Site Lighting</option>
                  <option>EV Infrastructure</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Project Description</label>
                <textarea
                  rows={5}
                  placeholder="Brief description of your project scope, timeline, and location..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4da6ff")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e2535")}
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  background: "#4da6ff",
                  color: "#080a0f",
                  border: "none",
                  padding: "1rem",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s",
                  fontWeight: 600,
                  width: "100%",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(77,166,255,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow = "none")
                }
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #contact { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
