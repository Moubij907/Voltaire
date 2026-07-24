import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

// Primary CTA — magnetic pointer pull + click ripple + glow-on-hover.
// The magnetic pull and ripple need JS; glow/elevation stay pure CSS transitions.
export function HeroPrimaryButton({ to, children }: { to: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.4 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    window.setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link
        ref={ref}
        to={to}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-4 text-sm font-medium text-canvas shadow-[0_1px_3px_rgba(0,0,0,0.12)] transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:bg-accent-600 hover:text-ink hover:shadow-[0_10px_34px_-8px_rgb(var(--accent-500)/0.55)]"
      >
        {ripples.map((r) => (
          <span
            key={r.id}
            className="hero-ripple pointer-events-none absolute rounded-full bg-white/40"
            style={{ left: r.x, top: r.y }}
          />
        ))}
        <span className="relative z-10">{children}</span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

// Secondary CTA — light and understated: no fill, no border, just a quiet
// underline and a drifting arrow. Pure CSS, no JS needed.
export function HeroSecondaryButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 py-4 text-sm font-normal text-ink-muted transition-colors duration-400 hover:text-ink"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ink-muted/50 transition-transform duration-500 ease-premium group-hover:scale-x-100" />
      </span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
