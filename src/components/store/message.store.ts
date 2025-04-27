"use client";

import { create } from "zustand";

// Message Types
export type MessageType = "info" | "warning" | "error" | "success";

// Message Interface
interface Message {
  id: string;
  type: MessageType;
  title: string;
  text: string;
  duration?: number; // in milliseconds, optional
  action?: {
    text: string;
    onClick: () => void;
  };
}

// Message State Interface
interface MessageState {
  message: Message | null;
  showMessage: (message: Omit<Message, "id">) => void;
  hideMessage: () => void;
}

// Zustand Store
export const useMessageStore = create<MessageState>((set) => ({
  message: null,
  showMessage: (message) =>
    set({
      message: { ...message, id: `${Date.now()}-${Math.random()}` },
    }),
  hideMessage: () => set({ message: null }),
}));

// Hook to Trigger Messages
export const useMessage = () => {
  const showMessage = useMessageStore((state) => state.showMessage);
  const hideMessage = useMessageStore((state) => state.hideMessage);

  return {
    showInfo: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showMessage({ type: "info", title, text, duration, action }),
    showWarning: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showMessage({ type: "warning", title, text, duration, action }),
    showError: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showMessage({ type: "error", title, text, duration, action }),
    showSuccess: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showMessage({ type: "success", title, text, duration, action }),
    hideMessage,
  };
};
