"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WAVES = [
  { color: "var(--accent-strong)", opacity: 0.55, y: 60, amplitude: 38, duration: 11, phase: 0 },
  { color: "var(--accent-strong)", opacity: 0.4, y: 80, amplitude: 44, duration: 14, phase: 300 },
  { color: "var(--accent)", opacity: 0.35, y: 100, amplitude: 34, duration: 17, phase: 600 },
  { color: "var(--accent)", opacity: 0.3, y: 45, amplitude: 28, duration: 20, phase: 900 },
  { color: "var(--foreground-dim)", opacity: 0.22, y: 120, amplitude: 24, duration: 23, phase: 150 },
  { color: "var(--foreground-dim)", opacity: 0.18, y: 30, amplitude: 18, duration: 26, phase: 450 },
] as const;

function wavePath(y: number, amp: number) {
  return `M0,${y} C150,${y - amp} 300,${y + amp} 600,${y} C900,${y - amp} 1050,${y + amp} 1200,${y}`;
}

export default function WaveBackground() {
  const groupRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const tweens = groupRefs.current.map((el, i) => {
      if (!el) return null;
      gsap.set(el, { x: -WAVES[i].phase });
      return gsap.to(el, {
        x: -1200 - WAVES[i].phase,
        duration: WAVES[i].duration,
        ease: "none",
        repeat: -1,
      });
    });
    return () => tweens.forEach((t) => t?.kill());
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {WAVES.map((wave, i) => (
        <g
          key={`${wave.y}-${wave.phase}`}
          ref={(el) => {
            groupRefs.current[i] = el;
          }}
        >
          <path
            d={wavePath(wave.y, wave.amplitude)}
            stroke={wave.color}
            strokeWidth={1.5}
            fill="none"
            opacity={wave.opacity}
          />
          <path
            d={wavePath(wave.y, wave.amplitude)}
            stroke={wave.color}
            strokeWidth={1.5}
            fill="none"
            opacity={wave.opacity}
            transform="translate(1200,0)"
          />
          <path
            d={wavePath(wave.y, wave.amplitude)}
            stroke={wave.color}
            strokeWidth={1.5}
            fill="none"
            opacity={wave.opacity}
            transform="translate(2400,0)"
          />
        </g>
      ))}
    </svg>
  );
}
