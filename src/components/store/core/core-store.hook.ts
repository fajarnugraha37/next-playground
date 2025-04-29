"use client";
import { useContext } from "react";
import { useStore } from "zustand";
import { useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { CoreStoreContext, CoreStoreSelector } from "./core-store.provider";

export function useCore<T>(selector: CoreStoreSelector<T>): T {
  const storeContext = useContext(CoreStoreContext);

  if (!storeContext) {
    throw new Error(
      `coreContextStore must be used within CounterStoreProvider`
    );
  }

  return useStore(storeContext, selector);
}

export function useLocationListener() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const updateLocation = useCore((state) => state.updateLocation);
  const location = useCore((state) => state.location);

  const updateLocationState = useCallback(() => updateLocation(), []);

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
    locationState: location,
    navigate,
  };
}
