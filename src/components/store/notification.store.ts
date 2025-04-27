"use client";
import { create } from "zustand";

// Notification Types
export type NotificationType = "info" | "warning" | "error" | "success";

// Notification Interface
interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number; // in milliseconds
  action?: {
    text: string;
    onClick: () => void;
  };
}

// Notification State Interface
interface NotificationState {
  queue: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
}

// Zustand Store
export const useNotificationStore = create<NotificationState>((set) => ({
  queue: [],
  addNotification: (notification) =>
    set((state) => ({
      queue: [
        ...state.queue,
        { ...notification, id: `${Date.now()}-${Math.random()}` },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      queue: state.queue.filter((n) => n.id !== id),
    })),
}));

// Hook to Trigger Notifications
export const useNotification = () => {
  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );

  return {
    notifyInfo: (
      message: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => addNotification({ type: "info", message, duration, action }),
    notifyWarning: (
      message: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => addNotification({ type: "warning", message, duration, action }),
    notifyError: (
      message: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => addNotification({ type: "error", message, duration, action }),
    notifySuccess: (
      message: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => addNotification({ type: "success", message, duration, action }),
  };
};
