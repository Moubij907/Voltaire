import type { ReactNode } from 'react';
import { Container } from './Container';

export function Section({
  children,
  className = '',
  containerSize = 'content',
  id,
}: {
  children: ReactNode;
  className?: string;
  containerSize?: 'content' | 'prose-narrow' | 'prose-wide' | 'full';
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 sm:py-32 lg:py-40 ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
