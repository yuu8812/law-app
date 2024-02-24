import { atom } from "recoil";

export type User =
  | {
      id: string;
      name: string;
      url: string;
      is_first_time: boolean;
      login_bonus_timestamp: string | null;
    }
  | undefined;

export const userStore = atom<User>({
  key: "modal",
  default: undefined,
});
