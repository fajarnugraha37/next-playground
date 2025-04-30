"use client";
import { useCore } from "../core/core-store.hook";

export function useLoading() {
  const isLoading = useCore((state) => state.isLoading);

  return {
    isLoading,
  };
}
