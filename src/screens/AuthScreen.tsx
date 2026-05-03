// ─── APEX — Auth / Welcome Screen ───────────────────────────────────────────
// Two-path entry: Guest (2 case studies, no progress) or Google (free tier, progress saved).

import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { Colors, FontFamily, Spacing } from '../theme';

interface Props {
  onGuestEntry: () => void;
  onGoogleSignIn: () => Promise<boolean>;
}

export default function AuthScreen({ onGuestEntry, onGoogleSignIn }: Props) {
  const [signingIn, setSigningIn] = useState(false);
  const [error, setError] = useState('');

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
        {/* Primary — Google Sign-In */}
        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
            signingIn && styles.primaryButtonDisabled,
          ]}
          onPress={async () => {
            setSigningIn(true);
            setError('');
            try {
              await onGoogleSignIn();
            } catch (e: any) {
              setError(e?.message || 'Sign-in failed. Please try again.');
            } finally {
              setSigningIn(false);
            }
          }}
          disabled={signingIn}
        >
          {signingIn ? (
            <ActivityIndicator size="small" color={Colors.bgPrimary} />
          ) : (
            <View style={styles.primaryButtonInner}>
              {/* Google G logo */}
              <Svg width={18} height={18} viewBox="0 0 24 24">
                <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </Svg>
              <Text style={styles.primaryButtonText}>CONTINUE WITH GOOGLE</Text>
            </View>
          )}
        </Pressable>
        <Text style={styles.primaryHint}>Select your account · Sign in instantly · Progress saved</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Divider */}
        <View style={styles.orDivider}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        {/* Guest */}
        <Pressable
          style={({ pressed }) => [
            styles.guestButton,
            pressed && styles.guestButtonPressed,
          ]}
          onPress={onGuestEntry}
        >
          <Text style={styles.guestButtonText}>EXPLORE AS GUEST</Text>
        </Pressable>
        <Text style={styles.guestHint}>2 case studies · No progress saved</Text>

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
  primaryButton: {
    width: '100%',
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  primaryButtonPressed: {
    opacity: 0.85,
  },
  primaryButtonDisabled: {
    backgroundColor: Colors.bgSurface2,
  },
  primaryButtonText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 12,
    letterSpacing: 12 * 0.14,
    color: Colors.bgPrimary,
    textTransform: 'uppercase',
  },
  primaryHint: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 9 * 0.08,
    color: Colors.textMuted,
    marginTop: 10,
  },
  errorText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: '#FF6B6B',
    marginTop: 12,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
  orText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 9 * 0.15,
    color: Colors.textDark,
    marginHorizontal: 12,
  },
  guestButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  guestButtonPressed: {
    backgroundColor: Colors.bgSurface2,
  },
  guestButtonText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    letterSpacing: 11 * 0.14,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
  },
  guestHint: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 9 * 0.08,
    color: Colors.textDark,
    marginTop: 10,
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
