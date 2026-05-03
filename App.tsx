// ─── APEX — Root Component ───────────────────────────────────────────────────
// Loads all Google Fonts, hides splash screen, then renders the navigator.

import React, { Component, useCallback } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  BebasNeue_400Regular,
} from '@expo-google-fonts/bebas-neue';

import {
  Lora_400Regular,
  Lora_500Medium,
  Lora_700Bold,
} from '@expo-google-fonts/lora';

import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

import {
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from '@expo-google-fonts/dm-serif-display';

import {
  DMMono_300Light,
  DMMono_400Regular,
  DMMono_500Medium,
} from '@expo-google-fonts/dm-mono';

import AppNavigator from './src/navigation/AppNavigator';
import { AppStateProvider } from './src/state/AppState';
import { Colors } from './src/theme';

// ─── Error Boundary ───────────────────────────────────────────────────────────
class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, backgroundColor: '#050505', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <Text style={{ color: '#EDEAE5', fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Something went wrong</Text>
          <Text style={{ color: '#707070', fontSize: 14, textAlign: 'center' }}>Please restart the app to continue.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

// Keep splash visible until fonts are ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    BebasNeue_400Regular,
    Lora_400Regular,
    Lora_500Medium,
    Lora_700Bold,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    DMSerifDisplay_400Regular,
    DMSerifDisplay_400Regular_Italic,
    DMMono_300Light,
    DMMono_400Regular,
    DMMono_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <View style={{ flex: 1, backgroundColor: Colors.bgPrimary }} />;
  }

  return (
    <ErrorBoundary>
      <AppStateProvider>
        <View style={{ flex: 1, backgroundColor: Colors.bgPrimary }} onLayout={onLayoutRootView}>
          <StatusBar style="light" backgroundColor="transparent" translucent />
          <AppNavigator />
        </View>
      </AppStateProvider>
    </ErrorBoundary>
  );
}
