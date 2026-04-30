// ─── Home Screen ─────────────────────────────────────────────────────────────
// Fully wired — FeaturedCard + LessonListItem from mock data.
// Staggered fade-up animation on mount. Spec: Section 7.

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
import { Bell } from 'lucide-react-native';

import { Colors, FontFamily, Spacing, Radius } from '../theme';
import type { HomeScreenProps } from '../navigation/types';
import { MOCK_LESSONS, MOCK_USER_STATS, MOCK_NOTIFICATION } from '../data/mockLessons';
import type { Lesson } from '../types/lesson';
import FeaturedCard from '../components/FeaturedCard';
import LessonListItem from '../components/LessonListItem';
import PushNotificationPanel from '../components/PushNotificationPanel';

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

const SECTION_COUNT = 5;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const fadeStyles = useFadeUp(SECTION_COUNT);
  const [showNotif, setShowNotif] = useState(true);
  const [lockedHint, setLockedHint] = useState<string | null>(null);

  const featuredLessons = MOCK_LESSONS.filter((l) => !l.is_locked);
  const trackLessons = MOCK_LESSONS;

  const handleLessonPress = (lesson: Lesson) => {
    navigation.navigate('LessonDetail', { lessonId: lesson.lesson_id });
  };

  const handleLockedPress = (lesson: Lesson) => {
    const remaining = lesson.unlock_after_count - MOCK_USER_STATS.cases_completed;
    setLockedHint(
      remaining > 0
        ? `Complete ${remaining} more lesson${remaining > 1 ? 's' : ''} to unlock`
        : 'Complete your current lesson first',
    );
    setTimeout(() => setLockedHint(null), 3000);
  };

  const formatTime = (minutes: number) =>
    minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
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
        {/* ── App Header ──────────────────────────────────────────── */}
        <Animated.View style={[styles.header, fadeStyles[0]]}>
          <Text style={styles.wordmark}>
            APE<Text style={styles.wordmarkAccent}>X</Text>
          </Text>
          <View style={styles.notifButton}>
            <Bell size={20} color={Colors.textSecondary} strokeWidth={1.5} />
            <View style={styles.notifDot} />
          </View>
        </Animated.View>

        {/* ── Greeting ────────────────────────────────────────────── */}
        <Animated.View style={[styles.greeting, fadeStyles[1]]}>
          <Text style={styles.greetingLabel}>GOOD MORNING</Text>
          <Text style={styles.greetingName}>Leader</Text>
        </Animated.View>

        {/* ── Stats Row ───────────────────────────────────────────── */}
        <Animated.View style={[styles.statsRow, fadeStyles[2]]}>
          <StatPill label="DAY STREAK" value={String(MOCK_USER_STATS.day_streak)} />
          <StatPill label="CASES" value={String(MOCK_USER_STATS.cases_completed)} />
          <StatPill label="THIS WEEK" value={formatTime(MOCK_USER_STATS.time_this_week_minutes)} />
        </Animated.View>

        {/* ── Fresh Cases ─────────────────────────────────────────── */}
        <Animated.View style={fadeStyles[3]}>
          <View style={styles.sectionRow}>
            <Text style={styles.sectionLabel}>FRESH CASES</Text>
            <Text style={styles.sectionLink}>All →</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredScroll}
          >
            {featuredLessons.map((lesson) => (
              <FeaturedCard key={lesson.lesson_id} lesson={lesson} onPress={handleLessonPress} />
            ))}
          </ScrollView>
        </Animated.View>

        {/* ── Your Track ──────────────────────────────────────────── */}
        <Animated.View style={fadeStyles[4]}>
          <View style={styles.sectionRow}>
            <Text style={styles.sectionLabel}>YOUR TRACK</Text>
            <Text style={styles.sectionLinkMuted}>Filter ↓</Text>
          </View>

          {lockedHint && (
            <View style={styles.lockedHint}>
              <Text style={styles.lockedHintText}>{lockedHint}</Text>
            </View>
          )}

          {trackLessons.map((lesson) => (
            <LessonListItem
              key={lesson.lesson_id}
              lesson={lesson}
              onPress={handleLessonPress}
              onLockedPress={handleLockedPress}
            />
          ))}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statPill}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  scroll: { flex: 1 },
  content: { paddingHorizontal: Spacing.screenPaddingH, paddingBottom: Spacing.xl },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Spacing.base,
    marginBottom: Spacing.xl,
  },
  wordmark: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 32,
    letterSpacing: 0.12 * 32,
    color: Colors.textPrimary,
  },
  wordmarkAccent: { color: Colors.accent },
  notifButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.badge,
    backgroundColor: Colors.bgSurface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: Colors.accent,
    borderWidth: 1,
    borderColor: Colors.bgPrimary,
  },
  greeting: { marginBottom: Spacing.xl },
  greetingLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.textMuted,
    letterSpacing: 0.10 * 11,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  greetingName: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 26,
    color: Colors.textPrimary,
  },
  statsRow: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.xl },
  statPill: {
    flex: 1,
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.card,
    padding: Spacing.md,
    alignItems: 'center',
  },
  statValue: { fontFamily: FontFamily.dmSansBold, fontSize: 16, color: Colors.textPrimary, marginBottom: 2 },
  statLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  sectionLabel: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 20,
    letterSpacing: 0.10 * 20,
    color: Colors.textPrimary,
  },
  sectionLink: { fontFamily: FontFamily.dmSansRegular, fontSize: 12, color: Colors.accent },
  sectionLinkMuted: { fontFamily: FontFamily.dmSansRegular, fontSize: 12, color: Colors.textMuted },
  featuredScroll: { paddingBottom: Spacing.xl },
  lockedHint: {
    backgroundColor: Colors.bgSurface2,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.card,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  lockedHintText: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: 'center',
  },
});
