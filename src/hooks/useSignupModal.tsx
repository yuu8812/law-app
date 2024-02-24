import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { signupModalStore } from "@/store/signupModalStore";

export const useSignUpModal = () => {
  const [state, set] = useRecoilState(signupModalStore);
  const openModal = useCallback(() => {
    set({ state: "open" });
  }, [set]);
  const closeModal = useCallback(() => {
    set({ state: "close" });
  }, [set]);

  return { openModal, closeModal, state };
};
