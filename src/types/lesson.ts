// ─── APEX Data Types ──────────────────────────────────────────────────────────
// Mirrors the backend/CMS contract from the spec (Section 11).

export type CategoryColorKey = 'green' | 'orange' | 'blue' | 'grey';
export type Difficulty = 'accessible' | 'medium' | 'complex';
export type LessonStatus = 'default' | 'in_progress' | 'completed' | 'locked' | 'new';

export type ModuleKey =
  | 'culture_building'
  | 'scaling_teams'
  | 'crisis_leadership'
  | 'innovation'
  | 'turnarounds'
  | 'servant_leadership'
  | 'decision_making'
  | 'emotional_intelligence';

export interface Module {
  key: ModuleKey;
  title: string;
  subtitle: string;
  colorKey: CategoryColorKey;
}

export interface Decision {
  abbreviation: string; // 2 chars
  title: string;
  description: string;
}

export interface TimelineEvent {
  step: number;
  year: string;
  title: string;
  description: string;
}

export interface PullQuote {
  text: string;
  attribution: string;
}

export interface TakeawayItem {
  headline: string;
  body: string;
}

export interface LessonTabs {
  overview: {
    situation: string;
    body_paragraphs: string[];
    pull_quote: PullQuote;
    decisions: Decision[];
  };
  timeline: {
    events: TimelineEvent[];
  };
  reflect: {
    prompts: string[];
  };
  takeaways: {
    items: TakeawayItem[];
  };
}

export interface Lesson {
  lesson_id: string;
  title: string;
  subtitle: string;
  company: string;
  company_abbreviation: string; // 2 chars
  year_range: string;
  module: ModuleKey;
  category: string;
  category_color_key: CategoryColorKey;
  read_time_minutes: number;
  difficulty: Difficulty;
  tags: string[];
  source_disclosure: string;
  is_new: boolean;
  is_locked: boolean;
  unlock_after_count: number;
  progress?: number; // 0–100, only present for in_progress/completed
  status: LessonStatus;
  tabs: LessonTabs;
}

export interface PushNotification {
  notification_id: string;
  type: 'new_lesson' | 'reminder' | 'streak_alert';
  title: string;
  body: string;
  lesson_id: string;
  sent_at: string;
}

export interface UserStats {
  day_streak: number;
  cases_completed: number;
  time_this_week_minutes: number;
}
