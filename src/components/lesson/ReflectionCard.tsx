// ─── Reflection Card — Instrumental ───────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily } from '../../theme';

interface Props {
  number: number;
  prompt: string;
}

export default function ReflectionCard({ number, prompt }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.accentRail} />
      <View style={styles.header}>
        <Text style={styles.number}>0{number}</Text>
      </View>
      <View style={styles.headerDivider} />
      <View style={styles.body}>
        <Text style={styles.prompt}>{prompt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    marginBottom: 14,
    position: 'relative',
    overflow: 'hidden',
  },
  accentRail: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: Colors.accent,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },
  headerDivider: {
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
  number: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#2A2A2A',
    letterSpacing: 0.06 * 9,
  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  prompt: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.textPrimary,
  },
});
