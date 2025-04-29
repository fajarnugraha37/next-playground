'use client';

import { useRouter } from "next/navigation";
import { usePopup } from "../store";

export function PopupDemo() {
  const { showInfo, showWarning, showError, showSuccess } = usePopup();
  const router = useRouter();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1>Popup Demo</h1>
      <div className="space-y-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() =>
            showInfo(
              "Information",
              "This is an informational popup.",
              { text: "OK", onClick: () => console.log("Info OK") },
              { text: "Cancel", onClick: () => console.log("Info Cancel") }
            )
          }
        >
          Show Info Popup
        </button>
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
          onClick={() =>
            showWarning(
              "Warning",
              "Proceed with caution!",
              {
                text: "Proceed",
                onClick: () => console.log("Warning Proceed"),
              },
              { text: "Cancel", onClick: () => console.log("Warning Cancel") }
            )
          }
        >
          Show Warning Popup
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
          onClick={() =>
            showError(
              "Error",
              "Something went wrong. Please try again.",
              { text: "Retry", onClick: () => console.log("Error Retry") },
              { text: "Close", onClick: () => console.log("Error Close") }
            )
          }
        >
          Show Error Popup
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
          onClick={() =>
            showSuccess(
              "Success",
              "Operation completed successfully!",
              {
                text: "Go to Dashboard",
                onClick: () => router.push("/dashboard"),
              },
              { text: "Stay Here", onClick: () => console.log("Success Stay") }
            )
          }
        >
          Show Success Popup
        </button>
      </div>
    </div>
  );
};
