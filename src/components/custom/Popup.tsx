'use client';

import { PopupType, usePopupStore } from "../../components/store";

const typeStyles: Record<PopupType, string> = {
  info: "border-blue-500 bg-blue-50 dark:bg-blue-900",
  warning: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900",
  error: "border-red-500 bg-red-50 dark:bg-red-900",
  success: "border-green-500 bg-green-50 dark:bg-green-900",
};

const buttonStyles: Record<PopupType, string> = {
  info: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
  warning:
    "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600",
  error: "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
  success:
    "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
};

export default function Popup() {
  const {
    isOpen,
    type,
    title,
    message,
    primaryButton,
    secondaryButton,
    closePopup,
  } = usePopupStore();

  if (!isOpen) return null;

  return (
    <div className="opacity-100 fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
      <div
        className={`max-w-md w-full border-l-4 ${typeStyles[type]} rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800`}
      >
        {/* Header */}
        <div className="flex items-center mb-4">
          {type === "info" && (
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
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
          {type === "warning" && (
            <svg
              className="w-6 h-6 text-yellow-500 mr-2"
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
          {type === "error" && (
            <svg
              className="w-6 h-6 text-red-500 mr-2"
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
          {type === "success" && (
            <svg
              className="w-6 h-6 text-green-500 mr-2"
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
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h2>
        </div>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          {secondaryButton && (
            <button
              onClick={() => {
                secondaryButton.onClick?.();
                closePopup();
              }}
              className="px-4 py-2 text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {secondaryButton.text}
            </button>
          )}
          {primaryButton && (
            <button
              onClick={() => {
                primaryButton.onClick?.();
                closePopup();
              }}
              className={`px-4 py-2 text-white font-medium rounded-lg ${buttonStyles[type]} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type}-500`}
            >
              {primaryButton.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}