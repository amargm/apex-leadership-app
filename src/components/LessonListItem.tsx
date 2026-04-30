// ─── Lesson List Item ─────────────────────────────────────────────────────────
// Spec: Section 8 — States: default / in_progress / completed / locked.

import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Check, Lock } from 'lucide-react-native';
import { Colors, FontFamily, Spacing, Radius, BorderWidth } from '../theme';
import type { Lesson } from '../types/lesson';

const CATEGORY_TINTS: Record<string, string> = {
  green: '#0f1f0f',
  orange: '#1f0f05',
  blue: '#051020',
  grey: '#111111',
};

const CATEGORY_DOT_COLORS: Record<string, string> = {
  green: '#6FC97A',
  orange: Colors.accentOrange,
  blue: Colors.accentBlue,
  grey: Colors.textMuted,
};

interface Props {
  lesson: Lesson;
  onPress: (lesson: Lesson) => void;
  onLockedPress?: (lesson: Lesson) => void;
}

export default function LessonListItem({ lesson, onPress, onLockedPress }: Props) {
  const pressAnim = useRef(new Animated.Value(0)).current;

  const translateX = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 3],
  });

  const handlePressIn = () => {
    Animated.timing(pressAnim, { toValue: 1, duration: 150, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.timing(pressAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start();
  };

  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';
  const isInProgress = lesson.status === 'in_progress';

  const cardOpacity = isCompleted ? 0.6 : isLocked ? 0.45 : 1;
  const tintColor = CATEGORY_TINTS[lesson.category_color_key] ?? CATEGORY_TINTS.grey;
  const dotColor = CATEGORY_DOT_COLORS[lesson.category_color_key] ?? Colors.textMuted;

  const handlePress = () => {
    if (isLocked) {
      onLockedPress?.(lesson);
    } else {
      onPress(lesson);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={lesson.title}
    >
      <Animated.View
        style={[
          styles.card,
          { opacity: cardOpacity, transform: [{ translateX }] },
          isInProgress && styles.cardInProgress,
        ]}
      >
        {/* Left accent bar — always visible for in_progress, on press for others */}
        {isInProgress && <View style={styles.accentBar} />}

        {/* ── Icon Box ──────────────────────────────────────────────── */}
        <View style={[styles.iconBox, { backgroundColor: tintColor }]}>
          {isCompleted ? (
            <Check size={16} color={Colors.textSecondary} strokeWidth={1.5} />
          ) : isLocked ? (
            <Lock size={16} color={Colors.textMuted} strokeWidth={1.5} />
          ) : (
            <Text style={styles.iconAbbr}>{lesson.company_abbreviation}</Text>
          )}
        </View>

        {/* ── Content Column ────────────────────────────────────────── */}
        <View style={styles.content}>
          <View style={styles.topRow}>
            <View style={[styles.categoryDot, { backgroundColor: dotColor }]} />
            <Text style={styles.topicLabel} numberOfLines={1}>
              {lesson.category.toUpperCase()}
            </Text>
          </View>

          <Text style={styles.title} numberOfLines={1}>
            {lesson.title}
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {lesson.subtitle}
          </Text>

          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{lesson.read_time_minutes} MIN</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{lesson.difficulty.toUpperCase()}</Text>
            </View>
            {isCompleted && (
              <View style={[styles.badge, styles.badgeCompleted]}>
                <Text style={[styles.badgeText, styles.badgeCompletedText]}>COMPLETED</Text>
              </View>
            )}
            {isInProgress && lesson.progress != null && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{lesson.progress}%</Text>
              </View>
            )}
          </View>
        </View>

        {/* Arrow */}
        {!isLocked && (
          <Text style={styles.arrow}>›</Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgSurface,
    borderWidth: BorderWidth.thin,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.cardLg,
    padding: Spacing.base,
    gap: Spacing.md,
    marginBottom: Spacing.sm,
    overflow: 'hidden',
  },
  cardInProgress: {
    borderLeftWidth: BorderWidth.accentBar,
    borderLeftColor: Colors.accent,
    paddingLeft: Spacing.base - BorderWidth.accentBar,
  },
  accentBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: BorderWidth.accentBar,
    backgroundColor: Colors.accent,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderWidth: BorderWidth.thin,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.card,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  iconAbbr: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  categoryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  topicLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: FontFamily.dmSansSemiBold,
    fontSize: 15,
    color: Colors.textPrimary,
  },
  description: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 13,
    lineHeight: 13 * 1.5,
    color: Colors.textMuted,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    marginTop: 2,
  },
  badge: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.badge,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgeText: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  badgeCompleted: {
    borderColor: Colors.success,
  },
  badgeCompletedText: {
    color: Colors.success,
  },
  arrow: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 16,
    color: Colors.textMuted,
  },
});
