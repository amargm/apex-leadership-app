// ─── Takeaway Item — Instrumental ─────────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily } from '../../theme';
import type { TakeawayItem as TakeawayItemType } from '../../types/lesson';

interface Props {
  item: TakeawayItemType;
  isLast: boolean;
}

export default function TakeawayItem({ item, isLast }: Props) {
  return (
    <View style={[styles.card, isLast && { marginBottom: 0 }]}>
      <View style={styles.accentRail} />
      <View style={styles.header}>
        <Text style={styles.index}>0{item.headline.length > 0 ? '1' : '0'}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.headline}>{item.headline}</Text>
        <Text style={styles.bodyText}>{item.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    marginBottom: 12,
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
  },
  index: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#555555',
    letterSpacing: 0.06 * 8,
  },
  body: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
  },
  headline: {
    fontFamily: FontFamily.dmSansSemiBold,
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 14 * 1.35,
    marginBottom: 8,
  },
  bodyText: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 12,
    lineHeight: 12 * 1.7,
    color: '#777777',
  },
});
