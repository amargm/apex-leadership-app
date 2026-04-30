// ─── APEX Spacing & Layout System — Instrumental ─────────────────────────────
// Base unit: 8px. All values are multiples of 4px.
// Zero border-radius aesthetic — everything square-cut.

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,

  // Screen-level constants
  screenPaddingH: 20, // tighter horizontal padding for instrument feel
  sectionGap: 24,     // vertical gap between major sections
} as const;

export const Radius = {
  badge: 0,          // square — no radius
  card: 0,           // square — no radius
  cardLg: 0,         // square — no radius
  bottomSheet: 0,    // square — no radius
  pill: 0,           // progress bars — square
  bottomNav: 0,      // flush to screen edges
  // Only functional radius (toggle thumb)
  toggleThumb: 8,
} as const;

export const BorderWidth = {
  thin: 1,
  accentBar: 2,      // left-edge accent bar — thinner for precision
  activeTab: 2,      // active tab underline
} as const;

// Touch target minimum (44dp per Android spec)
export const MIN_TOUCH_TARGET = 44;
