import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CTA } from '@/components/sections/CTA';
import { getIcon } from '@/lib/getIcon';
import { useSEO } from '@/hooks/useSEO';

export function ServicesPage() {
  const { services, business } = useConfig();

  useSEO({
    title: `Services — ${business.name}`,
    description: 'Panel upgrades, EV charging, lighting design, smart home automation, commercial fit-outs, and 24/7 emergency electrical service.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every system, built to last thirty years."
        subtitle="From a single panel upgrade to a full commercial fit-out, every service is performed by licensed master electricians and documented end to end."
      />

      <Section className="bg-canvas">
        <div className="space-y-px overflow-hidden rounded-3xl border border-line bg-line">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <Reveal key={service.slug} delay={(i % 2) * 60} className="bg-canvas">
                <Link
                  to={`/services/${service.slug}`}
                  className="group grid grid-cols-1 gap-8 p-9 transition-all duration-500 ease-premium hover:bg-surface/40 sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-12"
                >
                  <div className="flex items-center gap-5 lg:col-span-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-600 ease-premium group-hover:border-accent-500 group-hover:bg-accent-500/8 group-hover:text-accent-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-700">{service.shortTitle}</h2>
                      <p className="mt-1.5 text-sm font-medium text-accent-600">{service.startingPrice}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-base leading-[1.65] text-ink-muted text-pretty">{service.excerpt}</p>
                  </div>

                  <div className="flex justify-end lg:col-span-1">
                    <ArrowUpRight className="h-6 w-6 text-ink-muted opacity-50 transition-all duration-600 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-600 group-hover:opacity-100" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTA />
    </>
  );
}
