// ─── Home Screen — Instrumental Redesign ─────────────────────────────────────
// Brutalist precision: ruled borders, DM Mono data, square corners.

import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, FontFamily, Spacing } from '../theme';
import type { HomeScreenProps } from '../navigation/types';
import { MOCK_LESSONS, MOCK_NOTIFICATION } from '../data/mockLessons';
import type { Lesson } from '../types/lesson';
import FeaturedCard from '../components/FeaturedCard';
import PushNotificationPanel from '../components/PushNotificationPanel';
import { useAppState } from '../state/AppState';

// ─── Staggered fade-up hook ───────────────────────────────────────────────────
function useFadeUp(count: number) {
  const anims = useRef(Array.from({ length: count }, () => new Animated.Value(0))).current;
  useEffect(() => {
    Animated.stagger(
      60,
      anims.map((anim) =>
        Animated.timing(anim, { toValue: 1, duration: 400, useNativeDriver: true }),
      ),
    ).start();
  }, []);
  return anims.map((anim) => ({
    opacity: anim,
    transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [16, 0] }) }],
  }));
}

const SECTION_COUNT = 6;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const fadeStyles = useFadeUp(SECTION_COUNT);
  const [showNotif, setShowNotif] = useState(true);
  const { state, getLessonProgress, isLessonUnlocked } = useAppState();

  const featuredLessons = MOCK_LESSONS.filter((l) => isLessonUnlocked(l.lesson_id));
  const activeCase = MOCK_LESSONS.find((l) => {
    const lp = getLessonProgress(l.lesson_id);
    return lp.status === 'in_progress';
  });
  const activeCaseProgress = activeCase ? getLessonProgress(activeCase.lesson_id).progress : 0;

  const handleLessonPress = (lesson: Lesson) => {
    navigation.navigate('LessonDetail', { lessonId: lesson.lesson_id });
  };

  const formatTime = (minutes: number) =>
    minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Green ambient glow */}
      <LinearGradient
        colors={['rgba(200, 240, 77, 0.06)', 'rgba(200, 240, 77, 0.02)', 'transparent']}
        style={styles.topGlow}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {showNotif && (
        <PushNotificationPanel
          notification={MOCK_NOTIFICATION}
          onOpen={(lessonId) => {
            setShowNotif(false);
            navigation.navigate('LessonDetail', { lessonId });
          }}
          onDismiss={() => setShowNotif(false)}
        />
      )}

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ──────────────────────────────────────────────── */}
        <Animated.View style={[styles.header, fadeStyles[0]]}>
          <Text style={styles.wordmark}>
            APE<Text style={styles.wordmarkAccent}>X</Text>
          </Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.savedButton} activeOpacity={0.7} onPress={() => navigation.navigate('Saved' as any)}>
              <Text style={styles.savedButtonText}>SAVED</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View style={styles.headerAccentLine} />

        {/* ── Greeting ────────────────────────────────────────────── */}
        <Animated.View style={[styles.greeting, fadeStyles[1]]}>
          <Text style={styles.greetingLabel}>GOOD MORNING</Text>
          <Text style={styles.greetingName}>Leader</Text>
        </Animated.View>

        {/* ── Readout Strip (Instrument Panel) ────────────────────── */}
        <Animated.View style={[styles.readoutStrip, fadeStyles[2]]}>
          <ReadoutCell value={String(state.stats.dayStreak)} label="STREAK" />
          <View style={styles.readoutDivider} />
          <ReadoutCell value={String(state.stats.casesCompleted)} label="COMPLETED" />
          <View style={styles.readoutDivider} />
          <ReadoutCell value={formatTime(state.stats.timeThisWeekMinutes)} label="THIS WEEK" />
        </Animated.View>

        {/* ── Active Case (Resume Block) ──────────────────────────── */}
        {activeCase && (
          <Animated.View style={fadeStyles[3]}>
            <TouchableOpacity
              style={styles.activeCase}
              onPress={() => handleLessonPress(activeCase)}
              activeOpacity={0.85}
            >
              <View style={styles.activeCaseAccentRail} />
              <Text style={styles.activeCaseCornerIndex}>L002</Text>

              {/* Top signal row */}
              <View style={styles.activeCaseSignalRow}>
                <View style={styles.signalDot} />
                <Text style={styles.signalLabel}>READING IN PROGRESS</Text>
              </View>

              {/* Divider */}
              <View style={styles.activeCaseDivider} />

              {/* Body */}
              <View style={styles.activeCaseBody}>
                <Text style={styles.activeCaseTitle} numberOfLines={2}>
                  {activeCase.title}
                </Text>
                <View style={styles.activeCaseMeta}>
                  <View style={styles.progressGroup}>
                    <View style={styles.progressTrack}>
                      <View style={[styles.progressFill, { width: `${activeCaseProgress}%` }]} />
                    </View>
                    <Text style={styles.progressPct}>{activeCaseProgress}%</Text>
                  </View>
                  <Text style={styles.resumeLabel}>Resume →</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* ── Section Divider: Fresh Cases ─────────────────────────── */}
        <Animated.View style={[styles.sectionDivider, fadeStyles[4]]}>
          <Text style={styles.sectionDividerLabel}>FRESH CASES</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>01</Text>
        </Animated.View>

        {/* ── Cases Rail ───────────────────────────────────────────── */}
        <Animated.View style={fadeStyles[4]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.casesRail}
          >
            {featuredLessons.map((lesson) => (
              <FeaturedCard key={lesson.lesson_id} lesson={lesson} onPress={handleLessonPress} />
            ))}
          </ScrollView>
        </Animated.View>

        {/* ── Section Divider: Daily Thought ───────────────────────── */}
        <Animated.View style={[styles.sectionDivider, fadeStyles[5]]}>
          <Text style={styles.sectionDividerLabel}>DAILY THOUGHT</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>02</Text>
        </Animated.View>

        {/* ── Quote Block ──────────────────────────────────────────── */}
        <Animated.View style={fadeStyles[5]}>
          <View style={styles.quoteBlock}>
            <View style={styles.quoteAccentLine} />
            <Text style={styles.quoteText}>
              "The task of leadership is not to put greatness into people, but to elicit it, for the greatness is there already."
            </Text>
            <Text style={styles.quoteAttribution}>— John Buchan</Text>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Readout Cell ─────────────────────────────────────────────────────────────
function ReadoutCell({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.readoutCell}>
      <Text style={styles.readoutValue}>{value}</Text>
      <Text style={styles.readoutLabel}>{label}</Text>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  topGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '28%',
    zIndex: 0,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: Spacing.xl },

  // ── Header ──
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: Spacing.base,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  wordmark: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 28,
    letterSpacing: 0.18 * 28,
    color: Colors.textPrimary,
  },
  wordmarkAccent: { color: Colors.accent },
  headerRight: { alignItems: 'flex-end' },
  headerAccentLine: {
    width: 40,
    height: 1,
    backgroundColor: Colors.accent,
    marginLeft: Spacing.screenPaddingH,
    marginTop: 0,
  },

  // ── Greeting ──
  greeting: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 32,
    marginBottom: 0,
  },
  greetingLabel: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: '#999999',
    letterSpacing: 0.12 * 9,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  greetingName: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 34,
    color: Colors.textPrimary,
    lineHeight: 34 * 1.1,
  },

  // ── Readout Strip ──
  readoutStrip: {
    flexDirection: 'row',
    marginHorizontal: Spacing.screenPaddingH,
    marginTop: 24,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
  },
  readoutCell: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  readoutDivider: {
    width: 1,
    backgroundColor: Colors.borderDefault,
  },
  readoutValue: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 22,
    color: Colors.textPrimary,
    lineHeight: 22,
    marginBottom: 6,
  },
  readoutLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#999999',
    letterSpacing: 0.14 * 8,
    textTransform: 'uppercase',
  },

  // ── Active Case ──
  activeCase: {
    marginHorizontal: Spacing.screenPaddingH,
    marginTop: 24,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    position: 'relative',
    overflow: 'hidden',
  },
  activeCaseAccentRail: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: Colors.accent,
  },
  activeCaseCornerIndex: {
    position: 'absolute',
    top: 8,
    right: 10,
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#666666',
    letterSpacing: 0.06 * 8,
  },
  activeCaseSignalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  signalDot: {
    width: 6,
    height: 6,
    backgroundColor: Colors.accent,
  },
  signalLabel: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: Colors.accent,
    letterSpacing: 0.12 * 9,
    textTransform: 'uppercase',
  },
  activeCaseDivider: {
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
  activeCaseBody: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  activeCaseTitle: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 19,
    color: Colors.textPrimary,
    lineHeight: 19 * 1.3,
    marginBottom: 14,
  },
  activeCaseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressTrack: {
    width: 80,
    height: 2,
    backgroundColor: '#222222',
  },
  progressFill: {
    height: 2,
    backgroundColor: Colors.accent,
  },
  progressPct: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 11,
    color: Colors.accent,
  },
  resumeLabel: {
    fontFamily: FontFamily.dmSansSemiBold,
    fontSize: 10,
    color: '#999999',
    letterSpacing: 0.08 * 10,
    textTransform: 'uppercase',
  },

  // ── Section Divider ──
  sectionDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: Spacing.screenPaddingH,
    marginTop: 32,
    marginBottom: 18,
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

  // ── Cases Rail ──
  casesRail: {
    paddingHorizontal: Spacing.screenPaddingH,
    gap: 12,
    paddingBottom: 4,
  },

  // ── Quote Block ──
  quoteBlock: {
    marginHorizontal: Spacing.screenPaddingH,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    padding: 20,
    paddingLeft: 18,
    position: 'relative',
  },
  quoteAccentLine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: Colors.accent,
  },
  quoteText: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 15,
    lineHeight: 15 * 1.6,
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  quoteAttribution: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#999999',
    letterSpacing: 0.04 * 9,
  },

  // ── Saved Button ──
  savedButton: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  savedButtonText: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: '#999999',
    letterSpacing: 0.10 * 9,
    textTransform: 'uppercase',
  },
});
