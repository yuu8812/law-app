"use client";
import { useRouter } from "next/navigation";

const CloseButton = () => {
  const router = useRouter();
  return (
    <button className="h-12 w-12 text-2xl font-extrabold text-white" onClick={() => router.back()}>
      ×
    </button>
  );
};

export default CloseButton;
