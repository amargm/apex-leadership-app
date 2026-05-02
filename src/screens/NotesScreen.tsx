// ─── Notes Screen — List View ──────────────────────────────────────────────
// Shows all notes as tappable cards. Tap to open full editor.

import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, BookOpen, Trash2 } from 'lucide-react-native';

import { Colors, FontFamily, Spacing } from '../theme';
import { useAppState } from '../state/AppState';
import { MOCK_LESSONS } from '../data/mockLessons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NotesStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<NotesStackParamList, 'NotesList'>;

export default function NotesScreen({ navigation }: Props) {
  const { state, deleteNote } = useAppState();

  const openEditor = (noteId?: string) => {
    navigation.navigate('NoteEditor', noteId ? { noteId } : {});
  };

  const handleDelete = (noteId: string) => {
    Alert.alert('Delete Note', 'This cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteNote(noteId) },
    ]);
  };

  const getLessonTitle = (lessonId?: string) => {
    if (!lessonId) return null;
    return MOCK_LESSONS.find((l) => l.lesson_id === lessonId)?.title ?? null;
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const day = d.getDate();
    const month = d.toLocaleString('en', { month: 'short' }).toUpperCase();
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const getPreview = (content: string) => {
    const lines = content.split('\n').filter((l) => l.trim());
    return lines.slice(0, 3).join('\n');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>NOTES</Text>
          <Text style={styles.subtitle}>{state.notes.length} {state.notes.length === 1 ? 'entry' : 'entries'}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={() => openEditor()} activeOpacity={0.7}>
          <Plus size={18} color={Colors.accent} strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {state.notes.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyAccent} />
          <Text style={styles.emptyTitle}>No notes yet</Text>
          <Text style={styles.emptySub}>
            Tap + to jot down reflections, insights, or key takeaways from your readings.
          </Text>
          <TouchableOpacity style={styles.emptyBtn} onPress={() => openEditor()} activeOpacity={0.7}>
            <Plus size={14} color={Colors.bgPrimary} strokeWidth={2} />
            <Text style={styles.emptyBtnText}>CREATE NOTE</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {state.notes.map((note, index) => {
            const lessonTitle = getLessonTitle(note.lessonId);
            const preview = getPreview(note.content);
            const wordCount = note.content.trim() ? note.content.trim().split(/\s+/).length : 0;

            return (
              <TouchableOpacity
                key={note.id}
                style={[styles.card, index < state.notes.length - 1 && styles.cardSpaced]}
                onPress={() => openEditor(note.id)}
                activeOpacity={0.7}
              >
                {/* Card top row: date + actions */}
                <View style={styles.cardTop}>
                  <Text style={styles.cardDate}>{formatDate(note.updatedAt)}</Text>
                  <View style={styles.cardTopRight}>
                    <Text style={styles.cardWordCount}>{wordCount}w</Text>
                    <TouchableOpacity
                      onPress={() => handleDelete(note.id)}
                      hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    >
                      <Trash2 size={13} color={Colors.textDarker} strokeWidth={1.5} />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Heading (from reflection prompt) */}
                {note.heading && (
                  <Text style={styles.cardHeading} numberOfLines={2}>
                    {note.heading}
                  </Text>
                )}

                {/* Content preview */}
                {preview ? (
                  <Text style={styles.cardContent} numberOfLines={3}>
                    {preview}
                  </Text>
                ) : (
                  <Text style={styles.cardEmpty}>Empty note — tap to edit</Text>
                )}

                {/* Linked lesson */}
                {lessonTitle && (
                  <View style={styles.cardLesson}>
                    <BookOpen size={10} color={Colors.textDark} strokeWidth={1.5} />
                    <Text style={styles.cardLessonText} numberOfLines={1}>
                      {lessonTitle}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  scroll: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: Spacing.base,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  title: {
    fontFamily: FontFamily.bebasNeue,
    fontSize: 20,
    letterSpacing: 0.1 * 20,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    color: Colors.textMuted,
    marginTop: 2,
  },
  addBtn: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // List
  listContent: {
    padding: Spacing.screenPaddingH,
    paddingBottom: 40,
  },

  // Card
  card: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    padding: 16,
    backgroundColor: Colors.bgSurface,
  },
  cardSpaced: {
    marginBottom: 12,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardDate: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: Colors.textDark,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  cardTopRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardWordCount: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: Colors.textDarker,
    letterSpacing: 0.5,
  },
  cardHeading: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 14,
    color: Colors.accent,
    lineHeight: 20,
    marginBottom: 8,
  },
  cardContent: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 14 * 1.6,
  },
  cardEmpty: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    color: Colors.textDarker,
    fontStyle: 'italic',
  },
  cardLesson: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
  },
  cardLessonText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: Colors.textDark,
    flex: 1,
  },

  // Empty state
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyAccent: {
    width: 32,
    height: 2,
    backgroundColor: Colors.accent,
    marginBottom: 20,
  },
  emptyTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  emptySub: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 11,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
  },
  emptyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  emptyBtnText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    letterSpacing: 11 * 0.12,
    color: Colors.bgPrimary,
  },
});
