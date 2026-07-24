import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { CTA } from '@/components/sections/CTA';
import { useSEO } from '@/hooks/useSEO';

export function ProjectsPage() {
  const { projects, business } = useConfig();
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  useSEO({
    title: `Projects — ${business.name}`,
    description: 'Completed electrical projects across New York City — residential rewires, EV charging, smart home automation, and commercial fit-outs.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work that speaks for itself."
        subtitle="Every project is documented with the challenge, the solution, and the result. Filter by category to see the work most relevant to you."
      />

      <Section className="bg-canvas">
        {/* Filters */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 border-b border-line pb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-400 ease-premium ${
                  filter === cat
                    ? 'bg-ink text-canvas'
                    : 'border border-line text-ink-muted hover:border-ink/30 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80} direction="up">
              <Link to={`/projects/${project.slug}`} className="group block">
                <div className="relative">
                  <ImageFrame
                    src={project.cover}
                    alt={project.title}
                    ratio="4/3"
                    className="rounded-2xl"
                    hover
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-canvas/85 px-3 py-1 text-xs font-medium text-ink backdrop-blur-md transition-all duration-500 group-hover:bg-accent-500 group-hover:text-ink">
                    {project.category}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink text-balance transition-colors duration-300 group-hover:text-accent-700">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{project.location} · {project.year}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty line-clamp-2">{project.challenge}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">
                    Read case study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
