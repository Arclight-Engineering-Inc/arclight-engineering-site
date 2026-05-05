"use client"

import { useRef, useState, useTransition } from "react"
import { toast } from "sonner"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitContactForm } from "@/app/actions/contact"

const contactItems = [
  {
    label: "Location",
    value: "Irvine, California 92618",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        style={{ width: 16, height: 16 }}
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        style={{ width: 16, height: 16 }}
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        style={{ width: 16, height: 16 }}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16h.27a2 2 0 0 1-.08.92z" />
      </svg>
    ),
  },
  {
    label: "Response Time",
    value: "Within 24 business hours",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        style={{ width: 16, height: 16 }}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const serviceOptions = [
  { value: "power", label: "Power Distribution Design" },
  { value: "lighting", label: "Lighting Design" },
  { value: "emergency", label: "Emergency / Standby Systems" },
  { value: "arc-flash", label: "Short Circuit & Arc Flash Study" },
  { value: "street-lighting", label: "Street & Site Lighting" },
  { value: "ev", label: "EV Infrastructure" },
  { value: "other", label: "Other / General Inquiry" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [projectType, setProjectType] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    if (projectType) formData.set("projectType", projectType)

    const toastId = toast.loading("Sending your inquiry…")

    startTransition(async () => {
      const result = await submitContactForm(formData)

      if ("error" in result) {
        toast.error(result.error, {
          id: toastId,
          description:
            "Please try again or email us directly at abram.largoza@arclight-eng.com",
          duration: 6000,
        })
      } else {
        toast.success("Inquiry sent!", {
          id: toastId,
          description:
            "Arclight Engineering will respond within 24 business hours.",
          duration: 5000,
        })
        setSubmitted(true)
        formRef.current?.reset()
        setProjectType(null)
      }
    })
  }

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 3rem",
        background: "var(--background)",
        position: "relative",
        scrollMarginTop: "5rem",
      }}
      className="contact-section"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) 2fr",
          gap: "4rem",
          marginBottom: "4rem",
          alignItems: "end",
        }}
        className="contact-header"
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
            (05) Contact
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
            One inbox.
            <br />
            One engineer of record.
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
            Tell us about
            <span style={{ color: "var(--primary)" }}> the project</span>.
          </h2>
          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "620px",
            }}
          >
            Developer scoping a new build? A/E firm looking for a focused
            electrical sub? Send the scope, location, and timeline. Arclight
            will respond with next steps.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Info column */}
        <div>
          <div
            style={{
              border: "1px solid var(--line)",
              padding: "2rem 1.75rem",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--surface-raised) 60%, transparent), color-mix(in srgb, var(--surface) 60%, transparent))",
              position: "relative",
            }}
          >
            <div
              className="tech-mono"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-faint)",
                marginBottom: "1.5rem",
              }}
            >
              Direct lines
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.9rem",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      border: "1px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      className="tech-mono"
                      style={{
                        fontSize: "0.72rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--text-faint)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--foreground)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                          wordBreak: "break-word",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--primary)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--foreground)")
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--foreground)",
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.75rem",
                paddingTop: "1.25rem",
                borderTop: "1px dashed var(--line)",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.75rem",
                color: "var(--text-faint)",
                letterSpacing: "0.1em",
                lineHeight: 1.7,
              }}
            >
              Replies come from Abram, not a virtual assistant.
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--surface-raised) 70%, transparent), color-mix(in srgb, var(--surface) 70%, transparent))",
                border: "1px solid var(--line)",
                padding: "3.5rem 2.5rem",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Corner brackets */}
              {(["tl", "tr", "bl", "br"] as const).map((pos) => (
                <span
                  key={pos}
                  aria-hidden
                  style={{
                    position: "absolute",
                    width: 16,
                    height: 16,
                    borderColor: "var(--primary)",
                    borderStyle: "solid",
                    ...(pos === "tl"
                      ? { top: 8, left: 8, borderWidth: "1px 0 0 1px" }
                      : pos === "tr"
                        ? { top: 8, right: 8, borderWidth: "1px 1px 0 0" }
                        : pos === "bl"
                          ? { bottom: 8, left: 8, borderWidth: "0 0 1px 1px" }
                          : {
                              bottom: 8,
                              right: 8,
                              borderWidth: "0 1px 1px 0",
                            }),
                  }}
                />
              ))}
              <div
                style={{
                  color: "var(--primary)",
                  fontSize: "2.25rem",
                  marginBottom: "1rem",
                }}
              >
                ✓
              </div>
              <div
                className="display"
                style={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--heading)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Inquiry received.
              </div>
              <p
                style={{
                  color: "var(--text-soft)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  maxWidth: 380,
                  margin: "0 auto",
                }}
              >
                Abram will respond within 24 business hours. Most replies arrive
                the same day.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>First Name</FieldLabel>
                    <Input name="firstName" placeholder="John" required />
                  </Field>
                  <Field>
                    <FieldLabel>Last Name</FieldLabel>
                    <Input name="lastName" placeholder="Smith" required />
                  </Field>
                </div>

                <Field>
                  <FieldLabel>Company / Agency</FieldLabel>
                  <Input name="company" placeholder="Your organization" />
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Project Type</FieldLabel>
                  <Select
                    value={projectType}
                    onValueChange={setProjectType}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a solution area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Project Description</FieldLabel>
                  <Textarea
                    name="description"
                    rows={5}
                    placeholder="Scope, location, timeline, anything else worth knowing…"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isPending}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    background: isPending ? "color-mix(in srgb, var(--primary) 62%, var(--line))" : "var(--primary)",
                    color: "var(--section-alt)",
                    border: "none",
                    padding: "1.05rem",
                    cursor: isPending ? "not-allowed" : "pointer",
                    transition: "box-shadow 0.2s, background 0.2s",
                    fontWeight: 600,
                    width: "100%",
                    opacity: isPending ? 0.7 : 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!isPending)
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 28px color-mix(in srgb, var(--primary) 45%, transparent)"
                  }}
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.boxShadow = "none")
                  }
                >
                  {isPending ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Inquiry
                      <span aria-hidden style={{ fontSize: "0.85rem" }}>→</span>
                    </>
                  )}
                </button>
              </FieldGroup>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .contact-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 600px) {
          .contact-section { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
