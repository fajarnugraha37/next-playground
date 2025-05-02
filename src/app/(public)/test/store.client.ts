"use client";
import { createPassToClient } from "@/components/nano";
import { $user, UserStore } from "./store.server";

export const UserProxy = createPassToClient<UserStore>((proxyData) =>
  $user.set(proxyData)
);
