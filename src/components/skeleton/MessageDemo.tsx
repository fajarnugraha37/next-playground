"use client";
import { useRouter } from "next/navigation";
import { useMessage } from "../store";
import "./MessageDemo.css";

export function MessageDemo() {
  const { showInfo, showWarning, showError, showSuccess } = useMessage();
  const router = useRouter();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1>Message Demo</h1>
      <div className="space-y-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() =>
            showInfo("Info", "New update available", 5000, {
              text: "Learn More",
              onClick: () => console.log("Learn more clicked"),
            })
          }
        >
          Show Info Message
        </button>
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
          onClick={() =>
            showWarning("Info", "Action required soon", 5000, {
              text: "Act Now",
              onClick: () => console.log("Act now clicked"),
            })
          }
        >
          Show Warning Message
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
          onClick={() =>
            showError("Failed", "Operation failed", 5000, {
              text: "Retry",
              onClick: () => console.log("Retry clicked"),
            })
          }
        >
          Show Error Message
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
          onClick={() =>
            showSuccess("Success", "Operation successful", 5000, {
              text: "Go to Dashboard",
              onClick: () => router.push("/dashboard"),
            })
          }
        >
          Show Success Message
        </button>
      </div>
    </div>
  );
}
