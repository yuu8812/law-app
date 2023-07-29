// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getRemoteConfig, getValue } from "firebase/remote-config";
import { useEffect, useState } from "react";

import FirebaseContext from "@/firebase/firebaseContext";

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
const analytics = typeof window === "undefined" ? null : getAnalytics(app);
const auth = getAuth(app);
const remoteConfig = typeof window === "undefined" ? null : getRemoteConfig(app);
if (remoteConfig) {
  remoteConfig.settings.minimumFetchIntervalMillis = 600000;
  remoteConfig.defaultConfig = {
    isMaintenanceMode: false,
    maintenanceDateString: "",
  };
  if (process.env.NEXT_PUBLIC_APP_ENV === "local") {
    connectAuthEmulator(auth, "http://localhost:9099");
    remoteConfig.settings.minimumFetchIntervalMillis = 60000;
  }
}

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [maintenanceDateString, setMaintenanceDateString] = useState("");

  useEffect(() => {
    (async () => {
      remoteConfig && setIsMaintenanceMode(getValue(remoteConfig, "isMaintenanceMode").asBoolean());
      remoteConfig &&
        setMaintenanceDateString(getValue(remoteConfig, "maintenanceDateString").asString());
    })();
  });

  const value = { analytics, auth, config: { isMaintenanceMode, maintenanceDateString } };
  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
