// ─── Learning Path Screen — Instrumental Redesign ─────────────────────────────
// Vertical node map with ruled borders and square nodes.

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, FontFamily, Spacing } from '../theme';
import type { PathScreenProps } from '../navigation/types';
import { MOCK_LESSONS, MOCK_USER_STATS } from '../data/mockLessons';
import type { Lesson } from '../types/lesson';

const CATEGORY_DOT_COLORS: Record<string, string> = {
  green: '#6FC97A',
  orange: Colors.accentOrange,
  blue: Colors.accentBlue,
  grey: '#444444',
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
      {/* ── Header ── */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>YOUR TRACK</Text>
          <Text style={styles.subtitle}>
            {MOCK_USER_STATS.cases_completed} of {MOCK_LESSONS.length} complete
          </Text>
        </View>
        <View style={styles.headerCount}>
          <Text style={styles.headerCountText}>{MOCK_LESSONS.length} cases</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nodeList}>
          {/* Vertical line */}
          <View style={styles.verticalLine} />

          {MOCK_LESSONS.map((lesson, index) => {
            const isCompleted = lesson.status === 'completed';
            const isInProgress = lesson.status === 'in_progress';
            const isLocked = lesson.is_locked;
            const dotColor = CATEGORY_DOT_COLORS[lesson.category_color_key];
            const showHint = lockedMessage?.id === lesson.lesson_id;

            return (
              <View key={lesson.lesson_id} style={styles.nodeRow}>
                {/* Square Node */}
                <TouchableOpacity
                  style={[
                    styles.nodeSquare,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#2A2A2A',
    letterSpacing: 0.04 * 9,
    marginTop: 2,
  },
  headerCount: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  headerCountText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#2A2A2A',
    letterSpacing: 0.04 * 9,
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
    backgroundColor: Colors.borderDefault,
  },
  nodeRow: {
    flexDirection: 'row',
    gap: Spacing.base,
    marginBottom: Spacing.xl,
    alignItems: 'flex-start',
  },
  nodeSquare: {
    width: 40,
    height: 40,
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
    borderColor: '#222222',
    backgroundColor: Colors.bgSurface,
  },
  nodeCheckmark: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 14,
    color: '#050505',
  },
  nodeNumber: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 12,
    color: Colors.accent,
  },
  nodeNumberLocked: {
    color: '#444444',
  },
  nodeContent: { flex: 1, paddingTop: 4 },
  nodeContentLocked: { opacity: 0.45 },
  nodeTopRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 2 },
  categoryDot: { width: 4, height: 4 },
  nodeCategory: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#2A2A2A',
    letterSpacing: 0.10 * 8,
    textTransform: 'uppercase',
  },
  nodeTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 2,
    lineHeight: 14 * 1.3,
  },
  nodeMeta: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#444444',
    letterSpacing: 0.04 * 9,
  },
  lockedHint: {
    marginTop: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  lockedHintText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: Colors.accentBlue,
    letterSpacing: 0.04 * 9,
  },
  progressTrack: {
    height: 2,
    backgroundColor: '#222222',
    marginTop: Spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: 2,
    backgroundColor: Colors.accent,
  },
});
