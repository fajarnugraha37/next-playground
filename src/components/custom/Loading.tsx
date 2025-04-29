import { Loader2 } from "lucide-react";

interface LoadingProps {
  title?: string;
  message?: string;
  isFull?: boolean;
}

export function Loading(props: LoadingProps) {
  if (props.isFull) {
    return <FullLoading {...props} />;
  }

  return <HalfLoading {...props} />;
}

function HalfLoading({ title, message }: LoadingProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h2 className="text-xl font-semibold">{title ?? "Loading..."}</h2>
        <p className="text-sm text-muted-foreground">
          {message ?? "Please wait while we prepare your content"}
        </p>
      </div>
    </div>
  );
}

function FullLoading({ title, message }: LoadingProps) {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
        <Loader2 className="h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin text-primary" />
      </div>
      <h3 className="mt-4 text-xl font-medium">{title ?? "Loading..."}</h3>
      <p className="text-sm text-muted-foreground mt-1">
        {message ?? "Fetching your latest data"}
      </p>
    </div>
  );
}
