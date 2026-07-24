import { motion } from 'framer-motion';
import { useConfig } from '@/context/ConfigContext';
import { Container } from '@/components/ui/Container';

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Trust strip — calm, editorial, no giant counters.
// Pulled up to overlap the hero's bottom edge so it reads as one continuous
// surface: roughly the top 15–20% of this section is already visible on load.
export function TrustStrip() {
  const { trustBadges, awards, licenses } = useConfig();

  const items = [
    ...licenses.map((l) => l.name),
    ...awards.map((a) => `${a.name} ${a.year}`),
    ...trustBadges.map((t) => `${t.label}: ${t.value}`),
  ];

  return (
    <section className="relative z-20 -mt-20 sm:-mt-24 lg:-mt-24">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-t-[2rem] border border-b-0 border-line bg-canvas/85 py-8 shadow-[0_-24px_60px_-24px_rgba(20,19,17,0.14)] ring-1 ring-white/40 backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 sm:gap-x-14">
            {items.map((label, i) => (
              <motion.div key={i} variants={badgeItem} className="flex items-center gap-2.5 text-[0.82rem] text-ink-muted">
                <span className="h-1 w-1 rounded-full bg-accent-500" />
                <span className="font-medium tracking-tight">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
