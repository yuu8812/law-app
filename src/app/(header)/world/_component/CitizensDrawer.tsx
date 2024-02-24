import Image from "next/image";
import CheckBox from "rc-checkbox";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import { Button } from "@/components/Button";
import MyDrawer from "@/components/Drawer";
import { useFindCitizensNotBelongToWorldByUserIdQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const CitizensDrawer = ({
  children,
  setValue,
  citizens,
}: {
  children: ReactNode;
  setValue: ([{ citizen_id, name, url }]: {
    citizen_id: string;
    name: string;
    url: string;
  }[]) => void;
  citizens: InputType["citizens"];
}) => {
  const { state } = useUser();
  const [citizenIds, setCitizenIds] = useState<string[]>(
    citizens.map((citizen) => citizen.citizen_id) ?? [],
  );

  const { data: citizensData, fetchMore } = useFindCitizensNotBelongToWorldByUserIdQuery({
    variables: {
      id: state?.id ?? "",
      order_by: { created_at: "desc" },
      limit: 40,
      where: { _not: { world_citizens: { world_id: { _is_null: false } } } },
    },
    fetchPolicy: "cache-and-network",
  });

  const ref = useRef<HTMLDivElement>(null);

  const handleClickCheckBox = (id: string, selected: boolean) => {
    selected
      ? setCitizenIds((prev) => [...prev, id])
      : setCitizenIds((prev) => prev.filter((i) => i !== id));
  };

  useEffect(() => {
    setCitizenIds(citizens.map((citizen) => citizen.citizen_id) ?? []);
  }, [citizens]);

  const handleSubmit = () => {
    setValue(
      citizensData?.users_by_pk?.citizens
        .filter((citizen) => citizenIds.includes(citizen.id))
        .map((citizen) => ({
          citizen_id: citizen.id,
          name: citizen.name,
          url: citizen.species_asset.image_url,
        })) ?? [],
    );
    if (!ref.current) return;
    ref.current.click();
    setCitizenIds([]);
  };

  const handleFetchMore = async () => {
    await fetchMore({
      variables: {
        id: state?.id ?? "",
        limit: 40,
        offset: citizensData?.users_by_pk?.citizens.length ?? 0,
        order_by: { created_at: "desc" },
        where: { _not: { world_citizens: { world_id: { _is_null: false } } } },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          users_by_pk: {
            ...prev.users_by_pk,
            citizens: [
              ...(prev.users_by_pk?.citizens ?? []),
              ...(fetchMoreResult.users_by_pk?.citizens ?? []),
            ],
          },
        };
      },
    });
  };

  return (
    <>
      <MyDrawer
        width="w-[60%]"
        button={
          <div role="button" ref={ref}>
            {children}
          </div>
        }
      >
        <div className="p-4">
          <div className="text-lg">あなたの個体を追加</div>
          <div className="pt-4 text-sm text-gray-500">追加する個体を選択してください</div>
          <div className="pt-2 text-sm">{citizenIds.length}体選択中</div>
          <div className="py-2">
            <Button
              text="追加する"
              width="w-40"
              disabled={citizenIds.length === 0}
              onClick={handleSubmit}
            />
          </div>
          <div className="flex flex-col gap-4 pt-6">
            {citizensData?.users_by_pk?.citizens.map((citizen, i) => {
              return (
                <div className="flex items-center gap-4" key={i}>
                  <CheckBox
                    color="red"
                    className="top mt-2 self-baseline"
                    onChange={(v) => handleClickCheckBox(citizen.id, v.target.checked)}
                    checked={citizenIds.includes(citizen.id)}
                  />
                  <div className="flex gap-3">
                    <Image
                      src={citizen.species_asset.image_url ?? ""}
                      alt="image"
                      width={32}
                      height={32}
                      className="mt-1 h-8 w-8 overflow-hidden rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                      <p className="text-base">{citizen.name}</p>
                      <div className="flex gap-4">
                        <div className="flex gap-2">
                          <p className="">種族 :</p>
                          <div className="text-gray-700">{citizen.species_asset.species.name}</div>
                        </div>
                        <div className="flex gap-2">
                          <p className="">性格 :</p>
                          <div className="text-gray-700">{citizen.species_asset.personality}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <InView onChange={handleFetchMore} />
          </div>
        </div>
      </MyDrawer>
    </>
  );
};

export default CitizensDrawer;
