"use client";
import { createContext, useRef } from "react";
import {
  CounterStore,
  createCounterStore,
  initCounterStore,
} from "@/components/store";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export type CounterStoreSelector<T> = (store: CounterStore) => T;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

interface CounterStoreProviderProps {
  children: React.ReactNode;
}
export function CounterStoreProvider({ children }: CounterStoreProviderProps) {
  const storeRef = useRef<CounterStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCounterStore(initCounterStore());
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
}
