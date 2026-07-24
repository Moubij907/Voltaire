import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { CTA } from '@/components/sections/CTA';
import { getIcon } from '@/lib/getIcon';
import { useSEO } from '@/hooks/useSEO';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { services, projects, business } = useConfig();
  const service = services.find((s) => s.slug === slug);

  useSEO(
    service
      ? { title: `${service.title} — ${business.name}`, description: service.excerpt }
      : undefined
  );

  if (!service) return <Navigate to="/services" replace />;

  const Icon = getIcon(service.icon);
  const relatedProjects = projects.filter((p) => service.relatedProjectSlugs.includes(p.slug));

  return (
    <>
      <PageHeader
        eyebrow={service.tagline}
        title={service.title}
        subtitle={service.excerpt}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
            <Icon className="h-6 w-6" />
          </span>
          {service.startingPrice && (
            <span className="text-sm font-medium text-ink-muted">{service.startingPrice}</span>
          )}
        </div>
      </PageHeader>

      {/* Overview */}
      <Section className="bg-canvas" containerSize="prose-wide">
        <Reveal>
          <Eyebrow>Overview</Eyebrow>
          <p className="mt-8 text-display-xs leading-[1.5] text-ink text-pretty font-display font-normal">
            {service.overview}
          </p>
        </Reveal>
      </Section>

      {/* Benefits */}
      <Section className="bg-surface/40">
        <Reveal>
          <Eyebrow>Why it matters</Eyebrow>
          <h2 className="mt-7 text-display-md text-ink text-balance">The difference is in the detail.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
          {service.benefits.map((b, i) => (
            <Reveal key={i} delay={(i % 2) * 80} className="bg-canvas p-9 sm:p-11">
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight text-ink">{b.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted text-pretty">{b.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-canvas">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>The process</Eyebrow>
              <h2 className="mt-7 text-display-md text-ink text-balance">From consultation to sign-off.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {service.process.map((step, i) => (
                <Reveal key={step.step} delay={i * 60}>
                  <div className="flex gap-7 py-7">
                    <span className="editorial-number text-2xl text-accent-600/50">{step.step}</span>
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight text-ink">{step.title}</h3>
                      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-ink-muted text-pretty">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      {service.gallery.length > 0 && (
        <Section className="bg-surface/40">
          <Reveal>
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-7 text-display-md text-ink text-balance">Recent installations.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <ImageFrame
                  src={img}
                  alt={`${service.shortTitle} installation ${i + 1}`}
                  ratio="4/3"
                  className="rounded-2xl"
                  hover
                />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Service-specific FAQs */}
      <Section className="bg-canvas">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-7 text-display-md text-ink text-balance">Specific to this service.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {service.faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="py-7">
                    <h3 className="font-display text-lg font-medium tracking-tight text-ink text-balance">{faq.question}</h3>
                    <p className="mt-3.5 max-w-prose text-base leading-[1.65] text-ink-muted text-pretty">{faq.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-surface/40">
          <Reveal>
            <Eyebrow>Related work</Eyebrow>
            <h2 className="mt-7 text-display-md text-ink text-balance">See it in practice.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <ImageFrame
                    src={project.cover}
                    alt={project.title}
                    ratio="4/3"
                    className="rounded-2xl"
                    hover
                  />
                  <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-700">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{project.location}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">
                    View case study <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTA />
    </>
  );
}
