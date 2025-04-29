"use client";
import { createContext, useRef } from "react";
import { CounterStore, createCounterStore, initCounterStore } from "./counter.store";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export type CounterStoreSelector<T> = (store: CounterStore) => T;

export interface CounterStoreProviderProps {
  children: React.ReactNode;
}

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

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