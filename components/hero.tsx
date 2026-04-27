"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const GRID = 60
    type ArcObj = { x1: number; y1: number; x2: number; y2: number; t: number; speed: number }
    type Node = { x: number; y: number; pulse: number; speed: number }

    const nodes: Node[] = []
    const arcs: ArcObj[] = []

    function initNodes() {
      nodes.length = 0
      const cols = Math.ceil(canvas!.width / GRID) + 1
      const rows = Math.ceil(canvas!.height / GRID) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: c * GRID,
            y: r * GRID,
            pulse: Math.random(),
            speed: 0.003 + Math.random() * 0.005,
          })
        }
      }
    }
    initNodes()
    window.addEventListener("resize", initNodes)

    function spawnArc() {
      if (!canvas) return
      const src = nodes[Math.floor(Math.random() * nodes.length)]
      const dirs: [number, number][] = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ]
      const [dc, dr] = dirs[Math.floor(Math.random() * 4)]
      const dst = { x: src.x + dc * GRID, y: src.y + dr * GRID }
      if (dst.x < 0 || dst.y < 0 || dst.x > canvas.width || dst.y > canvas.height) return
      arcs.push({ x1: src.x, y1: src.y, x2: dst.x, y2: dst.y, t: 0, speed: 0.015 + Math.random() * 0.02 })
    }

    let frame = 0
    let rafId: number

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(30,37,53,0.8)"
      ctx.lineWidth = 0.5
      for (let x = 0; x <= canvas.width; x += GRID) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y <= canvas.height; y += GRID) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      nodes.forEach((n) => {
        n.pulse = (n.pulse + n.speed) % 1
        const alpha = 0.15 + Math.sin(n.pulse * Math.PI * 2) * 0.12
        ctx.fillStyle = `rgba(77,166,255,${alpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })

      if (frame % 18 === 0 && arcs.length < 12) spawnArc()

      for (let i = arcs.length - 1; i >= 0; i--) {
        const a = arcs[i]
        a.t += a.speed
        if (a.t >= 1) {
          arcs.splice(i, 1)
          continue
        }
        const cx = a.x1 + (a.x2 - a.x1) * a.t
        const cy = a.y1 + (a.y2 - a.y1) * a.t

        const grad = ctx.createLinearGradient(a.x1, a.y1, cx, cy)
        grad.addColorStop(0, "rgba(77,166,255,0)")
        grad.addColorStop(1, "rgba(77,166,255,0.6)")
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(a.x1, a.y1)
        ctx.lineTo(cx, cy)
        ctx.stroke()

        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 6)
        grd.addColorStop(0, "rgba(77,166,255,0.9)")
        grd.addColorStop(1, "rgba(77,166,255,0)")
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(cx, cy, 6, 0, Math.PI * 2)
        ctx.fill()
      }

      frame++
      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("resize", initNodes)
    }
  }, [])

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 3rem",
        overflow: "hidden",
      }}
    >
      {/* Animated canvas background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      </div>

      {/* Diagonal right panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "42%",
          background: "#111520",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          borderLeft: "1px solid #1e2535",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "8%",
          }}
        >
          <CircuitSvg />
        </div>
      </div>

      {/* Hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "55%",
          animation: "fadeUp 1s ease both",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#4da6ff",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <span
            style={{ display: "block", width: "2rem", height: "1px", background: "#4da6ff", flexShrink: 0 }}
          />
          Licensed Electrical Engineering · Southern California
        </div>

        <h1
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
            lineHeight: 0.92,
            textTransform: "uppercase",
            color: "#f0f4ff",
            letterSpacing: "-0.01em",
            marginBottom: "0.3rem",
          }}
        >
          <span style={{ display: "block" }}>Power.</span>
          <span
            style={{
              display: "block",
              color: "transparent",
              WebkitTextStroke: "1.5px #4da6ff",
            }}
          >
            Light.
          </span>
          <span
            style={{
              display: "block",
              color: "#4da6ff",
              textShadow: "0 0 40px rgba(77,166,255,0.5), 0 0 80px rgba(77,166,255,0.2)",
            }}
          >
            Precision.
          </span>
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            fontWeight: 300,
            color: "#5a6a85",
            maxWidth: "420px",
            lineHeight: 1.7,
            marginBottom: "2.8rem",
            marginTop: "1.5rem",
          }}
        >
          Arclight Engineering delivers rigorous, code-compliant electrical power and lighting design
          for commercial, institutional, and infrastructure projects across Southern California.
        </p>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "#4da6ff",
              color: "#080a0f",
              border: "none",
              padding: "0.9rem 2rem",
              cursor: "pointer",
              transition: "box-shadow 0.2s, transform 0.1s",
              textDecoration: "none",
              display: "inline-block",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.boxShadow = "0 0 24px rgba(77,166,255,0.5)"
              el.style.transform = "translateY(-1px)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.boxShadow = "none"
              el.style.transform = "translateY(0)"
            }}
          >
            Request a Proposal
          </a>
          <a
            href="#services"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "transparent",
              color: "#c8d4e8",
              border: "1px solid #1e2535",
              padding: "0.9rem 2rem",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = "#c8d4e8"
              el.style.color = "#f0f4ff"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = "#1e2535"
              el.style.color = "#c8d4e8"
            }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "3rem",
          display: "flex",
          gap: "3rem",
          animation: "fadeUp 1s 0.4s ease both",
        }}
      >
        {[
          { num: "15+", label: "Years Experience" },
          { num: "200+", label: "Projects Delivered" },
          { num: "CA", label: "Licensed PE · LC" },
        ].map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: "2rem",
                color: "#f0f4ff",
                lineHeight: 1,
              }}
            >
              {s.num.includes("+") ? (
                <>
                  {s.num.replace("+", "")}
                  <span style={{ color: "#4da6ff" }}>+</span>
                </>
              ) : (
                <span style={{ color: "#4da6ff" }}>{s.num}</span>
              )}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#5a6a85",
                marginTop: "0.3rem",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          section > div[style*="max-width: 55%"] { max-width: 100% !important; }
          section > div[style*="width: 42%"] { display: none !important; }
          section { padding: 0 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}

function CircuitSvg() {
  return (
    <svg
      viewBox="0 0 280 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "90%",
        opacity: 0.55,
        animation: "circuitGlow 4s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes circuitGlow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(77,166,255,0.3)); }
          50% { filter: drop-shadow(0 0 16px rgba(77,166,255,0.7)); }
        }
      `}</style>
      <path d="M40 40 H120 V80 H240" stroke="#4da6ff" strokeWidth="1.5" />
      <path d="M40 40 V180 H100" stroke="#4da6ff" strokeWidth="1.5" />
      <path d="M100 180 V240 H200 V300" stroke="#4da6ff" strokeWidth="1.5" />
      <path d="M240 80 V160 H180 V240" stroke="#4da6ff" strokeWidth="1.5" />
      <path d="M180 240 H140 V300" stroke="#4da6ff" strokeWidth="1.5" />
      <path d="M40 120 H80 V160 H180 V160" stroke="#4da6ff" strokeWidth="1" />
      <path d="M240 160 V260 H200" stroke="#4da6ff" strokeWidth="1" />
      <rect x="34" y="34" width="12" height="12" fill="none" stroke="#4da6ff" strokeWidth="1.2" />
      <rect x="114" y="74" width="12" height="12" fill="none" stroke="#4da6ff" strokeWidth="1.2" />
      <rect x="234" y="74" width="12" height="12" fill="none" stroke="#f5a623" strokeWidth="1.2" />
      <rect x="174" y="234" width="12" height="12" fill="none" stroke="#4da6ff" strokeWidth="1.2" />
      <rect x="194" y="294" width="12" height="12" fill="none" stroke="#f5a623" strokeWidth="1.2" />
      <rect x="134" y="294" width="12" height="12" fill="none" stroke="#4da6ff" strokeWidth="1.2" />
      <rect x="80" y="180" width="60" height="40" rx="2" fill="none" stroke="#4da6ff" strokeWidth="1.5" />
      <text x="110" y="205" fill="#4da6ff" fontSize="8" fontFamily="monospace" textAnchor="middle">
        MCU
      </text>
      <circle cx="40" cy="40" r="3" fill="#4da6ff" />
      <circle cx="120" cy="80" r="3" fill="#4da6ff" />
      <circle cx="240" cy="80" r="3" fill="#f5a623" />
      <circle cx="100" cy="180" r="3" fill="#4da6ff" />
      <circle cx="200" cy="240" r="3" fill="#4da6ff" />
      <circle cx="180" cy="240" r="3" fill="#4da6ff" />
      <circle cx="200" cy="300" r="3" fill="#f5a623" />
      <circle cx="140" cy="300" r="3" fill="#4da6ff" />
      <path d="M160 80 V120" stroke="#4da6ff" strokeWidth="0.8" strokeDasharray="3,3" />
      <path d="M160 120 L156 112 M160 120 L164 112" stroke="#4da6ff" strokeWidth="0.8" />
    </svg>
  )
}
