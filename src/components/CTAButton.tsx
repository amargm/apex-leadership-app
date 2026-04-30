// ─── CTA Button ───────────────────────────────────────────────────────────────
// Primary (Accent bg) and Secondary (outline). Spec: Section 9.

import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Colors, FontFamily, Spacing, Radius } from '../theme';

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
      Animated.timing(scaleAnim, { toValue: 0.99, duration: 100, useNativeDriver: true }),
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
    padding: 16,
    borderRadius: Radius.cardLg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: Colors.accent,
    marginTop: Spacing.xl,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    marginTop: 10,
  },
  label: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 13,
    letterSpacing: 0.06 * 13,
    textTransform: 'uppercase',
  },
  labelPrimary: {
    color: '#000000',
  },
  labelSecondary: {
    color: Colors.textSecondary,
  },
});
