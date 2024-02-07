import clsx from "clsx";
import React, { useState } from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove, useForm } from "react-hook-form";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";

import ArgumentList from "@/app/(header)/world/create/_component/ArgumentList";
import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import DefaultLoading from "@/components/DefaultLoading";
import { Input } from "@/components/Input";
import {
  Arguments_Bool_Exp,
  FindLawsWhenCreateWorldQueryVariables,
  InputMaybe,
  useFindArgumentsForCreateWorldQuery,
} from "@/graphql/type";
import { useCustomModal } from "@/hooks/useCustomModal";
import { useDebounce } from "@/hooks/useDebounce";
import { useUser } from "@/hooks/useUser";

const ifSearchWordExist = (search: string): InputMaybe<Arguments_Bool_Exp> => {
  return search ? { title: { _like: `%${search}%` } } : {};
};

const whereParam = (
  searchType: "viewed" | "like" | "mine" | "all",
  id: string,
  searchWord: string,
): InputMaybe<Arguments_Bool_Exp> => {
  if (searchType === "viewed")
    return {
      argument_views: {
        user_id: {
          _eq: id,
        },
      },
      ...ifSearchWordExist(searchWord),
    };
  if (searchType === "mine")
    return {
      author_id: {
        _eq: id,
      },
      ...ifSearchWordExist(searchWord),
    };
  return { ...ifSearchWordExist(searchWord) };
};

const SearchArgumentModal = ({
  append,
  fields,
  remove,
}: {
  append: UseFieldArrayAppend<InputType>;
  fields: { title: string; argument_id: string }[];
  remove: UseFieldArrayRemove;
}) => {
  const { closeModal } = useCustomModal();

  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState<"all" | "like" | "viewed" | "mine">("all");

  const { register, getValues } = useForm<{ search_law_input: string }>();

  const { state } = useUser();

  const variables: FindLawsWhenCreateWorldQueryVariables = {
    limit: 10,
    where: state?.id ? whereParam(searchType, state.id, search) : {},
  };

  const { data, loading } = useFindArgumentsForCreateWorldQuery({ variables });

  const { debounce } = useDebounce(500);

  return (
    <div className="relative z-50 flex h-[500px] w-[500px] cursor-default justify-center rounded bg-white bg-opacity-100">
      <div className="absolute -right-7 -top-7 cursor-pointer" onClick={closeModal}>
        <IoCloseSharp className="relative top-[1px]" size={24} color="white" />
      </div>
      <div className="mx-4 my-4 flex flex-1 flex-col">
        <div className="flex flex-col">
          <Input
            inputName="search_law_input"
            type="law_text"
            register={register}
            width="w-full"
            Icon={<IoSearchOutline size={20} />}
            placeHolder="検索してください"
            onChange={() => debounce(() => setSearch(getValues("search_law_input")))}
          />
          <div className="flex cursor-default gap-2 text-sm">
            <div
              className={clsx(
                "rounded border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchType === "all" && "bg-slate-800 text-white",
              )}
              onClick={() => setSearchType("all")}
            >
              すべて
            </div>
            <div
              className={clsx(
                "rounded border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchType === "like" && "bg-slate-800 text-white",
              )}
              onClick={() => setSearchType("like")}
            >
              お気に入り
            </div>
            <div
              className={clsx(
                "rounded border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchType === "viewed" && "bg-slate-800 text-white",
              )}
              onClick={() => setSearchType("viewed")}
            >
              閲覧済
            </div>
            <div
              className={clsx(
                "rounded border bg-[#fff] px-2 py-1 hover:bg-slate-800 hover:text-white",
                searchType === "mine" && "bg-slate-800 text-white",
              )}
              onClick={() => setSearchType("mine")}
            >
              私の法律
            </div>
          </div>
        </div>
        {!loading ? (
          <ArgumentList append={append} fields={fields} remove={remove} res={data} />
        ) : (
          <DefaultLoading />
        )}
      </div>
    </div>
  );
};

export default SearchArgumentModal;
