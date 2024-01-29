import { atom } from "recoil";

export type Modal = {
  state: "open" | "close";
  children?: React.ReactNode;
};

export const defaultModalStore = atom<Modal>({
  key: "default_modal",
  default: { state: "close" },
});
