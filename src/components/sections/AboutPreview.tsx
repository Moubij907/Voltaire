import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';

export function AboutPreview() {
  const { business, team } = useConfig();
  const yearsActive = new Date().getFullYear() - business.establishedYear;

  return (
    <Section className="bg-surface/40">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <ImageFrame
              src={team[0]?.photo}
              alt={team[0]?.name ?? 'Team member'}
              ratio="4/5"
              className="rounded-3xl"
            />
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal>
            <Eyebrow>The studio</Eyebrow>
            <h2 className="mt-7 text-display-lg text-ink text-balance">
              {yearsActive} years of electrical craft in New York.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 space-y-5 text-base leading-[1.7] text-ink-muted text-pretty">
              {business.story.slice(0, 2).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-accent-600"
            >
              Read our story
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
