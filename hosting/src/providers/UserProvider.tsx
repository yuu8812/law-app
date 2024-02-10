"use client";
import React, { Fragment, useEffect, useState } from "react";

import DefaultLoading from "@/components/DefaultLoading";
import { auth } from "@/firebase/firebase.client.config";
import { useFindUserQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const { setUser } = useUser();
  const [userLoaded, setUserLoaded] = useState(false);

  const { data } = useFindUserQuery({ variables: { _eq: auth.currentUser?.uid } });

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(
          data?.users[0]?.id
            ? {
                id: data?.users[0]?.id,
                name: data?.users[0].name,
                url: data?.users[0].icon_url ?? "",
              }
            : undefined,
        );
      } else {
        setUser(undefined);
      }
    });
    return () => {
      unSubUser();
    };
  }, [data?.users, setUser]);

  useEffect(() => {
    setUserLoaded(false);
    setUser(
      data?.users[0]?.id
        ? { id: data?.users[0]?.id, name: data?.users[0].name, url: data?.users[0].icon_url ?? "" }
        : undefined,
    );
    setUserLoaded(true);
  }, [data?.users, setUser]);

  if (!userLoaded) return <DefaultLoading />;

  return <Fragment>{children}</Fragment>;
};
