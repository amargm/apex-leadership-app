// ─── CTA Button — Instrumental ────────────────────────────────────────────────

import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { Colors, FontFamily } from '../theme';

interface Props {
  label: string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
  style?: object;
}

export default function CTAButton({ label, variant = 'primary', onPress, style }: Props) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, { toValue: 0.97, duration: 100, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 0.9, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
  };

  const isPrimary = variant === 'primary';

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
    >
      <Animated.View
        style={[
          styles.base,
          isPrimary ? styles.primary : styles.secondary,
          { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
          style,
        ]}
      >
        <Text style={[styles.label, isPrimary ? styles.labelPrimary : styles.labelSecondary]}>
          {label} →
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: Colors.accent,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#222222',
  },
  label: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 10,
    letterSpacing: 0.08 * 10,
    textTransform: 'uppercase',
  },
  labelPrimary: {
    color: '#050505',
  },
  labelSecondary: {
    color: '#444444',
  },
});
