// ─── APEX — Root Component ───────────────────────────────────────────────────
// Loads all Google Fonts, hides splash screen, then renders the navigator.

import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
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
  DMSans_600SemiBold,
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
    DMSans_600SemiBold,
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
    return null;
  }

  return (
    <AppStateProvider>
      <View style={{ flex: 1, backgroundColor: Colors.bgPrimary }} onLayout={onLayoutRootView}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <AppNavigator />
      </View>
    </AppStateProvider>
  );
}
