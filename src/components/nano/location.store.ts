"use client";
import { atom } from "nanostores";

export type LocationStore = typeof $location;

export const $location = atom<{
  hostname: string;
  path: string;
  query: Record<string, any>;
  fragment: string;
}>({
  hostname: "",
  path: "",
  query: {},
  fragment: "",
});

export function updateLocation(): void {
  const hostname = window.location.hostname ?? "";
  const path = window.location.pathname ?? "";
  const fragment = (window.location.hash ?? "").substring(1);
  const queryParams = new URLSearchParams(window.location.search ?? "");
  const query: Record<string, any> = {};
  queryParams.forEach((value, key) => (query[key] = value));

  $location.set({
    hostname,
    path,
    query,
    fragment,
  });
}

