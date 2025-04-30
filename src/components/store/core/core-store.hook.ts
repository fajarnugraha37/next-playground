"use client";
import { useContext } from "react";
import { useStore } from "zustand";
import { CoreStoreContext, CoreStoreSelector } from "../../provider/core-store.provider";

export function useCore<T>(selector: CoreStoreSelector<T>): T {
  const storeContext = useContext(CoreStoreContext);

  if (!storeContext) {
    throw new Error(
      `coreContextStore must be used within CounterStoreProvider`
    );
  }

  return useStore(storeContext, selector);
}
