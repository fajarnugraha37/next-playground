"use client";

import { AuthGuard } from "@/components/store";

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}
