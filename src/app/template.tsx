"use client";

import { Info, TransitionDiv, Notification, Popup } from "@/components/custom";
import { GlobalStoreProvider } from "@/components/provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TransitionDiv>
      <GlobalStoreProvider>
        <Info />
        <Notification />
        <Popup />
        {children}
      </GlobalStoreProvider>
    </TransitionDiv>
  );
}
