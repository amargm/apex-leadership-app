// ─── APEX App Navigator — Instrumental Redesign ──────────────────────────────

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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

// ─── Navigators ───────────────────────────────────────────────────────────────
const Stack = createNativeStackNavigator<LearnStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// ─── Learn Stack (Home + Lesson Detail) ──────────────────────────────────────
function LearnStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="LessonDetail"
        component={LessonDetailScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          animation: 'slide_from_right',
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
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: '#555555',
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
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
      <Tab.Screen name="Path" component={PathScreen} options={{ title: 'PATH' }} />
      <Tab.Screen name="Notes" component={NotesScreen} options={{ title: 'NOTES' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'PROFILE' }} />
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
        fonts: {
          regular: { fontFamily: 'DMMono_400Regular', fontWeight: '400' },
          medium: { fontFamily: 'DMMono_500Medium', fontWeight: '500' },
          bold: { fontFamily: 'DMSans_700Bold', fontWeight: '700' },
          heavy: { fontFamily: 'DMSans_700Bold', fontWeight: '900' },
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
