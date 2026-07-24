import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function FAQ() {
  const { faqs } = useConfig();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-surface/40">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="mt-7 text-display-lg text-ink text-balance">
              Before you ask.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted text-pretty">
              The questions we hear most often. If yours is not here, we are happy to answer it on a call.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={(i % 4) * 60}>
                  <div>
                    <button
                      className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg font-medium tracking-tight text-ink text-balance transition-colors duration-300 group-hover:text-accent-700">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-premium ${
                          isOpen
                            ? 'rotate-45 border-accent-500 bg-accent-500/10 text-accent-600'
                            : 'border-line text-ink group-hover:border-ink/30'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-premium"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-prose pb-7 pr-12 text-base leading-[1.65] text-ink-muted text-pretty">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
