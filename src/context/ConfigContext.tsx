import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { NicheConfig } from '@/config/types';
import { getActiveConfig } from '@/config';

// Single source of truth: the active niche config flows to every component.
// Components read from this context — they never import a config directly.

const ConfigContext = createContext<NicheConfig | null>(null);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const config = useMemo(() => getActiveConfig(), []);
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}

export function useConfig(): NicheConfig {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error('useConfig must be used within ConfigProvider');
  return ctx;
}
