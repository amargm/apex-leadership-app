// ─── Profile Screen — Full Static Implementation ──────────────────────────────

import React, { useRef, useState } from 'react';
import {
  Alert,
  Animated,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, RotateCcw } from 'lucide-react-native';
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
    outputRange: ['#333333', Colors.accent],
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
export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const { state, resetAllProgress, setLargeFont, setUserName } = useAppState();
  const [resetModalVisible, setResetModalVisible] = useState(false);

  const handleResetProgress = () => {
    setResetModalVisible(true);
  };

  const confirmReset = () => {
    setResetModalVisible(false);
    resetAllProgress();
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
            <Text style={styles.avatarInitials}>{state.userName.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.profileName}
              value={state.userName}
              onChangeText={setUserName}
              placeholder="Your name"
              placeholderTextColor="#555555"
              maxLength={24}
              returnKeyType="done"
            />
            <Text style={styles.profileRole}>APEX Member</Text>
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
            <Text style={styles.settingsLabel}>Larger Reading Font</Text>
            <MinimalToggle value={state.largeFontOn} onToggle={() => setLargeFont(!state.largeFontOn)} />
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
          <TouchableOpacity
            style={styles.settingsRow}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Learn' as any, { screen: 'Saved' })}
          >
            <Text style={styles.settingsLabel}>Saved Lessons</Text>
            <View style={styles.settingsRight}>
              <Text style={styles.settingsMeta}>{state.savedLessonIds.length} saved</Text>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* ── App ── */}
        <View style={styles.sectionDivider}>
          <Text style={styles.sectionDividerLabel}>APP</Text>
          <View style={styles.sectionDividerRule} />
          <Text style={styles.sectionDividerIndex}>03</Text>
        </View>

        <View style={styles.settingsGroup}>
          <TouchableOpacity
            style={styles.settingsRow}
            activeOpacity={0.7}
            onPress={() => Alert.alert('APEX v1.0.0', 'Built for growth.\n\nLearn to lead from those who did.')}
          >
            <Text style={styles.settingsLabel}>About APEX</Text>
            <View style={styles.settingsRight}>
              <Text style={styles.settingsMeta}>v1.0.0</Text>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity
            style={styles.settingsRow}
            activeOpacity={0.7}
            onPress={() => Linking.openURL('https://apex-leadership.web.app/privacy-policy')}
          >
            <Text style={styles.settingsLabel}>Privacy Policy</Text>
            <View style={styles.settingsRight}>
              <ChevronRight size={16} color={'#666666'} strokeWidth={1.5} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity
            style={styles.settingsRow}
            activeOpacity={0.7}
            onPress={() => Linking.openURL('https://apex-leadership.web.app/terms-of-use')}
          >
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

      {/* ── Reset Confirmation Modal ── */}
      <Modal visible={resetModalVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setResetModalVisible(false)}>
          <Pressable style={styles.modalBox}>
            {/* Accent top line */}
            <View style={styles.modalAccent} />

            <Text style={styles.modalTitle}>RESET ALL PROGRESS</Text>
            <Text style={styles.modalBody}>
              This will clear all lesson progress, notes, and stats. This cannot be undone.
            </Text>

            <View style={styles.modalActions}>
              {/* "No" — highlighted / primary action */}
              <Pressable
                style={({ pressed }) => [
                  styles.modalBtnPrimary,
                  pressed && styles.modalBtnPrimaryPressed,
                ]}
                onPress={() => setResetModalVisible(false)}
              >
                <Text style={styles.modalBtnPrimaryText}>NO, KEEP DATA</Text>
              </Pressable>

              {/* "Yes, Reset" — subdued / destructive */}
              <Pressable
                style={({ pressed }) => [
                  styles.modalBtnDestructive,
                  pressed && styles.modalBtnDestructivePressed,
                ]}
                onPress={confirmReset}
              >
                <Text style={styles.modalBtnDestructiveText}>YES, RESET</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
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

  // Reset modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  modalBox: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
  },
  modalAccent: {
    height: 2,
    backgroundColor: '#E05252',
  },
  modalTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 12,
    letterSpacing: 12 * 0.12,
    color: Colors.textPrimary,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  modalBody: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 13,
    lineHeight: 13 * 1.6,
    color: Colors.textSecondary,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
  },
  modalActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
  },
  modalBtnPrimary: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: Colors.accent,
  },
  modalBtnPrimaryPressed: {
    opacity: 0.85,
  },
  modalBtnPrimaryText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    letterSpacing: 11 * 0.1,
    color: Colors.bgPrimary,
  },
  modalBtnDestructive: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: Colors.bgSurface,
    borderLeftWidth: 1,
    borderLeftColor: Colors.borderDefault,
  },
  modalBtnDestructivePressed: {
    backgroundColor: Colors.bgSurface2,
  },
  modalBtnDestructiveText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    letterSpacing: 11 * 0.1,
    color: '#E05252',
  },
});
