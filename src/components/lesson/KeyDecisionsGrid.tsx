// ─── Key Decisions Grid ───────────────────────────────────────────────────────
// 2-column grid of decision cards. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, Spacing, Radius } from '../../theme';
import type { Decision } from '../../types/lesson';

interface Props {
  decisions: Decision[];
}

export default function KeyDecisionsGrid({ decisions }: Props) {
  return (
    <View style={styles.grid}>
      {decisions.map((d, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.abbr}>{d.abbreviation}</Text>
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
    gap: 10,
  },
  card: {
    width: '48%',
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.card,
    padding: 14,
    gap: 4,
  },
  abbr: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 22,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  title: {
    fontFamily: FontFamily.dmSansSemiBold,
    fontSize: 12,
    color: Colors.textPrimary,
  },
  description: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.textSecondary,
    lineHeight: 11 * 1.4,
  },
});
