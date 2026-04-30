// ─── APEX Navigation Types ────────────────────────────────────────────────────

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';

// ─── Tab Navigator ────────────────────────────────────────────────────────────
export type TabParamList = {
  Learn: undefined;
  Path: undefined;
  Wins: undefined;
  Profile: undefined;
};

// ─── Home (Learn) Stack ───────────────────────────────────────────────────────
export type LearnStackParamList = {
  Home: undefined;
  LessonDetail: { lessonId: string };
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
export type WinsScreenProps = BottomTabScreenProps<TabParamList, 'Wins'>;
export type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>;
