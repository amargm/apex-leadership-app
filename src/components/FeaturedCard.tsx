// ─── Featured Card ────────────────────────────────────────────────────────────
// 300px wide horizontal scroll card. Spec: Section 8.

import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, FontFamily, Spacing, Radius, BorderWidth } from '../theme';
import type { Lesson } from '../types/lesson';

// ─── Category gradient map ────────────────────────────────────────────────────
const BANNER_GRADIENTS: Record<string, [string, string]> = {
  green: ['#1a2f1a', '#0d1f12'],
  orange: ['#2f1a0d', '#1f0d05'],
  blue: ['#0d1a2f', '#05101f'],
  grey: ['#1a1a1a', '#0d0d0d'],
};

const CATEGORY_DOT_COLORS: Record<string, string> = {
  green: '#6FC97A',
  orange: Colors.accentOrange,
  blue: Colors.accentBlue,
  grey: Colors.textMuted,
};

const DIFFICULTY_LABELS: Record<string, string> = {
  accessible: 'ACCESSIBLE',
  medium: 'MEDIUM',
  complex: 'COMPLEX',
};

interface Props {
  lesson: Lesson;
  onPress: (lesson: Lesson) => void;
}

export default function FeaturedCard({ lesson, onPress }: Props) {
  const pressAnim = useRef(new Animated.Value(0)).current;

  const translateY = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -3],
  });

  const handlePressIn = () => {
    Animated.timing(pressAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(pressAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const gradient = BANNER_GRADIENTS[lesson.category_color_key] ?? BANNER_GRADIENTS.grey;
  const dotColor = CATEGORY_DOT_COLORS[lesson.category_color_key] ?? Colors.textMuted;
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

        {/* ── Banner ──────────────────────────────────────────────────── */}
        <LinearGradient colors={gradient} start={{ x: 0.2, y: 0 }} end={{ x: 1, y: 1 }} style={styles.banner}>

          {/* Structural watermark character */}
          <Text style={styles.bannerWatermark}>{lesson.company_abbreviation}</Text>

          {/* Badge: NEW or IN PROGRESS */}
          {lesson.status === 'new' && (
            <View style={styles.badgeNew}>
              <Text style={styles.badgeNewText}>NEW</Text>
            </View>
          )}
          {lesson.status === 'in_progress' && (
            <View style={styles.badgeInProgress}>
              <Text style={styles.badgeInProgressText}>IN PROGRESS</Text>
            </View>
          )}

          {/* Company line */}
          <View style={styles.companyLine}>
            <View style={[styles.dot, { backgroundColor: dotColor }]} />
            <Text style={styles.companyName}>{lesson.company.toUpperCase()}</Text>
          </View>
        </LinearGradient>

        {/* ── Body ────────────────────────────────────────────────────── */}
        <View style={styles.body}>
          <Text style={styles.topicLine} numberOfLines={1}>
            {lesson.category.toUpperCase()}
          </Text>

          <Text style={styles.title} numberOfLines={2}>
            {lesson.title}
          </Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{lesson.read_time_minutes} min read</Text>
            <View style={styles.difficultyBadge}>
              <Text style={styles.difficultyText}>
                {DIFFICULTY_LABELS[lesson.difficulty]}
              </Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={styles.progressTrack}>
            <ProgressBar value={progressPct} />
          </View>
          {progressPct > 0 && (
            <Text style={styles.progressLabel}>{progressPct}% complete</Text>
          )}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

// ─── Progress Bar (animated on mount) ────────────────────────────────────────
function ProgressBar({ value }: { value: number }) {
  const widthAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: value,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const width = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressBar}>
      <Animated.View style={[styles.progressFill, { width }]} />
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: Colors.bgSurface,
    borderWidth: BorderWidth.thin,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.bottomSheet,
    overflow: 'hidden',
    marginRight: Spacing.md,
  },
  banner: {
    height: 140,
    padding: Spacing.md,
    justifyContent: 'space-between',
  },
  bannerWatermark: {
    position: 'absolute',
    bottom: -12,
    right: 12,
    fontFamily: FontFamily.bebasNeue,
    fontSize: 80,
    color: Colors.textPrimary,
    opacity: 0.32,
  },
  badgeNew: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.accent,
    borderRadius: Radius.badge,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  badgeNewText: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 10,
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  badgeInProgress: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.badge,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  badgeInProgressText: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  companyLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  companyName: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  body: {
    padding: Spacing.base,
  },
  topicLine: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.accent,
    letterSpacing: 0.10 * 10,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  title: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 17,
    lineHeight: 17 * 1.3,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  metaText: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.textMuted,
  },
  difficultyBadge: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.badge,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  difficultyText: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  progressTrack: {
    marginTop: 4,
  },
  progressBar: {
    height: 3,
    backgroundColor: Colors.bgSurface2,
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  progressFill: {
    height: 3,
    backgroundColor: Colors.accent,
    borderRadius: Radius.pill,
  },
  progressLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textMuted,
    marginTop: 4,
  },
});
