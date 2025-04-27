import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h2 className="text-xl font-semibold">Loading...</h2>
        <p className="text-sm text-muted-foreground">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}
