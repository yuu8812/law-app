"use client";
// Import the functions you need from the SDKs you need
import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { RemoteConfig, getRemoteConfig } from "firebase/remote-config";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
  appId: process.env.NEXT_PUBLIC_APP_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN,
  messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET,
  measurementId: process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID,
};

let app: FirebaseApp;
let analytics: Analytics;
let remoteConfig: RemoteConfig;
let auth: Auth;

// Initialize Firebase
if (getApps().length === 0 && typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  auth = getAuth(app);
  remoteConfig = getRemoteConfig(app);
  remoteConfig.settings.minimumFetchIntervalMillis = 600000;
  remoteConfig.defaultConfig = {
    isMaintenanceMode: false,
    maintenanceDateString: "",
  };
}

export { analytics, auth, remoteConfig };
