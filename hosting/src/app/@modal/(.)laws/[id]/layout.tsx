"use client";

import { useRouter } from "next/navigation";

import CloseButton from "@/components/CloseButton";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div
      className="fixed z-30 flex h-full w-full items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={() => router.back()}
    >
      <div className="relative h-[88%] w-[92%]" onClick={(e) => e.stopPropagation()}>
        <div className="absolute -right-12 -top-10 z-50">
          <CloseButton />
        </div>
        {children}
      </div>
    </div>
  );
}
