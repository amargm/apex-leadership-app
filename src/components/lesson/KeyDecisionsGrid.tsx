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
        <View key={i} style={[styles.card, i < decisions.length - 1 && styles.cardBorder]}>
          <View style={styles.cardHeader}>
            <Text style={styles.index}>{String(i + 1).padStart(2, '0')}</Text>
            <Text style={styles.title}>{d.title}</Text>
          </View>
          <Text style={styles.description}>{d.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
  },
  card: {
    backgroundColor: Colors.bgPrimary,
    padding: 16,
  },
  cardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 6,
  },
  index: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    color: '#666666',
    letterSpacing: 0.06 * 11,
  },
  title: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 15 * 1.35,
    flex: 1,
  },
  description: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 12,
    color: '#999999',
    lineHeight: 12 * 1.5,
    paddingLeft: 30,
  },
});
