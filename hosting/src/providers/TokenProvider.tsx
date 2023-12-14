"use client";
import { doc, onSnapshot } from "firebase/firestore";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { auth, db } from "@/firebase/firebase.client.config";

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const HASURA_TOKEN_KEY = "https://hasura.io/jwt/claims";
  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
        if (hasuraClaims) {
          Cookies.set("session", token);
          // router.push("/laws");
        } else {
          onSnapshot(doc(db, "user_meta", user.uid), async () => {
            const tokenSnap = await user.getIdToken(true);
            const idTokenResultSnap = await user.getIdTokenResult();
            const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];
            if (hasuraClaimsSnap) {
              // router.push("/tasks");
              Cookies.set("session", tokenSnap);
            }
          });
        }
      }
    });
    return () => {
      unSubUser();
    };
  }, [router]);
  return <>{children}</>;
};

export default TokenProvider;
