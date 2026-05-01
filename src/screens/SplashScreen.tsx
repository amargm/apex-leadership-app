// ─── APEX — Animated Splash Screen ──────────────────────────────────────────
// Full-screen dark animation: accent line sweep → wordmark fade → tagline slide.

import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { Colors, FontFamily } from '../theme';

interface Props {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: Props) {
  // ── Animation values ──────────────────────────────────────────────────────
  const lineWidth = useRef(new Animated.Value(0)).current;
  const wordmarkOpacity = useRef(new Animated.Value(0)).current;
  const wordmarkY = useRef(new Animated.Value(12)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineY = useRef(new Animated.Value(8)).current;
  const containerOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const sequence = Animated.sequence([
      // 1) Accent line sweeps from left → right
      Animated.timing(lineWidth, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false, // width interpolation can't use native
      }),

      // 2) Wordmark fades up
      Animated.parallel([
        Animated.timing(wordmarkOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(wordmarkY, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      // 3) Tagline fades in
      Animated.parallel([
        Animated.timing(taglineOpacity, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(taglineY, {
          toValue: 0,
          duration: 350,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      // 4) Hold for a beat
      Animated.delay(600),

      // 5) Entire container fades out
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }),
    ]);

    sequence.start(() => onFinish());
  }, []);

  const animatedLineWidth = lineWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '48%'],
  });

  return (
    <Animated.View style={[styles.container, { opacity: containerOpacity }]}>
      {/* Accent line */}
      <Animated.View style={[styles.accentLine, { width: animatedLineWidth }]} />

      {/* Wordmark */}
      <Animated.Text
        style={[
          styles.wordmark,
          { opacity: wordmarkOpacity, transform: [{ translateY: wordmarkY }] },
        ]}
      >
        APEX
      </Animated.Text>

      {/* Tagline */}
      <Animated.Text
        style={[
          styles.tagline,
          { opacity: taglineOpacity, transform: [{ translateY: taglineY }] },
        ]}
      >
        LEADERSHIP THROUGH CASE STUDIES
      </Animated.Text>

      {/* Bottom version stamp */}
      <Animated.Text style={[styles.version, { opacity: taglineOpacity }]}>
        V 1.0
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.bgPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  accentLine: {
    height: 2,
    backgroundColor: Colors.accent,
    marginBottom: 24,
  },
  wordmark: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 56,
    letterSpacing: 56 * 0.18,
    color: Colors.textPrimary,
  },
  tagline: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 9 * 0.14,
    color: Colors.textMuted,
    marginTop: 8,
    textTransform: 'uppercase',
  },
  version: {
    position: 'absolute',
    bottom: 48,
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    letterSpacing: 8 * 0.12,
    color: Colors.textDark,
    textTransform: 'uppercase',
  },
});
