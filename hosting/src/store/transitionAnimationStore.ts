import { atom } from "recoil";

export type transitionAnimation = {
  animate: boolean;
};

export const transitionAnimationStore = atom<transitionAnimation>({
  key: "transitionAnimation",
  default: { animate: true },
});
