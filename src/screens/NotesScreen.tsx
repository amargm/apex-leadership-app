// ─── Notes Screen — Placeholder ───────────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, FontFamily, Spacing } from '../theme';

export default function NotesScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>NOTES</Text>
      </View>
      <View style={styles.emptyState}>
        <Text style={styles.emptyIcon}>—</Text>
        <Text style={styles.emptyTitle}>No notes yet</Text>
        <Text style={styles.emptySub}>Your reflections and notes will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  header: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  title: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 20,
    letterSpacing: 0.10 * 20,
    color: Colors.textPrimary,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.screenPaddingH,
  },
  emptyIcon: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 32,
    color: '#555555',
    marginBottom: 16,
  },
  emptyTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  emptySub: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: '#777777',
    letterSpacing: 0.04 * 10,
    textAlign: 'center',
  },
});
