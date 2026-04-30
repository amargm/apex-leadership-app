// ─── APEX Color System ────────────────────────────────────────────────────────
// Single source of truth. Never use raw hex values outside this file.

export const Colors = {
  // Backgrounds
  bgPrimary: '#0A0A0A',
  bgSurface: '#111111',
  bgSurface2: '#1A1A1A',

  // Borders
  borderDefault: '#242424',
  borderSubtle: '#1C1C1C',

  // Text
  textPrimary: '#F0EDE8',
  textSecondary: '#888888',
  textMuted: '#555555',

  // Accents
  accent: '#C8F04D',       // primary — sharp yellow-green
  accentOrange: '#FF6B35', // secondary — difficulty tags, warnings
  accentBlue: '#4DB8FF',   // tertiary — locked states, progress

  // Semantic
  danger: '#FF4444',
  success: '#6FC97A',

  // Accent tinted borders / overlays
  accentBorder: 'rgba(200, 240, 77, 0.3)',
  accentBg: 'rgba(200, 240, 77, 0.07)',
  accentGradientStart: 'rgba(200, 240, 77, 0.06)',
  accentGradientEnd: 'rgba(200, 240, 77, 0.02)',
  accentQuoteBorder: 'rgba(200, 240, 77, 0.15)',

  // Category banner gradients (dark, max 20% departure from base black)
  categoryGradients: {
    culture: ['#1a2f1a', '#0d1f12'] as [string, string],
    strategy: ['#2f1a0d', '#1f0d05'] as [string, string],
    crisis: ['#0d1a2f', '#05101f'] as [string, string],
    grey: ['#1a1a1a', '#0d0d0d'] as [string, string],
  },
} as const;

export type ColorKeys = keyof typeof Colors;
