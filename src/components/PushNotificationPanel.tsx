// ─── Push Notification Panel ──────────────────────────────────────────────────
// Spring entrance from top. Spec: Section 8.

import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors, FontFamily, Spacing } from '../theme';
import type { PushNotification } from '../types/lesson';

interface Props {
  notification: PushNotification;
  onOpen: (lessonId: string) => void;
  onDismiss: () => void;
}

export default function PushNotificationPanel({ notification, onOpen, onDismiss }: Props) {
  // Start off-screen above
  const translateY = useRef(new Animated.Value(-120)).current;

  useEffect(() => {
    // Spring entrance
    Animated.timing(translateY, {
      toValue: 16,
      duration: 500,
      easing: Easing.bezier(0.34, 1.56, 0.64, 1), // intentional overshoot
      useNativeDriver: true,
    }).start();

    // Auto-dismiss after 6s
    const timer = setTimeout(() => dismiss(), 6000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    Animated.timing(translateY, {
      toValue: -120,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) onDismiss();
    });
  };

  const timeLabel = new Date(notification.sent_at).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Animated.View
      style={[styles.panel, { transform: [{ translateY }] }]}
      pointerEvents="box-none"
    >
      <View style={styles.headerRow}>
        <Text style={styles.appTag}>APEX</Text>
        <Text style={styles.time}>{timeLabel}</Text>
      </View>
      <Text style={styles.title}>{notification.title}</Text>
      <Text style={styles.body}>{notification.body}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => { onOpen(notification.lesson_id); dismiss(); }}
          accessibilityRole="button"
        >
          <Text style={styles.openText}>OPEN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.laterButton}
          onPress={dismiss}
          accessibilityRole="button"
        >
          <Text style={styles.laterText}>Later</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: 0,
    backgroundColor: Colors.bgSurface2,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    padding: 16,
    paddingHorizontal: 18,
    zIndex: 999,
    elevation: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  appTag: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 0.10 * 9,
  },
  time: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#999999',
    letterSpacing: 0.04 * 9,
  },
  title: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 13,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  body: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 12,
    color: '#999999',
    lineHeight: 12 * 1.4,
    marginBottom: Spacing.md,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  openButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  openText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 9,
    color: '#050505',
    textTransform: 'uppercase',
    letterSpacing: 0.08 * 9,
  },
  laterButton: {
    borderWidth: 1,
    borderColor: '#222222',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  laterText: {
    fontFamily: FontFamily.dmMonoRegular,
    fontSize: 9,
    color: '#999999',
    letterSpacing: 0.04 * 9,
  },
});
