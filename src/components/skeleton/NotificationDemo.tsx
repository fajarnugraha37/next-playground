"use client";
import { useRouter } from "next/navigation";
import { useNotification } from "../store";
import "./NotificationDemo.css";

export function NotificationDemoPage() {
  const { notifyInfo, notifyWarning, notifyError, notifySuccess } = useNotification();
  const router = useRouter();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1>Notification Queue Demo</h1>
      <div className="space-y-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() =>
            notifyInfo("New message received", 3000, {
              text: "View",
              onClick: () => console.log("View message"),
            })
          }
        >
          Show Info Notification
        </button>
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
          onClick={() =>
            notifyWarning("Low battery warning", 4000, {
              text: "Dismiss",
              onClick: () => console.log("Dismiss warning"),
            })
          }
        >
          Show Warning Notification
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
          onClick={() =>
            notifyError("Failed to save changes", 5000, {
              text: "Retry",
              onClick: () => console.log("Retry save"),
            })
          }
        >
          Show Error Notification
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
          onClick={() =>
            notifySuccess("Changes saved successfully", 3000, {
              text: "Go to Dashboard",
              onClick: () => router.push("/dashboard"),
            })
          }
        >
          Show Success Notification
        </button>
      </div>
    </div>
  );
};