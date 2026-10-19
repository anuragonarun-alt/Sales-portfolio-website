"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Count-up hook
   Respects prefers-reduced-motion by skipping
   animation and jumping straight to the target.
───────────────────────────────────────────── */
function useCountUp(
  target: number,
  durationMs: number = 1800,
  startDelay: number = 300,
) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    const timer = window.setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / durationMs, 1);

        // Ease-out cubic for a natural deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timer);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs, startDelay]);

  return count;
}

/* ─────────────────────────────────────────────
   Abstract right-column visual
   Pure inline SVG — no external assets, no JS.
   Concentric arcs with a radial fade give the
   composition weight on the right without any
   decorative clutter.
───────────────────────────────────────────── */
function HeroVisual() {
  const cx = 260;
  const cy = 260;
  const rings = [40, 80, 120, 160, 200, 240];

  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial fade — arcs are brightest at centre, dissolve outward */}
          <radialGradient id="hv-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fff" stopOpacity="0.12" />
            <stop offset="60%"  stopColor="#fff" stopOpacity="0.055" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>

          {/* Same gradient applied as a mask so it works on stroke */}
          <radialGradient id="hv-stroke-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fff" stopOpacity="1" />
            <stop offset="55%"  stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hv-mask">
            <circle cx={cx} cy={cy} r="250" fill="url(#hv-stroke-fade)" />
          </mask>
        </defs>

        {/* ── Concentric circles ── */}
        <g mask="url(#hv-mask)">
          {rings.map((r) => (
            <circle
              key={r}
              cx={cx}
              cy={cy}
              r={r}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.75"
            />
          ))}

          {/* ── Radial spokes — 12 evenly spaced ── */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x2 = cx + Math.cos(angle) * 240;
            const y2 = cy + Math.sin(angle) * 240;
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.75"
              />
            );
          })}

          {/* ── Accent arc — top-right quadrant, slightly brighter ── */}
          <path
            d={`M ${cx} ${cy - 160} A 160 160 0 0 1 ${cx + 160} ${cy}`}
            stroke="rgba(201,201,212,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d={`M ${cx} ${cy - 80} A 80 80 0 0 1 ${cx + 80} ${cy}`}
            stroke="rgba(201,201,212,0.18)"
            strokeWidth="0.75"
            strokeLinecap="round"
          />

          {/* ── Centre dot ── */}
          <circle
            cx={cx}
            cy={cy}
            r="3"
            fill="rgba(201,201,212,0.35)"
          />
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
export default function HeroSection() {
  const displayCount = useCountUp(100, 1800, 400);

  return (
    <section aria-label="Hero" className="hero-section">
      {/* Centered container — two-column on wide viewports */}
      <div className="hero-layout">

        {/* ── Left: all existing content, untouched ── */}
        <div className="hero-content">

          {/* Metric block */}
          <div className="hero-metric" aria-live="polite" aria-atomic="true">
            <span
              className="hero-metric__value"
              aria-label={`$${displayCount}K+ cash collected`}
            >
              <span aria-hidden="true">$</span>
              {displayCount}
              <span aria-hidden="true">K+</span>
            </span>
            <span className="hero-metric__label" aria-label="Cash collected">
              CASH COLLECTED
            </span>
          </div>

          {/* Divider */}
          <div className="hero-divider" aria-hidden="true" />

          {/* Identity */}
          <div className="hero-identity">
            <p className="hero-name">Anurag Rai</p>
            <p className="hero-role">
              High-Ticket Sales &nbsp;|&nbsp; Appointment Setting
            </p>
          </div>

          {/* Headline & description */}
          <div className="hero-copy">
            <h1 className="hero-headline">
              Turning conversations
              <br className="hero-headline__br" /> into opportunities.
            </h1>
            <p className="hero-description">
              With a sharp understanding of buyer psychology and a disciplined,
              process-driven approach, I help businesses close premium offers and
              build consistent appointment pipelines — from first touch to
              signed contract.
            </p>
          </div>

          {/* CTAs */}
          <nav className="hero-cta" aria-label="Primary navigation">
            <a href="#experience" className="hero-cta__primary">
              VIEW EXPERIENCE
            </a>
            <a href="#contact" className="hero-cta__secondary">
              CONTACT
            </a>
          </nav>
        </div>

        {/* ── Right: abstract visual (hidden on mobile) ── */}
        <HeroVisual />
      </div>
    </section>
  );
}
