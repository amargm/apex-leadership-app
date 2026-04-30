// ─── Profile Screen — Full Static Implementation ──────────────────────────────

import React, { useRef, useState } from 'react';
import {
  Alert,
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, RotateCcw } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Colors, FontFamily, Spacing, Radius } from '../theme';
import type { ProfileScreenProps } from '../navigation/types';
import { useAppState } from '../state/AppState';

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
    outputRange: ['#222222', Colors.accent],
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
  const [darkModeOn, setDarkModeOn] = useState(true);
  const [dailyReminderOn, setDailyReminderOn] = useState(true);
  const { state } = useAppState();

  const handleResetProgress = () => {
    Alert.alert(
      'Reset All Progress',
      'This will clear all lesson progress, notes, and stats. This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.removeItem('@apex_app_state');
            Alert.alert('Done', 'Restart the app to see changes.');
          },
        },
      ],
    );
  };

  const formatTime = (minutes: number) =>
    minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Profile Header ── */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitials}>L</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Leader</Text>
            <Text style={styles.profileRole}>Team Lead · APEX Member</Text>
          </View>
        </View>

        {/* ── Stats Summary ── */}
        <View style={styles.statsRow}>
          <View style={styles.statCell}>
            <Text style={styles.statValue}>{state.stats.dayStreak}</Text>
            <Text style={styles.statLabel}>DAY STREAK</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statCell}>
            <Text style={styles.statValue}>{state.stats.casesCompleted}</Text>
            <Text style={styles.statLabel}>COMPLETED</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statCell}>
            <Text style={styles.statValue}>{formatTime(state.stats.timeThisWeekMinutes)}</Text>
            <Text style={styles.statLabel}>THIS WEEK</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statCell}>
            <Text style={styles.statValue}>{state.notes.length}</Text>
            <Text style={styles.statLabel}>NOTES</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* ── Preferences ── */}
        <View style={styles.sectionDivider}>
          <Text style={styles.sectionDividerLabel}>PREFERENCES</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>01</Text>
        </View>

        <View style={styles.settingsGroup}>
          <View style={[styles.settingsRow, { justifyContent: 'space-between' }]}>
            <Text style={styles.settingsLabel}>Notifications</Text>
            <MinimalToggle value={notificationsOn} onToggle={() => setNotificationsOn((v) => !v)} />
          </View>

          <View style={styles.rowDivider} />

          <View style={[styles.settingsRow, { justifyContent: 'space-between' }]}>
            <Text style={styles.settingsLabel}>Daily Reminder</Text>
            <MinimalToggle value={dailyReminderOn} onToggle={() => setDailyReminderOn((v) => !v)} />
          </View>

          <View style={styles.rowDivider} />

          <View style={[styles.settingsRow, { justifyContent: 'space-between' }]}>
            <Text style={styles.settingsLabel}>Larger Reading Font</Text>
            <MinimalToggle value={largeFontOn} onToggle={() => setLargeFontOn((v) => !v)} />
          </View>

          <View style={styles.rowDivider} />

          <View style={[styles.settingsRow, { justifyContent: 'space-between' }]}>
            <Text style={styles.settingsLabel}>Dark Mode</Text>
            <MinimalToggle value={darkModeOn} onToggle={() => setDarkModeOn((v) => !v)} />
          </View>
        </View>

        <View style={styles.divider} />

        {/* ── Content ── */}
        <View style={styles.sectionDivider}>
          <Text style={styles.sectionDividerLabel}>CONTENT</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>02</Text>
        </View>

        <View style={styles.settingsGroup}>
          <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
            <Text style={styles.settingsLabel}>Reading History</Text>
            <View style={styles.settingsRight}>
              <Text style={styles.settingsMeta}>{state.stats.casesCompleted} cases</Text>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
            <Text style={styles.settingsLabel}>Saved Lessons</Text>
            <View style={styles.settingsRight}>
              <Text style={styles.settingsMeta}>{state.savedLessonIds.length} saved</Text>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <View style={styles.settingsRow}>
            <View style={styles.settingsContent}>
              <Text style={styles.settingsLabel}>Case Study Sources</Text>
              <Text style={styles.settingsDescription}>
                All lessons are built from publicly disclosed events — SEC filings, books, interviews, and official reporting.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* ── App ── */}
        <View style={styles.sectionDivider}>
          <Text style={styles.sectionDividerLabel}>APP</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>03</Text>
        </View>

        <View style={styles.settingsGroup}>
          <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
            <Text style={styles.settingsLabel}>About APEX</Text>
            <View style={styles.settingsRight}>
              <Text style={styles.settingsMeta}>v1.0.0</Text>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
            <Text style={styles.settingsLabel}>Privacy Policy</Text>
            <View style={styles.settingsRight}>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
            <Text style={styles.settingsLabel}>Terms of Use</Text>
            <View style={styles.settingsRight}>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity
            style={styles.settingsRow}
            activeOpacity={0.7}
            onPress={handleResetProgress}
          >
            <RotateCcw size={14} color="#E05252" strokeWidth={1.5} />
            <Text style={[styles.settingsLabel, { color: '#E05252', marginLeft: 10 }]}>
              Reset All Progress
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>APEX LEADERSHIP · BUILT FOR GROWTH</Text>
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
  avatarInitials: { fontFamily: FontFamily.dmMonoMedium, fontSize: 18, color: Colors.textPrimary },
  profileName: { fontFamily: FontFamily.dmSerifDisplayRegular, fontSize: 22, color: Colors.textPrimary, marginBottom: 2 },
  profileRole: { fontFamily: FontFamily.dmMonoLight, fontSize: 10, color: '#999999', letterSpacing: 0.04 * 10 },

  // Stats
  statsRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    marginBottom: Spacing.xl,
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  statValue: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#999999',
    letterSpacing: 0.8,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.borderDefault,
  },

  divider: { height: 1, backgroundColor: Colors.borderDefault, marginBottom: Spacing.xl },
  sectionDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  sectionDividerLabel: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 14,
    letterSpacing: 0.16 * 14,
    color: '#999999',
  },
  sectionDividerRule: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
  sectionDividerIndex: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: '#666666',
    letterSpacing: 0.06 * 8,
  },
  settingsGroup: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
    marginBottom: Spacing.xl,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
    minHeight: 44,
  },
  settingsRight: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginLeft: 'auto' },
  settingsLabel: { fontFamily: FontFamily.dmSansMedium, fontSize: 13, color: Colors.textPrimary },
  settingsMeta: { fontFamily: FontFamily.dmMonoLight, fontSize: 9, color: '#999999', letterSpacing: 0.04 * 9 },
  settingsContent: { flex: 1 },
  settingsDescription: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 12,
    color: '#999999',
    lineHeight: 12 * 1.5,
    marginTop: 4,
  },
  rowDivider: { height: 1, backgroundColor: Colors.borderDefault, marginLeft: Spacing.base },

  // Footer
  footer: {
    alignItems: 'center',
    marginTop: 24,
  },
  footerText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#666666',
    letterSpacing: 1.5,
  },

  // Custom toggle
  track: {
    width: 36,
    height: 20,
    borderRadius: Radius.toggleThumb,
    justifyContent: 'center',
  },
  thumb: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: Radius.toggleThumb,
    backgroundColor: Colors.bgPrimary,
  },
});
