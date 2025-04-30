"use client";
import { useEffect } from "react";
import { NotificationType, useMessaging } from "@/components/store";

// Tailwind classes based on notification type
const typeStyles: Record<NotificationType, string> = {
  info: "bg-blue-100 border-blue-500 text-blue-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  error: "bg-red-100 border-red-500 text-red-700",
  success: "bg-green-100 border-green-500 text-green-700",
};

const buttonStyles: Record<NotificationType, string> = {
  info: "bg-blue-600 hover:bg-blue-700 text-white",
  warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
  error: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
};

// Notification Component
export function Notification() {
  const queue = useMessaging(state => state.queue);
  const removeNotification = useMessaging(state => state.removeNotification);
  const currentNotification = queue[0]; // Show the first notification in the queue

  useEffect(() => {
    if (currentNotification) {
      const duration = currentNotification.duration ?? 3000; // Default 3 seconds
      const timer = setTimeout(() => {
        removeNotification(currentNotification.id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [currentNotification, removeNotification]);

  if (!currentNotification) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-xs w-full">
      <div
        className={`border-l-4 p-4 rounded-lg shadow-md ${
          typeStyles[currentNotification.type]
        } flex items-center justify-between animate-slide-in`}
      >
        <div className="flex items-center">
          {/* Icon */}
          {currentNotification.type === "info" && (
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {currentNotification.type === "warning" && (
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
              />
            </svg>
          )}
          {currentNotification.type === "error" && (
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728"
              />
            </svg>
          )}
          {currentNotification.type === "success" && (
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
          {/* Message */}
          <p className="text-sm">{currentNotification.message}</p>
        </div>
        {/* Action Button or Close */}
        {currentNotification.action ? (
          <button
            onClick={() => {
              currentNotification.action?.onClick();
              removeNotification(currentNotification.id);
            }}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              buttonStyles[currentNotification.type]
            }`}
          >
            {currentNotification.action.text}
          </button>
        ) : (
          <button
            onClick={() => removeNotification(currentNotification.id)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
