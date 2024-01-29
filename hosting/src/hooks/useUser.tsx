import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { User, userStore } from "@/store/userStore";

export const useUser = () => {
  const [state, set] = useRecoilState(userStore);
  const setUser = useCallback(
    (user: User) => {
      set(user);
    },
    [set],
  );
  const removeUser = useCallback(() => {
    set(null);
  }, [set]);

  return { setUser, removeUser, state };
};
