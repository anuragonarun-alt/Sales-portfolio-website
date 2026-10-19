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
   Hero Section
───────────────────────────────────────────── */
export default function HeroSection() {
  const displayCount = useCountUp(100, 1800, 400);

  return (
    <section
      aria-label="Hero"
      className="hero-section"
    >
      {/* ── Metric block ── */}
      <div className="hero-metric" aria-live="polite" aria-atomic="true">
        <span className="hero-metric__value" aria-label={`$${displayCount}K+ cash collected`}>
          <span aria-hidden="true">$</span>
          {displayCount}
          <span aria-hidden="true">K+</span>
        </span>
        <span className="hero-metric__label" aria-label="Cash collected">
          CASH COLLECTED
        </span>
      </div>

      {/* ── Divider ── */}
      <div className="hero-divider" aria-hidden="true" />

      {/* ── Identity ── */}
      <div className="hero-identity">
        <p className="hero-name">Anurag Rai</p>
        <p className="hero-role">High-Ticket Sales &nbsp;|&nbsp; Appointment Setting</p>
      </div>

      {/* ── Headline & description ── */}
      <div className="hero-copy">
        <h1 className="hero-headline">
          Turning conversations<br className="hero-headline__br" /> into opportunities.
        </h1>
        <p className="hero-description">
          With a sharp understanding of buyer psychology and a disciplined,
          process-driven approach, I help businesses close premium offers and
          build consistent appointment pipelines — from first touch to signed
          contract.
        </p>
      </div>

      {/* ── CTAs ── */}
      <nav className="hero-cta" aria-label="Primary navigation">
        <a
          href="#experience"
          className="hero-cta__primary"
        >
          VIEW EXPERIENCE
        </a>
        <a
          href="#contact"
          className="hero-cta__secondary"
        >
          CONTACT
        </a>
      </nav>
    </section>
  );
}
