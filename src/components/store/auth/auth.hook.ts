"use client";
import { useCore } from "../core";

export function useAuthState() {
  const accessToken = useCore((state) => state.accessToken);
  const refreshToken = useCore((state) => state.refreshToken);
  const isAuthenticated = useCore((state) => state.isAuthenticated);
  const authError = useCore((state) => state.authError);

  return { accessToken, refreshToken, isAuthenticated, authError };
}

export function useAuthAction() {
  const doSignIn = useCore((state) => state.doSignIn);
  const doRefreshToken = useCore((state) => state.doRefreshToken);
  const doSignOut = useCore((state) => state.doSignOut);

  return { doSignIn, doRefreshToken, doSignOut };
}
