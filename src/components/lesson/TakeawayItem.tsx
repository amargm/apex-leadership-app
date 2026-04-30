// ─── Takeaway Item ────────────────────────────────────────────────────────────
// Dot-led takeaway row. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, Spacing } from '../../theme';
import type { TakeawayItem as TakeawayItemType } from '../../types/lesson';

interface Props {
  item: TakeawayItemType;
  isLast: boolean;
}

export default function TakeawayItem({ item, isLast }: Props) {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.dot} />
        <View style={styles.textBlock}>
          <Text style={styles.headline}>{item.headline}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </View>
      {!isLast && <View style={styles.separator} />}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
    paddingVertical: Spacing.base,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent,
    marginTop: 6,
    flexShrink: 0,
  },
  textBlock: {
    flex: 1,
  },
  headline: {
    fontFamily: FontFamily.dmSansSemiBold,
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  body: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 14,
    lineHeight: 14 * 1.6,
    color: Colors.textSecondary,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
});
