// ─── Context Block — Instrumental ─────────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, Spacing } from '../../theme';
import { useReadingScale } from '../../hooks/useReadingScale';

interface Props {
  text: string;
}

export default function ContextBlock({ text }: Props) {
  const { fontSize, lineHeight } = useReadingScale();
  return (
    <View style={styles.container}>
      <View style={styles.topAccent} />
      <Text style={styles.label}>THE SITUATION</Text>
      <Text style={[styles.body, { fontSize: fontSize(13), lineHeight: lineHeight(13, 1.5) }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: Colors.bgSurface,
    padding: 16,
    marginBottom: Spacing.xl,
    position: 'relative',
    overflow: 'hidden',
  },
  topAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: Colors.accent,
  },
  label: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: Colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.12 * 8,
    marginBottom: Spacing.sm,
  },
  body: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 13,
    lineHeight: 13 * 1.5,
    color: Colors.textPrimary,
  },
});
