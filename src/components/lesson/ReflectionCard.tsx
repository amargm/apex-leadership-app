// ─── Reflection Card ──────────────────────────────────────────────────────────
// Numbered prompt card. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, Spacing, Radius } from '../../theme';

interface Props {
  number: number;
  prompt: string;
}

export default function ReflectionCard({ number, prompt }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.numberBox}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <Text style={styles.prompt}>{prompt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 14,
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.cardLg,
    padding: 18,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  numberBox: {
    width: 28,
    height: 28,
    backgroundColor: Colors.bgPrimary,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  number: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 14,
    color: Colors.accent,
  },
  prompt: {
    flex: 1,
    fontFamily: FontFamily.loraRegular,
    fontSize: 14,
    lineHeight: 14 * 1.55,
    color: Colors.textPrimary,
  },
});
