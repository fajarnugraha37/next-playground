import { StateCreator } from "zustand";
import { CommonStore } from "../common";

export type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  authError: unknown | null;
};

export type AuthAction = {
  doSignIn: (
    username: string,
    password: string,
    expiresInMins?: number
  ) => Promise<void>;
  doRefreshToken: () => Promise<void>;
  doSignOut: () => Promise<void>;
};

export type AuthStore = AuthState & AuthAction;

const defaultInitState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  authError: null,
};

export const createAuthSlice: StateCreator<
  AuthStore & CommonStore,
  [],
  [],
  AuthStore
> = (set, get) => ({
  ...defaultInitState,
  doSignIn: async (username, password, expiresInMins = 30) => {
    try {
      get().processStart();
      const { accessToken, refreshToken } = await fetch(
        "https://dummyjson.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: expiresInMins,
          }),
          // credentials: "include",
        }
      ).then((r) => r.json());

      set(() => ({ accessToken, refreshToken, isAuthenticated: true }));
    } catch (error) {
      set(() => ({
        ...defaultInitState,
        authError: error,
      }));
    } finally {
      get().processDone();
    }
  },
  doRefreshToken: async () => {
    try {
      get().processStart();
      const { accessToken, refreshToken } = await fetch(
        "https://dummyjson.com/auth/refresh",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            refreshToken: get().refreshToken, // Optional, if not provided, the server will use the cookie
            expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60
          }),
          credentials: "include", // Include cookies (e.g., accessToken) in the request
        }
      ).then((res) => res.json());
      set(() => ({ accessToken, refreshToken }));
    } catch (error) {
      set(() => ({
        ...defaultInitState,
        authError: error,
      }));
    } finally {
      get().processDone();
    }
  },
  doSignOut: async () => {
    set(() => ({
      ...defaultInitState,
    }));
  },
});
