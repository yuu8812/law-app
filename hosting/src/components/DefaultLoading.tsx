"use client";
import Image from "next/image";

import DotsWave from "@/components/DotsWave";

const DefaultLoading = () => {
  return (
    <div className="relative z-50 flex flex-1 flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="relative -top-4 animate-spin-slow">
          <Image
            src="/icon2.svg"
            width={100}
            height={100}
            alt="icon"
            className="opacity-20"
            priority
          />
        </div>
        <div className="absolute -bottom-2 z-10">
          <DotsWave />
        </div>
      </div>
    </div>
  );
};

export default DefaultLoading;
