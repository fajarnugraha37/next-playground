interface FancyLoadingProps {
  appName?: string;
  title?: string;
  message?: string;
}

export function FancyLoading({
  appName,
  title,
  message,
}: FancyLoadingProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border-t-4 border-primary animate-spin opacity-20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-24 w-24 rounded-full border-t-4 border-primary animate-spin opacity-40"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-16 w-16 rounded-full border-t-4 border-primary animate-spin opacity-60"
            style={{ animationDuration: "1s" }}
          ></div>
        </div>

        {/* Logo or icon in the center */}
        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center z-10">
          <span className="text-primary-foreground font-bold text-lg">
            {appName ?? "App"}
          </span>
        </div>

        {/* Text below */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold">
            {title ?? "Loading your experience"}
          </h2>
          <p className="text-muted-foreground mt-2">
            {message ?? "Preparing something amazing for you"}
          </p>
        </div>
      </div>
    </div>
  );
}
