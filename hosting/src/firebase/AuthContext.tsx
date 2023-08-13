"use client";
import { onAuthStateChanged, User } from "firebase/auth";
import React from "react";

import { auth } from "./firebase.config";

type ContextType = {
  user: User | null;
};

const AuthContext = React.createContext({} as ContextType);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
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

  const value = { user };

  return <AuthContext.Provider value={value}></AuthContext.Provider>;
};
