// ─── APEX Modules ─────────────────────────────────────────────────────────────

import type { Module, ModuleKey } from '../types/lesson';

export const MODULES: Module[] = [
  {
    key: 'culture_building',
    title: 'Culture Building',
    subtitle: 'How leaders shape the invisible rules',
    colorKey: 'green',
  },
  {
    key: 'scaling_teams',
    title: 'Scaling Teams',
    subtitle: 'Growing without breaking',
    colorKey: 'orange',
  },
  {
    key: 'crisis_leadership',
    title: 'Crisis Leadership',
    subtitle: 'Decisions under extreme pressure',
    colorKey: 'blue',
  },
  {
    key: 'innovation',
    title: 'Innovation Under Pressure',
    subtitle: 'Betting on the future when stakes are highest',
    colorKey: 'green',
  },
  {
    key: 'turnarounds',
    title: 'Turnarounds',
    subtitle: 'Bringing organisations back from the brink',
    colorKey: 'orange',
  },
  {
    key: 'servant_leadership',
    title: 'Servant Leadership',
    subtitle: 'Leading by putting others first',
    colorKey: 'blue',
  },
  {
    key: 'decision_making',
    title: 'Decision Making',
    subtitle: 'Frameworks for high-stakes choices',
    colorKey: 'green',
  },
  {
    key: 'emotional_intelligence',
    title: 'Emotional Intelligence',
    subtitle: 'The human side of great leadership',
    colorKey: 'orange',
  },
];

export function getModule(key: ModuleKey): Module {
  return MODULES.find((m) => m.key === key)!;
}
