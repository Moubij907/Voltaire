import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { getIcon } from '@/lib/getIcon';

export function ServicesGrid() {
  const { services } = useConfig();

  return (
    <Section id="services">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-7 text-display-lg text-ink text-balance">
              Six disciplines, one standard.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-ink-muted text-pretty">
              Every service is performed by licensed master electricians, fully permitted, and documented end to end. No subcontractors, no shortcuts.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = getIcon(service.icon);
          return (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 80}
              direction="up"
              className="group relative bg-canvas"
            >
              <Link to={`/services/${service.slug}`} className="block h-full p-9 sm:p-11">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-all duration-600 ease-premium group-hover:border-accent-500 group-hover:bg-accent-500/8 group-hover:text-accent-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 -translate-y-1 text-ink-muted opacity-0 transition-all duration-600 ease-premium group-hover:translate-y-0 group-hover:text-accent-600 group-hover:opacity-100" />
                </div>
                <h3 className="mt-9 font-display text-xl font-medium tracking-tight text-ink">
                  {service.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">{service.excerpt}</p>
                {service.startingPrice && (
                  <div className="mt-7 text-label font-sans font-medium uppercase text-accent-600">
                    {service.startingPrice}
                  </div>
                )}
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
