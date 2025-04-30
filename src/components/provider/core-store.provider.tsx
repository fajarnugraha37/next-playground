"use client";
import { createContext, useRef } from "react";
import { CoreStore, createCoreStore } from "@/components/store";

export type CoreStoreApi = ReturnType<typeof createCoreStore>;

export type CoreStoreSelector<T> = (store: CoreStore) => T;

export const CoreStoreContext = createContext<CoreStoreApi | undefined>(
  undefined
);

interface CoreStoreProviderProps {
  children: React.ReactNode;
}

export function CoreStoreProvider({ children }: CoreStoreProviderProps) {
  const storeRef = useRef<CoreStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCoreStore();
  }

  return (
    <CoreStoreContext.Provider value={storeRef.current}>
      {children}
    </CoreStoreContext.Provider>
  );
}
