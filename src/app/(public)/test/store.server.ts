import { atom } from "nanostores";

export type UserStore = {
  name: string;
  age: number;
};

export const $user = atom<UserStore>({
  name: "",
  age: 0,
});

export const setUserDate = (user: UserStore) => {
    $user.set(user);
};