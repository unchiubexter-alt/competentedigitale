"use client";

import { useMemo } from "react";

export default function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${((i * 37 + 13) % 100)}%`,
        size: `${(i % 3) + 1}px`,
        duration: `${(i % 15) + 10}s`,
        delay: `${(i * 3) % 10}s`,
        opacity: ((i % 5) + 1) * 0.1,
      })),
    []
  );

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
