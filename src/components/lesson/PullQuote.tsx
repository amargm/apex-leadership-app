// ─── Pull Quote ───────────────────────────────────────────────────────────────
// DM Serif Display italic with accent decorative quote mark. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, FontFamily, Spacing, Radius } from '../../theme';

interface Props {
  text: string;
  attribution: string;
}

export default function PullQuote({ text, attribution }: Props) {
  return (
    <LinearGradient
      colors={[Colors.accentGradientStart, Colors.accentGradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.decorativeQuote}>"</Text>
      <Text style={styles.quoteText}>{text}</Text>
      <Text style={styles.attribution}>{attribution}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.accentQuoteBorder,
    borderRadius: Radius.cardLg,
    padding: 20,
    paddingLeft: 22,
    marginVertical: 22,
    overflow: 'hidden',
  },
  decorativeQuote: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 60,
    color: Colors.accent,
    opacity: 0.5,
    lineHeight: 50,
    marginBottom: -10,
  },
  quoteText: {
    fontFamily: FontFamily.dmSerifDisplayItalic,
    fontSize: 17,
    lineHeight: 17 * 1.55,
    color: Colors.textPrimary,
    paddingTop: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  attribution: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.08 * 11,
    marginTop: Spacing.sm,
  },
});
