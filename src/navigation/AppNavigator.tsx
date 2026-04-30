// ─── APEX App Navigator — Instrumental Redesign ──────────────────────────────

import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookOpen, Map, FileText, User } from 'lucide-react-native';

import { Colors, FontFamily } from '../theme';
import type { TabParamList, LearnStackParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import LessonDetailScreen from '../screens/LessonDetailScreen';
import SavedScreen from '../screens/SavedScreen';
import PathScreen from '../screens/PathScreen';
import NotesScreen from '../screens/NotesScreen';
import ProfileScreen from '../screens/ProfileScreen';

// ─── Fade-on-focus wrapper for smooth tab transitions ─────────────────────────
function FadeInScreen({ children }: { children: React.ReactNode }) {
  const opacity = React.useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      opacity.setValue(0);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, []),
  );

  return (
    <Animated.View style={{ flex: 1, opacity }}>
      {children}
    </Animated.View>
  );
}

function FadedPathScreen(props: any) {
  return <FadeInScreen><PathScreen {...props} /></FadeInScreen>;
}
function FadedNotesScreen(props: any) {
  return <FadeInScreen><NotesScreen {...props} /></FadeInScreen>;
}
function FadedProfileScreen(props: any) {
  return <FadeInScreen><ProfileScreen {...props} /></FadeInScreen>;
}

// ─── Navigators ───────────────────────────────────────────────────────────────
const Stack = createNativeStackNavigator<LearnStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// ─── Learn Stack (Home + Lesson Detail) ──────────────────────────────────────
function LearnStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
        animationDuration: 250,
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="LessonDetail"
        component={LessonDetailScreen}
        options={{
          animation: 'slide_from_right',
          animationDuration: 300,
        }}
      />
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          animation: 'slide_from_right',
          animationDuration: 300,
        }}
      />
    </Stack.Navigator>
  );
}

// ─── Tab Bar Icon with top accent line ────────────────────────────────────────
type TabIconProps = {
  focused: boolean;
  Icon: React.ComponentType<{ size: number; color: string; strokeWidth: number }>;
};

function TabIcon({ focused, Icon }: TabIconProps) {
  return (
    <View style={styles.tabIconContainer}>
      {/* Top accent line — visible only when active */}
      <View style={[styles.tabAccentLine, focused && styles.tabAccentLineActive]} />
      <Icon
        size={18}
        color={focused ? Colors.accent : '#666666'}
        strokeWidth={1.5}
      />
    </View>
  );
}

// ─── Bottom Tab Navigator ─────────────────────────────────────────────────────
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        lazy: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: '#666666',
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused }) => {
          const icons: Record<string, React.ComponentType<any>> = {
            Learn: BookOpen,
            Path: Map,
            Notes: FileText,
            Profile: User,
          };
          const Icon = icons[route.name];
          return <TabIcon focused={focused} Icon={Icon} />;
        },
      })}
    >
      <Tab.Screen name="Learn" component={LearnStack} options={{ title: 'LEARN' }} />
      <Tab.Screen name="Path" component={FadedPathScreen} options={{ title: 'PATH' }} />
      <Tab.Screen name="Notes" component={FadedNotesScreen} options={{ title: 'NOTES' }} />
      <Tab.Screen name="Profile" component={FadedProfileScreen} options={{ title: 'PROFILE' }} />
    </Tab.Navigator>
  );
}

// ─── Root Navigator ───────────────────────────────────────────────────────────
export default function AppNavigator() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: Colors.accent,
          background: Colors.bgPrimary,
          card: Colors.bgSurface,
          text: Colors.textPrimary,
          border: Colors.borderDefault,
          notification: Colors.accent,
        },
      }}
    >
      <BottomTabs />
    </NavigationContainer>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'rgba(5, 5, 5, 0.96)',
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
    paddingHorizontal: 4,
    height: 60,
    elevation: 0,
  },
  tabItem: {
    paddingTop: 12,
    paddingBottom: 0,
  },
  tabLabel: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    letterSpacing: 0.08 * 8,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  tabIconContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  tabAccentLine: {
    position: 'absolute',
    top: -12,
    width: 24,
    height: 2,
    backgroundColor: 'transparent',
  },
  tabAccentLineActive: {
    backgroundColor: Colors.accent,
  },
});
