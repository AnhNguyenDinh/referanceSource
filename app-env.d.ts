/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_NAME: string;
    readonly APP_SLUG: string;
    readonly APP_SCHEME: string;
    readonly APP_BUNDLE_IDENTIFY: string;

    readonly API_URL: string;
    readonly ANDROID_GOOGLE_MAP_API_KEY: string;
    readonly IOS_GOOGLE_MAP_API_KEY: string;
    readonly BUGSNAG_API_KEY: string;
    readonly RELEASE_STAGE: 'development' | 'production';

    readonly GOOGLE_AUTH_ANDROID_CLIENT_ID: string;
    readonly GOOGLE_AUTH_IOS_CLIENT_ID: string;
    readonly FACEBOOK_AUTH_CLIENT_ID: string;

    readonly HERMES_ENABLED: string;
  }
}
