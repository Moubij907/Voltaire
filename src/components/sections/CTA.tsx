import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function CTA() {
  const { cta, contact } = useConfig();

  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36 lg:py-44">
      {/* Subtle accent glow on dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgb(var(--accent-500) / 0.15), transparent 70%)',
        }}
        aria-hidden
      />
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-eyebrow font-sans font-medium uppercase text-canvas/40">
              <span className="h-px w-8 bg-accent-500/60" />
              {cta.primary.label}
              <span className="h-px w-8 bg-accent-500/60" />
            </div>
            <h2 className="mt-8 text-display-lg text-canvas text-balance">{cta.headline}</h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-[1.65] text-canvas/55 text-pretty">
              {cta.subheadline}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to={cta.primary.to}
                className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-sm font-medium text-ink transition-all duration-500 ease-premium hover:bg-accent-400"
              >
                {cta.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
              </Link>
              <a
                href={contact.phoneHref}
                className="group inline-flex items-center gap-2 rounded-full border border-canvas/15 px-8 py-4 text-sm font-medium text-canvas/80 transition-all duration-500 ease-premium hover:border-canvas/30 hover:text-canvas"
              >
                <Phone className="h-4 w-4" />
                {contact.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
