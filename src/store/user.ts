/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "@/types/user";
import { create } from "zustand";

export interface UserStore {
  user: User | null;
  accessToken: string | null;
}

export interface UserActions {
  updateUser: (user: User) => void;
  setAccessToken: (accessToken: string) => void;
  reset: () => void;
}

const initStore = {
  user: null,
  accessToken: null,
  updateUser: (user: User) => {},
  setAccessToken: (accessToken: string) => {},
};

export const useUserStore = create<UserStore & UserActions>((set) => ({
  ...initStore,
  updateUser: (user: User) => set({ user }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
  reset: () => set(initStore),
}));

export const useUser = () => useUserStore((state) => state.user);

export const useUpdateUser = () => useUserStore((state) => state.updateUser);

export const useUserActions = () => ({
  updateUser: useUpdateUser(),
  setAccessToken: useUserStore((state) => state.setAccessToken),
  reset: useUserStore((state) => state.reset),
});

export const useUserState = () => useUserStore((state) => state);

export default useUserStore;
