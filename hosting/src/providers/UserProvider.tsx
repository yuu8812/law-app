"use client";
import React, { useEffect, useState } from "react";

import DefaultLoading from "@/components/DefaultLoading";
import { auth } from "@/firebase/firebase.client.config";
import { useFindUserQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const { setUser } = useUser();
  const [userLoaded, setUserLoaded] = useState(false);

  const { data } = useFindUserQuery({ variables: { _eq: auth.currentUser?.uid } });

  useEffect(() => {
    setUserLoaded(false);
    setUser(data?.users[0]?.id ? { id: data?.users[0]?.id, name: "" } : null);
    setUserLoaded(true);
  }, [data?.users, setUser]);

  if (!userLoaded) return <DefaultLoading />;

  return <>{children}</>;
};
