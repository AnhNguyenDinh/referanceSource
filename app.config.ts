import { ExpoConfig, ConfigContext } from 'expo/config';

import { version } from './app.version.json';

// eslint-disable-next-line import/no-default-export
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: process.env.APP_NAME ?? 'Call Me Fix',
  slug: process.env.APP_SLUG ?? 'callme-client',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './configs/images/icon.png',
  scheme: process.env.APP_SCHEME ?? 'callme.client',
  userInterfaceStyle: 'automatic',
  primaryColor: '#FFC42C',
  splash: {
    image: './configs/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFC42C',
  },
  assetBundlePatterns: ['**/*'],
  jsEngine: process.env.HERMES_ENABLED === 'true' ? 'hermes' : 'jsc',
  ios: {
    buildNumber: version.ios.buildNumber,
    bundleIdentifier: process.env.APP_BUNDLE_IDENTIFY ?? 'com.callme.client',
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
      googleMapsApiKey: process.env.IOS_GOOGLE_MAP_API_KEY,
    },
    infoPlist: {
      LSApplicationQueriesSchemes: ['tel', 'telprompt'],
    },
  },
  android: {
    package: process.env.APP_BUNDLE_IDENTIFY ?? 'com.callme.client',
    versionCode: version.android.versionCode,
    googleServicesFile: './google-services.json',
    config: {
      googleMaps: {
        apiKey: process.env.ANDROID_GOOGLE_MAP_API_KEY,
      },
    },
    permissions: [
      'android.permission.ACCESS_COARSE_LOCATION',
      'android.permission.ACCESS_FINE_LOCATION',
      'android.permission.FOREGROUND_SERVICE',
      'android.permission.ACCESS_BACKGROUND_LOCATION',
    ],
  },
  plugins: [
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission: 'Allow $(PRODUCT_NAME) to use your location.',
        locationAlwaysPermission: 'Allow $(PRODUCT_NAME) to use your location.',
        isIosBackgroundLocationEnabled: 'Allow $(PRODUCT_NAME) to use your location.',
        isAndroidBackgroundLocationEnabled: 'Allow $(PRODUCT_NAME) to use your location.',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'Allow $(PRODUCT_NAME) to access your photos',
        cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera',
      },
    ],
    [
      'expo-local-authentication',
      {
        faceIDPermission: 'Allow $(PRODUCT_NAME) to use Face ID.',
      },
    ],
    '@bugsnag/plugin-expo-eas-sourcemaps',
    'expo-apple-authentication',
    [
      'expo-notifications',
      {
        icon: './configs/images/notification-icon.png',
        color: '#FFC42C',
      },
    ],
  ],
  extra: {
    eas: {
      projectId: '17c15f25-7a47-4312-ab56-104fae9f125a',
    },
    bugsnag: {
      apiKey: process.env.BUGSNAG_API_KEY,
    },
  },
  updates: {
    url: 'https://u.expo.dev/17c15f25-7a47-4312-ab56-104fae9f125a',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
});
