"use client";
import { useEffect } from "react";
import { MessageType, useMessageStore } from "../store";

// Tailwind classes based on message type
const typeStyles: Record<MessageType, string> = {
  info: "bg-black border-blue-500 text-blue-400",
  warning: "bg-black border-yellow-500 text-yellow-400",
  error: "bg-black border-red-500 text-red-400",
  success: "bg-black border-green-500 text-green-400",
};

const buttonStyles: Record<MessageType, string> = {
  info: "bg-blue-600 hover:bg-blue-700 text-white",
  warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
  error: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
};

// Message Component
export function Message() {
  const { message, hideMessage } = useMessageStore();

  useEffect(() => {
    if (message?.duration) {
      const timer = setTimeout(() => {
        hideMessage();
      }, message.duration);
      return () => clearTimeout(timer);
    }
  }, [message, hideMessage]);

  if (!message) return null;

  return (
    <div
      className={`w-full p-4 border-l-4 ${
        typeStyles[message.type]
      } flex items-center justify-between shadow-sm animate-fade-in dark:bg-opacity-80 dark:${typeStyles[
        message.type
      ].replace("50", "900")}`}
    >
      <div className="flex items-center">
        {/* Icon */}
        {message.type === "info" && (
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
        {message.type === "warning" && (
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
        {message.type === "error" && (
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
        {message.type === "success" && (
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
        {/* Text */}
        <p className="text-sm">{message.text}</p>
      </div>
      {/* Action Button or Close */}
      <div className="flex items-center space-x-2">
        {message.action && (
          <button
            onClick={() => {
              message.action?.onClick();
              hideMessage();
            }}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              buttonStyles[message.type]
            }`}
          >
            {message.action.text}
          </button>
        )}
        <button
          onClick={hideMessage}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
      </div>
    </div>
  );
} 