import { BadgeCheck } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { CTA } from '@/components/sections/CTA';
import { useSEO } from '@/hooks/useSEO';

export function AboutPage() {
  const { business, team, licenses, awards, trustBadges } = useConfig();
  const yearsActive = new Date().getFullYear() - business.establishedYear;

  useSEO({
    title: `About — ${business.name}`,
    description: business.description,
  });

  return (
    <>
      <PageHeader
        eyebrow="The studio"
        title="A different kind of electrical firm."
        subtitle={business.description}
      />

      {/* Story */}
      <Section className="bg-canvas">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <ImageFrame
                src={team[0]?.photo}
                alt={team[0]?.name}
                ratio="4/5"
                className="rounded-3xl"
              />
            </Reveal>
          </div>
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 space-y-5 text-base leading-[1.7] text-ink-muted text-pretty">
                {business.story.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="border-y border-line bg-surface/40 py-20">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line px-6 sm:grid-cols-4 sm:px-8 lg:px-12">
          {[
            { label: 'Years in business', value: `${yearsActive}` },
            { label: 'Projects completed', value: '1,800+' },
            { label: 'Master electricians', value: '14' },
            { label: 'Emergency response', value: '24/7' },
          ].map((stat) => (
            <Reveal key={stat.label} className="bg-surface/40 px-6 py-10 text-center">
              <div className="font-display text-5xl font-medium text-ink">{stat.value}</div>
              <div className="mt-3 text-label font-sans font-medium uppercase text-ink-muted/80">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <Section className="bg-canvas">
        <Reveal>
          <Eyebrow>The team</Eyebrow>
          <h2 className="mt-7 max-w-2xl text-display-lg text-ink text-balance">
            Master electricians, not labor.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <div className="group">
                <ImageFrame
                  src={member.photo}
                  alt={member.name}
                  ratio="4/5"
                  className="rounded-3xl"
                  hover
                />
                <h3 className="mt-7 font-display text-xl font-medium tracking-tight text-ink">{member.name}</h3>
                <p className="mt-1.5 text-sm font-medium text-accent-600">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted text-pretty">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Licenses & Awards */}
      <Section className="bg-surface/40">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Licenses & certifications</Eyebrow>
            </Reveal>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {licenses.map((lic) => (
                <Reveal key={lic.number}>
                  <div className="flex items-start gap-4 py-6">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <div className="flex-1">
                      <div className="font-display text-base font-medium text-ink">{lic.name}</div>
                      <div className="mt-1 text-sm text-ink-muted">{lic.issuer} · #{lic.number}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <Eyebrow>Awards & recognition</Eyebrow>
            </Reveal>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {awards.map((award) => (
                <Reveal key={award.name}>
                  <div className="flex items-center justify-between gap-4 py-6">
                    <div>
                      <div className="font-display text-base font-medium text-ink">{award.name}</div>
                      <div className="mt-1 text-sm text-ink-muted">{award.issuer}</div>
                    </div>
                    <div className="editorial-number text-2xl text-accent-600">{award.year}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="bg-canvas px-5 py-7 text-center">
                <div className="text-label font-sans font-medium uppercase text-ink-muted/80">{badge.label}</div>
                <div className="mt-2.5 font-display text-sm font-medium text-ink">{badge.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
