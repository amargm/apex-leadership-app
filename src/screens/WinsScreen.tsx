// ─── Wins / Achievements Screen — Instrumental Redesign ──────────────────────
// Ruled borders, monospace data, square corners.

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, FontFamily, Spacing } from '../theme';
import type { NotesScreenProps as WinsScreenProps } from '../navigation/types';
import { MOCK_LESSONS, MOCK_USER_STATS } from '../data/mockLessons';

const ACHIEVEMENTS = [
  { id: 'A1', label: 'First Case Completed', earned: true },
  { id: 'A2', label: '7-Day Streak', earned: true },
  { id: 'A3', label: 'Culture Track: All Cases', earned: false },
  { id: 'A4', label: '10 Cases Completed', earned: false },
  { id: 'A5', label: 'Speed Reader — Under 5 Min', earned: false },
];

const completedLessons = MOCK_LESSONS.filter((l) => l.status === 'completed');

export default function WinsScreen(_: WinsScreenProps) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>WINS</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Streak ── */}
        <View style={styles.streakBlock}>
          <Text style={styles.streakNumber}>{MOCK_USER_STATS.day_streak}</Text>
          <Text style={styles.streakLabel}>DAY STREAK</Text>
        </View>

        <View style={styles.divider} />

        {/* ── Stats Grid ── */}
        <View style={styles.sectionDivider}>
          <Text style={styles.sectionDividerLabel}>STATS</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>01</Text>
        </View>
        <View style={styles.statsGrid}>
          <StatCard label="COMPLETED" value={String(MOCK_USER_STATS.cases_completed)} />
          <StatCard label="THIS WEEK" value={`${MOCK_USER_STATS.time_this_week_minutes}m`} />
          <StatCard label="IN PROGRESS" value={String(MOCK_LESSONS.filter(l => l.status === 'in_progress').length)} />
          <StatCard label="UNLOCKED" value={String(MOCK_LESSONS.filter(l => !l.is_locked).length)} />
        </View>

        <View style={styles.divider} />

        {/* ── Achievements ── */}
        <View style={styles.sectionDivider}>
          <Text style={styles.sectionDividerLabel}>ACHIEVEMENTS</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>02</Text>
        </View>
        <View style={styles.achievementList}>
          {ACHIEVEMENTS.map((a, i) => (
            <View key={a.id}>
              <View style={styles.achievementRow}>
                <View style={[styles.achievementBar, a.earned && styles.achievementBarEarned]} />
                <Text style={[styles.achievementLabel, !a.earned && styles.achievementLabelUnearned]}>
                  {a.label}
                </Text>
                {a.earned && <Text style={styles.earnedTag}>EARNED</Text>}
              </View>
              {i < ACHIEVEMENTS.length - 1 && <View style={styles.rowDivider} />}
            </View>
          ))}
        </View>

        {/* ── Completed Cases ── */}
        {completedLessons.length > 0 && (
          <>
            <View style={styles.divider} />
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionDividerLabel}>COMPLETED CASES</Text>
              <View style={styles.sectionDividerRule} />
              <Text style={styles.sectionDividerIndex}>03</Text>
            </View>
            {completedLessons.map((lesson) => (
              <View key={lesson.lesson_id} style={styles.completedRow}>
                <View style={styles.completedBar} />
                <View style={styles.completedContent}>
                  <Text style={styles.completedTitle}>{lesson.title}</Text>
                  <Text style={styles.completedMeta}>{lesson.company} · {lesson.year_range}</Text>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
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
  scroll: { flex: 1 },
  content: { paddingHorizontal: Spacing.screenPaddingH, paddingTop: Spacing.xl, paddingBottom: 48 },
  streakBlock: { alignItems: 'center', marginBottom: Spacing.xl },
  streakNumber: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 72,
    color: Colors.textPrimary,
    lineHeight: 72,
    letterSpacing: -2,
  },
  streakLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 0.14 * 9,
    marginTop: 8,
  },
  divider: { height: 1, backgroundColor: Colors.borderDefault, marginVertical: Spacing.xl },
  sectionDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  sectionDividerLabel: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 14,
    letterSpacing: 0.16 * 14,
    color: '#999999',
  },
  sectionDividerRule: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
  sectionDividerIndex: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#666666',
    letterSpacing: 0.06 * 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
    backgroundColor: Colors.borderDefault,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    marginBottom: 4,
  },
  statCard: {
    width: '49.5%',
    backgroundColor: Colors.bgPrimary,
    padding: Spacing.base,
  },
  statValue: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 24,
    color: Colors.textPrimary,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 0.12 * 8,
  },
  achievementList: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
    minHeight: 44,
  },
  achievementBar: {
    width: 2,
    height: 20,
    backgroundColor: '#222222',
  },
  achievementBarEarned: { backgroundColor: Colors.accent },
  achievementLabel: {
    flex: 1,
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 13,
    color: Colors.textPrimary,
  },
  achievementLabelUnearned: { color: '#999999' },
  earnedTag: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: Colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.10 * 8,
  },
  rowDivider: { height: 1, backgroundColor: Colors.borderDefault, marginLeft: Spacing.base },
  completedRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  completedBar: {
    width: 2,
    backgroundColor: Colors.accent,
    alignSelf: 'stretch',
  },
  completedContent: { flex: 1 },
  completedTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 13,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  completedMeta: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#999999',
    letterSpacing: 0.04 * 9,
  },
});
