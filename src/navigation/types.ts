// ─── APEX Navigation Types ────────────────────────────────────────────────────

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';

// ─── Tab Navigator ────────────────────────────────────────────────────────────
export type TabParamList = {
  Learn: undefined;
  Path: undefined;
  Notes: undefined;
  Profile: undefined;
};

// ─── Home (Learn) Stack ───────────────────────────────────────────────────────
export type LearnStackParamList = {
  Home: undefined;
  LessonDetail: { lessonId: string };
  Saved: undefined;
};
// ─── Notes Stack ──────────────────────────────────────────────────────────
export type NotesStackParamList = {
  NotesList: undefined;
  NoteEditor: {
    noteId?: string;
    lessonId?: string;
    heading?: string;
  };
};
// ─── Composite screen props ───────────────────────────────────────────────────
export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<LearnStackParamList, 'Home'>,
  BottomTabScreenProps<TabParamList>
>;

export type LessonDetailScreenProps = NativeStackScreenProps<
  LearnStackParamList,
  'LessonDetail'
>;

export type PathScreenProps = BottomTabScreenProps<TabParamList, 'Path'>;
export type NotesScreenProps = BottomTabScreenProps<TabParamList, 'Notes'>;
export type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>;
