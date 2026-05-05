"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-frame" aria-hidden>
        <div className="hero-gridlines" />
      </div>

      <div className="hero-content arc-rise">
        <p className="hero-kicker">Electrical power and lighting design</p>
        <h1>Power and lighting plans that pass review.</h1>
        <p className="hero-copy">
          Arclight delivers permit-ready electrical drawings for Southern
          California commercial and institutional projects.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="hero-button hero-button-primary">
            Get an estimate
          </a>
          <a href="#solutions" className="hero-button hero-button-secondary">
            View solutions
          </a>
        </div>
        <div className="hero-logo-lockup" aria-hidden>
          <Image
            src="/logos/Arclight-03.png"
            alt=""
            width={2500}
            height={2500}
            priority
          />
        </div>
      </div>

      <div className="hero-proof" aria-label="Credentials">
        <span>CA P.E.</span>
        <span>LC</span>
        <span>NEC</span>
        <span>Title 24</span>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: min(780px, 92vh);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 7.5rem 3rem 4rem;
          background:
            radial-gradient(circle at 50% 78%, color-mix(in srgb, var(--primary) 20%, transparent), transparent 28rem),
            var(--background);
          border-bottom: 1px solid var(--line);
        }

        .hero-frame {
          position: absolute;
          inset: 4.5rem 5vw 2.5rem;
          max-width: 1180px;
          margin: 0 auto;
          overflow: hidden;
          border-left: 1px solid var(--line);
          border-right: 1px solid var(--line);
          opacity: 0.95;
        }

        .hero-frame::before,
        .hero-frame::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--line);
        }

        .hero-frame::before {
          top: 0;
        }

        .hero-frame::after {
          bottom: 0;
        }

        .hero-gridlines {
          position: absolute;
          inset: 1px;
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 90px 90px;
          background-position: 45px 0;
          mask-image: linear-gradient(to bottom, transparent, black 12%, black 86%, transparent);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(820px, 100%);
          margin: 0 auto;
          text-align: center;
          padding-bottom: 3.5rem;
        }

        .hero-kicker {
          margin-bottom: 1.2rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--primary);
        }

        .hero-content h1 {
          max-width: 900px;
          margin: 0 auto;
          color: var(--heading);
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3rem, 7.6vw, 6.8rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: 0;
        }

        .hero-copy {
          max-width: 620px;
          margin: 1.55rem auto 0;
          color: var(--text-soft);
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          line-height: 1.55;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .hero-logo-lockup {
          display: flex;
          width: clamp(124px, 15vw, 188px);
          aspect-ratio: 1;
          align-items: center;
          justify-content: center;
          margin: 2.25rem auto 0;
          filter: drop-shadow(0 24px 52px color-mix(in srgb, var(--primary) 18%, transparent));
          opacity: 0.96;
        }

        .hero-logo-lockup img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .hero-button {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 1.45rem;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        }

        .hero-button:hover {
          transform: translateY(-1px);
        }

        .hero-button-primary {
          border: 1px solid var(--heading);
          background: var(--heading);
          color: var(--background);
        }

        .hero-button-secondary {
          border: 1px solid var(--line-strong);
          background: color-mix(in srgb, var(--background) 82%, transparent);
          color: var(--heading);
        }

        .hero-proof {
          position: absolute;
          z-index: 2;
          right: 3rem;
          bottom: 2rem;
          left: 3rem;
          display: flex;
          justify-content: center;
          gap: clamp(1.2rem, 4vw, 3.5rem);
          color: var(--text-faint);
          font-family: var(--font-mono), monospace;
          font-size: 0.76rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 760px;
            align-items: flex-start;
            padding: 6.5rem 1.4rem 4rem;
          }

          .hero-frame {
            inset: 4.8rem 1.2rem 2rem;
          }

          .hero-gridlines {
            background-size: 64px 64px;
          }

          .hero-content {
            padding-top: 2rem;
            padding-bottom: 0;
            text-align: left;
          }

          .hero-content h1 {
            font-size: clamp(3rem, 14vw, 4.4rem);
          }

          .hero-copy {
            margin-left: 0;
          }

          .hero-actions {
            justify-content: flex-start;
          }

          .hero-logo-lockup {
            width: 142px;
            margin: 2rem 0 0;
          }

          .hero-proof {
            right: 1.5rem;
            left: 1.5rem;
            flex-wrap: wrap;
            justify-content: flex-start;
            row-gap: 0.7rem;
          }
        }
      `}</style>
    </section>
  )
}
