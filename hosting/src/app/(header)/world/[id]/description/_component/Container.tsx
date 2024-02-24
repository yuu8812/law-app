"use client";
import Image from "next/image";
import CheckBox from "rc-checkbox";
import React, { useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { toast } from "sonner";

import DescriptionArea from "@/app/(header)/world/[id]/description/_component/DescriptionArea";
import Reactions from "@/app/(header)/world/_component/Reactions";
import { Button } from "@/components/Button";
import MyDrawer from "@/components/Drawer";
import Editor from "@/components/editor/Editor";
import PieChart from "@/components/PieChart";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";
import {
  FindWorldQuery,
  useCreateWorldCitizensMutation,
  useFindCitizensNotBelongToWorldByUserIdQuery,
  useFindWorldReactionQuery,
} from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const TAB_SETTING: { name: "INFO" | "BREAKDOWN"; text: string }[] = [
  { name: "INFO", text: "タイトル" },
  { name: "BREAKDOWN", text: "情報" },
];

const Container = ({ data, id }: { data: FindWorldQuery; id: string }) => {
  const markup = data.worlds_by_pk?.world_histories[0]?.markup_text;

  const parse = markup ? JSON.parse(markup) : [];

  const { state } = useUser();

  const { data: citizensData, fetchMore } = useFindCitizensNotBelongToWorldByUserIdQuery({
    variables: {
      id: state?.id ?? "",
      limit: 40,
      order_by: { created_at: "desc" },
      where: { _not: { world_citizens: { world_id: { _is_null: false } } } },
    },
  });

  const [citizenIds, setCitizenIds] = useState<string[]>([]);

  const handleClickCheckBox = (id: string, selected: boolean) => {
    selected
      ? setCitizenIds((prev) => [...prev, id])
      : setCitizenIds((prev) => prev.filter((i) => i !== id));
  };

  const [mutate] = useCreateWorldCitizensMutation();

  // const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const { data: worldReactions, refetch } = useFindWorldReactionQuery({
    variables: { world_id: id, user_id: state?.id, like: 0, star: 1 },
  });

  const handleSubmit = async () => {
    const res = await mutate({
      variables: {
        objects: citizenIds.map((i) => ({ user_id: state?.id, world_id: id, citizen_id: i })),
      },
      refetchQueries: ["findCitizensNotBelongToWorldByUserId"],
    });
    if (res) {
      toast.success(`${citizenIds.length}体が移住しました`, {
        icon: <>🎉</>,
      });
      setCitizenIds([]);
      refetch();
      ref.current?.click();
    }
  };

  const [tab, setTab] = useState<"INFO" | "BREAKDOWN">(TAB_SETTING[0].name);

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
    <div className="flex flex-1 gap-1">
      <div className="relative top-0 flex max-w-[22%] flex-1 overflow-scroll">
        <div className="absolute top-0 flex h-fit w-full flex-1">
          <div className="relative top-0 flex w-full flex-1 flex-col gap-2">
            <div className="relative top-0 flex h-full w-full flex-1 flex-col overflow-scroll">
              <div className="sticky top-2 z-10 flex min-h-[40px] rounded bg-[#ffffff] text-sm">
                <div className="flex flex-1 items-center justify-between gap-2 px-1 ">
                  {TAB_SETTING.map((setting, i) => {
                    return (
                      <button
                        className={`flex flex-1 items-center justify-center rounded py-1 ${setting.name === tab ? "bg-so_se_ji text-white" : "bg-gray-200"}`}
                        onClick={() => setTab(setting.name)}
                        key={i}
                      >
                        {setting.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {tab === "INFO" && (
              <>
                <div className="relative h-40 w-full overflow-hidden rounded">
                  <Image
                    src={`${data.worlds_by_pk?.world_histories[0].world_image_url ? data.worlds_by_pk?.world_histories[0].world_image_url : "/dummy.avif"}`}
                    alt="world"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="text-xl">{data.worlds_by_pk?.world_histories[0].title}</div>
                <div className="text text-sm">
                  {data.worlds_by_pk?.world_histories[0].description}
                </div>
                <div className="flex flex-1 flex-col gap-1 px-2 pt-6 text-sm">
                  <div className="flex h-8 items-center">
                    <p className="w-28">指定公用語</p>
                    <div className="pl-4 font-bold">
                      {
                        language.find(
                          (i) => i.en === data.worlds_by_pk?.world_histories[0].official_language,
                        )?.ja
                      }
                    </div>
                  </div>
                  <div className="flex h-8 items-center">
                    <p className="w-28">治安レベル</p>
                    <div className="pl-4 font-bold">
                      {securityLevel[data.worlds_by_pk?.world_histories[0].public_security ?? 0]}
                    </div>
                  </div>
                  <div className="flex h-8 items-center">
                    <p className="w-28">世界レベル</p>
                    <div className="pl-4 text-xl font-bold">
                      {data.worlds_by_pk?.level}
                      <span className="pl-2 text-sm">LV</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 px-2 pt-4">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <p className="">個体数</p>
                      <p className="text-xl font-bold">
                        {worldReactions?.worlds_by_pk?.world_citizens_aggregate.aggregate?.count ??
                          0}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-36 w-36">
                      {data.worlds_by_pk?.species_percentage2 && (
                        <PieChart
                          data={data.worlds_by_pk?.species_percentage2.map((i) => ({
                            number: i.percentage ?? 0,
                            text: i.species_name ?? "",
                            type: Number(i.species_auto_incremental_id),
                          }))}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex h-10 items-center justify-center pt-10">
                  <MyDrawer
                    width="w-[60%]"
                    button={
                      <div role="button" ref={ref}>
                        <Button text="個体を移住させる" width="w-48" />
                      </div>
                    }
                  >
                    <div className="p-4">
                      <div className="text-lg">あなたの個体を追加</div>
                      <div className="pt-4 text-sm text-gray-500">
                        追加する個体を選択してください
                      </div>
                      <div className="pt-2 text-sm">{citizenIds.length}体選択中</div>
                      <div className="py-2">
                        <Button
                          text="移住させる"
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
                                      <div className="text-gray-700">
                                        {citizen.species_asset.species.name}
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <p className="">性格 :</p>
                                      <div className="text-gray-700">
                                        {citizen.species_asset.personality}
                                      </div>
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
                </div>
              </>
            )}
            {tab == "BREAKDOWN" && <DescriptionArea data={data} />}
          </div>
        </div>
      </div>
      <div className="relative top-0 m-2 flex min-w-[50%] flex-1 shrink-0 overflow-scroll rounded border bg-[#ffffff] shadow-inner">
        <div className="absolute flex h-fit w-full flex-1 pb-10">
          <Editor defaultValue={parse} />
        </div>
      </div>
      <div className="relative flex w-12 flex-col items-center justify-between">
        <div className=""></div>
        <div className="end relative self-end pb-4">
          <Reactions world_id={id} />
        </div>
      </div>
    </div>
  );
};

export default Container;
