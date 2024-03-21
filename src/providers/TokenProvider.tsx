"use client";
import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import DefaultLoading from "@/components/DefaultLoading";
import { removeSession, setSession } from "@/fetch/session";
import { auth, db } from "@/firebase/firebase.client.config";

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const HASURA_TOKEN_KEY = "https://hasura.io/jwt/claims";
  const [authenticated, setAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        router.refresh();
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
        if (!hasuraClaims) {
          const unsub = onSnapshot(doc(db, "user_meta", user.uid), async (doc) => {
            if (doc.exists()) {
              const token = await user.getIdToken(true);
              await setSession(token);
              setAuthenticated(true);
            } else {
              setAuthenticated(false);
            }
          });
          return () => unsub();
        } else {
          await setSession(token);
          setAuthenticated(true);
        }
      } else {
        await removeSession();
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
