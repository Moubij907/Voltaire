import { motion, useReducedMotion } from 'framer-motion';
import { useConfig } from '@/context/ConfigContext';

// The engineer, floating free — no card, no panel, no rectangle.
// Just the figure, a soft contained gold glow behind it, and a soft
// ellipse shadow where it touches the ground. Idle motion layers several
// extremely subtle, independently-timed movements (float, breathe, sway,
// glow pulse) so nothing repeats in an obvious loop.
export function HeroCharacter() {
  const { hero } = useConfig();
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]">
      {/* Soft warm glow — very light, pulses slowly, never reads as a panel */}
      <motion.div
        className="absolute left-1/2 top-[18%] h-[68%] w-[80%] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgb(var(--accent-300) / 0.16) 0%, transparent 72%)' }}
        animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
        transition={reducedMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* A faint highlight near the helmet — the suggestion of a light catch,
          not a literal reflection */}
      <motion.div
        className="absolute left-[38%] top-[3%] h-[10%] w-[24%] rounded-full bg-white/50 blur-md"
        animate={reducedMotion ? undefined : { opacity: [0.25, 0.6, 0.25] }}
        transition={reducedMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : { y: [0, -4, 0], scale: [1, 1.008, 1], rotate: [-0.3, 0.3, -0.3] }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
              }
        }
        className="relative origin-bottom"
        style={{ aspectRatio: '2 / 3' }}
      >
        <img
          src={hero.image}
          alt=""
          loading="eager"
          decoding="async"
          className="relative h-full w-full object-contain object-bottom"
          style={{
            opacity: 0.9,
            filter: 'saturate(0.92) contrast(0.97) blur(0.5px) drop-shadow(0 18px 22px rgba(20,19,17,0.1))',
          }}
        />
        {/* Receding overlay — softens the figure into the page rather than
            letting it sit on top of it */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 90% 90% at 50% 38%, transparent 60%, rgb(var(--canvas) / 0.16) 100%)',
          }}
        />
      </motion.div>

      {/* Soft ground-contact shadow — anchors the figure so the float reads
          as breathing, not hovering */}
      <div
        className="absolute bottom-1 left-1/2 h-4 w-[55%] -translate-x-1/2 rounded-full opacity-25 blur-lg"
        style={{ background: 'radial-gradient(ellipse, rgb(20 19 17 / 0.5) 0%, transparent 72%)' }}
      />
    </div>
  );
}
