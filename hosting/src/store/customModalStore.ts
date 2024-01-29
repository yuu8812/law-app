import { atom } from "recoil";

export type Modal = {
  state: "open" | "close";
};

export const customModalStore = atom<Modal>({
  key: "custom_modal",
  default: { state: "close" },
});
