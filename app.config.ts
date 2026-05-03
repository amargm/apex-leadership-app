import type { ExpoConfig } from 'expo/config';
import type { WithAndroidWidgetsParams } from 'react-native-android-widget';

const widgetConfig: WithAndroidWidgetsParams = {
  fonts: [
    './assets/fonts/DMMono_300Light.ttf',
    './assets/fonts/DMMono_500Medium.ttf',
    './assets/fonts/Lora_400Regular.ttf',
  ],
  widgets: [
    {
      name: 'DailyThought',
      label: 'APEX Daily Thought',
      minWidth: '320dp',
      minHeight: '120dp',
      targetCellWidth: 5,
      targetCellHeight: 2,
      description: 'Daily leadership quote from APEX',
      // Update every 30 minutes (minimum allowed); quote changes daily
      updatePeriodMillis: 1800000,
    },
  ],
};

const config: ExpoConfig = {
  name: 'APEX',
  slug: 'apex-leadership',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './icon.png',
  userInterfaceStyle: 'dark',
  backgroundColor: '#050505',
  splash: {
    image: './icon.png',
    backgroundColor: '#050505',
    resizeMode: 'contain',
  },
  android: {
    package: 'com.apex.leadership',
    versionCode: 1,
    googleServicesFile: './google-services.json',
    adaptiveIcon: {
      foregroundImage: './icon.png',
      backgroundColor: '#050505',
    },
    splash: {
      backgroundColor: '#050505',
      resizeMode: 'contain',
    },
  },
  plugins: [
    'expo-font',
    '@react-native-firebase/app',
    '@react-native-firebase/auth',
    '@react-native-firebase/crashlytics',
    '@react-native-google-signin/google-signin',
    ['react-native-android-widget', widgetConfig],
  ],
  extra: {
    eas: {
      projectId: '',
    },
  },
};

export default config;
