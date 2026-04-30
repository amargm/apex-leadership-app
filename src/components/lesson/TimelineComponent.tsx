// ─── Timeline Component ───────────────────────────────────────────────────────
// Vertical timeline with Accent nodes. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, FontFamily, Spacing } from '../../theme';
import type { TimelineEvent } from '../../types/lesson';

interface Props {
  events: TimelineEvent[];
}

export default function TimelineComponent({ events }: Props) {
  return (
    <View style={styles.container}>
      {/* Vertical gradient line */}
      <LinearGradient
        colors={[Colors.accent, 'transparent']}
        style={styles.verticalLine}
      />

      {events.map((event, i) => (
        <View key={i} style={styles.item}>
          {/* Node */}
          <View style={styles.node}>
            <Text style={styles.nodeNumber}>{event.step}</Text>
          </View>

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.year}>{event.year}</Text>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>{event.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingLeft: 52,
  },
  verticalLine: {
    position: 'absolute',
    left: 17,
    top: 28,
    bottom: 20,
    width: 1,
  },
  item: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 20,
    alignItems: 'flex-start',
    marginLeft: -52,
  },
  node: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.bgSurface,
    borderWidth: 2,
    borderColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  nodeNumber: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 14,
    color: Colors.accent,
  },
  content: {
    flex: 1,
    paddingTop: 4,
  },
  year: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.10 * 10,
    marginBottom: 2,
  },
  title: {
    fontFamily: FontFamily.dmSansSemiBold,
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  description: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 13,
    lineHeight: 13 * 1.5,
    color: Colors.textSecondary,
  },
});
