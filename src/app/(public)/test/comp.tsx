"use client";

import { useStore } from "@nanostores/react";
import { $user } from "./store.server";

export function Comp() {
  const store = useStore($user);
  return (
    <div className="container">
      <h1>===== Server Side =====</h1>
      <h2>Name: {store.name}</h2>
      <h2>Age: {store.age}</h2>
    </div>
  );
}
