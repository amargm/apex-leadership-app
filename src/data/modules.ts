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
    colorKey: 'purple',
  },
  {
    key: 'turnarounds',
    title: 'Turnarounds',
    subtitle: 'Bringing organisations back from the brink',
    colorKey: 'red',
  },
  {
    key: 'servant_leadership',
    title: 'Servant Leadership',
    subtitle: 'Leading by putting others first',
    colorKey: 'teal',
  },
  {
    key: 'decision_making',
    title: 'Decision Making',
    subtitle: 'Frameworks for high-stakes choices',
    colorKey: 'pink',
  },
  {
    key: 'emotional_intelligence',
    title: 'Emotional Intelligence',
    subtitle: 'Leading with empathy and self-awareness',
    colorKey: 'grey',
  },
];

export function getModule(key: ModuleKey): Module | undefined {
  return MODULES.find((m) => m.key === key);
}
