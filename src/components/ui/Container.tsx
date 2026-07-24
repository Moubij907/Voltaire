import type { ReactNode } from 'react';

export function Container({
  children,
  className = '',
  size = 'content',
}: {
  children: ReactNode;
  className?: string;
  size?: 'content' | 'prose-narrow' | 'prose-wide' | 'full';
}) {
  const max =
    size === 'content' ? 'max-w-content' :
    size === 'prose-narrow' ? 'max-w-prose-narrow' :
    size === 'prose-wide' ? 'max-w-prose-wide' :
    'max-w-none';
  return <div className={`mx-auto px-6 sm:px-8 lg:px-12 ${max} ${className}`}>{children}</div>;
}
