"use client";

import { TransitionDiv } from "@/components/custom";

export default function Template({ children }: { children: React.ReactNode }) {
  return <TransitionDiv>{children}</TransitionDiv>;
}
