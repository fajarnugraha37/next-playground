import { CookiesFn, OptionsType } from "./types.util";

export const stringify = (value: any) => {
  if (!value) return value;
  if (typeof value === "string") return value;

  return JSON.stringify(value);
};

export const decode = (value: string): string => {
  if (!value) return value;

  return value.replace(/(%[0-9A-Z{2}])+/g, decodeURIComponent);
};

export const getRenderPhase = () =>
  typeof window === "undefined" ? "server" : "client";

export const isClientSide = (options?: OptionsType) => {
  return (
    !options?.req &&
    !options?.res &&
    !(options && "cookies" in options && (options?.cookies as CookiesFn))
  );
};
