"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import DefaultLoading from "@/components/DefaultLoading";
import useScrollDirection from "@/hooks/useScrollDirection";

const LoadMore = <T extends { page: string }>({
  // searchParams,
  pos,
}: {
  searchParams: T;
  pos: "top" | "bottom";
}) => {
  // const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

  const scrollDirection = useScrollDirection();

  const router = useRouter();

  pos;

  useEffect(() => {
    if (scrollDirection === "up" && window.screenY === 0) {
      router.refresh();
      console.log("run");
    }
  }, [router, scrollDirection]);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {createPortal(
        <div
          className={`absolute z-50 flex h-5 w-full flex-1 shrink-0 ${top && "-top-5"}`}
          ref={ref}
        >
          <DefaultLoading />
        </div>,
        document.body,
      )}
    </>
  );
};

export default LoadMore;
