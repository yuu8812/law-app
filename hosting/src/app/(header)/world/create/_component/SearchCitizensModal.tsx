import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";

import CitizensList from "@/app/(header)/world/create/_component/CitizenesList";
import { Button } from "@/components/Button";
import Citizen from "@/components/Citizen";
import { Input } from "@/components/Input";
import {
  FindCitizensNotBelongToWorldByUserIdQueryVariables,
  useFindCitizensNotBelongToWorldByUserIdQuery,
} from "@/graphql/type";
import { useCustomModal } from "@/hooks/useCustomModal";
import { useDebounce } from "@/hooks/useDebounce";
import { useUser } from "@/hooks/useUser";

const ifSearchWordExist = (search: string) => {
  return search ? { _like: `%${search}%` } : undefined;
};

const SearchCitizensModal = ({
  append,
  fields,
  remove,
  submit,
  buttonDisabled,
}: {
  append: ({ citizen_id, name, url }: { citizen_id: string; name: string; url: string }) => void;
  fields: { citizen_id: string; name: string; url: string | null }[];
  remove: (index: number) => void;
  submit?: () => Promise<void>;
  buttonDisabled?: boolean;
}) => {
  const { closeModal } = useCustomModal();

  const [search, setSearch] = useState("");

  const { register, getValues } = useForm<{ search_law_input: string }>();

  const { debounce } = useDebounce(500);

  const { state } = useUser();

  const variables: FindCitizensNotBelongToWorldByUserIdQueryVariables = {
    limit: 10,
    order_by: { created_at: "desc" },
    offset: 0,
    id: state?.id ?? "",
    where: {
      _not: {
        world_citizens: {
          _not: { world_id: { _is_null: true } },
        },
      },
      name: { ...ifSearchWordExist(search) },
    },
  };

  const { data, refetch } = useFindCitizensNotBelongToWorldByUserIdQuery({
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleSubmit = () => {
    submit && submit().then(() => refetch());
  };

  return (
    <div className="relative flex flex-1 flex-col items-center">
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
          <CitizensList res={data} append={append} fields={fields} remove={remove} />
        </div>
      </div>
      <div className="min-h-10 relative top-4">
        <div className="flex max-w-[500px] flex-wrap gap-2 pb-2">
          {fields.map((field, i) => {
            return (
              <div key={i} className="w-fit rounded-full bg-white px-2 py-1">
                <Citizen id={field.citizen_id} url={field.url} name={field.name} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative top-6 flex flex-col items-center justify-center">
        {submit && (
          <Button
            onClick={handleSubmit}
            buttonType="primary"
            text="住まわせる"
            type="button"
            disabled={buttonDisabled}
          />
        )}
      </div>
    </div>
  );
};

export default SearchCitizensModal;
