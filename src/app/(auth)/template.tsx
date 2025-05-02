"use client";

import { TransitionDiv } from "@/components/custom";

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return <TransitionDiv>{children}</TransitionDiv>;
}
