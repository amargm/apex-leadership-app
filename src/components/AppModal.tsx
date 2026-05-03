// ─── AppModal — Reusable branded modal for the APEX app ───────────────────────
// Matches the app's brutalist dark style: sharp corners, accent top bar, dark overlay.

import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, FontFamily } from '../theme';

export interface AppModalAction {
  label: string;
  onPress: () => void;
  variant?: 'default' | 'primary' | 'destructive';
}

interface Props {
  visible: boolean;
  title: string;
  body?: string;
  accentColor?: string;
  actions: AppModalAction[];
  onDismiss?: () => void;
}

export default function AppModal({
  visible,
  title,
  body,
  accentColor = Colors.borderDefault,
  actions,
  onDismiss,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <Pressable style={styles.overlay} onPress={onDismiss}>
        <Pressable style={styles.box}>
          {/* Accent top bar — color conveys tone (accent = info, red = destructive) */}
          <View style={[styles.accentBar, { backgroundColor: accentColor }]} />

          <Text style={styles.title}>{title}</Text>
          {body ? <Text style={styles.body}>{body}</Text> : null}

          <View style={styles.actions}>
            {actions.map((action, i) => (
              <Pressable
                key={action.label}
                style={({ pressed }) => [
                  styles.btn,
                  i > 0 && styles.btnBorderLeft,
                  pressed && styles.btnPressed,
                ]}
                onPress={action.onPress}
              >
                <Text
                  style={[
                    styles.btnText,
                    action.variant === 'destructive' && styles.btnTextDestructive,
                    action.variant === 'primary' && styles.btnTextPrimary,
                  ]}
                >
                  {action.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.88)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  box: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
  },
  accentBar: {
    height: 2,
  },
  title: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 12,
    letterSpacing: 12 * 0.12,
    color: Colors.textPrimary,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  body: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 13,
    lineHeight: 13 * 1.6,
    color: Colors.textSecondary,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
  },
  btn: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: Colors.bgSurface,
  },
  btnBorderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.borderDefault,
  },
  btnPressed: {
    backgroundColor: Colors.bgSurface2,
  },
  btnText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    letterSpacing: 11 * 0.1,
    color: Colors.textSecondary,
  },
  btnTextDestructive: {
    color: '#E05252',
  },
  btnTextPrimary: {
    color: Colors.accent,
  },
});
