// ─── Section Heading ──────────────────────────────────────────────────────────
// Bebas Neue with trailing horizontal rule. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily } from '../../theme';

interface Props {
  label: string;
}

export default function SectionHeading({ label }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.heading}>{label}</Text>
      <View style={styles.rule} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 22,
    marginBottom: 10,
  },
  heading: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 16,
    letterSpacing: 0.12 * 16,
    color: Colors.textPrimary,
    textTransform: 'uppercase',
  },
  rule: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
});
