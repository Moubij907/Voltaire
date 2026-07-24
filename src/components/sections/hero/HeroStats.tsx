import { motion } from 'framer-motion';
import { BadgeCheck, Clock, Zap, MapPin, Shield, Sparkles, type LucideIcon } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';

const EASE = [0.16, 1, 0.3, 1] as const;

function iconForBadge(label: string): LucideIcon {
  const l = label.toLowerCase();
  if (l.includes('licens')) return BadgeCheck;
  if (l.includes('establish')) return Clock;
  if (l.includes('respons')) return Zap;
  if (l.includes('coverage')) return MapPin;
  if (l.includes('insur') || l.includes('warranty')) return Shield;
  return Sparkles;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// The hero's statistics card — same trust badges the config already carries,
// evolved into a floating glass panel with per-item icon and hover lift.
export function HeroStats({ delay = 0 }: { delay?: number }) {
  const { hero } = useConfig();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
      className="hero-glass-card relative overflow-hidden rounded-3xl border border-line bg-canvas/70 shadow-[0_28px_70px_-20px_rgba(20,19,17,0.22)] ring-1 ring-white/50 backdrop-blur-xl"
    >
      <div className="grid grid-cols-2 divide-x divide-y divide-line/60 sm:grid-cols-4 sm:divide-y-0">
        {hero.trustBadges.map((badge) => {
          const Icon = iconForBadge(badge.label);
          return (
            <motion.div
              key={badge.label}
              variants={item}
              className="group flex items-center gap-3 px-6 py-4 transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:bg-surface/50 sm:px-7"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-accent-600 transition-transform duration-500 ease-premium group-hover:scale-110 group-hover:bg-accent-500/20">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div>
                <div className="text-label font-sans font-medium uppercase text-ink-muted/80">{badge.label}</div>
                <div className="mt-1 font-display text-base font-medium text-ink">{badge.value}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
