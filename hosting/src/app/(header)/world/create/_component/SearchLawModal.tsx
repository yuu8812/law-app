import clsx from "clsx";
import Link from "next/link";
import React, { Suspense } from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import LawList from "@/app/(header)/world/create/_component/LawList";
import SearchLawInput from "@/app/(header)/world/create/_component/SearchLawInput";
import { WorldType } from "@/app/(header)/world/create/page";
import { FindLawsWhenCreateWorldQuery } from "@/graphql/type";

const SearchLawModal = ({
  searchParams,
  res,
  append,
  fields,
  remove,
}: {
  searchParams: WorldType;
  res: FindLawsWhenCreateWorldQuery;
  append: UseFieldArrayAppend<InputType>;
  fields: { text: string; law_id: string }[];
  remove: UseFieldArrayRemove;
}) => {
  return (
    <Link
      scroll={false}
      href="#"
      shallow
      aria-disabled
      className="relative z-50 flex h-[500px] w-[500px] cursor-default justify-center bg-white bg-opacity-100"
      role="button"
    >
      <Link
        href={{ query: { modal: "close" } }}
        scroll={false}
        className="absolute -right-7 -top-7"
        role="button"
      >
        <IoCloseSharp className="relative top-[1px]" size={24} color="white" />
      </Link>
      <div className="mx-4 my-4 flex flex-1 flex-col">
        <div className="flex flex-col">
          <SearchLawInput />
          <div className="flex cursor-default gap-2 text-sm">
            <Link
              scroll={false}
              href={{ query: { ...searchParams, type: "all" } }}
              className={clsx(
                "border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchParams.type === "all" && "bg-slate-800 text-white",
              )}
            >
              すべて
            </Link>
            <Link
              scroll={false}
              href={{ query: { ...searchParams, type: "like" } }}
              className={clsx(
                "border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchParams.type === "like" && "bg-slate-800 text-white",
              )}
            >
              お気に入り
            </Link>
            <Link
              scroll={false}
              href={{ query: { ...searchParams, type: "viewed" } }}
              className={clsx(
                "border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchParams.type === "viewed" && "bg-slate-800 text-white",
              )}
            >
              閲覧済
            </Link>
            <Link
              scroll={false}
              href={{ query: { ...searchParams, type: "my_law" } }}
              className={clsx(
                "border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchParams.type === "my_law" && "bg-slate-800 text-white",
              )}
            >
              私の法律
            </Link>
          </div>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <LawList res={res} append={append} fields={fields} remove={remove} />
        </Suspense>
      </div>
    </Link>
  );
};

export default SearchLawModal;
