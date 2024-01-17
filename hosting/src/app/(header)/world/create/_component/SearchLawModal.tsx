"use client";
import Link from "next/link";
import React from "react";

import SearchLawInput from "@/app/(header)/world/create/_component/SearchLawInput";
import { WorldType } from "@/app/(header)/world/create/page";

const SearchLawModal = ({ searchParams }: { searchParams: WorldType }) => {
  return (
    <Link
      scroll={false}
      href="#"
      shallow
      aria-disabled
      className="relative z-50 flex h-[500px] w-[500px] cursor-default justify-center bg-white bg-opacity-100"
    >
      <div className="mx-4 my-4 flex flex-1 flex-col">
        <SearchLawInput />
      </div>
    </Link>
  );
};

export default SearchLawModal;
