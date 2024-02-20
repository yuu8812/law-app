"use client";
import React, { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

import { Input } from "@/components/Input";
import { useDebounce } from "@/hooks/useDebounce";

const Search = ({
  order,
  setOrder,
  setType,
  type,
  search,
  setSearch,
}: {
  type: string;
  order: string;
  setType: Dispatch<SetStateAction<"new" | "popular" | "citizen" | "view" | "search">>;
  setOrder: Dispatch<SetStateAction<"asc" | "desc">>;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}) => {
  const { register, getValues } = useForm<{ text: string }>({ defaultValues: { text: search } });
  const { debounce } = useDebounce(500);

  return createPortal(
    <div className="fixed left-[35%] top-4 z-50 flex h-6 grow-0 items-center gap-2 text-xs">
      <button
        onClick={() => setOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
        className="hover:bg-so_se_ji flex w-10 items-center justify-center rounded-full border bg-[#ffffff] px-2 py-1 shadow transition-all hover:text-white"
      >
        {order === "asc" ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
      </button>
      <button
        onClick={() => setType("new")}
        className={`flex w-20 items-center justify-center rounded-full border ${type === "new" || !type ? "bg-so_se_ji text-white" : "bg-[#ffffff]"} hover:bg-so_se_ji px-2 py-1 shadow transition-all hover:text-white`}
      >
        新着
      </button>
      <button
        onClick={() => setType("popular")}
        className={`flex w-20 items-center justify-center rounded-full border ${type === "popular" ? "bg-so_se_ji text-white" : "bg-[#ffffff]"} hover:bg-so_se_ji px-2 py-1 shadow transition-all hover:text-white`}
      >
        人気
      </button>
      <button
        onClick={() => setType("citizen")}
        className={`flex w-20 items-center justify-center rounded-full border ${type === "citizen" ? "bg-so_se_ji text-white" : "bg-[#ffffff]"} hover:bg-so_se_ji px-2 py-1 shadow transition-all hover:text-white`}
      >
        個体数
      </button>
      <button className="w-84 flex flex-1">
        <div
          className={`flex w-80 ${type === "search" && "bg-so_se_ji text-white"} flex items-center rounded-full border bg-[#ffffff] px-2 py-1 shadow transition-all duration-200`}
          onClick={() => {
            setType("search");
          }}
        >
          <IoSearchOutline size={20} />
          <div className={`w-full px-2`}>
            <Input
              register={register}
              inputName="text"
              type="text"
              width="w-[270px]"
              height="h-8 text-black"
              border={false}
              onChange={() => debounce(() => setSearch(getValues("text")))}
            />
          </div>
        </div>
      </button>
    </div>,
    document.body,
  );
};

export default Search;
