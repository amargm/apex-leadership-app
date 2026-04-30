// ─── APEX Typography System — Instrumental Redesign ──────────────────────────
// DM Mono added for all data readouts, labels, metadata, badges, nav.
// Brutalist precision: tight letter-spacing, uppercase mono labels.

export const FontFamily = {
  // Display / structural
  bebasNeue: 'BebasNeue_400Regular',

  // Body / reading
  loraRegular: 'Lora_400Regular',
  loraMedium: 'Lora_500Medium',
  loraBold: 'Lora_700Bold',

  // UI chrome (used sparingly — body text, descriptions)
  dmSansRegular: 'DMSans_400Regular',
  dmSansMedium: 'DMSans_500Medium',
  dmSansSemiBold: 'DMSans_600SemiBold',
  dmSansBold: 'DMSans_700Bold',

  // Monospace data — instrument readouts, labels, metadata, nav
  dmMonoLight: 'DMMono_300Light',
  dmMonoRegular: 'DMMono_400Regular',
  dmMonoMedium: 'DMMono_500Medium',

  // Pull quotes
  dmSerifDisplayRegular: 'DMSerifDisplay_400Regular',
  dmSerifDisplayItalic: 'DMSerifDisplay_400Regular_Italic',
} as const;

// Type scale
export const TypeScale = {
  appWordmark: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 32,
    letterSpacing: 0.12 * 32,
  },
  screenDisplayTitle: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 20,
    letterSpacing: 0.10 * 20,
  },
  lessonMainTitle: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 27,
    lineHeight: 27 * 1.25,
  },
  sectionHeading: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 15,
    letterSpacing: 0.14 * 15,
    textTransform: 'uppercase' as const,
  },
  bodyParagraph: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 15,
    lineHeight: 15 * 1.75,
  },
  pullQuote: {
    fontFamily: FontFamily.dmSerifDisplayItalic,
    fontSize: 17,
    lineHeight: 17 * 1.55,
  },
  cardTitle: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 17,
    lineHeight: 17 * 1.3,
  },
  // ── Monospace data styles ──
  uiLabel: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    letterSpacing: 0.08 * 9,
    textTransform: 'uppercase' as const,
  },
  metadata: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    letterSpacing: 0.04 * 10,
  },
  ctaButton: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 12,
    letterSpacing: 0.06 * 12,
    textTransform: 'uppercase' as const,
  },
  statValue: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 18,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 0.1 * 9,
    textTransform: 'uppercase' as const,
  },
  greetingName: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 26,
  },
  tabLabel: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 10,
    letterSpacing: 0.08 * 10,
    textTransform: 'uppercase' as const,
  },
  navLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 0.06 * 9,
    textTransform: 'uppercase' as const,
  },
  cornerIndex: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    letterSpacing: 0.04 * 8,
    textTransform: 'uppercase' as const,
  },
  sectionDividerLabel: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    letterSpacing: 0.1 * 9,
    textTransform: 'uppercase' as const,
  },
  badgeText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    letterSpacing: 0.08 * 8,
    textTransform: 'uppercase' as const,
  },
} as const;

// Max readable column width on mobile
export const MAX_READING_WIDTH = 340;
