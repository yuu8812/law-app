import { atom } from "recoil";

export type User = null;

export const userStore = atom<User>({
  key: "user",
  default: null,
});
