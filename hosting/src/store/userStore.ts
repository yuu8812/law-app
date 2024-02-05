import { atom } from "recoil";

export type User =
  | {
      id: string;
      name: string;
      url: string;
    }
  | undefined;

export const userStore = atom<User>({
  key: "modal",
  default: undefined,
});
