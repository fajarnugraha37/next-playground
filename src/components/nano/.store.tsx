"use client";

import React from "react";
import { LocationStoreProvider } from "./location.provider";
import { ThemeProvider } from "../theme-provider";
import { MapStore } from "nanostores";

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <LocationStoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </LocationStoreProvider>
  );
}

export function createServerSideProps<T extends object = any>(store: MapStore<T>) {
  return function ({
    children,
    initialData,
  }: React.ComponentProps<"div"> & { initialData: T }) {
    store.set(initialData);
    return <>{children}</>;
  };
}
