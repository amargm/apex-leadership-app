// ─── Lesson Detail Screen — Instrumental Redesign ─────────────────────────────
// Brutalist case detail: ruled borders, DM Mono data, instrument panel.

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

import { Colors, FontFamily, Spacing, BorderWidth } from '../theme';
import type { LessonDetailScreenProps } from '../navigation/types';
import { MOCK_LESSONS } from '../data/mockLessons';
import type { Lesson } from '../types/lesson';
import { useAppState } from '../state/AppState';

// Content components
import ContextBlock from '../components/lesson/ContextBlock';
import BodyParagraph from '../components/lesson/BodyParagraph';
import PullQuote from '../components/lesson/PullQuote';
import SectionHeading from '../components/lesson/SectionHeading';
import KeyDecisionsGrid from '../components/lesson/KeyDecisionsGrid';
import TimelineComponent from '../components/lesson/TimelineComponent';
import ReflectionCard from '../components/lesson/ReflectionCard';
import TakeawayItem from '../components/lesson/TakeawayItem';
import CTAButton from '../components/CTAButton';

const TABS = ['OVERVIEW', 'TIMELINE', 'REFLECT', 'TAKEAWAYS'] as const;
type TabKey = (typeof TABS)[number];

export default function LessonDetailScreen({ navigation, route }: LessonDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('OVERVIEW');
  const contentOpacity = useRef(new Animated.Value(1)).current;
  const { lessonId } = route.params;
  const scrollRef = useRef<ScrollView>(null);
  const { startLesson, markTabViewed, completeLesson, getLessonProgress } = useAppState();

  const lesson: Lesson | undefined = MOCK_LESSONS.find((l) => l.lesson_id === lessonId);
  const lessonState = getLessonProgress(lessonId);

  // Start lesson on first open and mark OVERVIEW as viewed
  useEffect(() => {
    if (lesson && !lesson.is_locked) {
      startLesson(lessonId);
      markTabViewed(lessonId, 'OVERVIEW');
    }
  }, [lessonId]);

  const switchTab = (tab: TabKey) => {
    Animated.sequence([
      Animated.timing(contentOpacity, { toValue: 0, duration: 120, useNativeDriver: true }),
      Animated.timing(contentOpacity, { toValue: 1, duration: 280, useNativeDriver: true }),
    ]).start();
    setActiveTab(tab);
    markTabViewed(lessonId, tab);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  };

  if (!lesson) {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.errorState}>
          <Text style={styles.errorTitle}>LESSON UNAVAILABLE</Text>
          <Text style={styles.errorSub}>Try again later</Text>
          <CTAButton label="Go Back" variant="secondary" onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaView>
    );
  }

  const lessonIndex = MOCK_LESSONS.findIndex((l) => l.lesson_id === lessonId) + 1;
  const totalLessons = MOCK_LESSONS.length;
  const progressPct = lessonState.progress;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* ── Top Bar ──────────────────────────────────────────────── */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <View style={styles.backArrowBox}>
            <Text style={styles.backArrow}>←</Text>
          </View>
          <Text style={styles.backLabel}>BACK</Text>
        </TouchableOpacity>

        <View style={styles.topBarRight}>
          <Text style={styles.caseIndex}>L{String(lessonIndex).padStart(3, '0')} / {String(totalLessons).padStart(2, '0')}</Text>
        </View>
      </View>

      {/* ── Tab Bar (sticky) ─────────────────────────────────────── */}
      <View style={styles.tabBar}>
        {TABS.map((tab, i) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, i < TABS.length - 1 && styles.tabItemBorder]}
            onPress={() => switchTab(tab)}
          >
            <Text style={[styles.tabLabel, activeTab === tab && styles.tabLabelActive]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* ── Scrollable Content (hero + tab content) ──────────────── */}
      <Animated.ScrollView
        ref={scrollRef}
        style={[styles.scroll, { opacity: contentOpacity }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero Section (only in OVERVIEW) ─────────────────────── */}
        {activeTab === 'OVERVIEW' && (
        <View style={styles.hero}>
          <Text style={styles.watermark}>{String(lessonIndex).padStart(2, '0')}</Text>

          {/* Status pill */}
          <View style={styles.statusRow}>
            <View style={[styles.statusPill, lesson.status === 'in_progress' && styles.statusPillActive]}>
              <View style={[styles.statusDot, lesson.status === 'in_progress' && styles.statusDotActive]} />
              <Text style={[styles.statusText, lesson.status === 'in_progress' && styles.statusTextActive]}>
                {lesson.status === 'in_progress' ? 'IN PROGRESS' : lesson.status === 'completed' ? 'COMPLETED' : 'NEW'}
              </Text>
            </View>
          </View>

          {/* Meta tags */}
          <View style={styles.metaTags}>
            <Text style={styles.metaTag}>{lesson.company}</Text>
            <View style={styles.metaTagDivider} />
            <Text style={styles.metaTagBold}>{lesson.read_time_minutes} min</Text>
            <View style={styles.metaTagDivider} />
            <Text style={styles.metaTag}>{lesson.difficulty}</Text>
            <View style={styles.metaTagDivider} />
            <Text style={styles.metaTag}>{lesson.year_range}</Text>
          </View>

          {/* Title */}
          <Text style={styles.lessonTitle}>{lesson.title}</Text>

          {/* Subtitle */}
          <Text style={styles.lessonSubtitle}>{lesson.subtitle}</Text>

          {/* Instrument Panel */}
          <View style={styles.instrumentPanel}>
            <View style={styles.instrumentAccentLine} />
            <View style={styles.instrumentContent}>
              <View style={styles.instrumentLeft}>
                <View style={styles.instrumentProgressRow}>
                  <Text style={styles.instrumentProgressValue}>{progressPct}%</Text>
                  <View style={styles.instrumentProgressBar}>
                    <View style={[styles.instrumentProgressFill, { width: `${progressPct}%` }]} />
                  </View>
                </View>
                <Text style={styles.instrumentProgressLabel}>PROGRESS</Text>
              </View>
              <View style={styles.instrumentRight}>
                <Text style={styles.instrumentTimeValue}>~{Math.ceil(lesson.read_time_minutes * (1 - progressPct / 100))} min left</Text>
                <Text style={styles.instrumentTimeLabel}>EST. REMAINING</Text>
              </View>
            </View>
          </View>
        </View>
        )}

        {/* ── Tab Content ── */}
        <View style={styles.tabContent}>
          {activeTab === 'OVERVIEW' && <OverviewTab lesson={lesson} />}
          {activeTab === 'TIMELINE' && <TimelineTab lesson={lesson} />}
          {activeTab === 'REFLECT' && <ReflectTab lesson={lesson} />}
          {activeTab === 'TAKEAWAYS' && <TakeawaysTab lesson={lesson} lessonId={lessonId} onBack={() => navigation.goBack()} />}
        </View>

        {/* ── Continue Button ── */}
        {activeTab !== 'TAKEAWAYS' && (
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              const currentIndex = TABS.indexOf(activeTab);
              if (currentIndex < TABS.length - 1) {
                switchTab(TABS[currentIndex + 1]);
              }
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.continueText}>
              {activeTab === 'OVERVIEW' ? 'TIMELINE' : activeTab === 'TIMELINE' ? 'REFLECT' : 'TAKEAWAYS'} →
            </Text>
          </TouchableOpacity>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

// ─── Tab content components ───────────────────────────────────────────────────

function OverviewTab({ lesson }: { lesson: Lesson }) {
  return (
    <View>
      <ContextBlock text={lesson.tabs.overview.situation} />
      {lesson.tabs.overview.body_paragraphs.map((p, i) => (
        <BodyParagraph key={i} text={p} />
      ))}
      {lesson.tabs.overview.pull_quote.text ? (
        <PullQuote
          text={lesson.tabs.overview.pull_quote.text}
          attribution={lesson.tabs.overview.pull_quote.attribution}
        />
      ) : null}
      {lesson.tabs.overview.decisions.length > 0 && (
        <>
          <SectionHeading label="KEY DECISIONS" />
          <KeyDecisionsGrid decisions={lesson.tabs.overview.decisions} />
        </>
      )}
    </View>
  );
}

function TimelineTab({ lesson }: { lesson: Lesson }) {
  return (
    <View>
      <View style={styles.tabSectionHeader}>
        <View>
          <Text style={styles.tabSectionTitle}>CHRONOLOGY</Text>
          <Text style={styles.tabSectionSub}>Key inflection points</Text>
        </View>
        <View style={styles.tabSectionCount}>
          <Text style={styles.tabSectionCountText}>{lesson.tabs.timeline.events.length} events</Text>
        </View>
      </View>
      <TimelineComponent events={lesson.tabs.timeline.events} />
    </View>
  );
}

function ReflectTab({ lesson }: { lesson: Lesson }) {
  return (
    <View>
      <Text style={styles.reflectIntro}>
        These prompts help you internalize the case's lessons. There are no wrong answers — reflect honestly.
      </Text>
      {lesson.tabs.reflect.prompts.map((prompt, i) => (
        <ReflectionCard key={i} number={i + 1} prompt={prompt} />
      ))}
    </View>
  );
}

function TakeawaysTab({ lesson, lessonId, onBack }: { lesson: Lesson; lessonId: string; onBack: () => void }) {
  const { completeLesson, toggleSaveLesson } = useAppState();

  const handleComplete = () => {
    completeLesson(lessonId);
    onBack();
  };

  const handleSave = () => {
    toggleSaveLesson(lessonId);
  };

  return (
    <View>
      <View style={styles.tabSectionHeader}>
        <View>
          <Text style={styles.tabSectionTitle}>DISTILLED INSIGHTS</Text>
          <Text style={styles.tabSectionSub}>{lesson.tabs.takeaways.items.length} takeaways from this case</Text>
        </View>
      </View>
      {lesson.tabs.takeaways.items.map((item, i) => (
        <TakeawayItem
          key={i}
          item={item}
          isLast={i === lesson.tabs.takeaways.items.length - 1}
        />
      ))}
      <View style={{ marginTop: 24 }}>
        <CTAButton label="Mark as Complete" onPress={handleComplete} />
        <CTAButton label="Save for Later" variant="secondary" onPress={handleSave} style={{ marginTop: 12 }} />
      </View>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  errorState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.screenPaddingH,
  },
  errorTitle: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 20,
    color: Colors.textPrimary,
    letterSpacing: 2,
    marginBottom: Spacing.sm,
  },
  errorSub: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 14,
    color: '#777777',
    marginBottom: Spacing.xl,
  },

  // ── Top Bar ──
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
    backgroundColor: 'rgba(5, 5, 5, 0.97)',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backArrowBox: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 13,
    color: '#777777',
  },
  backLabel: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: '#777777',
    letterSpacing: 0.10 * 9,
    textTransform: 'uppercase',
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  caseIndex: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#555555',
    letterSpacing: 0.06 * 9,
  },

  // ── Hero ──
  hero: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 36,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
    position: 'relative',
    overflow: 'hidden',
  },
  watermark: {
    position: 'absolute',
    top: -40,
    right: -14,
    fontFamily: FontFamily.bebasNeue,
    fontSize: 280,
    color: Colors.textPrimary,
    opacity: 0.016,
  },
  statusRow: { marginBottom: 18 },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    borderWidth: 1,
    borderColor: '#222222',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusPillActive: {
    borderColor: 'rgba(200, 240, 77, 0.12)',
  },
  statusDot: {
    width: 5,
    height: 5,
    backgroundColor: '#777777',
  },
  statusDotActive: {
    backgroundColor: Colors.accent,
  },
  statusText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#777777',
    letterSpacing: 0.08 * 8,
    textTransform: 'uppercase',
  },
  statusTextActive: {
    color: Colors.accent,
  },
  metaTags: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  metaTag: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#777777',
    letterSpacing: 0.04 * 9,
    paddingHorizontal: 10,
  },
  metaTagBold: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 9,
    color: '#777777',
    letterSpacing: 0.04 * 9,
    paddingHorizontal: 10,
  },
  metaTagDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#222222',
  },
  lessonTitle: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 24,
    lineHeight: 24 * 1.25,
    color: Colors.textPrimary,
    maxWidth: '90%',
    marginBottom: 8,
  },
  lessonSubtitle: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 13,
    lineHeight: 13 * 1.5,
    color: '#777777',
    maxWidth: '85%',
    marginBottom: 22,
  },

  // ── Instrument Panel ──
  instrumentPanel: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    position: 'relative',
    overflow: 'hidden',
  },
  instrumentAccentLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: '35%',
    height: 1,
    backgroundColor: Colors.accent,
  },
  instrumentContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    paddingHorizontal: 16,
  },
  instrumentLeft: {},
  instrumentProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  instrumentProgressValue: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 18,
    color: Colors.accent,
    letterSpacing: -0.02 * 18,
  },
  instrumentProgressBar: {
    width: 100,
    height: 2,
    backgroundColor: '#222222',
  },
  instrumentProgressFill: {
    height: 2,
    backgroundColor: Colors.accent,
  },
  instrumentProgressLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#555555',
    letterSpacing: 0.10 * 8,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  instrumentRight: {
    alignItems: 'flex-end',
  },
  instrumentTimeValue: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 11,
    color: '#777777',
    letterSpacing: 0.02 * 11,
  },
  instrumentTimeLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#555555',
    letterSpacing: 0.08 * 8,
    textTransform: 'uppercase',
    marginTop: 4,
  },

  // ── Tab Bar ──
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(5, 5, 5, 0.97)',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    position: 'relative',
  },
  tabItemBorder: {
    borderRightWidth: 1,
    borderRightColor: Colors.borderDefault,
  },
  tabLabel: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    letterSpacing: 0.10 * 9,
    textTransform: 'uppercase',
    color: '#555555',
  },
  tabLabelActive: { color: Colors.accent },
  tabUnderline: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: BorderWidth.activeTab,
    backgroundColor: Colors.accent,
  },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 48 },
  tabContent: { padding: Spacing.screenPaddingH, paddingTop: 24 },

  // ── Tab Section Headers ──
  tabSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  tabSectionTitle: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 14,
    letterSpacing: 0.12 * 14,
    color: '#777777',
    marginBottom: 2,
  },
  tabSectionSub: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#555555',
    letterSpacing: 0.04 * 9,
  },
  tabSectionCount: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tabSectionCountText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#555555',
    letterSpacing: 0.04 * 9,
  },

  // ── Reflect intro ──
  reflectIntro: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 13,
    lineHeight: 13 * 1.6,
    color: '#777777',
    marginBottom: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },

  // ── Continue Button ──
  continueButton: {
    alignSelf: 'flex-end',
    marginRight: Spacing.screenPaddingH,
    marginTop: 24,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  continueText: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: Colors.accent,
    letterSpacing: 0.10 * 9,
    textTransform: 'uppercase',
  },
});
