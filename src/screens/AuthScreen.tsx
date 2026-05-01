// ─── APEX — Auth / Welcome Screen ───────────────────────────────────────────
// Minimal brutalist welcome gate. "Explore as Guest" skips auth entirely.

import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, FontFamily, Spacing } from '../theme';

interface Props {
  onGuestEntry: () => void;
}

export default function AuthScreen({ onGuestEntry }: Props) {
  return (
    <View style={styles.container}>
      {/* Top gradient fade */}
      <LinearGradient
        colors={['rgba(200,240,77,0.06)', 'transparent']}
        style={styles.topGradient}
      />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <View style={styles.content}>
        {/* Accent line */}
        <View style={styles.accentLine} />

        {/* Wordmark */}
        <Text style={styles.wordmark}>APEX</Text>

        {/* Subtitle block */}
        <View style={styles.subtitleBlock}>
          <View style={styles.subtitleRule} />
          <Text style={styles.subtitle}>LEADERSHIP THROUGH</Text>
          <Text style={styles.subtitle}>CASE STUDIES</Text>
          <View style={[styles.subtitleRule, { marginTop: 12 }]} />
        </View>

        {/* Value prop */}
        <Text style={styles.valueProp}>
          Learn from the pivotal decisions of history's boldest leaders — distilled into short, focused case studies.
        </Text>
      </View>

      {/* ── Bottom actions ─────────────────────────────────────────────────── */}
      <View style={styles.bottomSection}>
        {/* Primary CTA — Guest entry */}
        <Pressable
          style={({ pressed }) => [
            styles.guestButton,
            pressed && styles.guestButtonPressed,
          ]}
          onPress={onGuestEntry}
        >
          <Text style={styles.guestButtonText}>EXPLORE AS GUEST</Text>
        </Pressable>

        {/* Future auth hint */}
        <Text style={styles.authHint}>
          Sign-in coming soon — your progress saves locally.
        </Text>

        {/* Version */}
        <Text style={styles.version}>V 1.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
  },
  accentLine: {
    width: 40,
    height: 2,
    backgroundColor: Colors.accent,
    marginBottom: 20,
  },
  wordmark: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 64,
    letterSpacing: 64 * 0.18,
    color: Colors.textPrimary,
  },
  subtitleBlock: {
    alignItems: 'center',
    marginTop: 12,
  },
  subtitleRule: {
    width: 32,
    height: 1,
    backgroundColor: Colors.borderDefault,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 9 * 0.16,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    lineHeight: 16,
  },
  valueProp: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 14,
    lineHeight: 14 * 1.65,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 32,
    maxWidth: 280,
  },
  bottomSection: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingBottom: 48,
    alignItems: 'center',
  },
  guestButton: {
    width: '100%',
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    alignItems: 'center',
  },
  guestButtonPressed: {
    opacity: 0.85,
  },
  guestButtonText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 12,
    letterSpacing: 12 * 0.14,
    color: Colors.bgPrimary,
    textTransform: 'uppercase',
  },
  authHint: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 9 * 0.08,
    color: Colors.textDark,
    marginTop: 16,
    textAlign: 'center',
  },
  version: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    letterSpacing: 8 * 0.12,
    color: Colors.textDarker,
    marginTop: 24,
    textTransform: 'uppercase',
  },
});
