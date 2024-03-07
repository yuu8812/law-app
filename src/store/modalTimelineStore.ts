import { ReactNode } from "react";
import { atom } from "recoil";

export type Modal = {
  timeline: { child: ReactNode; key: string | null }[];
  state: "close" | "open";
};

export const modalTimeLineStore = atom<Modal>({
  key: "modal_timeline",
  default: { timeline: [], state: "close" },
});
