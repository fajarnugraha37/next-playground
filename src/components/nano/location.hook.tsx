"use client";
import { useCallback, useContext } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@nanostores/react";
import { LocationStoreContext } from "./location.provider";

export function useLocation() {
  const context = useContext(LocationStoreContext);
  if (!context) {
    throw new Error(
      `LocationStoreContext must be used within LocationStoreProvider`
    );
  }

  const router = useRouter();
  const location = useStore(context);
  const navigate = useCallback(
    (path: string, query?: Record<string, any>, fragment?: string) => {
      const url = new URL(path, window.location.origin);
      query &&
        Object.entries(query).forEach(([key, value]) =>
          url.searchParams.set(key, value)
        );
      router.push(
        url.pathname + url.search + (fragment && `${url.search}#${fragment}`)
      );
    },
    [router]
  );

  return {
    location,
    navigate,
  };
}
