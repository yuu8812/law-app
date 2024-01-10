"use client";
import Cookies from "js-cookie";
import { ReactNode, useEffect, useState } from "react";

import DefaultLoading from "@/components/DefaultLoading";
import { auth } from "@/firebase/firebase.client.config";

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const HASURA_TOKEN_KEY = "https://hasura.io/jwt/claims";
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unSubUser = auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
        console.log(idTokenResult.expirationTime);
        if (!hasuraClaims) {
          Cookies.remove("session");
          setAuthenticated(false);
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

  return <div className="flex flex-1">{authenticated ? children : <DefaultLoading />}</div>;
};

export default TokenProvider;
