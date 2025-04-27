import { Skeleton } from "@/components/custom";

interface CardSkeletonProps {
  children?: React.ReactNode;
}

export default function CardSkeleton({ children }: CardSkeletonProps) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-col space-y-4">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex items-center pt-4 space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
