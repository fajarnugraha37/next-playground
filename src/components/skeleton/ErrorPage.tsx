"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Type for Error Props
type ErrorPageProps = {
  errorCode: 401 | 403 | 404 | 500 | number;
  title?: string;
  description?: string;
  actionText?: string;
  actionPath?: string | (() => void);
};

type ErrorConfig = {
  title: string;
  description: string;
  actionText: string;
  actionPath: string | (() => void);
};

// Error Configuration
const errorConfig: Record<number, ErrorConfig> = {
  401: {
    title: "Unauthorized",
    description: "You need to log in to access this page.",
    actionText: "Go to Login",
    actionPath: "/auth/login",
  },
  403: {
    title: "Forbidden",
    description: "You do not have permission to view this resource.",
    actionText: "Go to Home",
    actionPath: "/",
  },
  404: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
    actionText: "Back to Home",
    actionPath: "/",
  },
  500: {
    title: "Whooops, something went wrong on our end",
    description: "Try refresh this page, or going back and attempting the action again.",
    actionText: "Back to Home",
    actionPath: "/",
  },
};

// Default for unknown errors
const defaultError = {
  title: "Something Went Wrong",
  description: "An unexpected error occurred.",
  actionText: "Back to Home",
  actionPath: "/",
};

// Error Page Component
export const ErrorPage = ({
  errorCode,
  title,
  description,
  actionPath,
  actionText,
}: ErrorPageProps) => {
  const router = useRouter();
  const config = errorConfig[errorCode] || defaultError;
  config.actionText = actionText || config.actionText;
  config.actionPath = actionPath || config.actionPath;
  config.title = title || config.title;
  config.description = description || config.description;

  // Redirect to login for 401/403 after a delay (optional)
  useEffect(() => {
    if (errorCode === 401 || errorCode === 403) {
      const timer = setTimeout(() => {
        if (typeof config.actionPath == "string")
          router.push(config.actionPath);
        else config.actionPath();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorCode, router, config.actionPath]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Error Code */}
        <h1 className="text-6xl sm:text-8xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {errorCode}
        </h1>

        {/* Error Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {config.title}
        </h2>

        {/* Error Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {config.description}
        </p>

        {/* Icon/Illustration Placeholder */}
        <div className="mb-8">
          {errorCode === 401 && (
            <svg
              className="w-24 h-24 mx-auto text-blue-500"
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
          {errorCode === 403 && (
            <svg
              className="w-24 h-24 mx-auto text-red-500"
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
          {errorCode === 404 && (
            <svg
              className="w-24 h-24 mx-auto text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
          {errorCode === 500 && (
            <svg
              className="w-24 h-24 mx-auto text-gray-500"
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
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            if (typeof config.actionPath == "string")
              router.push(config.actionPath);
            else config.actionPath();
          }}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {config.actionText}
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
