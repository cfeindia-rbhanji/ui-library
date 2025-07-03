import { Skeleton } from "../ui/skeleton";
import React from "react";

const LandingSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <main className="flex flex-1 flex-col gap-4">
        <Skeleton className="h-12 w-full bg-background-secondary" />
        <Skeleton className="h-12 w-1/2 bg-background-secondary" />
        <Skeleton className="h-80 w-full bg-background-secondary" />
        <Skeleton className="h-80 w-full bg-background-secondary" />
      </main>
      <aside className="flex flex-1 flex-col gap-4 rounded-3xl bg-accent p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:flex-row">
          <Skeleton className="h-full w-full bg-background-secondary" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:flex-row">
          <Skeleton className="h-full w-full bg-background-secondary" />
        </div>
      </aside>
    </div>
  );
};

export default LandingSkeleton;
