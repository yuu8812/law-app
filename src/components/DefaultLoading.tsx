"use client";
import Image from "next/image";

const DefaultLoading = () => {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="relative animate-spin-slow">
          <Image
            src="/icon2.svg"
            width={40}
            height={40}
            alt="icon"
            className="opacity-20"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultLoading;
