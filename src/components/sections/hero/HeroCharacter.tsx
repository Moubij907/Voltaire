import { type PointerEvent, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useConfig } from '@/context/ConfigContext';

// expo-out — matches the EASE used for the rest of the hero's entrances
const ENTRANCE_EASE = [0.16, 1, 0.3, 1] as const;

type Phase = 'entrance' | 'settle' | 'idle';

// The engineer arrives, then rests. Three phases, one flat cutout image:
//   1. entrance — slides in from off-screen with a footstep bounce
//   2. settle   — a brief whole-body weight-shift stands in for "raising the
//                 meter"; a single flat image can't isolate just the arm
//   3. idle     — breathing, sway, glow pulse, helmet glint, screen glow,
//                 all looping only once the figure has actually arrived
// On top of all three, a light cursor-tracking tilt reacts to the pointer —
// a separate outer layer so it composes with whichever phase is active.
export function HeroCharacter() {
  const { hero } = useConfig();
  const reducedMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(reducedMotion ? 'idle' : 'entrance');

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 18, mass: 0.5 };
  const springX = useSpring(px, springConfig);
  const springY = useSpring(py, springConfig);
  const tiltX = useTransform(springY, [-1, 1], [3, -3]);
  const tiltY = useTransform(springX, [-1, 1], [-4, 4]);
  const shiftX = useTransform(springX, [-1, 1], [-6, 6]);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    px.set(0);
    py.set(0);
  }

  const isIdle = phase === 'idle';

  return (
    <div
      ref={wrapperRef}
      onPointerMove={reducedMotion ? undefined : handlePointerMove}
      onPointerLeave={reducedMotion ? undefined : handlePointerLeave}
      className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]"
    >
      {/* Cursor-tracking tilt layer — everything below rides on this */}
      <motion.div
        style={{ x: shiftX, rotateX: tiltX, rotateY: tiltY, transformPerspective: 800 }}
        className="relative"
      >
        {/* Entrance / settle layer — the whole figure (glow, highlight,
            shadow, and all) arrives as one cohesive unit */}
        <motion.div
          className="relative"
          initial={reducedMotion ? false : { x: 320, y: 0, opacity: 0, scale: 0.96 }}
          animate={
            phase === 'entrance'
              ? { x: 0, y: [0, -7, 0, -7, 0, -7, 0, -7, 0], opacity: 1, scale: 0.985 }
              : phase === 'settle'
                ? { x: 0, y: [0, -4, 0], opacity: 1, scale: [0.985, 1.018, 1] }
                : { x: 0, y: 0, opacity: 1, scale: 1 }
          }
          transition={
            phase === 'entrance'
              ? {
                  x: { duration: 2.3, delay: 0.3, ease: ENTRANCE_EASE },
                  y: { duration: 2.3, delay: 0.3, ease: 'easeInOut' },
                  opacity: { duration: 1, delay: 0.3, ease: 'easeOut' },
                  scale: { duration: 2.3, delay: 0.3, ease: ENTRANCE_EASE },
                }
              : phase === 'settle'
                ? { duration: 0.5, ease: 'easeOut' }
                : { duration: 0.2 }
          }
          onAnimationComplete={() => {
            if (phase === 'entrance') setPhase('settle');
            else if (phase === 'settle') setPhase('idle');
          }}
        >
          {/* Soft warm glow — very light, pulses slowly, never reads as a panel */}
          <motion.div
            className="absolute left-1/2 top-[18%] h-[68%] w-[80%] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgb(var(--accent-300) / 0.16) 0%, transparent 72%)' }}
            animate={isIdle && !reducedMotion ? { opacity: [0.7, 1, 0.7] } : undefined}
            transition={isIdle && !reducedMotion ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : undefined}
          />

          {/* A faint highlight near the helmet — the suggestion of a light catch,
              not a literal reflection */}
          <motion.div
            className="absolute left-[38%] top-[3%] h-[10%] w-[24%] rounded-full bg-white/50 blur-md"
            animate={isIdle && !reducedMotion ? { opacity: [0.25, 0.6, 0.25] } : undefined}
            transition={
              isIdle && !reducedMotion ? { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 } : undefined
            }
          />

          <motion.div
            animate={
              isIdle && !reducedMotion
                ? { y: [0, -4, 0], scale: [1, 1.008, 1], rotate: [-0.3, 0.3, -0.3] }
                : undefined
            }
            transition={
              isIdle && !reducedMotion
                ? {
                    y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    scale: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
                  }
                : undefined
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

            {/* The multimeter's screen, lit and reading — a soft glow rather
                than a hard rectangle, so it reads as backlight, not a sticker. */}
            <motion.div
              className="pointer-events-none absolute rounded-[3px]"
              style={{
                left: '18.4%',
                top: '18.8%',
                width: '8.2%',
                height: '3.4%',
                background:
                  'radial-gradient(ellipse, rgb(180 255 230 / 1) 0%, rgb(120 225 200 / 0.6) 55%, transparent 88%)',
                filter: 'blur(1px)',
              }}
              animate={isIdle && !reducedMotion ? { opacity: [0.25, 1, 0.25], scale: [0.9, 1.35, 0.9] } : undefined}
              transition={isIdle && !reducedMotion ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } : undefined}
            />
          </motion.div>

          {/* Soft ground-contact shadow — anchors the figure so the float reads
              as breathing, not hovering */}
          <div
            className="absolute bottom-1 left-1/2 h-4 w-[55%] -translate-x-1/2 rounded-full opacity-25 blur-lg"
            style={{ background: 'radial-gradient(ellipse, rgb(20 19 17 / 0.5) 0%, transparent 72%)' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
