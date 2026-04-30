// ─── Learning Path Screen ─────────────────────────────────────────────────────
// Vertical node map with connecting line. Spec: Section 7 (Screen 3).

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, FontFamily, Spacing, Radius } from '../theme';
import type { PathScreenProps } from '../navigation/types';
import { MOCK_LESSONS, MOCK_USER_STATS } from '../data/mockLessons';
import type { Lesson } from '../types/lesson';

const CATEGORY_DOT_COLORS: Record<string, string> = {
  green: '#6FC97A',
  orange: Colors.accentOrange,
  blue: Colors.accentBlue,
  grey: Colors.textMuted,
};

export default function PathScreen({ navigation }: PathScreenProps) {
  const [lockedMessage, setLockedMessage] = useState<{ id: string; msg: string } | null>(null);

  const handleNodePress = (lesson: Lesson) => {
    if (lesson.is_locked) {
      const remaining = lesson.unlock_after_count - MOCK_USER_STATS.cases_completed;
      setLockedMessage({
        id: lesson.lesson_id,
        msg: `${remaining} lesson${remaining !== 1 ? 's' : ''} away`,
      });
      setTimeout(() => setLockedMessage(null), 2500);
    } else {
      navigation.navigate('Learn', {
        screen: 'LessonDetail',
        params: { lessonId: lesson.lesson_id },
      } as any);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>YOUR TRACK</Text>
        <Text style={styles.subtitle}>
          {MOCK_USER_STATS.cases_completed} of {MOCK_LESSONS.length} complete
        </Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nodeList}>
          {/* Vertical gradient line */}
          <LinearGradient
            colors={[Colors.accent, Colors.borderDefault]}
            style={styles.verticalLine}
          />

          {MOCK_LESSONS.map((lesson, index) => {
            const isCompleted = lesson.status === 'completed';
            const isInProgress = lesson.status === 'in_progress';
            const isLocked = lesson.is_locked;
            const dotColor = CATEGORY_DOT_COLORS[lesson.category_color_key];
            const showHint = lockedMessage?.id === lesson.lesson_id;

            return (
              <View key={lesson.lesson_id} style={styles.nodeRow}>
                {/* Node circle */}
                <TouchableOpacity
                  style={[
                    styles.nodeCircle,
                    isCompleted && styles.nodeCompleted,
                    isInProgress && styles.nodeInProgress,
                    isLocked && styles.nodeLocked,
                  ]}
                  onPress={() => handleNodePress(lesson)}
                  activeOpacity={isLocked ? 1 : 0.7}
                >
                  {isCompleted ? (
                    <Text style={styles.nodeCheckmark}>✓</Text>
                  ) : (
                    <Text style={[styles.nodeNumber, isLocked && styles.nodeNumberLocked]}>
                      {String(index + 1).padStart(2, '0')}
                    </Text>
                  )}
                </TouchableOpacity>

                {/* Content */}
                <View style={[styles.nodeContent, isLocked && styles.nodeContentLocked]}>
                  <View style={styles.nodeTopRow}>
                    <View style={[styles.categoryDot, { backgroundColor: dotColor }]} />
                    <Text style={styles.nodeCategory}>{lesson.category.toUpperCase()}</Text>
                  </View>
                  <Text style={styles.nodeTitle}>{lesson.title}</Text>
                  <Text style={styles.nodeMeta}>
                    {lesson.read_time_minutes} min · {lesson.difficulty}
                  </Text>

                  {showHint && (
                    <View style={styles.lockedHint}>
                      <Text style={styles.lockedHintText}>{lockedMessage!.msg}</Text>
                    </View>
                  )}

                  {isInProgress && lesson.progress != null && (
                    <View style={styles.progressTrack}>
                      <View style={[styles.progressFill, { width: `${lesson.progress}%` as any }]} />
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  header: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  title: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 20,
    letterSpacing: 0.10 * 20,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 2,
  },
  scroll: { flex: 1 },
  content: { paddingHorizontal: Spacing.screenPaddingH, paddingTop: Spacing.xl, paddingBottom: 48 },
  nodeList: { position: 'relative' },
  verticalLine: {
    position: 'absolute',
    left: 20,
    top: 40,
    bottom: 20,
    width: 1,
  },
  nodeRow: {
    flexDirection: 'row',
    gap: Spacing.base,
    marginBottom: Spacing.xl,
    alignItems: 'flex-start',
  },
  nodeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.accent,
    backgroundColor: Colors.bgSurface,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    zIndex: 1,
  },
  nodeCompleted: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
  },
  nodeInProgress: {
    borderWidth: 2,
    borderColor: Colors.accent,
  },
  nodeLocked: {
    borderColor: Colors.borderDefault,
    backgroundColor: Colors.bgSurface,
  },
  nodeCheckmark: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 14,
    color: '#000000',
  },
  nodeNumber: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 14,
    color: Colors.accent,
  },
  nodeNumberLocked: {
    color: Colors.textMuted,
  },
  nodeContent: { flex: 1, paddingTop: 4 },
  nodeContentLocked: { opacity: 0.45 },
  nodeTopRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 2 },
  categoryDot: { width: 6, height: 6, borderRadius: 3 },
  nodeCategory: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  nodeTitle: {
    fontFamily: FontFamily.dmSansSemiBold,
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  nodeMeta: { fontFamily: FontFamily.dmSansRegular, fontSize: 11, color: Colors.textMuted },
  lockedHint: {
    marginTop: Spacing.sm,
    backgroundColor: Colors.bgSurface2,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.badge,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  lockedHintText: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.accentBlue,
  },
  progressTrack: {
    height: 3,
    backgroundColor: Colors.bgSurface2,
    borderRadius: Radius.pill,
    marginTop: Spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: 3,
    backgroundColor: Colors.accent,
    borderRadius: Radius.pill,
  },
});
