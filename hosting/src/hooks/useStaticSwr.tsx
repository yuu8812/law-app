import { User, onAuthStateChanged } from "firebase/auth";
import React from "react";
import useSWR from "swr";

import { auth } from "@/firebase/firebase.config";

export type ModalState = {
  text?: string;
  type: "loading" | "message" | null;
};

const initialModalData: ModalState = {
  type: null,
};

export const useStaticModalSWR = (): {
  data: ModalState;
  mutate: (
    data?: ModalState | Promise<ModalState> | ((prevState: ModalState) => ModalState),
  ) => Promise<ModalState>;
} => {
  const { data, mutate } = useSWR("modal", null, {
    fallbackData: initialModalData,
  });
  return { data, mutate };
};

type UserState = {
  userImpl: User | null;
  loaded: boolean;
};

const initialUserData: UserState = {
  userImpl: null,
  loaded: false,
};

export const useStaticUserSWR = (): {
  user: UserState;
} => {
  const { data, mutate } = useSWR("user", null, {
    fallbackData: initialUserData,
  });
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        mutate({ loaded: true, userImpl: user });
      } else {
        mutate({ loaded: true, userImpl: null });
      }
      mutate((prev: UserState) => ({ ...prev, loaded: true }));
    });
    return () => unsubscribe();
  }, [mutate]);
  return { user: data };
};
