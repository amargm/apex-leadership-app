// ─── Pull Quote — Instrumental ────────────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, Spacing } from '../../theme';

interface Props {
  text: string;
  attribution: string;
}

export default function PullQuote({ text, attribution }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.accentBorder} />
      <Text style={styles.decorativeQuote}>(</Text>
      <Text style={styles.quoteText}>{text}</Text>
      <Text style={styles.attribution}>{attribution}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 2,
    borderLeftColor: Colors.accent,
    backgroundColor: 'rgba(200, 240, 77, 0.04)',
    padding: 20,
    paddingLeft: 24,
    marginVertical: 24,
    position: 'relative',
  },
  accentBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: Colors.accent,
  },
  decorativeQuote: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 36,
    color: Colors.accent,
    opacity: 0.2,
  },
  quoteText: {
    fontFamily: FontFamily.dmSerifDisplayItalic,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  attribution: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#999999',
    letterSpacing: 0.04 * 9,
  },
});
