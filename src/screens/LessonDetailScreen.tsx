// ─── Lesson Detail Screen ─────────────────────────────────────────────────────
// Fully wired — all 4 tabs with real lesson content components.
// Spec: Sections 7 (Screen 2) + 9.

import React, { useRef, useState } from 'react';
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

import { Colors, FontFamily, Spacing, Radius, BorderWidth } from '../theme';
import type { LessonDetailScreenProps } from '../navigation/types';
import { MOCK_LESSONS } from '../data/mockLessons';
import type { Lesson } from '../types/lesson';

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

const BANNER_GRADIENTS: Record<string, [string, string]> = {
  green: ['#1a2f1a', '#0d1f12'],
  orange: ['#2f1a0d', '#1f0d05'],
  blue: ['#0d1a2f', '#05101f'],
  grey: ['#1a1a1a', '#0d0d0d'],
};

export default function LessonDetailScreen({ navigation, route }: LessonDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('OVERVIEW');
  const contentOpacity = useRef(new Animated.Value(1)).current;
  const { lessonId } = route.params;
  const scrollRef = useRef<ScrollView>(null);

  const lesson: Lesson | undefined = MOCK_LESSONS.find((l) => l.lesson_id === lessonId);

  const switchTab = (tab: TabKey) => {
    Animated.sequence([
      Animated.timing(contentOpacity, { toValue: 0, duration: 120, useNativeDriver: true }),
      Animated.timing(contentOpacity, { toValue: 1, duration: 280, useNativeDriver: true }),
    ]).start();
    setActiveTab(tab);
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

  const gradient = BANNER_GRADIENTS[lesson.category_color_key] ?? BANNER_GRADIENTS.grey;
  const lessonIndex = MOCK_LESSONS.findIndex((l) => l.lesson_id === lessonId) + 1;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* ── Lesson Hero ──────────────────────────────────────────────── */}
      <LinearGradient colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
        <Text style={styles.watermark}>{String(lessonIndex).padStart(2, '0')}</Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.categoryTag}>
          <Text style={styles.categoryText}>{lesson.category.toUpperCase()}</Text>
        </View>

        <Text style={styles.lessonTitle}>{lesson.title}</Text>

        <View style={styles.companyLine}>
          <View style={styles.companyLogo}>
            <Text style={styles.companyAbbr}>{lesson.company_abbreviation}</Text>
          </View>
          <Text style={styles.companyMeta}>{lesson.company} · {lesson.year_range} · Real Case</Text>
        </View>

        <View style={styles.metaDivider} />

        <View style={styles.metaBar}>
          <Text style={styles.metaItem}>{lesson.read_time_minutes} min read</Text>
          <Text style={styles.metaDot}>·</Text>
          <Text style={styles.metaItem}>{lesson.difficulty}</Text>
          {lesson.tags.slice(0, 2).map((tag, i) => (
            <React.Fragment key={tag}>
              <Text style={styles.metaDot}>·</Text>
              <Text style={styles.metaItem}>{tag}</Text>
            </React.Fragment>
          ))}
        </View>
      </LinearGradient>

      {/* ── Sticky Tab Bar ───────────────────────────────────────────── */}
      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tabItem}
            onPress={() => switchTab(tab)}
          >
            <Text style={[styles.tabLabel, activeTab === tab && styles.tabLabelActive]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* ── Tab Content ──────────────────────────────────────────────── */}
      <Animated.ScrollView
        ref={scrollRef}
        style={[styles.scroll, { opacity: contentOpacity }]}
        contentContainerStyle={styles.tabContent}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'OVERVIEW' && <OverviewTab lesson={lesson} />}
        {activeTab === 'TIMELINE' && <TimelineTab lesson={lesson} />}
        {activeTab === 'REFLECT' && <ReflectTab lesson={lesson} />}
        {activeTab === 'TAKEAWAYS' && <TakeawaysTab lesson={lesson} onBack={() => navigation.goBack()} />}
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
      <SectionHeading label="TIMELINE" />
      <TimelineComponent events={lesson.tabs.timeline.events} />
    </View>
  );
}

function ReflectTab({ lesson }: { lesson: Lesson }) {
  return (
    <View>
      <SectionHeading label="REFLECT" />
      {lesson.tabs.reflect.prompts.map((prompt, i) => (
        <ReflectionCard key={i} number={i + 1} prompt={prompt} />
      ))}
    </View>
  );
}

function TakeawaysTab({ lesson, onBack }: { lesson: Lesson; onBack: () => void }) {
  return (
    <View>
      <SectionHeading label="TAKEAWAYS" />
      {lesson.tabs.takeaways.items.map((item, i) => (
        <TakeawayItem
          key={i}
          item={item}
          isLast={i === lesson.tabs.takeaways.items.length - 1}
        />
      ))}
      <CTAButton label="Mark as Complete" onPress={onBack} />
      <CTAButton label="Save for Later" variant="secondary" onPress={onBack} />
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
    color: Colors.textMuted,
    marginBottom: Spacing.xl,
  },
  hero: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.xl,
    overflow: 'hidden',
  },
  watermark: {
    position: 'absolute',
    bottom: -10,
    right: Spacing.base,
    fontFamily: FontFamily.bebasNeue,
    fontSize: 180,
    color: Colors.textPrimary,
    opacity: 0.04,
  },
  backButton: { marginBottom: Spacing.base, paddingVertical: Spacing.xs },
  backText: { fontFamily: FontFamily.dmSansRegular, fontSize: 13, color: Colors.textMuted },
  categoryTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: Colors.accentBorder,
    borderRadius: Radius.pill,
    paddingVertical: 4,
    paddingHorizontal: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  categoryText: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    color: Colors.accent,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  lessonTitle: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 27,
    lineHeight: 27 * 1.25,
    color: Colors.textPrimary,
    maxWidth: '85%',
    marginBottom: Spacing.md,
  },
  companyLine: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginBottom: Spacing.md },
  companyLogo: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.badge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyAbbr: { fontFamily: FontFamily.dmSansBold, fontSize: 8, color: Colors.textMuted },
  companyMeta: { fontFamily: FontFamily.dmSansRegular, fontSize: 12, color: Colors.textMuted },
  metaDivider: { height: 1, backgroundColor: Colors.borderDefault, marginBottom: Spacing.md },
  metaBar: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, flexWrap: 'wrap' },
  metaItem: { fontFamily: FontFamily.dmSansRegular, fontSize: 12, color: Colors.textMuted },
  metaDot: { color: Colors.borderDefault, fontSize: 12 },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.bgPrimary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
    paddingHorizontal: Spacing.screenPaddingH,
  },
  tabItem: { flex: 1, alignItems: 'center', paddingVertical: Spacing.md, position: 'relative' },
  tabLabel: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 11,
    letterSpacing: 0.09 * 11,
    textTransform: 'uppercase',
    color: Colors.textMuted,
  },
  tabLabelActive: { color: Colors.accent },
  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: '10%',
    right: '10%',
    height: BorderWidth.activeTab,
    backgroundColor: Colors.accent,
  },
  scroll: { flex: 1 },
  tabContent: { padding: Spacing.screenPaddingH, paddingBottom: 48 },
});
