// Applies the active niche accent color as CSS custom properties on :root.
// Called once at app start. When the accent changes, the entire palette updates.

import type { AccentScale } from '@/config/types';

const cssVars: Record<keyof AccentScale, string> = {
  50: '--accent-50',
  100: '--accent-100',
  200: '--accent-200',
  300: '--accent-300',
  400: '--accent-400',
  500: '--accent-500',
  600: '--accent-600',
  700: '--accent-700',
  800: '--accent-800',
  900: '--accent-900',
  950: '--accent-950',
};

export function applyAccent(scale: AccentScale) {
  const root = document.documentElement;
  (Object.keys(cssVars) as unknown as (keyof AccentScale)[]).forEach((key) => {
    root.style.setProperty(cssVars[key], scale[key]);
  });
}
