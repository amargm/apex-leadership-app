// ─── APEX — Full-screen Note Editor ─────────────────────────────────────────
// Opens for new notes or existing notes. Auto-saves on back navigation.

import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, BookOpen, Trash2, Check, ChevronRight, ChevronDown, Link } from 'lucide-react-native';

import { Colors, FontFamily, Spacing } from '../theme';
import { useAppState, Note } from '../state/AppState';
import { MOCK_LESSONS } from '../data/mockLessons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NotesStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<NotesStackParamList, 'NoteEditor'>;

export default function NoteEditorScreen({ navigation, route }: Props) {
  const { noteId, lessonId: initialLessonId, heading: initialHeading } = route.params ?? {};
  const { state, addNote, updateNote, deleteNote } = useAppState();

  const existingNote = noteId ? state.notes.find((n) => n.id === noteId) : undefined;

  const [content, setContent] = useState(existingNote?.content ?? '');
  const [lessonId, setLessonId] = useState<string | undefined>(existingNote?.lessonId ?? initialLessonId);
  const [heading, setHeading] = useState(existingNote?.heading ?? initialHeading ?? '');
  const [saved, setSaved] = useState(!!existingNote);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [lessonPickerVisible, setLessonPickerVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const hasChanges = useRef(false);
  const createdNoteId = useRef<string | null>(noteId ?? null);
  const skipAutoSave = useRef(false);
  const isExisting = !!existingNote;
  const rootNav = useNavigation<any>();

  // Track if content changed
  useEffect(() => {
    if (existingNote && content !== existingNote.content) {
      hasChanges.current = true;
    } else if (!existingNote && (content.trim().length > 0 || heading.trim().length > 0)) {
      hasChanges.current = true;
    }
  }, [content, heading]);

  // Auto-focus only for new notes
  useEffect(() => {
    if (!isExisting) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // Keep refs in sync for the beforeRemove closure
  const contentRef = useRef(content);
  const headingRef = useRef(heading);
  const lessonIdRef = useRef(lessonId);
  useEffect(() => { contentRef.current = content; }, [content]);
  useEffect(() => { headingRef.current = heading; }, [heading]);
  useEffect(() => { lessonIdRef.current = lessonId; }, [lessonId]);

  // Auto-save on navigate away
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      if (skipAutoSave.current) return;
      const trimmed = contentRef.current.trim();
      if (!trimmed) return;
      const headingVal = headingRef.current.trim() || undefined;
      if (createdNoteId.current) {
        updateNote(createdNoteId.current, trimmed, headingVal, lessonIdRef.current);
      } else {
        const id = addNote(trimmed, lessonIdRef.current, headingVal);
        if (id) createdNoteId.current = id;
      }
    });
    return unsubscribe;
  }, [navigation, addNote, updateNote]);

  const saveNote = () => {
    const trimmed = content.trim();
    if (!trimmed) return;

    const headingVal = heading.trim() || undefined;

    if (createdNoteId.current) {
      updateNote(createdNoteId.current, trimmed, headingVal, lessonId);
    } else {
      const id = addNote(trimmed, lessonId, headingVal);
      if (id) createdNoteId.current = id;
    }
    setSaved(true);
    hasChanges.current = false;
  };

  const handleSave = () => {
    saveNote();
    Keyboard.dismiss();
    skipAutoSave.current = true;
    navigation.goBack();
  };

  const handleDelete = () => {
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    setDeleteModalVisible(false);
    if (createdNoteId.current) {
      deleteNote(createdNoteId.current);
    }
    skipAutoSave.current = true;
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  // Derived data
  const lessonTitle = lessonId
    ? MOCK_LESSONS.find((l) => l.lesson_id === lessonId)?.title ?? 'Removed case study'
    : null;

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;

  const formatDate = (iso?: string) => {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleDateString('en', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <View style={styles.header}>
          <Pressable onPress={handleBack} hitSlop={12} style={styles.backBtn}>
            <ArrowLeft size={20} color={Colors.textPrimary} strokeWidth={1.5} />
          </Pressable>

          <View style={styles.headerActions}>
            {existingNote && (
              <TouchableOpacity onPress={handleDelete} hitSlop={12} style={styles.headerBtn}>
                <Trash2 size={16} color={Colors.textDark} strokeWidth={1.5} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={handleSave}
              hitSlop={12}
              style={[styles.saveChip, !content.trim() && styles.saveChipDisabled]}
              disabled={!content.trim()}
              activeOpacity={0.7}
            >
              <Check size={14} color={content.trim() ? Colors.bgPrimary : Colors.textDark} strokeWidth={2} />
              <Text style={[styles.saveChipText, !content.trim() && styles.saveChipTextDisabled]}>
                SAVE
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Meta bar ───────────────────────────────────────────────────── */}
        <View style={styles.metaBar}>
          {existingNote && (
            <Text style={styles.metaText}>
              {formatDate(existingNote.updatedAt)}
            </Text>
          )}
          {!existingNote && <Text style={styles.metaText}>NEW NOTE</Text>}
          <Text style={styles.metaText}>{wordCount} {wordCount === 1 ? 'word' : 'words'}</Text>
        </View>

        {/* ── Heading ─────────────────────────────────────────────────── */}
        <View style={styles.headingBar}>
          <TextInput
            style={styles.headingInput}
            value={heading}
            onChangeText={(t) => {
              setHeading(t);
              setSaved(false);
            }}
            placeholder="Add heading..."
            placeholderTextColor={Colors.textDarker}
            multiline
            scrollEnabled={false}
            blurOnSubmit={true}
            returnKeyType="done"
          />
        </View>

        {/* ── Linked lesson ──────────────────────────────────────────────── */}
        {lessonTitle && lessonId ? (
          <View style={styles.lessonBar}>
            <TouchableOpacity
              style={styles.lessonBarLink}
              activeOpacity={0.7}
              onPress={() => {
                saveNote();
                rootNav.navigate('Learn', { screen: 'LessonDetail', params: { lessonId } });
              }}
            >
              <BookOpen size={10} color={Colors.textDark} strokeWidth={1.5} />
              <Text style={styles.lessonBarText} numberOfLines={1}>{lessonTitle}</Text>
              <ChevronRight size={12} color={Colors.textDark} strokeWidth={1.5} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setLessonId(undefined); setSaved(false); }}
              hitSlop={8}
              style={styles.lessonBarUnlink}
            >
              <Text style={styles.lessonBarUnlinkText}>×</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.lessonBar}
            activeOpacity={0.7}
            onPress={() => setLessonPickerVisible(true)}
          >
            <Link size={10} color={Colors.textDark} strokeWidth={1.5} />
            <Text style={styles.lessonBarText}>Link to case study...</Text>
            <ChevronDown size={12} color={Colors.textDark} strokeWidth={1.5} />
          </TouchableOpacity>
        )}

        {/* ── Editor ─────────────────────────────────────────────────────── */}
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.editorContent}
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            ref={inputRef}
            style={styles.editor}
            value={content}
            onChangeText={(text) => {
              setContent(text);
              setSaved(false);
            }}
            placeholder="Start writing..."
            placeholderTextColor={Colors.textDark}
            multiline
            textAlignVertical="top"
            scrollEnabled={false}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ── Delete Confirmation Modal ── */}
      <Modal visible={deleteModalVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setDeleteModalVisible(false)}>
          <Pressable style={styles.modalBox}>
            <View style={styles.modalAccent} />
            <Text style={styles.modalTitle}>DELETE NOTE</Text>
            <Text style={styles.modalBody}>
              This note will be permanently removed. This cannot be undone.
            </Text>
            <View style={styles.modalActions}>
              <Pressable
                style={({ pressed }) => [
                  styles.modalBtn,
                  pressed && styles.modalBtnPressed,
                ]}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>CANCEL</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.modalBtn,
                  styles.modalBtnRight,
                  pressed && styles.modalBtnPressed,
                ]}
                onPress={confirmDelete}
              >
                <Text style={[styles.modalBtnText, styles.modalBtnTextDestructive]}>DELETE</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      {/* ── Lesson Picker Modal ── */}
      <Modal visible={lessonPickerVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setLessonPickerVisible(false)}>
          <Pressable style={styles.pickerBox}>
            <View style={styles.pickerAccent} />
            <Text style={styles.pickerTitle}>LINK TO CASE STUDY</Text>
            <ScrollView style={styles.pickerScroll} showsVerticalScrollIndicator={false}>
              {MOCK_LESSONS.map((lesson) => (
                <TouchableOpacity
                  key={lesson.lesson_id}
                  style={styles.pickerItem}
                  activeOpacity={0.7}
                  onPress={() => {
                    setLessonId(lesson.lesson_id);
                    setSaved(false);
                    setLessonPickerVisible(false);
                  }}
                >
                  <Text style={styles.pickerCategory}>{lesson.category.toUpperCase()}</Text>
                  <Text style={styles.pickerLessonTitle} numberOfLines={1}>{lesson.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  flex: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  backBtn: {
    padding: 4,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerBtn: {
    padding: 4,
  },
  saveChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.accent,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  saveChipDisabled: {
    backgroundColor: Colors.bgSurface2,
  },
  saveChipText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 10,
    letterSpacing: 10 * 0.12,
    color: Colors.bgPrimary,
  },
  saveChipTextDisabled: {
    color: Colors.textDark,
  },

  // Meta bar
  metaBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  metaText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    letterSpacing: 9 * 0.1,
    color: Colors.textDark,
    textTransform: 'uppercase',
  },

  // Heading bar
  headingBar: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
    backgroundColor: Colors.accentGhost,
  },
  headingInput: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 15,
    color: Colors.accent,
    lineHeight: 22,
    padding: 0,
  },

  // Lesson bar
  lessonBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: Spacing.screenPaddingH,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
  },
  lessonBarLink: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  lessonBarUnlink: {
    paddingLeft: 8,
  },
  lessonBarUnlinkText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 16,
    color: Colors.textDark,
  },
  lessonBarText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 10,
    color: Colors.textMuted,
    flex: 1,
  },

  // Editor
  editorContent: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: 20,
    paddingBottom: 120,
  },
  editor: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: Colors.textPrimary,
    minHeight: 300,
  },

  // Delete modal
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
  modalBtn: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: Colors.bgSurface,
  },
  modalBtnRight: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.borderDefault,
  },
  modalBtnPressed: {
    backgroundColor: Colors.bgSurface2,
  },
  modalBtnText: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    letterSpacing: 11 * 0.1,
    color: Colors.textSecondary,
  },
  modalBtnTextDestructive: {
    color: '#E05252',
  },

  // Lesson picker modal
  pickerBox: {
    width: '100%',
    maxWidth: 360,
    maxHeight: '70%',
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
  },
  pickerAccent: {
    height: 2,
    backgroundColor: Colors.accent,
  },
  pickerTitle: {
    fontFamily: FontFamily.dmMonoMedium,
    fontSize: 11,
    letterSpacing: 11 * 0.12,
    color: Colors.textPrimary,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  pickerScroll: {
    maxHeight: 360,
  },
  pickerItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
  },
  pickerCategory: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    letterSpacing: 8 * 0.15,
    color: Colors.textDark,
    marginBottom: 3,
  },
  pickerLessonTitle: {
    fontFamily: FontFamily.dmSansRegular,
    fontSize: 13,
    color: Colors.textPrimary,
    lineHeight: 18,
  },
});
