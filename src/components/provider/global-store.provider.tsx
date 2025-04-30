"use client";

import { CoreStoreProvider } from "./core-store.provider";
import { MessagingStoreProvider } from "./messaging-store.provider";

interface GlobalStoreProviderProps {
  children: React.ReactNode;
}

export function GlobalStoreProvider({ children }: GlobalStoreProviderProps) {
  return (
    <CoreStoreProvider>
      <MessagingStoreProvider>{children}</MessagingStoreProvider>
    </CoreStoreProvider>
  );
}
