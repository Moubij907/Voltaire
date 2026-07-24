import { useMemo } from 'react';

// Pure ambient atmosphere — nothing here competes for attention.
// Thin circuit traces, a handful of small connection dots, a few slow
// particles, and one soft radial glow. No panels, no heavy shapes.
// The character lives in its own grid cell in Hero.tsx, not in here.

const PARTICLE_COUNT = 8;

function useParticles() {
  return useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: `${(i * 47 + 6) % 100}%`,
        top: `${(i * 31 + 15) % 100}%`,
        size: 2 + (i % 2),
        duration: 20 + (i % 5) * 5,
        delay: (i % 6) * 1.4,
      })),
    []
  );
}

export function HeroBackground() {
  const particles = useParticles();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* One soft radial glow — subtle, never overpowering */}
      <div
        className="hero-glow absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 640px at 20% 32%, rgb(var(--accent-300) / 0.14) 0%, rgb(var(--accent-200) / 0.05) 46%, transparent 70%)',
        }}
      />

      {/* Thin premium circuit traces + small connection dots */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1280 720"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <line className="hero-trace" x1="0" y1="148" x2="1280" y2="148" />
        <line className="hero-trace" x1="0" y1="572" x2="1280" y2="572" />

        <path className="hero-trace" d="M 200,148 V 80 H 480 V 148" />
        <path className="hero-trace" d="M 680,148 V 60 H 920 V 148" />
        <path className="hero-trace" d="M 1050,148 V 100 H 1200" />

        <path className="hero-trace-faint" d="M 340,148 V 280 H 560 V 380" />
        <path className="hero-trace-faint" d="M 820,148 V 240 H 1060 V 320" />
        <path className="hero-trace-faint" d="M 480,572 V 648 H 680" />

        <line
          className="hero-spark"
          x1="0"
          y1="148"
          x2="1280"
          y2="148"
          style={{ strokeDasharray: '4 1276', animationDuration: '10s' }}
        />
        <line
          className="hero-spark"
          x1="0"
          y1="572"
          x2="1280"
          y2="572"
          style={{ strokeDasharray: '4 1276', animationDuration: '13s', animationDelay: '2s' }}
        />

        <circle className="hero-via" cx="200" cy="148" r="5" />
        <circle className="hero-via" cx="480" cy="148" r="5" />
        <circle className="hero-via" cx="680" cy="148" r="4" />
        <circle className="hero-via" cx="920" cy="148" r="4" />
        <circle className="hero-via" cx="480" cy="572" r="4" />

        <circle className="hero-node-pulse" cx="480" cy="80" r="3" style={{ animationDelay: '0s' }} />
        <circle className="hero-node-pulse" cx="920" cy="60" r="3" style={{ animationDelay: '1.4s' }} />
        <circle className="hero-node-pulse" cx="680" cy="648" r="3" style={{ animationDelay: '2.6s' }} />
        <circle className="hero-node" cx="1060" cy="320" r="2.5" />
      </svg>

      {/* A handful of very subtle floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particle absolute rounded-full bg-accent-400"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: 0.5,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
