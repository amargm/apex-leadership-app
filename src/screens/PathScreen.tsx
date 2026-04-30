// ─── Learning Path Screen — Instrumental Redesign ─────────────────────────────
// Vertical node map with ruled borders and square nodes, grouped by module.

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, FontFamily, Spacing } from '../theme';
import type { PathScreenProps } from '../navigation/types';
import { MOCK_LESSONS } from '../data/mockLessons';
import { MODULES } from '../data/modules';
import type { Lesson, ModuleKey } from '../types/lesson';
import { useAppState } from '../state/AppState';

const CATEGORY_DOT_COLORS: Record<string, string> = {
  green: '#6FC97A',
  orange: Colors.accentOrange,
  blue: Colors.accentBlue,
  grey: '#444444',
};

const FILTERS = ['ALL', 'READING', 'YET TO READ', 'COMPLETED'] as const;
type FilterKey = (typeof FILTERS)[number];

export default function PathScreen({ navigation }: PathScreenProps) {
  const [lockedMessage, setLockedMessage] = useState<{ id: string; msg: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('ALL');
  const { state, getLessonProgress, isLessonUnlocked } = useAppState();

  const handleNodePress = (lesson: Lesson) => {
    if (!isLessonUnlocked(lesson.lesson_id)) {
      const remaining = lesson.unlock_after_count - state.stats.casesCompleted;
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

  const filteredLessons = MOCK_LESSONS.filter((lesson) => {
    const lp = getLessonProgress(lesson.lesson_id);
    switch (activeFilter) {
      case 'READING': return lp.status === 'in_progress';
      case 'YET TO READ': return lp.status === 'new' && isLessonUnlocked(lesson.lesson_id);
      case 'COMPLETED': return lp.status === 'completed';
      default: return true;
    }
  });

  // Group filtered lessons by module
  const groupedByModule = MODULES.map((mod) => ({
    module: mod,
    lessons: filteredLessons.filter((l) => l.module === mod.key),
  })).filter((g) => g.lessons.length > 0);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>YOUR TRACK</Text>
          <Text style={styles.subtitle}>
            {state.stats.casesCompleted} of {MOCK_LESSONS.length} complete
          </Text>
        </View>
        <View style={styles.headerCount}>
          <Text style={styles.headerCountText}>{MOCK_LESSONS.length} cases</Text>
        </View>
      </View>

      {/* ── Filters ── */}
      <View style={styles.filterBar}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterTab, activeFilter === filter && styles.filterTabActive]}
            onPress={() => setActiveFilter(filter)}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterLabel, activeFilter === filter && styles.filterLabelActive]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {groupedByModule.map((group) => {
          const dotColor = CATEGORY_DOT_COLORS[group.module.colorKey];
          return (
            <View key={group.module.key} style={styles.moduleSection}>
              {/* Module Header */}
              <View style={styles.moduleHeader}>
                <View style={[styles.moduleDot, { backgroundColor: dotColor }]} />
                <View style={styles.moduleHeaderText}>
                  <Text style={styles.moduleTitle}>{group.module.title.toUpperCase()}</Text>
                  <Text style={styles.moduleSubtitle}>{group.module.subtitle}</Text>
                </View>
                <Text style={styles.moduleCount}>{group.lessons.length}</Text>
              </View>

              {/* Lessons in this module */}
              <View style={styles.nodeList}>
                <View style={styles.verticalLine} />
                {group.lessons.map((lesson, index) => {
                  const lp = getLessonProgress(lesson.lesson_id);
                  const isCompleted = lp.status === 'completed';
                  const isInProgress = lp.status === 'in_progress';
                  const isLocked = !isLessonUnlocked(lesson.lesson_id);
                  const showHint = lockedMessage?.id === lesson.lesson_id;

                  return (
                    <TouchableOpacity
                      key={lesson.lesson_id}
                      style={styles.nodeRow}
                      onPress={() => handleNodePress(lesson)}
                      activeOpacity={isLocked ? 1 : 0.75}
                    >
                      {/* Square Node */}
                      <View
                        style={[
                          styles.nodeSquare,
                          isCompleted && styles.nodeCompleted,
                          isInProgress && styles.nodeInProgress,
                          isLocked && styles.nodeLocked,
                        ]}
                      >
                        {isCompleted ? (
                          <Text style={styles.nodeCheckmark}>✓</Text>
                        ) : (
                          <Text style={[styles.nodeNumber, isLocked && styles.nodeNumberLocked]}>
                            {String(index + 1).padStart(2, '0')}
                          </Text>
                        )}
                      </View>

                      {/* Content */}
                      <View style={[styles.nodeContent, isLocked && styles.nodeContentLocked]}>
                        <Text style={styles.nodeTitle}>{lesson.title}</Text>
                        <Text style={styles.nodeMeta}>
                          {lesson.company} · {lesson.read_time_minutes} min · {lesson.difficulty}
                        </Text>

                        {showHint && (
                          <View style={styles.lockedHint}>
                            <Text style={styles.lockedHintText}>{lockedMessage!.msg}</Text>
                          </View>
                        )}

                        {isInProgress && lp.progress > 0 && (
                          <View style={styles.progressTrack}>
                            <View style={[styles.progressFill, { width: `${lp.progress}%` as any }]} />
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}
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
    paddingBottom: Spacing.base,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  filterBar: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 12,
    gap: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  filterTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  filterTabActive: {
    borderColor: Colors.borderDefault,
    backgroundColor: Colors.bgSurface,
  },
  filterLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#666666',
    letterSpacing: 0.08 * 9,
    textTransform: 'uppercase',
  },
  filterLabelActive: {
    color: Colors.accent,
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
    color: '#666666',
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
    color: '#666666',
    letterSpacing: 0.04 * 9,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 48 },

  // Module sections
  moduleSection: {
    marginBottom: 8,
  },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
    backgroundColor: Colors.bgSurface,
    gap: 10,
  },
  moduleDot: {
    width: 6,
    height: 6,
  },
  moduleHeaderText: {
    flex: 1,
  },
  moduleTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 10,
    color: Colors.textPrimary,
    letterSpacing: 0.10 * 10,
  },
  moduleSubtitle: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#666666',
    marginTop: 1,
  },
  moduleCount: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 18,
    color: '#333333',
  },

  nodeList: { position: 'relative', paddingHorizontal: Spacing.screenPaddingH, paddingTop: 16, paddingBottom: 8 },
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
    borderColor: '#333333',
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
    color: '#999999',
  },
  nodeContent: { flex: 1, paddingTop: 4 },
  nodeContentLocked: { opacity: 0.45 },
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
    color: '#999999',
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
    backgroundColor: '#333333',
    marginTop: Spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: 2,
    backgroundColor: Colors.accent,
  },
});
