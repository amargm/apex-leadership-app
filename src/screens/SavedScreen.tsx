// ─── Saved Lessons Screen ─────────────────────────────────────────────────────

import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Bookmark } from 'lucide-react-native';

import { Colors, FontFamily, Spacing } from '../theme';
import { MOCK_LESSONS } from '../data/mockLessons';
import { useAppState } from '../state/AppState';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { LearnStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<LearnStackParamList, 'Saved'>;

export default function SavedScreen({ navigation }: Props) {
  const { state, toggleSaveLesson } = useAppState();

  const savedLessons = MOCK_LESSONS.filter((l) =>
    state.savedLessonIds.includes(l.lesson_id),
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <ArrowLeft size={20} color={Colors.textPrimary} strokeWidth={1.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SAVED</Text>
        <View style={{ width: 20 }} />
      </View>

      {savedLessons.length === 0 ? (
        <View style={styles.emptyState}>
          <Bookmark size={32} color="#555555" strokeWidth={1} />
          <Text style={styles.emptyTitle}>No saved lessons yet</Text>
          <Text style={styles.emptySubtitle}>
            Tap "Save for Later" in a lesson's takeaways to bookmark it here.
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {savedLessons.map((lesson, index) => (
            <TouchableOpacity
              key={lesson.lesson_id}
              style={[styles.card, index < savedLessons.length - 1 && styles.cardBorder]}
              onPress={() => navigation.navigate('LessonDetail', { lessonId: lesson.lesson_id })}
              activeOpacity={0.8}
            >
              <View style={styles.cardBody}>
                <Text style={styles.cardIndex}>
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <View style={styles.cardText}>
                  <Text style={styles.cardCategory}>
                    {lesson.category.toUpperCase()}
                  </Text>
                  <Text style={styles.cardTitle} numberOfLines={2}>
                    {lesson.title}
                  </Text>
                  <Text style={styles.cardMeta}>
                    {lesson.read_time_minutes} min · {lesson.difficulty}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => toggleSaveLesson(lesson.lesson_id)}
                activeOpacity={0.6}
              >
                <Bookmark size={16} color={Colors.accent} strokeWidth={1.5} fill={Colors.accent} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  headerTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 13,
    color: Colors.textPrimary,
    letterSpacing: 1.2,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 40 },
  // Empty state
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 12,
  },
  emptyTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 16,
    color: Colors.textPrimary,
    marginTop: 8,
  },
  emptySubtitle: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 18,
  },
  // Card
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 16,
  },
  cardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  cardBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  cardIndex: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    color: '#555555',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  cardText: { flex: 1, gap: 4 },
  cardCategory: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: '#777777',
    letterSpacing: 1,
  },
  cardTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  cardMeta: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    color: '#555555',
  },
  removeBtn: {
    padding: 8,
  },
});
