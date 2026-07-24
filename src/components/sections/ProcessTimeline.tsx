import { useConfig } from '@/context/ConfigContext';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function ProcessTimeline() {
  const { process } = useConfig();

  return (
    <Section id="process" className="bg-canvas">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-7 text-display-lg text-ink text-balance">
              A process built on documentation.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted text-pretty">
              Every project follows the same five steps — from consultation to closed permit. You always know what is happening and what comes next.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.75rem] top-3 bottom-3 w-px bg-line" aria-hidden />

            <div className="space-y-12">
              {process.map((step, i) => (
                <Reveal key={step.step} delay={i * 80} direction="left">
                  <div className="relative flex gap-7">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-canvas transition-all duration-500 ease-premium hover:border-accent-500/50">
                      <span className="editorial-number text-base text-accent-600">{step.step}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-display text-xl font-medium tracking-tight text-ink">{step.title}</h3>
                      <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink-muted text-pretty">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
