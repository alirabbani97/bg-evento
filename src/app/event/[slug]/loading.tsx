import Skeleton from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-4 p-10 w-full justify-center items-center">
      <Skeleton className="w-full h-[200px] mx-10 rounded-xl" />
      <Skeleton className="w-64 h-6 rounded-xl" />
      <Skeleton className="w-64 h-6 rounded-xl" />
    </div>
  );
}
