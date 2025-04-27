"use client";
import { ErrorPage } from "@/components/skeleton";

 // Error boundaries must be Client Components
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  const actionText = reset ? "Try again" : "Back to Home";
  const actionPath = reset ? (() => reset()) : "/";
  
  return (
    // global-error must include html and body tags
    <html lang="en">
      <body>
        <ErrorPage errorCode={500} actionText={actionText} actionPath={actionPath} />
      </body>
    </html>
  );
}
