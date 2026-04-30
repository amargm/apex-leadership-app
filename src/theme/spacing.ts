// ─── APEX Spacing & Layout System ────────────────────────────────────────────
// Base unit: 8px. All values are multiples of 4px.

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
  screenPaddingH: 24, // horizontal padding — consistent across all screens
  sectionGap: 24,     // vertical gap between major sections
} as const;

export const Radius = {
  badge: 6,          // badges, tags
  card: 14,          // cards (default)
  cardLg: 16,        // cards (large variant)
  bottomSheet: 20,   // bottom sheet, featured cards
  pill: 99,          // progress bars
  bottomNav: 0,      // flush to screen edges
} as const;

export const BorderWidth = {
  thin: 1,
  accentBar: 3,      // left-edge accent bar on active items
  activeTab: 2,      // active tab underline
} as const;

// Touch target minimum (44dp per Android spec)
export const MIN_TOUCH_TARGET = 44;
