// ─── APEX PRO — Upgrade Screen ────────────────────────────────────────────────

import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Crown, BookOpen, Zap, Download, Bell, Sparkles } from 'lucide-react-native';
import { Colors, FontFamily, Spacing } from '../theme';
import { useAppState } from '../state/AppState';
import { MOCK_LESSONS } from '../data/mockLessons';
import AppModal from '../components/AppModal';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { LearnStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<LearnStackParamList, 'Pro'>;

// ─── Static data ─────────────────────────────────────────────────────────────

const MODULE_ACCENT: Record<string, string> = {
  green:  Colors.success,
  orange: Colors.accentOrange,
  blue:   Colors.accentBlue,
  purple: Colors.accentPurple,
  red:    Colors.accentRed,
  teal:   Colors.accentTeal,
  pink:   Colors.accentPink,
  grey:   '#555555',
};

const MODULE_DEFS = [
  { key: 'culture_building',       label: 'Culture Building',       colorKey: 'green'  },
  { key: 'scaling_teams',          label: 'Scaling Teams',          colorKey: 'orange' },
  { key: 'crisis_leadership',      label: 'Crisis Leadership',      colorKey: 'blue'   },
  { key: 'innovation',             label: 'Innovation',             colorKey: 'purple' },
  { key: 'turnarounds',            label: 'Turnarounds',            colorKey: 'red'    },
  { key: 'servant_leadership',     label: 'Servant Leadership',     colorKey: 'teal'   },
  { key: 'decision_making',        label: 'Decision Making',        colorKey: 'pink'   },
  { key: 'emotional_intelligence', label: 'Emotional Intelligence', colorKey: 'grey'   },
] as const;

const WHAT_YOU_GET = [
  {
    icon: BookOpen,
    label: 'FULL LIBRARY, UNLOCKED',
    body: 'Every case study across all 8 modules — no locked lessons, no teaser previews.',
  },
  {
    icon: Sparkles,
    label: 'FOUR TABS PER CASE',
    body: 'Overview, Timeline, Reflection prompts, and Takeaways. A full learning session, not a summary.',
  },
  {
    icon: Bell,
    label: 'UNLIMITED NOTES',
    body: 'Take notes on any reflection prompt, across any case. Free accounts are capped at 5.',
  },
  {
    icon: Download,
    label: 'WORKS OFFLINE',
    body: 'Every case ships inside the app. No streaming, no loading, no dead zones.',
  },
  {
    icon: Zap,
    label: 'ALL FUTURE CASES INCLUDED',
    body: 'New cases added through app updates land in your library — no extra charge.',
  },
  {
    icon: Crown,
    label: 'ONE-TIME PAYMENT',
    body: 'No subscription. No monthly fee. Pay once — everything stays unlocked forever.',
  },
];

// ─── Screen ──────────────────────────────────────────────────────────────────

export default function ProScreen({ navigation }: Props) {
  const { state } = useAppState();
  const isPro = state.userTier === 'pro';
  const [comingSoonVisible, setComingSoonVisible] = useState(false);

  const modules = useMemo(() => {
    const counts: Record<string, number> = {};
    MOCK_LESSONS.forEach(l => { counts[l.module] = (counts[l.module] ?? 0) + 1; });
    return MODULE_DEFS.map(m => ({ ...m, count: counts[m.key] ?? 0 }));
  }, []);

  const totalLessons = MOCK_LESSONS.length;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <ArrowLeft size={20} color={Colors.textPrimary} strokeWidth={1.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>APEX PRO</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* ── Hero ── */}
        <View style={styles.hero}>
          <View style={styles.heroAccentLine} />
          <View style={styles.crownBox}>
            <Crown size={26} color={Colors.accent} strokeWidth={1.5} />
          </View>
          {isPro ? (
            <>
              <Text style={styles.heroTitle}>YOU'RE PRO</Text>
              <Text style={styles.heroSub}>
                All {totalLessons} case studies unlocked. Every future case included. No further action needed.
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.heroTitle}>
                <Text>{totalLessons} CASE{`\n`}STUDIES</Text>
                <Text style={styles.heroTitleAccent}>{` +`}</Text>
                <Text>{`\nONE PURCHASE.`}</Text>
              </Text>
              <Text style={styles.heroTagline}>MORE CASES ADDED EVERY UPDATE.</Text>
              <Text style={styles.heroSub}>
                Every case study. Every module. Four learning layers per case — Overview, Timeline, Reflection, Takeaways. Pay once and the entire library is yours, including everything published after you buy.
              </Text>
            </>
          )}
        </View>

        {/* ── Stats strip ── */}
        {!isPro && (
          <View style={styles.statsStrip}>
            {[
              { n: String(totalLessons), l: 'Case studies' },
              { n: '8',                  l: 'Modules'      },
              { n: '4',                  l: 'Tabs per case' },
              { n: '∞',                  l: 'Notes'        },
            ].map((s, i) => (
              <React.Fragment key={s.l}>
                {i > 0 && <View style={styles.statsDivider} />}
                <View style={styles.statCell}>
                  <Text style={styles.statN}>{s.n}</Text>
                  <Text style={styles.statL}>{s.l}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        )}

        {/* ── Module grid ── */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionLabel}>WHAT'S INSIDE</Text>
            <View style={styles.sectionRule} />
          </View>
          <View style={styles.moduleGrid}>
            {modules.map(m => {
              const accent = MODULE_ACCENT[m.colorKey] ?? '#555';
              return (
                <View key={m.key} style={styles.moduleCard}>
                  <View style={[styles.moduleAccentBar, { backgroundColor: accent }]} />
                  <View style={styles.moduleCardBody}>
                    <Text style={styles.moduleLabel} numberOfLines={2}>{m.label.toUpperCase()}</Text>
                    <Text style={[styles.moduleCount, { color: accent }]}>{m.count}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* ── What you get ── */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionLabel}>WHAT YOU GET</Text>
            <View style={styles.sectionRule} />
          </View>
          {WHAT_YOU_GET.map((item, i) => (
            <View key={item.label} style={[styles.benefitRow, i < WHAT_YOU_GET.length - 1 && styles.benefitBorder]}>
              <View style={styles.benefitIconBox}>
                <item.icon size={16} color={Colors.accent} strokeWidth={1.5} />
              </View>
              <View style={styles.benefitText}>
                <Text style={styles.benefitLabel}>{item.label}</Text>
                <Text style={styles.benefitBody}>{item.body}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ── Guarantee block ── */}
        <View style={styles.guarantee}>
          <View style={styles.guaranteeAccent} />
          <Text style={styles.guaranteeTitle}>ONE-TIME PURCHASE. NO EXCEPTIONS.</Text>
          <Text style={styles.guaranteeBody}>
            {isPro
              ? 'Thank you for your support.'
              : 'Pay once — no subscription, no monthly fee, no renewal prompts. Every new case study published after your purchase lands in your library automatically, forever.'}
          </Text>
        </View>

      </ScrollView>

      {/* ── Sticky CTA ── */}
      {!isPro && (
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.ctaButton} onPress={() => setComingSoonVisible(true)} activeOpacity={0.85}>
            <Crown size={16} color={Colors.bgPrimary} strokeWidth={2} />
            <Text style={styles.ctaText}>UNLOCK THE FULL LIBRARY</Text>
          </TouchableOpacity>
          <Text style={styles.ctaHint}>Pay once · Never again · All future cases included</Text>
        </View>
      )}

      <AppModal
        visible={comingSoonVisible}
        title="COMING SOON"
        body={"In-app purchase will be available in a future update.\n\nSit tight — one-time payment, no subscription, ever."}
        accentColor={Colors.accent}
        onDismiss={() => setComingSoonVisible(false)}
        actions={[{ label: 'GOT IT', variant: 'primary', onPress: () => setComingSoonVisible(false) }]}
      />
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  headerTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 13,
    color: Colors.textPrimary,
    letterSpacing: 1.2,
  },

  scroll: { flex: 1 },
  content: { paddingBottom: 32 },

  // ─ Hero
  hero: {
    alignItems: 'center',
    paddingTop: 44,
    paddingBottom: 40,
    paddingHorizontal: Spacing.screenPaddingH,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  heroAccentLine: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 2,
    backgroundColor: Colors.accent,
  },
  crownBox: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.accent,
    marginBottom: 22,
  },
  heroTitle: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 42,
    color: Colors.textPrimary,
    letterSpacing: 2,
    textAlign: 'center',
    lineHeight: 46,
    marginBottom: 12,
  },
  heroTitleAccent: {
    color: Colors.accent,
  },
  heroTagline: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 10,
    color: Colors.accent,
    letterSpacing: 1.4,
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSub: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },

  // ─ Stats strip
  statsStrip: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    gap: 5,
  },
  statsDivider: { width: 1, backgroundColor: Colors.borderDefault },
  statN: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 28,
    color: Colors.accent,
    letterSpacing: 1,
  },
  statL: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: Colors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  // ─ Shared section wrapper
  section: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 28,
  },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  sectionLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 1.2,
  },
  sectionRule: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderDefault,
  },

  // ─ Module grid
  moduleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
  },
  moduleCard: {
    width: '50%',
    paddingRight: 1,
    paddingBottom: 1,
  },
  moduleAccentBar: { height: 2 },
  moduleCardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.bgSurface,
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: Colors.borderDefault,
  },
  moduleLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: Colors.textSecondary,
    letterSpacing: 0.5,
    flex: 1,
    paddingRight: 6,
  },
  moduleCount: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 24,
    letterSpacing: 1,
  },

  // ─ Benefits
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    gap: 14,
  },
  benefitBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  benefitIconBox: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    backgroundColor: Colors.bgSurface,
    flexShrink: 0,
  },
  benefitText: { flex: 1, gap: 4 },
  benefitLabel: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 10,
    color: Colors.textPrimary,
    letterSpacing: 1,
  },
  benefitBody: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },

  // ─ Guarantee
  guarantee: {
    marginHorizontal: Spacing.screenPaddingH,
    marginTop: 28,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
  },
  guaranteeAccent: {
    height: 2,
    backgroundColor: Colors.accent,
  },
  guaranteeTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    color: Colors.accent,
    letterSpacing: 1.1,
    marginTop: 18,
    marginHorizontal: 18,
  },
  guaranteeBody: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
    margin: 18,
    marginTop: 8,
  },

  // ─ Sticky CTA
  ctaContainer: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
    backgroundColor: Colors.bgPrimary,
    alignItems: 'center',
    gap: 8,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: Colors.accent,
  },
  ctaText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 13,
    color: Colors.bgPrimary,
    letterSpacing: 1.3,
  },
  ctaHint: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: Colors.textDark,
  },
});


