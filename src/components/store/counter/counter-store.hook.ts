"use client";
import { useContext } from "react";
import { useStore } from "zustand";
import { CounterStoreContext, CounterStoreSelector } from "./counter-store.provider";

export function useCounterStore<T>(selector: CounterStoreSelector<T>): T {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
}
