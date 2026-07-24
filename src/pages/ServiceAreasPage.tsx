import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Check } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CTA } from '@/components/sections/CTA';
import { useSEO } from '@/hooks/useSEO';

export function ServiceAreasPage() {
  const { serviceAreas, business, contact } = useConfig();

  useSEO({
    title: `Service Areas — ${business.name}`,
    description: `Serving ${serviceAreas.map((a) => a.name).join(', ')} for residential and commercial electrical work.`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Service areas"
        title="Where we work."
        subtitle={`We serve ${serviceAreas.map((a) => a.name).join(' and ')} for all services, with 24/7 emergency coverage across Manhattan and Brooklyn.`}
      />

      <Section className="bg-canvas">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Coverage</Eyebrow>
              <h2 className="mt-7 text-display-md text-ink text-balance">Concentrated, not scattered.</h2>
              <p className="mt-6 text-base leading-[1.7] text-ink-muted text-pretty">
                We keep our service area tight so we can respond fast and know the buildings. Most of our work is within a 20-minute drive of our Brooklyn workshop.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-surface/40 p-5">
                <MapPin className="h-5 w-5 shrink-0 text-accent-600" />
                <span className="text-sm text-ink">
                  {contact.address.line1}, {contact.address.city}, {contact.address.state} {contact.address.zip}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-px overflow-hidden rounded-3xl border border-line bg-line">
              {serviceAreas.map((area, i) => (
                <Reveal key={area.name} delay={i * 80} className="bg-canvas">
                  <div className="flex flex-col gap-4 p-9 sm:flex-row sm:items-center sm:justify-between sm:p-11">
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight text-ink">{area.name}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-muted text-pretty">{area.description}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-all duration-400 ease-premium hover:border-accent-500 hover:text-accent-600 sm:self-center"
                    >
                      Check availability
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency banner */}
        <Reveal>
          <div className="mt-14 flex flex-col items-start gap-6 rounded-3xl bg-ink p-10 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <Check className="mt-1 h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight text-canvas">24/7 emergency response</h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-canvas/55 text-pretty">{contact.emergencyNote}</p>
              </div>
            </div>
            <a
              href={contact.emergencyPhoneHref}
              className="shrink-0 rounded-full bg-accent-500 px-8 py-4 text-sm font-medium text-ink transition-colors duration-400 hover:bg-accent-400"
            >
              {contact.emergencyPhone}
            </a>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
