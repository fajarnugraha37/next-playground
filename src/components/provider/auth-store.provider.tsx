"use client";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { CounterStore, createCounterStore, initCounterStore } from "../store";

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

export function useCounterStore<T>(selector: CounterStoreSelector<T>): T {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
}
