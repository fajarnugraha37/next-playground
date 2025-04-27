'use client';

import { atom } from "nanostores";
import { useStore } from "@nanostores/react";
import { useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export interface LocationState {
  hostname: string;
  path: string;
  query: Record<string, any>;
}

export const $location = atom<LocationState>({
  hostname: "",
  path: "",
  query: {},
});

const getCurrentLocation = (): LocationState => {
  const hostname = window.location.hostname ?? "";
  const path = window.location.pathname ?? "";
  const queryParams = new URLSearchParams(window.location.search ?? "");
  const query: Record<string, any> = {};
  queryParams.forEach((value, key) => (query[key] = value));

  return {
    hostname,
    path,
    query,
  };
};

export function useLocationListener() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateLocationState = useCallback(() => {
    const newState = getCurrentLocation();
    $location.set(newState);
  }, []);

  useEffect(() => {
    // Initial update
    updateLocationState();

    // Listen to popstate for browser back/forward
    const handlePopState = () => updateLocationState();

    // Listen to Next.js router events
    const handleRouteChange = () => updateLocationState();

    window.addEventListener("popstate", handlePopState);

    // Note: Next.js App Router doesn't expose router.events directly,
    // but we can rely on pathname/searchParams changes
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, searchParams, updateLocationState]);

  // Programmatic navigation helper
  const navigate = useCallback(
    (path: string, query?: Record<string, any>) => {
      const url = new URL(path, window.location.origin);
      if (query) {
        Object.entries(query).forEach(([key, value]) => {
          url.searchParams.set(key, value);
        });
      }
      router.push(url.pathname + url.search);
    },
    [router]
  );

  return {
    locationState: useStore($location),
    navigate,
  };
}
