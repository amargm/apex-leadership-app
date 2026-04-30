// ─── Notes Screen — Full Implementation ───────────────────────────────────────

import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Trash2, Edit3, X, BookOpen } from 'lucide-react-native';

import { Colors, FontFamily, Spacing } from '../theme';
import { useAppState, Note } from '../state/AppState';
import { MOCK_LESSONS } from '../data/mockLessons';

export default function NotesScreen() {
  const { state, addNote, updateNote, deleteNote } = useAppState();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [noteContent, setNoteContent] = useState('');
  const [selectedLessonId, setSelectedLessonId] = useState<string | undefined>(undefined);

  const openCreate = () => {
    setEditingNote(null);
    setNoteContent('');
    setSelectedLessonId(undefined);
    setModalVisible(true);
  };

  const openEdit = (note: Note) => {
    setEditingNote(note);
    setNoteContent(note.content);
    setSelectedLessonId(note.lessonId);
    setModalVisible(true);
  };

  const handleSave = () => {
    const trimmed = noteContent.trim();
    if (!trimmed) return;

    if (editingNote) {
      updateNote(editingNote.id, trimmed);
    } else {
      addNote(trimmed, selectedLessonId);
    }
    setModalVisible(false);
    setNoteContent('');
    setEditingNote(null);
  };

  const handleDelete = (noteId: string) => {
    Alert.alert('Delete Note', 'This cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteNote(noteId) },
    ]);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const day = d.getDate();
    const month = d.toLocaleString('en', { month: 'short' }).toUpperCase();
    return `${day} ${month}`;
  };

  const getLessonTitle = (lessonId?: string) => {
    if (!lessonId) return null;
    return MOCK_LESSONS.find((l) => l.lesson_id === lessonId)?.title ?? null;
  };

  const availableLessons = MOCK_LESSONS.filter((l) => !l.is_locked);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>NOTES</Text>
          <Text style={styles.subtitle}>{state.notes.length} entries</Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={openCreate} activeOpacity={0.7}>
          <Plus size={18} color={Colors.accent} strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {state.notes.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>—</Text>
          <Text style={styles.emptyTitle}>No notes yet</Text>
          <Text style={styles.emptySub}>
            Tap + to jot down reflections, insights, or key takeaways from your readings.
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {state.notes.map((note, index) => {
            const lessonTitle = getLessonTitle(note.lessonId);
            return (
              <View
                key={note.id}
                style={[styles.card, index < state.notes.length - 1 && styles.cardBorder]}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardDate}>{formatDate(note.updatedAt)}</Text>
                  <View style={styles.cardActions}>
                    <TouchableOpacity
                      onPress={() => openEdit(note)}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Edit3 size={14} color="#777777" strokeWidth={1.5} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDelete(note.id)}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Trash2 size={14} color="#555555" strokeWidth={1.5} />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.cardContent} numberOfLines={4}>
                  {note.content}
                </Text>
                {lessonTitle && (
                  <View style={styles.cardLesson}>
                    <BookOpen size={10} color="#555555" strokeWidth={1.5} />
                    <Text style={styles.cardLessonText} numberOfLines={1}>
                      {lessonTitle}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      )}

      {/* ── Create / Edit Modal ── */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {/* Modal Header */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  {editingNote ? 'EDIT NOTE' : 'NEW NOTE'}
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <X size={20} color={Colors.textPrimary} strokeWidth={1.5} />
                </TouchableOpacity>
              </View>

              {/* Lesson Picker (create only) */}
              {!editingNote && (
                <View style={styles.lessonPicker}>
                  <Text style={styles.lessonPickerLabel}>LINK TO LESSON</Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.lessonChips}
                  >
                    <TouchableOpacity
                      style={[
                        styles.chip,
                        !selectedLessonId && styles.chipActive,
                      ]}
                      onPress={() => setSelectedLessonId(undefined)}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          !selectedLessonId && styles.chipTextActive,
                        ]}
                      >
                        NONE
                      </Text>
                    </TouchableOpacity>
                    {availableLessons.map((l) => (
                      <TouchableOpacity
                        key={l.lesson_id}
                        style={[
                          styles.chip,
                          selectedLessonId === l.lesson_id && styles.chipActive,
                        ]}
                        onPress={() => setSelectedLessonId(l.lesson_id)}
                      >
                        <Text
                          style={[
                            styles.chipText,
                            selectedLessonId === l.lesson_id && styles.chipTextActive,
                          ]}
                          numberOfLines={1}
                        >
                          {l.company}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              )}

              {/* Text Input */}
              <TextInput
                style={styles.textInput}
                placeholder="Write your thoughts..."
                placeholderTextColor="#555555"
                value={noteContent}
                onChangeText={setNoteContent}
                multiline
                autoFocus
                textAlignVertical="top"
              />

              {/* Save Button */}
              <TouchableOpacity
                style={[styles.saveBtn, !noteContent.trim() && styles.saveBtnDisabled]}
                onPress={handleSave}
                disabled={!noteContent.trim()}
                activeOpacity={0.8}
              >
                <Text style={styles.saveBtnText}>
                  {editingNote ? 'UPDATE' : 'SAVE'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
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
    color: '#777777',
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
  scroll: { flex: 1 },
  content: { paddingBottom: 40 },

  // Empty state
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 32,
    color: '#555555',
    marginBottom: 16,
  },
  emptyTitle: {
    fontFamily: FontFamily.dmSansMedium,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  emptySub: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 18,
  },

  // Card
  card: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 18,
  },
  cardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardDate: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: '#555555',
    letterSpacing: 0.8,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 16,
  },
  cardContent: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 21,
  },
  cardLesson: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
  },
  cardLessonText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: '#555555',
    flex: 1,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Colors.bgSurface,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 20,
    paddingBottom: 40,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 13,
    color: Colors.textPrimary,
    letterSpacing: 1.2,
  },

  // Lesson Picker
  lessonPicker: {
    marginBottom: 16,
  },
  lessonPickerLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: '#777777',
    letterSpacing: 1,
    marginBottom: 10,
  },
  lessonChips: {
    gap: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
  },
  chipActive: {
    borderColor: Colors.accent,
    backgroundColor: 'rgba(200, 240, 77, 0.08)',
  },
  chipText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: '#777777',
    letterSpacing: 0.5,
  },
  chipTextActive: {
    color: Colors.accent,
  },

  // Text Input
  textInput: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 22,
    minHeight: 140,
    maxHeight: 280,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    padding: 16,
    marginBottom: 20,
  },

  // Save Button
  saveBtn: {
    backgroundColor: Colors.accent,
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveBtnDisabled: {
    opacity: 0.3,
  },
  saveBtnText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 13,
    color: Colors.bgPrimary,
    letterSpacing: 1.5,
  },
});
