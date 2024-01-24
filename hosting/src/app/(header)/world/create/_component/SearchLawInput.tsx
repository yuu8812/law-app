"use client";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

import { Input } from "@/components/Input";

const SearchLawInput = () => {
  const { register, getValues } = useForm<{ search_law_input: string }>();

  const { replace } = useRouter();

  const handleSearch = useCallback(
    (term: string) => {
      const url = new URL(window.location.href);
      url.searchParams.set("search", term);
      replace(url.toString(), { scroll: false });
    },
    [replace],
  );

  return (
    <Input
      onChange={() => handleSearch(getValues("search_law_input"))}
      inputName="search_law_input"
      type="law_text"
      register={register}
      width="w-full"
      Icon={<IoSearchOutline size={20} />}
      placeHolder="検索してください"
    />
  );
};

export default SearchLawInput;
