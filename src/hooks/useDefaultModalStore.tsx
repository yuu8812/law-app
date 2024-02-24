import { ReactNode, useCallback } from "react";
import { useRecoilState } from "recoil";

import { defaultModalStore } from "@/store/defaultModalStore";

export const useDefaultModal = () => {
  const [state, set] = useRecoilState(defaultModalStore);
  const openModal = useCallback(
    (children: ReactNode) => {
      set({ state: "open", children });
    },
    [set],
  );
  const closeModal = useCallback(() => {
    set({ state: "close" });
  }, [set]);

  return { openModal, closeModal, state };
};
