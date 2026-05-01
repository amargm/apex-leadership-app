// ─── Reading Font Scale Hook ──────────────────────────────────────────────────
// Returns a multiplier for reading-view font sizes based on the "Larger Reading
// Font" toggle in user settings. 1.0 = normal, 1.2 = large.

import { useAppState } from '../state/AppState';

const LARGE_SCALE = 1.2;

export function useReadingScale() {
  const { state } = useAppState();
  const s = state.largeFontOn ? LARGE_SCALE : 1;
  return { scale: s, fontSize: (base: number) => base * s, lineHeight: (base: number, multiplier: number) => base * s * multiplier };
}
