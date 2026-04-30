// ─── Context Block ────────────────────────────────────────────────────────────
// "THE SITUATION" — left-bordered orange block. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, Spacing, Radius } from '../../theme';

interface Props {
  text: string;
}

export default function ContextBlock({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>THE SITUATION</Text>
      <Text style={styles.body}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgSurface,
    borderLeftWidth: 3,
    borderLeftColor: Colors.accentOrange,
    borderTopRightRadius: Radius.card,
    borderBottomRightRadius: Radius.card,
    paddingVertical: Spacing.base,
    paddingHorizontal: 18,
    marginBottom: Spacing.xl,
  },
  label: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.accentOrange,
    textTransform: 'uppercase',
    letterSpacing: 0.10 * 10,
    marginBottom: Spacing.sm,
  },
  body: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 14,
    lineHeight: 14 * 1.6,
    color: Colors.textSecondary,
  },
});
