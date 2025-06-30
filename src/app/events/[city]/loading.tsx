import SkeletonCard from "@/components/ui/skeleton-card";

export default function Loading() {
  return (
    <main className="flex flex-wrap gap-12 justify-center mx-auto p-20 max-w-5xl">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </main>
  );
}
