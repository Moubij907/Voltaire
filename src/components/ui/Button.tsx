import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent-solid' | 'accent-outline';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-all duration-500 ease-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';

const sizes: Record<Size, string> = {
  sm: 'text-[0.8rem] px-5 py-2.5 rounded-full',
  md: 'text-sm px-7 py-3.5 rounded-full',
  lg: 'text-[0.95rem] px-8 py-4 rounded-full',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-canvas hover:bg-accent-600 hover:text-ink',
  secondary:
    'border border-line bg-transparent text-ink hover:border-ink/40 hover:bg-surface/60',
  'accent-solid':
    'bg-accent-500 text-ink hover:bg-accent-400 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
  'accent-outline':
    'border border-accent-500/60 bg-transparent text-ink hover:bg-accent-500 hover:text-ink hover:border-accent-500',
  ghost: 'text-ink hover:text-accent-600 px-2',
};

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = false,
  onClick,
  type = 'button',
}: Props) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
