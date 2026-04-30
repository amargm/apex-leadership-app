// ─── Section Heading — Instrumental ───────────────────────────────────────────

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
    gap: 10,
    marginTop: 24,
    marginBottom: 14,
  },
  heading: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 14,
    letterSpacing: 0.12 * 14,
    color: '#999999',
    textTransform: 'uppercase',
  },
  rule: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
});
