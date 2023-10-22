"use client";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, Suspense } from "react";

import Ads from "@/app/(header)/laws/_components/Ads";
import SearchOptions from "@/app/(header)/laws/_components/SearchOptions";
import DefaultLoading from "@/components/DefaultLoading";

const Template = ({ children }: { children: ReactNode }) => {
  const searchParams: LawsPageSearchParams = { category: "all", dir: "asc" };

  const sp = useSearchParams();

  return (
    <div className="mx-4 flex flex-1 justify-between text-sm">
      <SearchOptions searchParams={searchParams} />
      <div className="flex max-w-[500px] flex-1">
        <Suspense key={sp.toString()} fallback={<DefaultLoading />}>
          {children}
        </Suspense>
      </div>
      <Ads />
    </div>
  );
};

export default Template;
