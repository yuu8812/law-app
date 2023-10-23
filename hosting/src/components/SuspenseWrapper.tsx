"use client";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, Suspense } from "react";

import DefaultLoading from "@/components/DefaultLoading";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  const sp = useSearchParams();

  const spString = sp.toString();
  return (
    <Suspense key={spString} fallback={<DefaultLoading />}>
      {children}
    </Suspense>
  );
};
