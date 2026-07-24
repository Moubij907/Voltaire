import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, MapPin, Clock, Calendar } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { useSEO } from '@/hooks/useSEO';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { projects, services, business } = useConfig();
  const project = projects.find((p) => p.slug === slug);

  useSEO(
    project
      ? { title: `${project.title} — ${business.name}`, description: project.challenge.slice(0, 155) }
      : undefined
  );

  if (!project) return <Navigate to="/projects" replace />;

  const service = services.find((s) => s.slug === project.serviceSlug);
  const relatedProjects = projects.filter((p) => p.slug !== project.slug && p.serviceSlug === project.serviceSlug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-canvas pt-32 sm:pt-36 lg:pt-40">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 text-eyebrow font-sans font-medium uppercase text-ink-muted">
              <Link to="/projects" className="transition-colors duration-300 hover:text-ink">Projects</Link>
              <span className="text-line">/</span>
              <span className="text-ink">{project.category}</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl text-display-xl text-ink text-balance">{project.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-ink-muted">
              <span className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-accent-600" />{project.location}</span>
              <span className="flex items-center gap-2.5"><Calendar className="h-4 w-4 text-accent-600" />{project.year}</span>
              <span className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-accent-600" />{project.timeline}</span>
            </div>
          </Reveal>
        </Container>

        <div className="mt-14">
          <Container>
            <Reveal direction="up">
              <ImageFrame
                src={project.cover}
                alt={project.title}
                ratio="16/9"
                priority
                className="rounded-3xl"
              />
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Meta + Challenge */}
      <Section className="bg-canvas" containerSize="prose-wide">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>The project</Eyebrow>
              <div className="mt-10 space-y-7">
                <div>
                  <div className="text-label font-sans font-medium uppercase text-ink-muted/80">Location</div>
                  <div className="mt-2 font-display text-base text-ink">{project.location}</div>
                </div>
                <div>
                  <div className="text-label font-sans font-medium uppercase text-ink-muted/80">Category</div>
                  <div className="mt-2 font-display text-base text-ink">{project.category}</div>
                </div>
                <div>
                  <div className="text-label font-sans font-medium uppercase text-ink-muted/80">Timeline</div>
                  <div className="mt-2 font-display text-base text-ink">{project.timeline}</div>
                </div>
                {service && (
                  <div>
                    <div className="text-label font-sans font-medium uppercase text-ink-muted/80">Service</div>
                    <Link to={`/services/${service.slug}`} className="mt-2 inline-block font-display text-base text-accent-600 transition-colors duration-300 hover:text-accent-700 hover:underline">
                      {service.shortTitle}
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <Eyebrow>The challenge</Eyebrow>
              <p className="mt-7 text-display-xs leading-[1.5] text-ink text-pretty font-display font-normal">{project.challenge}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Results strip */}
      <section className="border-y border-line bg-surface/40 py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4">
              {project.results.map((r) => (
                <div key={r.label} className="bg-surface/40 px-6 py-10 text-center">
                  <div className="font-display text-4xl font-medium text-accent-600 sm:text-5xl">{r.value}</div>
                  <div className="mt-3 text-label font-sans font-medium uppercase text-ink-muted/80">{r.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Solution */}
      <Section className="bg-canvas" containerSize="prose-wide">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>The solution</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <p className="text-display-xs leading-[1.5] text-ink text-pretty font-display font-normal">{project.solution}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Before / After */}
      <Section className="bg-surface/40">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div>
              <Eyebrow>Before</Eyebrow>
              <p className="mt-7 text-base leading-[1.7] text-ink-muted text-pretty">{project.before}</p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <Eyebrow>After</Eyebrow>
              <p className="mt-7 text-base leading-[1.7] text-ink-muted text-pretty">{project.after}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <Section className="bg-canvas">
          <Reveal>
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-7 text-display-md text-ink text-balance">The work, in detail.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.gallery.map((img, i) => (
              <Reveal key={i} delay={(i % 2) * 80} className={i === 0 ? 'sm:col-span-2' : ''}>
                <ImageFrame
                  src={img}
                  alt={`${project.title} — photo ${i + 1}`}
                  ratio={i === 0 ? '16/9' : '4/3'}
                  className="rounded-2xl"
                  hover
                />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Client quote */}
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgb(var(--accent-500) / 0.12), transparent 70%)' }}
          aria-hidden
        />
        <Container size="prose-wide">
          <Reveal>
            <blockquote className="relative text-center">
              <span className="font-display text-6xl text-accent-500/30 leading-none">"</span>
              <p className="mt-4 text-display-sm text-canvas text-balance font-display font-light leading-snug">
                {project.clientQuote.quote}
              </p>
              <footer className="mt-10">
                <div className="font-display text-lg font-medium text-canvas">{project.clientQuote.name}</div>
                <div className="mt-1 text-sm text-canvas/50">{project.clientQuote.role}</div>
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-canvas">
          <div className="flex items-end justify-between gap-8">
            <Reveal>
              <Eyebrow>More work</Eyebrow>
              <h2 className="mt-7 text-display-md text-ink text-balance">Related projects.</h2>
            </Reveal>
            <Reveal delay={100}>
              <Button to="/projects" variant="ghost" size="sm" showArrow>View all</Button>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {relatedProjects.map((rp, i) => (
              <Reveal key={rp.slug} delay={i * 80}>
                <Link to={`/projects/${rp.slug}`} className="group block">
                  <ImageFrame src={rp.cover} alt={rp.title} ratio="4/3" className="rounded-2xl" hover />
                  <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-700">{rp.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{rp.location}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">
                    Read case study <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
