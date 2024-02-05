"use client";
import Link from "next/link";
import React from "react";
import { PiArrowFatDown } from "react-icons/pi";

const LoadMore = <T extends { page: string }>({ searchParams }: { searchParams: T }) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  return (
    <Link
      href={{ query: { ...searchParams, page: currentPage + 1 } }}
      className="mx-20 my-10 flex h-28 shrink-0 flex-col items-center justify-center gap-2 bg-white"
      scroll={false}
    >
      <p className="">もっと見る</p>
      <PiArrowFatDown size={28} />
    </Link>
  );
};

export default LoadMore;
