// ─── Key Decisions Grid — Instrumental ────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily } from '../../theme';
import type { Decision } from '../../types/lesson';

interface Props {
  decisions: Decision[];
}

export default function KeyDecisionsGrid({ decisions }: Props) {
  return (
    <View style={styles.grid}>
      {decisions.map((d, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.index}>{String(i + 1).padStart(2, '0')}</Text>
          <Text style={styles.title}>{d.title}</Text>
          <Text style={styles.description}>{d.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    backgroundColor: Colors.borderDefault,
  },
  card: {
    width: '49.5%',
    backgroundColor: Colors.bgPrimary,
    padding: 18,
    paddingTop: 14,
  },
  index: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#2A2A2A',
    letterSpacing: 0.06 * 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 12,
    color: Colors.textPrimary,
    lineHeight: 12 * 1.4,
    marginBottom: 4,
  },
  description: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#2A2A2A',
    lineHeight: 9 * 1.4,
  },
});
