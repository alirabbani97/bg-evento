import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col mx-auto max-w-7xl bg-white/[2%] min-h-screen">
      {children}
    </div>
  );
}
