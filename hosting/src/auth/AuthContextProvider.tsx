import firebase_app from "@/firebase/firebase.config";
import {
  onAuthStateChanged,
  getAuth,
  User,
  connectAuthEmulator,
} from "firebase/auth";
import React from "react";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

if (process.env.REACT_APP_ENV === "local") {
  connectAuthEmulator(auth, "http://localhost:9099");
}

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
