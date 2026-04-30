import type { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'APEX',
  slug: 'apex-leadership',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'dark',
  backgroundColor: '#0A0A0A',
  android: {
    package: 'com.apex.leadership',
    versionCode: 1,
  },
  plugins: [
    'expo-font',
  ],
  extra: {
    eas: {
      projectId: '',
    },
  },
};

export default config;
