import { atom } from "recoil";

export type Modal = {
  state: "open" | "close";
};

export const signupModalStore = atom<Modal>({
  key: "signup_modal",
  default: { state: "close" },
});
