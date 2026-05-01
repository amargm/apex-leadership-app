// ─── Timeline Component — Instrumental ────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily } from '../../theme';
import type { TimelineEvent } from '../../types/lesson';
import { useReadingScale } from '../../hooks/useReadingScale';

interface Props {
  events: TimelineEvent[];
}

export default function TimelineComponent({ events }: Props) {
  const { fontSize, lineHeight } = useReadingScale();
  return (
    <View style={styles.container}>
      {/* Vertical line */}
      <View style={styles.verticalLine} />

      {events.map((event, i) => (
        <View key={i} style={styles.item}>
          {/* Square Node */}
          <View style={styles.node}>
            <View style={styles.nodeDot} />
          </View>

          {/* Content */}
          <View style={[styles.content, i < events.length - 1 && styles.contentBorder]}>
            <Text style={styles.year}>{event.year}</Text>
            <Text style={[styles.title, { fontSize: fontSize(14), lineHeight: lineHeight(14, 1.35) }]}>{event.title}</Text>
            <Text style={[styles.description, { fontSize: fontSize(12), lineHeight: lineHeight(12, 1.7) }]}>{event.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingLeft: 44,
  },
  verticalLine: {
    position: 'absolute',
    left: 21,
    top: 22,
    bottom: 0,
    width: 1,
    backgroundColor: Colors.borderDefault,
  },
  item: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'flex-start',
    marginLeft: -44,
  },
  node: {
    width: 44,
    alignItems: 'center',
    paddingTop: 3,
    zIndex: 1,
  },
  nodeDot: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    backgroundColor: Colors.bgPrimary,
  },
  content: {
    flex: 1,
    paddingBottom: 28,
    paddingLeft: 14,
  },
  contentBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  year: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#666666',
    letterSpacing: 0.06 * 9,
    marginBottom: 6,
  },
  title: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 14 * 1.35,
    marginBottom: 8,
  },
  description: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 12,
    lineHeight: 12 * 1.7,
    color: '#999999',
  },
});
