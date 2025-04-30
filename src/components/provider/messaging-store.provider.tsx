"use client";
import { createContext, useRef } from "react";
import { MessagingStore, createMessagingStore } from "@/components/store";

export type MessagingStoreApi = ReturnType<typeof createMessagingStore>;

export type MessagingStoreSelector<T> = (store: MessagingStore) => T;

export const MessagingStoreContext = createContext<
  MessagingStoreApi | undefined
>(undefined);

interface MessagingStoreProviderProps {
  children: React.ReactNode;
}

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
