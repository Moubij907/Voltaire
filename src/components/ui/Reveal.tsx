import type { ReactNode, ElementType } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const hiddenTransforms: Record<Direction, string> = {
  up: 'translateY(28px)',
  down: 'translateY(-28px)',
  left: 'translateX(28px)',
  right: 'translateX(-28px)',
  none: 'none',
};

// Reveal wraps children in an element that fades + slides into view on scroll.
// Uses IntersectionObserver via useReveal. Pair with the .reveal CSS utility.

export function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  duration = 900,
  className = '',
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hiddenTransforms[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
      data-once={once}
    >
      {children}
    </Tag>
  );
}
