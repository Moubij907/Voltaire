import type { NicheConfig } from './types';
import { electrician } from './electrician';

// Registry of all available niches.
// To add a niche: create its config, register it here, add the accent CSS vars.
// The entire site rebrands automatically.

export const niches: Record<string, NicheConfig> = {
  electrician,
};

export const defaultNiche = 'electrician';

export function getNiche(slug: string): NicheConfig {
  return niches[slug] ?? niches[defaultNiche];
}

export function getActiveConfig(): NicheConfig {
  return niches[defaultNiche];
}
