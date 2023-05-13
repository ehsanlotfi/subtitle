import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.faranLearn.app',
  appName: 'app-translate',
  webDir: 'dist/app-translate',
  server: {
    androidScheme: 'https'
  }
};

export default config;
