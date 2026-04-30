// ─── APEX Color System — Instrumental Redesign ────────────────────────────────
// Single source of truth. Never use raw hex values outside this file.
// Aesthetic: precision instrument — darker, sharper, ruled.

export const Colors = {
  // Backgrounds — darker than before
  bgPrimary: '#050505',
  bgSurface: '#0C0C0C',
  bgSurface2: '#121212',
  bgSurface3: '#161616',

  // Borders — thinner appearance via lower contrast
  borderDefault: '#1A1A1A',
  borderSubtle: '#222222',

  // Text — expanded hierarchy
  textPrimary: '#EDEAE5',
  textSecondary: '#888888',
  textMuted: '#555555',
  textDark: '#333333',
  textDarker: '#1E1E1E',

  // Accents
  accent: '#C8F04D',       // primary — sharp yellow-green
  accentOrange: '#FF6B35', // secondary — difficulty tags, warnings
  accentBlue: '#4DB8FF',   // tertiary — locked states, progress

  // Semantic
  danger: '#E85454',
  success: '#6FC97A',

  // Accent tinted borders / overlays
  accentBorder: 'rgba(200, 240, 77, 0.3)',
  accentDim: 'rgba(200, 240, 77, 0.12)',
  accentBg: 'rgba(200, 240, 77, 0.07)',
  accentGhost: 'rgba(200, 240, 77, 0.04)',
  accentGradientStart: 'rgba(200, 240, 77, 0.06)',
  accentGradientEnd: 'rgba(200, 240, 77, 0.02)',
  accentQuoteBorder: 'rgba(200, 240, 77, 0.15)',

  // Category banner gradients (dark, max 20% departure from base black)
  categoryGradients: {
    culture: ['#0d1a10', '#050505'] as [string, string],
    strategy: ['#1a140a', '#050505'] as [string, string],
    crisis: ['#0a1018', '#050505'] as [string, string],
    grey: ['#121212', '#050505'] as [string, string],
  },
} as const;

export type ColorKeys = keyof typeof Colors;
