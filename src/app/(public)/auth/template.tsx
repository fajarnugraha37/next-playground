"use client";

import { AuthRedirector } from "@/components/store";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthRedirector>{children}</AuthRedirector>;
}
