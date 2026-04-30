// ─── Profile Screen ───────────────────────────────────────────────────────────
// Name, role, settings rows, custom minimal toggle. Spec: Section 7 (Screen 5).

import React, { useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight } from 'lucide-react-native';

import { Colors, FontFamily, Spacing, Radius } from '../theme';
import type { ProfileScreenProps } from '../navigation/types';

// ─── Custom Toggle ────────────────────────────────────────────────────────────
function MinimalToggle({ value, onToggle }: { value: boolean; onToggle: () => void }) {
  const thumbAnim = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleToggle = () => {
    Animated.timing(thumbAnim, {
      toValue: value ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onToggle();
  };

  const thumbLeft = thumbAnim.interpolate({ inputRange: [0, 1], outputRange: [2, 18] });
  const trackColor = thumbAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.borderDefault, Colors.accent],
  });

  return (
    <TouchableWithoutFeedback onPress={handleToggle} accessibilityRole="switch">
      <Animated.View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View style={[styles.thumb, { left: thumbLeft }]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function ProfileScreen(_: ProfileScreenProps) {
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [largeFontOn, setLargeFontOn] = useState(false);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Profile Header ──────────────────────────────────────────── */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitials}>L</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Leader</Text>
            <Text style={styles.profileRole}>Team Lead · APEX Member</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* ── Preferences ─────────────────────────────────────────────── */}
        <Text style={styles.sectionHeading}>PREFERENCES</Text>

        <View style={styles.settingsGroup}>
          <View style={[styles.settingsRow, { justifyContent: 'space-between' }]}>
            <Text style={styles.settingsLabel}>Notifications</Text>
            <MinimalToggle value={notificationsOn} onToggle={() => setNotificationsOn((v) => !v)} />
          </View>

          <View style={styles.rowDivider} />

          <View style={[styles.settingsRow, { justifyContent: 'space-between' }]}>
            <Text style={styles.settingsLabel}>Larger Reading Font</Text>
            <MinimalToggle value={largeFontOn} onToggle={() => setLargeFontOn((v) => !v)} />
          </View>

          <View style={styles.rowDivider} />

          <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
            <Text style={styles.settingsLabel}>About APEX</Text>
            <View style={styles.settingsRight}>
              <Text style={styles.settingsMeta}>v1.0</Text>
              <ChevronRight size={16} color={Colors.textMuted} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionHeading}>CONTENT</Text>
        <View style={styles.settingsGroup}>
          <View style={styles.settingsRow}>
            <View style={styles.settingsContent}>
              <Text style={styles.settingsLabel}>Case Study Sources</Text>
              <Text style={styles.settingsDescription}>
                All lessons are built from publicly disclosed events — SEC filings, books, interviews, and official reporting.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  scroll: { flex: 1 },
  content: { paddingHorizontal: Spacing.screenPaddingH, paddingTop: Spacing.xl, paddingBottom: 48 },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.base,
    marginBottom: Spacing.xl,
  },
  avatar: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: { fontFamily: FontFamily.dmSansBold, fontSize: 18, color: Colors.textPrimary },
  profileName: { fontFamily: FontFamily.dmSerifDisplayRegular, fontSize: 22, color: Colors.textPrimary, marginBottom: 2 },
  profileRole: { fontFamily: FontFamily.dmSansRegular, fontSize: 12, color: Colors.textSecondary },
  divider: { height: 1, backgroundColor: Colors.borderDefault, marginBottom: Spacing.xl },
  sectionHeading: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 15,
    letterSpacing: 0.14 * 15,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: Spacing.md,
  },
  settingsGroup: {
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.cardLg,
    overflow: 'hidden',
    marginBottom: 4,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
    minHeight: 44,
  },
  settingsRight: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  settingsLabel: { fontFamily: FontFamily.dmSansMedium, fontSize: 14, color: Colors.textPrimary },
  settingsMeta: { fontFamily: FontFamily.dmSansRegular, fontSize: 13, color: Colors.textMuted },
  settingsContent: { flex: 1 },
  settingsDescription: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 12,
    color: Colors.textMuted,
    lineHeight: 12 * 1.5,
    marginTop: 4,
  },
  rowDivider: { height: 1, backgroundColor: Colors.borderDefault, marginLeft: Spacing.base },
  // Custom toggle
  track: {
    width: 36,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  thumb: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.bgPrimary,
  },
});

const SETTINGS_ROWS = [
  { label: 'Notifications', meta: 'On' },
  { label: 'Reading Font Size', meta: 'Default' },
  { label: 'About APEX', meta: '' },
] as const;

export default function ProfileScreen(_: ProfileScreenProps) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Profile Header ──────────────────────────────────────── */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitials}>L</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Leader</Text>
            <Text style={styles.profileRole}>Team Lead</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* ── Settings Rows ───────────────────────────────────────── */}
        <Text style={styles.sectionHeading}>PREFERENCES</Text>

        <View style={styles.settingsGroup}>
          {SETTINGS_ROWS.map((row, i) => (
            <View key={row.label}>
              <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
                <Text style={styles.settingsLabel}>{row.label}</Text>
                <View style={styles.settingsRight}>
                  {row.meta ? (
                    <Text style={styles.settingsMeta}>{row.meta}</Text>
                  ) : null}
                  <ChevronRight size={16} color={Colors.textMuted} strokeWidth={1.5} />
                </View>
              </TouchableOpacity>
              {i < SETTINGS_ROWS.length - 1 && <View style={styles.rowDivider} />}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  scroll: { flex: 1 },
  content: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.base,
    marginBottom: Spacing.xl,
  },
  avatar: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontFamily: FontFamily.dmSansBold,
    fontSize: 18,
    color: Colors.textPrimary,
  },
  profileName: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 22,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  profileRole: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 12,
    color: Colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.borderDefault,
    marginBottom: Spacing.xl,
  },
  sectionHeading: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 15,
    letterSpacing: 0.14 * 15,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: Spacing.md,
  },
  settingsGroup: {
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.cardLg,
    overflow: 'hidden',
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
    minHeight: 44,
  },
  settingsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  settingsLabel: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  settingsMeta: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 13,
    color: Colors.textMuted,
  },
  rowDivider: {
    height: 1,
    backgroundColor: Colors.borderDefault,
    marginLeft: Spacing.base,
  },
});
