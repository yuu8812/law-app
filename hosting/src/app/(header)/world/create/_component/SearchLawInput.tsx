import React from "react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

import { Input } from "@/components/Input";

const SearchLawInput = () => {
  const { register } = useForm();

  return (
    <div className="flex flex-1 flex-col">
      <Input
        inputName="searchLawText"
        type="text"
        register={register}
        width="w-full"
        Icon={<IoSearchOutline size={20} />}
        placeHolder="検索してください"
      />
      <div className="flex cursor-default gap-2 text-sm">
        <div className="border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white">
          お気に入り
        </div>
        <div className="border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white">閲覧済</div>
        <div className="border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white">
          私の法律
        </div>
      </div>
    </div>
  );
};

export default SearchLawInput;
