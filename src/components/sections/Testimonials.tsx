import { Star, Quote } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  const { testimonials } = useConfig();

  return (
    <Section className="bg-canvas">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>In their words</Eyebrow>
            <h2 className="mt-7 text-display-lg text-ink text-balance">
              The people we work for.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={120}>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <span className="text-sm text-ink-muted">5.0 across 280+ verified reviews</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 6).map((t, i) => (
          <Reveal
            key={t.name}
            delay={(i % 3) * 80}
            className="group flex h-full flex-col rounded-3xl border border-line bg-surface/30 p-9 transition-all duration-600 ease-premium hover:border-line/0 hover:bg-surface/60"
          >
            <Quote className="h-8 w-8 text-accent-500/30 transition-colors duration-500 group-hover:text-accent-500/50" />
            <p className="mt-6 flex-1 text-[0.95rem] leading-[1.65] text-ink text-pretty">
              "{t.quote}"
            </p>
            <div className="mt-8 flex items-center gap-1 border-t border-line pt-6">
              {[...Array(t.rating)].map((_, si) => (
                <Star key={si} className="h-3 w-3 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <div className="mt-4">
              <div className="font-display text-base font-medium text-ink">{t.name}</div>
              <div className="mt-0.5 text-sm text-ink-muted">{t.role} · {t.location}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
