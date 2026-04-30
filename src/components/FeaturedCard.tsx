// ─── Featured Card — Instrumental ─────────────────────────────────────────────
// 280px wide horizontal scroll card. Square, ruled, monospace meta.

import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, FontFamily, Spacing, BorderWidth } from '../theme';
import type { Lesson } from '../types/lesson';

const BANNER_GRADIENTS: Record<string, [string, string]> = {
  green: ['#0d1a10', '#050505'],
  orange: ['#1a140a', '#050505'],
  blue: ['#0a1018', '#050505'],
  grey: ['#121212', '#050505'],
};

const CATEGORY_DOT_COLORS: Record<string, string> = {
  green: '#6FC97A',
  orange: Colors.accentOrange,
  blue: Colors.accentBlue,
  grey: '#444444',
};

interface Props {
  lesson: Lesson;
  onPress: (lesson: Lesson) => void;
}

export default function FeaturedCard({ lesson, onPress }: Props) {
  const pressAnim = useRef(new Animated.Value(0)).current;

  const translateY = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -2],
  });

  const handlePressIn = () => {
    Animated.timing(pressAnim, { toValue: 1, duration: 150, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.timing(pressAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start();
  };

  const gradient = BANNER_GRADIENTS[lesson.category_color_key] ?? BANNER_GRADIENTS.grey;
  const dotColor = CATEGORY_DOT_COLORS[lesson.category_color_key] ?? '#444444';
  const progressPct = lesson.progress ?? 0;

  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(lesson)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={lesson.title}
    >
      <Animated.View style={[styles.card, { transform: [{ translateY }] }]}>

        {/* ── Header ── */}
        <LinearGradient colors={gradient} start={{ x: 0.2, y: 0 }} end={{ x: 1, y: 1 }} style={styles.header}>
          {/* Watermark */}
          <Text style={styles.watermark}>{lesson.company_abbreviation}</Text>

          {/* Badge */}
          {lesson.status === 'new' && (
            <View style={styles.badgeNew}>
              <Text style={styles.badgeNewText}>NEW</Text>
            </View>
          )}
          {lesson.status === 'in_progress' && (
            <View style={styles.badgeDone}>
              <Text style={styles.badgeDoneText}>IN PROGRESS</Text>
            </View>
          )}

          {/* Category line */}
          <View style={styles.categoryLine}>
            <View style={[styles.dot, { backgroundColor: dotColor }]} />
            <Text style={styles.categoryText}>{lesson.category.toUpperCase()}</Text>
          </View>
        </LinearGradient>

        {/* ── Body ── */}
        <View style={styles.body}>
          <Text style={styles.title} numberOfLines={2}>{lesson.title}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{lesson.read_time_minutes} min</Text>
            <Text style={styles.metaSep}>·</Text>
            <Text style={styles.metaText}>{lesson.difficulty}</Text>
          </View>

          {/* Progress */}
          {progressPct > 0 && (
            <View style={styles.progressRow}>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${progressPct}%` }]} />
              </View>
              <Text style={styles.progressPct}>{progressPct}%</Text>
            </View>
          )}
        </View>

        {/* Arrow */}
        <Text style={styles.arrow}>→</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    borderWidth: BorderWidth.thin,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
    marginRight: Spacing.md,
  },
  header: {
    height: 110,
    padding: 12,
    paddingHorizontal: 14,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  watermark: {
    position: 'absolute',
    top: -20,
    right: -4,
    fontFamily: FontFamily.bebasNeue,
    fontSize: 140,
    color: Colors.textPrimary,
    opacity: 0.025,
  },
  badgeNew: {
    position: 'absolute',
    top: 10,
    left: 12,
    backgroundColor: Colors.accent,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgeNewText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#050505',
    letterSpacing: 0.10 * 8,
    textTransform: 'uppercase',
  },
  badgeDone: {
    position: 'absolute',
    top: 10,
    left: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgeDoneText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#777777',
    letterSpacing: 0.10 * 8,
    textTransform: 'uppercase',
  },
  categoryLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 4,
    height: 4,
  },
  categoryText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#777777',
    letterSpacing: 0.10 * 8,
    textTransform: 'uppercase',
  },
  body: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
  },
  title: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 16,
    lineHeight: 16 * 1.3,
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#777777',
    letterSpacing: 0.04 * 9,
  },
  metaSep: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#555555',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  progressTrack: {
    flex: 1,
    height: 2,
    backgroundColor: '#222222',
  },
  progressFill: {
    height: 2,
    backgroundColor: Colors.accent,
  },
  progressPct: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: Colors.accent,
  },
  arrow: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 12,
    color: '#555555',
  },
});
