// ─── Lesson List Item — Instrumental ──────────────────────────────────────────
// Track list row: index | content | status indicator. Ruled separators.

import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Colors, FontFamily, BorderWidth } from '../theme';
import type { Lesson } from '../types/lesson';

const CATEGORY_DOT_COLORS: Record<string, string> = {
  green: '#6FC97A',
  orange: Colors.accentOrange,
  blue: Colors.accentBlue,
  grey: '#444444',
};

interface Props {
  lesson: Lesson;
  index?: number;
  onPress: (lesson: Lesson) => void;
  onLockedPress?: (lesson: Lesson) => void;
}

export default function LessonListItem({ lesson, index = 0, onPress, onLockedPress }: Props) {
  const pressAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(pressAnim, { toValue: 1, duration: 100, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.timing(pressAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start();
  };

  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';
  const isInProgress = lesson.status === 'in_progress';

  const cardOpacity = isCompleted ? 0.55 : isLocked ? 0.35 : 1;
  const dotColor = CATEGORY_DOT_COLORS[lesson.category_color_key] ?? '#444444';

  const handlePress = () => {
    if (isLocked) {
      onLockedPress?.(lesson);
    } else {
      onPress(lesson);
    }
  };

  const indexStr = String(index + 1).padStart(2, '0');

  // Status indicator
  let statusText = '→';
  let statusColor = '#2A2A2A';
  if (isInProgress && lesson.progress != null) {
    statusText = `${lesson.progress}%`;
    statusColor = Colors.accent;
  } else if (isCompleted) {
    statusText = '✓';
    statusColor = '#444444';
  } else if (isLocked) {
    statusText = '×';
    statusColor = '#333333';
  }

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={lesson.title}
    >
      <Animated.View style={[styles.row, { opacity: cardOpacity }]}>
        {/* Accent rail for active */}
        {isInProgress && <View style={styles.accentRail} />}

        {/* Index */}
        <View style={styles.indexCol}>
          <Text style={[styles.indexNum, isInProgress && { color: Colors.accent }]}>{indexStr}</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.topRow}>
            <View style={[styles.dot, { backgroundColor: dotColor }]} />
            <Text style={styles.category}>{lesson.category.toUpperCase()}</Text>
          </View>
          <Text style={[styles.title, isCompleted && styles.titleDone]} numberOfLines={1}>
            {lesson.title}
          </Text>
        </View>

        {/* Status */}
        <Text style={[styles.status, { color: statusColor }]}>{statusText}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: BorderWidth.thin,
    borderBottomColor: Colors.borderDefault,
    position: 'relative',
  },
  accentRail: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: Colors.accent,
  },
  indexCol: {
    width: 32,
    alignItems: 'center',
  },
  indexNum: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 14,
    color: '#333333',
  },
  content: {
    flex: 1,
    gap: 3,
    paddingLeft: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dot: {
    width: 4,
    height: 4,
  },
  category: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#444444',
    letterSpacing: 0.10 * 8,
  },
  title: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 13,
    color: Colors.textPrimary,
  },
  titleDone: {
    textDecorationLine: 'line-through',
    color: '#444444',
  },
  status: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    width: 32,
    textAlign: 'right',
  },
});
