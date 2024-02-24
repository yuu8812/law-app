import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { customModalStore } from "@/store/customModalStore";

export const useCustomModal = () => {
  const [state, set] = useRecoilState(customModalStore);
  const openModal = useCallback(() => {
    set({ state: "open" });
  }, [set]);
  const closeModal = useCallback(() => {
    set({ state: "close" });
  }, [set]);

  return { openModal, closeModal, state };
};
