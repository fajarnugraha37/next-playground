"use client";
import { persistentMap } from "@nanostores/persistent";
import { listenKeys } from "nanostores";

export type AuthStore = typeof $auth;

export const $auth = persistentMap<{
  accessToken?: string | null;
  refreshToken?: string | null;
  isAuthenticated: boolean;
  error?: unknown | null;
  state?: "PENDING" | "DONE" | null;
}>(
  "auth",
  {
    isAuthenticated: false,
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
    listen: true,
  }
);

export const doSignIn = async (
  username: string,
  password: string,
  expiresInMins = 30
) => {
  try {
    $auth.setKey("state", "PENDING");
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

    $auth.set({
      isAuthenticated: true,
      accessToken: accessToken,
      refreshToken: refreshToken,
      state: "DONE",
      error: null,
    });
  } catch (error) {
    $auth.setKey("error", error);
    $auth.setKey("isAuthenticated", false);
  } finally {
    $auth.setKey("state", "DONE");
  }
};

export const doRefreshToken = async () => {
  try {
    $auth.setKey("state", "PENDING");
    const { accessToken, refreshToken } = await fetch(
      "https://dummyjson.com/auth/refresh",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          refreshToken: $auth.get().refreshToken, // Optional, if not provided, the server will use the cookie
          expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60
        }),
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      }
    ).then((res) => res.json());

    $auth.setKey("accessToken", accessToken);
    $auth.setKey("refreshToken", refreshToken);
  } catch (error) {
    $auth.setKey("error", error);
    $auth.setKey("isAuthenticated", false);
  } finally {
    $auth.setKey("state", "DONE");
  }
};

export const doSignOut = async () => {
  $auth.set({
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    state: null,
    error: null,
  });
};

listenKeys($auth, ["isAuthenticated"], (value, oldValue, changed) => {
  console.log(`$changed.${changed} new value ${value} from ${oldValue}`);
});
