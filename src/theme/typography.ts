// ─── APEX Typography System ───────────────────────────────────────────────────
// Maps exactly to the spec's font stack and type scale.

export const FontFamily = {
  // Display / structural
  bebasNeue: 'BebasNeue_400Regular',

  // Body / reading
  loraRegular: 'Lora_400Regular',
  loraMedium: 'Lora_500Medium',
  loraBold: 'Lora_700Bold',

  // UI chrome
  dmSansRegular: 'DMSans_400Regular',
  dmSansMedium: 'DMSans_500Medium',
  dmSansSemiBold: 'DMSans_600SemiBold',
  dmSansBold: 'DMSans_700Bold',

  // Pull quotes
  dmSerifDisplayRegular: 'DMSerifDisplay_400Regular',
  dmSerifDisplayItalic: 'DMSerifDisplay_400Regular_Italic',
} as const;

// Type scale from spec
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
  uiLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    letterSpacing: 0.08 * 10,
    textTransform: 'uppercase' as const,
  },
  metadata: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
  },
  ctaButton: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 13,
    letterSpacing: 0.06 * 13,
    textTransform: 'uppercase' as const,
  },
  statValue: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 16,
  },
  greetingName: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 26,
  },
  tabLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    letterSpacing: 0.09 * 11,
    textTransform: 'uppercase' as const,
  },
} as const;

// Max readable column width on mobile
export const MAX_READING_WIDTH = 340;
