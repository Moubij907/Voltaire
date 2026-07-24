import { useState } from 'react';

// Image with graceful blur-up loading + subtle zoom on hover (optional).
// Aspect ratio prevents layout shift. Surface tone placeholder.

export function ImageFrame({
  src,
  alt,
  className = '',
  ratio = '4/3',
  priority = false,
  hover = false,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  hover?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-surface ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div
        className="absolute inset-0 bg-surface transition-opacity duration-700 ease-premium"
        style={{ opacity: loaded ? 0 : 1 }}
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-[1.4s] ease-premium ${
          loaded ? 'scale-100 blur-0 opacity-100' : 'scale-[1.04] blur-md opacity-0'
        } ${hover ? 'group-hover:scale-[1.03]' : ''}`}
      />
    </div>
  );
}
