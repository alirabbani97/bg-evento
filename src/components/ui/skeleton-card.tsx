import React from "react";
import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="w-[250px] space-y-6">
      <Skeleton className="w-8 h-8 rounded-full mx-0" />
      <Skeleton className="w-[250px] h-4 rounded-xl mx-0" />
      <Skeleton className="w-[200px] h-4 rounded-xl mx-0 mb-4" />
    </div>
  );
}
