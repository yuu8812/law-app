import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APP_API_KEY ?? "test",
  authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_APP_APP_ID ?? "",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
