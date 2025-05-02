"use client";
import { useCallback, useEffect, createContext, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { $location, updateLocation, LocationStore } from "./location.store";

export const LocationStoreContext = createContext<LocationStore | undefined>(
  undefined
);

export function LocationStoreProvider({
  children,
}: Pick<React.ComponentProps<"div">, "children">) {
  const storeRef = useRef<LocationStore | null>(null);
  if (storeRef.current === null) {
    storeRef.current = $location;
  }

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const updateLocationState = useCallback(() => updateLocation(), []);

  useEffect(() => {
    updateLocationState();
  }, [pathname, searchParams, updateLocationState]);

  return (
    <LocationStoreContext.Provider value={storeRef.current}>
      {children}
    </LocationStoreContext.Provider>
  );
}
