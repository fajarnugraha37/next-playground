import { create } from "zustand";
import { createInfoSlice, InfoState } from "./info.slice";
import {
  NotificationState,
  createNotificationSlice,
} from "./notification.slice";
import { createPopupSlice, PopupState } from "./popup.slice";

export type MessagingStore = InfoState & NotificationState & PopupState;

export const createMessagingStore = () => create<MessagingStore>((...a) => ({
  ...createInfoSlice(...a),
  ...createNotificationSlice(...a),
  ...createPopupSlice(...a),
}));
