import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';

// Featured projects — magazine style, alternating large image + editorial copy.
export function ProjectShowcase() {
  const { projects } = useConfig();
  const featured = projects.slice(0, 3);

  return (
    <Section className="bg-surface/40">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-7 text-display-lg text-ink text-balance">
              Projects, not portfolios.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Reveal delay={120}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-accent-600"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 space-y-28 lg:space-y-36">
        {featured.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={project.slug} direction="up">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                <Link
                  to={`/projects/${project.slug}`}
                  className={`group relative lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
                >
                  <ImageFrame
                    src={project.cover}
                    alt={project.title}
                    ratio="5/4"
                    className="rounded-3xl"
                    hover
                  />
                </Link>

                <div className={`flex flex-col justify-center lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 text-eyebrow font-sans font-medium uppercase text-ink-muted">
                    <span className="editorial-number text-base text-accent-600/70 not-italic">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-px w-6 bg-accent-500/60" />
                    {project.category} · {project.year}
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-ink-muted">{project.location}</p>
                  <p className="mt-5 text-base leading-[1.65] text-ink-muted text-pretty line-clamp-3">
                    {project.challenge}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                    {project.results.slice(0, 2).map((r) => (
                      <div key={r.label} className="bg-canvas px-5 py-4">
                        <div className="text-label font-sans uppercase text-ink-muted/80">{r.label}</div>
                        <div className="mt-1.5 font-display text-sm font-medium text-ink">{r.value}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-accent-600"
                  >
                    Read the case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
