import { atom } from "recoil";

export type User = {
  id: string;
  name: string;
} | null;

export const userStore = atom<User>({
  key: "modal",
  default: null,
});
