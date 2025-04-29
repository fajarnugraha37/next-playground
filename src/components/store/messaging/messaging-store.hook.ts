"use client";
import { useContext } from "react";
import { MessagingStoreContext, MessagingStoreSelector } from "./messaging-store.provider";
import { useStore } from "zustand";

export function useMessaging<T>(selector: MessagingStoreSelector<T>): T {
  const storeContext = useContext(MessagingStoreContext);

  if (!storeContext) {
    throw new Error(`messagingContextStore must be used within CounterStoreProvider`);
  }

  return useStore(storeContext, selector);
}

// Hook to Trigger Infos
export const useInfo = () => {
  const showInfo = useMessaging((state) => state.showInfo);
  const hideInfo = useMessaging((state) => state.hideInfo);

  return {
    showInfo: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showInfo({ type: "info", title, text, duration, action }),
    showWarning: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showInfo({ type: "warning", title, text, duration, action }),
    showError: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showInfo({ type: "error", title, text, duration, action }),
    showSuccess: (
      title: string,
      text: string,
      duration?: number,
      action?: { text: string; onClick: () => void }
    ) => showInfo({ type: "success", title, text, duration, action }),
    hideInfo,
  };
};

// Hook to Trigger Notifications
export const useNotification = () => {
  const addNotification = useMessaging((state) => state.addNotification);

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

export const usePopup = () => {
  const openPopup = useMessaging((state) => state.openPopup);
  const closePopup = useMessaging((state) => state.closePopup);

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
