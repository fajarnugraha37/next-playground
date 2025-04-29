"use client";
import { createContext, useRef } from "react";
import { CoreStore, createCoreStore } from "./core.store";
import { MessagingStoreProvider } from "../messaging";

export type CoreStoreApi = ReturnType<typeof createCoreStore>;

export type CoreStoreSelector<T> = (store: CoreStore) => T;

export interface CoreStoreProviderProps {
  children: React.ReactNode;
}

export const CoreStoreContext = createContext<CoreStoreApi | undefined>(
  undefined
);

export function CoreStoreProvider({ children }: CoreStoreProviderProps) {
  const storeRef = useRef<CoreStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCoreStore();
  }

  return (
    <CoreStoreContext.Provider value={storeRef.current}>
      <MessagingStoreProvider>
      {children}
      </MessagingStoreProvider>
    </CoreStoreContext.Provider>
  );
}
