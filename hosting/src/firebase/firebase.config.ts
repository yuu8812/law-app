// Import the functions you need from the SDKs you need
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getRemoteConfig, isSupported as isConfigSupported } from "firebase/remote-config";

// import FirebaseContext from "contexts/FirebaseContext";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
  appId: process.env.NEXT_PUBLIC_APP_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN,
  messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET,
  measurementId: process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID,
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
const auth = getAuth(app);
const remoteConfig = async () => {
  return await isConfigSupported().then(() => getRemoteConfig(app));
};

// if (process.env.NEXT_PUBLIC_APP_ENV === "local") {
//   connectAuthEmulator(auth, "http://localhost:9099");
//   remoteConfig.minimumFetchIntervalMillis = 60000;
// }

export { analytics, auth, remoteConfig };
