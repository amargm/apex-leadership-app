// ─── APEX App Navigator ───────────────────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookOpen, Map, Trophy, User } from 'lucide-react-native';

import { Colors, Spacing, Radius } from '../theme';
import type { TabParamList, LearnStackParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import LessonDetailScreen from '../screens/LessonDetailScreen';
import PathScreen from '../screens/PathScreen';
import WinsScreen from '../screens/WinsScreen';
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
    </Stack.Navigator>
  );
}

// ─── Tab Bar Icon ─────────────────────────────────────────────────────────────
type TabIconProps = {
  focused: boolean;
  size: number;
  Icon: React.ComponentType<{ size: number; color: string; strokeWidth: number }>;
};

function TabIcon({ focused, size, Icon }: TabIconProps) {
  return (
    <Icon
      size={size}
      color={focused ? Colors.accent : Colors.textSecondary}
      strokeWidth={1.5}
    />
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
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarIcon: ({ focused, size }) => {
          const icons: Record<string, React.ComponentType<any>> = {
            Learn: BookOpen,
            Path: Map,
            Wins: Trophy,
            Profile: User,
          };
          const Icon = icons[route.name];
          return <TabIcon focused={focused} size={20} Icon={Icon} />;
        },
      })}
    >
      <Tab.Screen name="Learn" component={LearnStack} options={{ title: 'LEARN' }} />
      <Tab.Screen name="Path" component={PathScreen} options={{ title: 'PATH' }} />
      <Tab.Screen name="Wins" component={WinsScreen} options={{ title: 'WINS' }} />
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
          regular: { fontFamily: 'DMSans_400Regular', fontWeight: '400' },
          medium: { fontFamily: 'DMSans_500Medium', fontWeight: '500' },
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
    backgroundColor: 'rgba(10, 10, 10, 0.92)',
    borderTopWidth: 1,
    borderTopColor: Colors.borderDefault,
    paddingHorizontal: Spacing.sm,
    height: 64,
  },
  tabItem: {
    paddingVertical: Spacing.sm,
    borderRadius: Radius.card,
  },
  tabLabel: {
    fontSize: 10,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
});
