"use client";

import { useMemo, type ReactNode, type CSSProperties } from "react";

type Dot = {
  id: number;
  top: string;
  left: string;
  size: number;
  glow: boolean;
  duration: number;
  delay: number;
  twinkleDuration: number;
  twinkleDelay: number;
  tx: number;
  ty: number;
};

const DOT_COUNT = 60;

function generateDots(count: number): Dot[] {
  return Array.from({ length: count }, (_, i) => {
    const size = 1 + Math.random() * 1.6;

    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      glow: Math.random() < 0.45,

      // Movement speed
      duration: 8 + Math.random() * 10,
      delay: -Math.random() * 15,

      // Twinkle speed
      twinkleDuration: 2.5 + Math.random() * 4,
      twinkleDelay: -Math.random() * 6,

      // Movement distance
      tx: (Math.random() - 0.5) * 60,
      ty: (Math.random() - 0.5) * 60,
    };
  });
}

type GlowingDotsBackgroundProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowingDotsBackground({
  children,
  className = "",
}: GlowingDotsBackgroundProps) {
  const dots = useMemo(() => generateDots(DOT_COUNT), []);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="
              absolute
              rounded-full
              bg-teal-500/40
              dark:bg-teal-300/80
              animate-float
            "
            style={
              {
                top: dot.top,
                left: dot.left,
                width: `${dot.size}px`,
                height: `${dot.size}px`,

                opacity: dot.glow ? 0.75 : 0.4,

                animationDuration: `${dot.duration}s`,
                animationDelay: `${dot.delay}s`,

                "--tx": `${dot.tx}px`,
                "--ty": `${dot.ty}px`,
              } as CSSProperties
            }
          >
            {/* Twinkle */}
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-teal-400/60
                dark:bg-white
                animate-twinkle
              "
              style={{
                animationDuration: `${dot.twinkleDuration}s`,
                animationDelay: `${dot.twinkleDelay}s`,

                boxShadow: dot.glow
                  ? `
                    0 0 8px 2px rgba(20, 184, 166, 0.35)
                  `
                  : undefined,
              }}
            />
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}