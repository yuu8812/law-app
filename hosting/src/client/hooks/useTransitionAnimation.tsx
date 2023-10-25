import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { transitionAnimationStore } from "@/client/store/transitionAnimationStore";

export const useTransitionAnimation = () => {
  const setModal = useSetRecoilState(transitionAnimationStore);

  const stopAnimation = useCallback(() => {
    setModal({ animate: false });
  }, [setModal]);

  const activateAnimation = useCallback(() => {
    setModal({ animate: true });
  }, [setModal]);

  return { stopAnimation, activateAnimation };
};
