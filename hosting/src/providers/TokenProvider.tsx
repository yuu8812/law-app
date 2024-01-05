"use client";
import { doc, onSnapshot } from "firebase/firestore";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import DefaultLoading from "@/components/DefaultLoading";
import { auth, db } from "@/firebase/firebase.client.config";

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const HASURA_TOKEN_KEY = "https://hasura.io/jwt/claims";
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      Cookies.remove("session");
      if (user) {
        await user.reload();
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
        if (hasuraClaims) {
          Cookies.set("session", token);
          setAuthenticated(true);
        } else {
          onSnapshot(doc(db, "user_meta", user.uid), async () => {
            const tokenSnap = await user.getIdToken(true);
            const idTokenResultSnap = await user.getIdTokenResult();
            const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];
            if (hasuraClaimsSnap) {
              Cookies.set("session", tokenSnap);
              setAuthenticated(true);
            }
          });
        }
      } else {
        setAuthenticated(true);
      }
    });
    return () => {
      unSubUser();
    };
  }, [router]);
  return <div className="flex flex-1">{authenticated ? children : <DefaultLoading />}</div>;
};

export default TokenProvider;
