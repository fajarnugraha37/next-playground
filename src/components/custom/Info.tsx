"use client";
import { useEffect } from "react";
import { InfoType, useMessaging } from "@/components/store";

// Tailwind classes based on info type
const typeStyles: Record<InfoType, string> = {
  info: "bg-black border-blue-500 text-blue-400",
  warning: "bg-black border-yellow-500 text-yellow-400",
  error: "bg-black border-red-500 text-red-400",
  success: "bg-black border-green-500 text-green-400",
};

const buttonStyles: Record<InfoType, string> = {
  info: "bg-blue-600 hover:bg-blue-700 text-white",
  warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
  error: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
};

// info Component
export function Info() {
  const info = useMessaging(state => state.info);
  const hideInfo = useMessaging(state => state.hideInfo);

  useEffect(() => {
    if (info?.duration) {
      const timer = setTimeout(() => {
        hideInfo();
      }, info.duration);
      return () => clearTimeout(timer);
    }
  }, [info, hideInfo]);

  if (!info) return null;

  return (
    <div
      className={`w-full p-4 border-l-4 ${
        typeStyles[info.type]
      } flex items-center justify-between shadow-sm animate-fade-in dark:bg-opacity-80 dark:${typeStyles[
        info.type
      ].replace("50", "900")}`}
    >
      <div className="flex items-center">
        {/* Icon */}
        {info.type === "info" && (
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
        {info.type === "warning" && (
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
        {info.type === "error" && (
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
        {info.type === "success" && (
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
        <p className="text-sm">{info.text}</p>
      </div>
      {/* Action Button or Close */}
      <div className="flex items-center space-x-2">
        {info.action && (
          <button
            onClick={() => {
              info.action?.onClick();
              hideInfo();
            }}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              buttonStyles[info.type]
            }`}
          >
            {info.action.text}
          </button>
        )}
        <button
          onClick={hideInfo}
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