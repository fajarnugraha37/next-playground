import { StateCreator } from "zustand";

// Message Types
export type InfoType = "info" | "warning" | "error" | "success";

// Message Interface
interface Info {
  id: string;
  type: InfoType;
  title: string;
  text: string;
  duration?: number; // in milliseconds, optional
  action?: {
    text: string;
    onClick: () => void;
  };
}

// Message State Interface
export interface InfoState {
  info: Info | null;
  showInfo: (info: Omit<Info, "id">) => void;
  hideInfo: () => void;
}

// Zustand Store
export const createInfoSlice: StateCreator<InfoState, [], []> = (set, get) => ({
  info: null,
  showInfo: (info) =>
    set({
      info: { ...info, id: `${Date.now()}-${Math.random()}` },
    }),
  hideInfo: () => set({ info: null }),
});
