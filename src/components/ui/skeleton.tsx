import { cn } from "@/lib/utils";
import React from "react";

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-white/30 mx-auto", className)}
    ></div>
  );
}
