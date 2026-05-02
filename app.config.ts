import type { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'APEX',
  slug: 'apex-leadership',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'dark',
  backgroundColor: '#050505',
  splash: {
    backgroundColor: '#050505',
    resizeMode: 'contain',
  },
  android: {
    package: 'com.apex.leadership',
    versionCode: 1,
    splash: {
      backgroundColor: '#050505',
      resizeMode: 'contain',
    },
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
