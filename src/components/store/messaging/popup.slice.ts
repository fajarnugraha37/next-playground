import { StateCreator } from "zustand";

// Popup Types
export type PopupType = "info" | "warning" | "error" | "success";

// Popup State Interface
export interface PopupState {
  isOpen: boolean;
  type: PopupType;
  title: string;
  message: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  openPopup: (
    config: Omit<PopupState, "isOpen" | "openPopup" | "closePopup">
  ) => void;
  closePopup: () => void;
}

// Zustand Store
export const createPopupSlice: StateCreator<PopupState, [], []> = (set) => ({
  isOpen: false,
  type: "info",
  title: "",
  message: "",
  primaryButton: undefined,
  secondaryButton: undefined,
  openPopup: (config) => set({ ...config, isOpen: true }),
  closePopup: () => set({ isOpen: false }),
});
