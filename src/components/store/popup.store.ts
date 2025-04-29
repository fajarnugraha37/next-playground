"use client";
import { create } from "zustand";

// Popup Types
export type PopupType = "info" | "warning" | "error" | "success";

// Popup State Interface
interface PopupState {
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
export const usePopupStore = create<PopupState>((set) => ({
  isOpen: false,
  type: "info",
  title: "",
  message: "",
  primaryButton: undefined,
  secondaryButton: undefined,
  openPopup: (config) => set({ ...config, isOpen: true }),
  closePopup: () => set({ isOpen: false }),
}));

export const usePopup = () => {
  const openPopup = usePopupStore((state) => state.openPopup);
  const closePopup = usePopupStore((state) => state.closePopup);

  return {
    showInfo: (
      title: string,
      message: string,
      primaryButton?: { text: string; onClick?: () => void },
      secondaryButton?: { text: string; onClick?: () => void }
    ) =>
      openPopup({
        type: "info",
        title,
        message,
        primaryButton,
        secondaryButton,
      }),
    showWarning: (
      title: string,
      message: string,
      primaryButton?: { text: string; onClick?: () => void },
      secondaryButton?: { text: string; onClick?: () => void }
    ) =>
      openPopup({
        type: "warning",
        title,
        message,
        primaryButton,
        secondaryButton,
      }),
    showError: (
      title: string,
      message: string,
      primaryButton?: { text: string; onClick?: () => void },
      secondaryButton?: { text: string; onClick?: () => void }
    ) =>
      openPopup({
        type: "error",
        title,
        message,
        primaryButton,
        secondaryButton,
      }),
    showSuccess: (
      title: string,
      message: string,
      primaryButton?: { text: string; onClick?: () => void },
      secondaryButton?: { text: string; onClick?: () => void }
    ) =>
      openPopup({
        type: "success",
        title,
        message,
        primaryButton,
        secondaryButton,
      }),
    closePopup,
  };
};