type Props = NativeStackScreenProps<LearnStackParamList, 'Pro'>;

// ─── Benefits Data ────────────────────────────────────────────────────────────
const BENEFITS = [
  {
    icon: BookOpen,
    title: 'ALL 38 CASE STUDIES — UNLOCKED',
    description: 'Every module, every case. Culture, crisis, turnarounds, innovation, servant leadership — the complete library. Not a preview.',
  },
  {
    icon: Zap,
    title: 'ONE PURCHASE. YOURS FOREVER.',
    description: 'No subscription. No monthly fee. No renewal prompts. Pay once and every case study you unlock today stays unlocked — including every new one added later.',
  },
  {
    icon: Sparkles,
    title: 'DEEP TABS ON EVERY CASE',
    description: 'Four layers per case: the full Overview, a step-by-step Timeline, Reflection prompts to make it personal, and distilled Takeaways you can act on.',
  },
  {
    icon: Download,
    title: 'WORKS WITHOUT INTERNET',
    description: 'Every case study ships inside the app. No streaming, no loading, no dead zones. Read on a flight, in the subway, wherever you think.',
  },
  {
    icon: Bell,
    title: 'EVERY FUTURE CASE INCLUDED',
    description: 'As new case studies are published via app updates, they land directly in your library — no additional charge.',
  },
];

