import { StateCreator } from "zustand";

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
export interface NotificationState {
  queue: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
}

// Zustand Store
export const createNotificationSlice: StateCreator<NotificationState, [], []> = (
  set
) => ({
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
});
