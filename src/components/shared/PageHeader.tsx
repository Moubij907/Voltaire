import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-canvas pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(ellipse 75% 55% at 50% 0%, rgb(var(--accent-200) / 0.25), transparent 65%)',
        }}
        aria-hidden
      />
      <Container>
        <div className="relative">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl text-display-xl text-ink text-balance">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-[1.65] text-ink-muted text-pretty">{subtitle}</p>
            </Reveal>
          )}
          {children && <Reveal delay={280}><div className="mt-8">{children}</div></Reveal>}
        </div>
      </Container>
    </section>
  );
}
