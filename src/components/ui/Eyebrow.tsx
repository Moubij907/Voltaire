import type { ReactNode } from 'react';

// Editorial eyebrow — accent tick + uppercase tracked label.
// The signature marker above every section heading.

export function Eyebrow({ children, className = '', centered = false }: { children: ReactNode; className?: string; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-eyebrow font-sans font-medium uppercase text-ink-muted ${centered ? 'justify-center' : ''} ${className}`}>
      <span className="h-px w-6 bg-accent-500 transition-all duration-700 ease-premium" />
      <span>{children}</span>
    </div>
  );
}