const SOCIAL_PROOF = [
  { stat: '38', label: 'Real-world cases' },
  { stat: '8', label: 'Leadership modules' },
  { stat: '∞', label: 'Re-reads, zero cost' },
];

export default function ProScreen({ navigation }: Props) {
  const { state, setUserTier } = useAppState();
  const isPro = state.userTier === 'pro';
  const [comingSoonVisible, setComingSoonVisible] = useState(false);

  const handleUpgrade = () => {
    setComingSoonVisible(true);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <ArrowLeft size={20} color={Colors.textPrimary} strokeWidth={1.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>APEX PRO</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.heroAccent} />
          <View style={styles.crownRow}>
            <Crown size={28} color={Colors.accent} strokeWidth={1.5} />
          </View>
          <Text style={styles.heroTitle}>{isPro ? 'YOU\'RE PRO' : 'BECOME THE LEADER\nWHO\'S READ IT ALL'}</Text>
          <Text style={styles.heroSubtitle}>
            {isPro
              ? 'All case studies unlocked. Every future case included. No further action needed.'
              : 'The leaders who make better decisions have one thing in common: they studied the ones who came before. Unlock the complete APEX library.'}
          </Text>
        </View>

        {/* Stats bar */}
        {!isPro && (
          <View style={styles.statsBar}>
            {SOCIAL_PROOF.map((item, i) => (
              <React.Fragment key={item.label}>
                {i > 0 && <View style={styles.statsDivider} />}
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{item.stat}</Text>
                  <Text style={styles.statLabel}>{item.label}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        )}

        {/* Benefits */}
        <View style={styles.benefitsSection}>
          <View style={styles.sectionDivider}>
            <Text style={styles.sectionLabel}>WHAT YOU GET</Text>
            <View style={styles.sectionRule} />
          </View>

          {BENEFITS.map((benefit, index) => (
            <View
              key={benefit.title}
              style={[styles.benefitCard, index < BENEFITS.length - 1 && styles.benefitBorder]}
            >
              <View style={styles.benefitIcon}>
                <benefit.icon size={18} color={Colors.accent} strokeWidth={1.5} />
              </View>
              <View style={styles.benefitText}>
                <Text style={styles.benefitTitle}>{benefit.title}</Text>
                <Text style={styles.benefitDesc}>{benefit.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Pricing hint */}
        <View style={styles.pricingHint}>
          <Text style={styles.pricingLabel}>ONE-TIME PURCHASE</Text>
          <Text style={styles.pricingNote}>{isPro ? 'Thank you for your support' : 'Pay once — no subscriptions, ever'}</Text>
        </View>
      </ScrollView>

      {/* Sticky bottom CTA */}
      {!isPro && (
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.ctaButton} onPress={handleUpgrade} activeOpacity={0.85}>
            <Crown size={16} color={Colors.bgPrimary} strokeWidth={2} />
            <Text style={styles.ctaText}>UNLOCK THE FULL LIBRARY</Text>
          </TouchableOpacity>
          <Text style={styles.ctaHint}>Pay once · Never again · All future cases included</Text>
        </View>
      )}

      <AppModal
        visible={comingSoonVisible}
        title="COMING SOON"
        body={"In-app purchase will be available in a future update.\n\nSit tight — one-time payment, no subscription, ever."}
        accentColor={Colors.accent}
        onDismiss={() => setComingSoonVisible(false)}
        actions={[{ label: 'GOT IT', variant: 'primary', onPress: () => setComingSoonVisible(false) }]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  headerTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 13,
    color: Colors.textPrimary,
    letterSpacing: 1.2,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 20 },

  // Hero
  hero: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 36,
    paddingHorizontal: Spacing.screenPaddingH,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  heroAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: Colors.accent,
  },
  crownRow: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.accent,
    marginBottom: 20,
  },
  heroTitle: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 32,
    color: Colors.textPrimary,
    letterSpacing: 2,
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 14 * 1.6,
  },

  // Stats bar
  statsBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    gap: 4,
  },
  statsDivider: {
    width: 1,
    backgroundColor: Colors.borderDefault,
  },
  statValue: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 28,
    color: Colors.accent,
    letterSpacing: 1,
  },
  statLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: Colors.textMuted,
    letterSpacing: 9 * 0.1,
    textTransform: 'uppercase',
  },

  // Benefits
  benefitsSection: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 28,
  },
  sectionDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  sectionLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 10 * 0.12,
  },
  sectionRule: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
  benefitCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 18,
    gap: 16,
  },
  benefitBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  benefitIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    backgroundColor: Colors.bgSurface,
  },
  benefitText: { flex: 1, gap: 4 },
  benefitTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    color: Colors.textPrimary,
    letterSpacing: 11 * 0.1,
  },
  benefitDesc: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 13 * 1.5,
  },

  // Pricing hint
  pricingHint: {
    alignItems: 'center',
    paddingVertical: 32,
    gap: 6,
  },
  pricingLabel: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 10,
    color: Colors.textDark,
    letterSpacing: 10 * 0.12,
  },
  pricingNote: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    color: Colors.textMuted,
  },

  // CTA
  ctaContainer: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
    backgroundColor: Colors.bgPrimary,
    alignItems: 'center',
    gap: 8,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: Colors.accent,
  },
  ctaText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 13,
    color: Colors.bgPrimary,
    letterSpacing: 13 * 0.1,
  },
  ctaHint: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: Colors.textDark,
  },
});
