"use client";
import { createContext, useRef } from "react";
import { MessagingStore, createMessagingStore } from "./messaging.store";

export type MessagingStoreApi = ReturnType<typeof createMessagingStore>;

export type MessagingStoreSelector<T> = (store: MessagingStore) => T;

export interface MessagingStoreProviderProps {
  children: React.ReactNode;
}

export const MessagingStoreContext = createContext<
  MessagingStoreApi | undefined
>(undefined);

export function MessagingStoreProvider({
  children,
}: MessagingStoreProviderProps) {
  const storeRef = useRef<MessagingStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createMessagingStore();
  }

  return (
    <MessagingStoreContext.Provider value={storeRef.current}>
      {children}
    </MessagingStoreContext.Provider>
  );
}
