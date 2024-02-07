import React, { useState } from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove, useForm } from "react-hook-form";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";

import CitizensList from "@/app/(header)/world/create/_component/CitizenesList";
import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import DefaultLoading from "@/components/DefaultLoading";
import { Input } from "@/components/Input";
import { FindCitizensQueryVariables, useFindCitizensQuery } from "@/graphql/type";
import { useCustomModal } from "@/hooks/useCustomModal";
import { useDebounce } from "@/hooks/useDebounce";
import { useUser } from "@/hooks/useUser";

const ifSearchWordExist = (search: string) => {
  return search ? { _like: `%${search}%` } : undefined;
};

const SearchCitizens = ({
  append,
  fields,
  remove,
}: {
  append: UseFieldArrayAppend<InputType>;
  fields: InputType["citizens"];
  remove: UseFieldArrayRemove;
}) => {
  const { closeModal } = useCustomModal();

  const [search, setSearch] = useState("");

  const { register, getValues } = useForm<{ search_law_input: string }>();

  const { debounce } = useDebounce(500);

  const { state } = useUser();

  const variables: FindCitizensQueryVariables = {
    limit: 10,
    where: { user_id: state?.id ? { _eq: state?.id } : {}, name: { ...ifSearchWordExist(search) } },
    order_by: { created_at: "desc" },
    offset: 0,
  };

  const { data, loading } = useFindCitizensQuery({ variables });

  return (
    <div className="relative z-50 flex h-[500px] w-[500px] cursor-default justify-center rounded bg-white bg-opacity-100">
      <button className="absolute -right-7 -top-7 cursor-pointer" onClick={closeModal}>
        <IoCloseSharp className="relative top-[1px]" size={24} color="white" />
      </button>
      <div className="mx-4 my-4 flex flex-1 flex-col">
        <div className="flex flex-col">
          <Input
            onChange={() => debounce(() => setSearch(getValues("search_law_input")))}
            inputName="search_law_input"
            type="law_text"
            register={register}
            width="w-full"
            Icon={<IoSearchOutline size={20} />}
            placeHolder="検索してください"
          />
        </div>
        {!loading ? (
          <CitizensList res={data} append={append} fields={fields} remove={remove} />
        ) : (
          <DefaultLoading />
        )}
      </div>
    </div>
  );
};

export default SearchCitizens;
