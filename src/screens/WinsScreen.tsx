// ─── Wins / Achievements Screen ───────────────────────────────────────────────
// Type-led achievement rows. Spec: Section 7 (Screen 4).

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, FontFamily, Spacing, Radius } from '../theme';
import type { WinsScreenProps } from '../navigation/types';
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
        {/* ── Streak ──────────────────────────────────────────────────── */}
        <View style={styles.streakBlock}>
          <Text style={styles.streakNumber}>{MOCK_USER_STATS.day_streak}</Text>
          <Text style={styles.streakLabel}>DAY STREAK</Text>
        </View>

        <View style={styles.divider} />

        {/* ── Stats Grid ──────────────────────────────────────────────── */}
        <Text style={styles.sectionHeading}>STATS</Text>
        <View style={styles.statsGrid}>
          <StatCard label="Cases Completed" value={String(MOCK_USER_STATS.cases_completed)} />
          <StatCard label="Time This Week" value={`${MOCK_USER_STATS.time_this_week_minutes}m`} />
          <StatCard label="In Progress" value={String(MOCK_LESSONS.filter(l => l.status === 'in_progress').length)} />
          <StatCard label="Unlocked Ahead" value={String(MOCK_LESSONS.filter(l => !l.is_locked).length)} />
        </View>

        <View style={styles.divider} />

        {/* ── Achievements ────────────────────────────────────────────── */}
        <Text style={styles.sectionHeading}>ACHIEVEMENTS</Text>
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

        {/* ── Completed Cases ─────────────────────────────────────────── */}
        {completedLessons.length > 0 && (
          <>
            <View style={styles.divider} />
            <Text style={styles.sectionHeading}>COMPLETED CASES</Text>
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
    fontFamily: FontFamily.bebasNeue,
    fontSize: 80,
    color: Colors.textPrimary,
    lineHeight: 80,
    letterSpacing: 2,
  },
  streakLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.10 * 11,
    marginTop: 4,
  },
  divider: { height: 1, backgroundColor: Colors.borderDefault, marginVertical: Spacing.xl },
  sectionHeading: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 15,
    letterSpacing: 0.14 * 15,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: Spacing.md,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 4,
  },
  statCard: {
    width: '47.5%',
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.card,
    padding: Spacing.base,
  },
  statValue: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 28,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  statLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  achievementList: {
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.cardLg,
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
    width: 3,
    height: 20,
    backgroundColor: Colors.borderDefault,
    borderRadius: 2,
  },
  achievementBarEarned: { backgroundColor: Colors.accent },
  achievementLabel: {
    flex: 1,
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  achievementLabelUnearned: { color: Colors.textMuted },
  earnedTag: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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
    width: 3,
    backgroundColor: Colors.accent,
    borderRadius: 2,
    alignSelf: 'stretch',
  },
  completedContent: { flex: 1 },
  completedTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  completedMeta: { fontFamily: FontFamily.dmSansRegular, fontSize: 12, color: Colors.textMuted },
});
