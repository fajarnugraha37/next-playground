"use client";

import React from "react";

export function createPassToClient<T extends object = any>(
  callbak: (proxyData: T) => void
) {
  return function ({
    children,
    proxyData,
  }: Pick<React.ComponentProps<"div">, "children"> & { proxyData: T }) {
    callbak(proxyData);
    return <>{children}</>;
  };
}
