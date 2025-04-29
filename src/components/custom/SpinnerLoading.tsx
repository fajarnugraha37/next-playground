import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SpinnerLoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  className?: string;
}

export function SpinnerLoading({
  size = "md",
  text,
  className,
}: SpinnerLoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
      {text && (
        <p className="mt-2 text-sm font-medium text-muted-foreground">{text}</p>
      )}
    </div>
  );
}
