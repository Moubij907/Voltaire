import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { useSEO } from '@/hooks/useSEO';

export function NotFoundPage() {
  const { business } = useConfig();
  useSEO({ title: `404 — ${business.name}`, description: 'Page not found.' });

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-canvas">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ background: 'radial-gradient(ellipse 75% 55% at 50% 0%, rgb(var(--accent-200) / 0.25), transparent 65%)' }}
        aria-hidden
      />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="editorial-number text-[8rem] leading-none text-accent-500/30 sm:text-[13rem]">404</div>
            <h1 className="mt-2 text-display-md text-ink text-balance">This page is off the grid.</h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-[1.65] text-ink-muted text-pretty">
              The page you are looking for does not exist or has been moved. Let us get you back on circuit.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-canvas transition-all duration-500 ease-premium hover:bg-accent-600 hover:text-ink"
              >
                Back to home
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-3 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:text-accent-600"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
