import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useConfig } from '@/context/ConfigContext';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './hero/HeroBackground';
import { HeroCharacter } from './hero/HeroCharacter';
import { HeroStats } from './hero/HeroStats';
import { HeroPrimaryButton, HeroSecondaryButton } from './hero/HeroButtons';

const EASE = [0.16, 1, 0.3, 1] as const;

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const headlineWord = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 1, ease: EASE } },
};

export function Hero() {
  const { hero } = useConfig();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = !!prefersReducedMotion;

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reducedMotion ? 1 : 0.35]);

  const headlineLines = hero.headlineLines ?? [hero.headline];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] overflow-hidden bg-canvas pb-6 pt-10 sm:pt-14"
    >
      <HeroBackground />

      <motion.div style={{ opacity: contentOpacity }}>
        <Container>
          {/* 12-column grid: content left, character right — a real grid,
              so the two never compete for the same space at any width. */}
          <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-12 lg:gap-x-4">
            <div className="lg:col-span-8">
              {/* Eyebrow — fades down on entrance */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="flex items-center gap-3 text-eyebrow font-sans font-medium uppercase text-ink-muted"
              >
                <span className="h-px w-8 bg-accent-500" />
                {hero.eyebrow}
              </motion.div>

              {/* Headline — staggered word reveal, explicit editorial line breaks */}
              <motion.h1
                variants={headlineContainer}
                initial="hidden"
                animate="visible"
                className="mt-5 text-[clamp(2.5rem,5.2vw,4.15rem)] leading-[1.1] text-ink"
              >
                {headlineLines.map((line, li) => (
                  <span key={li} className="block">
                    {line.split(' ').map((word, wi) => (
                      <span key={wi} className="inline-block overflow-hidden pb-1 pr-[0.22em] align-bottom last:pr-0">
                        <motion.span variants={headlineWord} className="inline-block">
                          {word}
                        </motion.span>
                      </span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              {/* Subheadline — 550–600px reading width */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
                className="mt-6 max-w-xl text-lg leading-[1.7] text-ink-muted text-pretty"
              >
                {hero.subheadline}
              </motion.p>

              {/* CTAs — aligned to the same left edge as the paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
                className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6"
              >
                <HeroPrimaryButton to={hero.primaryCta.to}>{hero.primaryCta.label}</HeroPrimaryButton>
                <HeroSecondaryButton to={hero.secondaryCta.to}>{hero.secondaryCta.label}</HeroSecondaryButton>
              </motion.div>
            </div>

            {/* Character — its own column, centered, room to breathe, nudged
                toward the outer edge so it reads as atmosphere, not focus */}
            <div className="flex justify-center lg:col-span-4 lg:justify-end lg:-mr-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
              >
                <HeroCharacter />
              </motion.div>
            </div>
          </div>

          {/* Scroll cue — compact, sits in the gap above the stats card so it
              adds almost no height of its own */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 1.5 }}
            className="mt-8 flex items-center justify-center gap-2.5 lg:mt-10"
          >
            <span className="text-[0.6rem] font-sans font-medium uppercase tracking-[0.3em] text-ink-muted/60">
              Scroll
            </span>
            <motion.span
              className="h-px w-6 bg-gradient-to-r from-accent-500/70 to-transparent"
              animate={reducedMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
              transition={reducedMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Statistics card */}
          <div className="mt-4">
            <HeroStats delay={1.3} />
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
