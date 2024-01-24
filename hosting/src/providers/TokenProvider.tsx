"use client";
import { doc, onSnapshot } from "firebase/firestore";
import Cookies from "js-cookie";
import { ReactNode, useEffect, useMemo, useState } from "react";

import DefaultLoading from "@/components/DefaultLoading";
import { auth, db } from "@/firebase/firebase.client.config";

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const HASURA_TOKEN_KEY = "https://hasura.io/jwt/claims";
  const [authenticated, setAuthenticated] = useState(false);

  const currentDate = new Date().getTime();
  const expiredDate = Number(localStorage.getItem("token_expired_at"));

  const isAccessTokenExpired = useMemo(() => currentDate > expiredDate, [currentDate, expiredDate]);

  useEffect(() => {
    const unSubUser = auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
        const expiredDate = new Date(idTokenResult.expirationTime).getTime();
        window && localStorage.setItem("token_expired_at", expiredDate.toString());
        if (!hasuraClaims) {
          const unsub = onSnapshot(doc(db, "user_meta", user.uid), async (doc) => {
            if (doc.exists()) {
              const token = await user.getIdToken(true);
              Cookies.set("session", token);
              setAuthenticated(true);
            } else {
              setAuthenticated(false);
            }
          });
          return () => unsub();
        } else {
          Cookies.set("session", token);
          setAuthenticated(true);
        }
      } else {
        Cookies.remove("session");
        setAuthenticated(true);
      }
    });
    return () => {
      unSubUser();
    };
  }, []);

  return (
    <div className="flex flex-1">
      {authenticated || isAccessTokenExpired ? children : <DefaultLoading />}
    </div>
  );
};

export default TokenProvider;
