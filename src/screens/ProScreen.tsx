// ─── APEX PRO — Upgrade Screen ────────────────────────────────────────────────

import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Crown, BookOpen, Zap, Download, Bell, Sparkles } from 'lucide-react-native';
import { Colors, FontFamily, Spacing } from '../theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { LearnStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<LearnStackParamList, 'Pro'>;

// ─── Benefits Data ────────────────────────────────────────────────────────────
const BENEFITS = [
  {
    icon: BookOpen,
    title: 'ALL CASE STUDIES',
    description: 'Unlock every leadership case study — past, present, and future additions.',
  },
  {
    icon: Zap,
    title: 'EARLY ACCESS',
    description: 'Get new cases before anyone else, straight from our research team.',
  },
  {
    icon: Sparkles,
    title: 'DEEP-DIVE EXTRAS',
    description: 'Extended analysis, behind-the-scenes context, and expert commentary.',
  },
  {
    icon: Download,
    title: 'OFFLINE READING',
    description: 'Download cases for reading anywhere — no connection needed.',
  },
  {
    icon: Bell,
    title: 'PRIORITY UPDATES',
    description: 'Be first to know about new features and content drops.',
  },
];

export default function ProScreen({ navigation }: Props) {
  const handleUpgrade = () => {
    Alert.alert('Coming Soon', 'Pro subscriptions will be available in a future update.');
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
          <Text style={styles.heroTitle}>UPGRADE TO PRO</Text>
          <Text style={styles.heroSubtitle}>
            Unlock the full APEX experience.{'\n'}Learn deeper. Lead better.
          </Text>
        </View>

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
          <Text style={styles.pricingLabel}>PRO MEMBERSHIP</Text>
          <Text style={styles.pricingNote}>Pricing will be announced soon</Text>
        </View>
      </ScrollView>

      {/* Sticky bottom CTA */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity style={styles.ctaButton} onPress={handleUpgrade} activeOpacity={0.85}>
          <Crown size={16} color={Colors.bgPrimary} strokeWidth={2} />
          <Text style={styles.ctaText}>UPGRADE TO PRO</Text>
        </TouchableOpacity>
        <Text style={styles.ctaHint}>No charge — subscriptions coming soon</Text>
      </View>
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
  },
  heroSubtitle: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 14 * 1.6,
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
