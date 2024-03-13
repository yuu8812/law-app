"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/Button";
import DefaultLoading from "@/components/DefaultLoading";
import Law from "@/components/Law";
import UserFirstTimeSetting from "@/components/UserFirstTimeSetting";
import World from "@/components/World";
import { GENDER } from "@/constants/gender";
import { auth } from "@/firebase/firebase.client.config";
import { useFindUserDescriptionQuery } from "@/graphql/type";
import { useTimelineModal } from "@/hooks/useTimelineModal";
import { useUser } from "@/hooks/useUser";

const Container = () => {
  const { state } = useUser();
  const { data, loading } = useFindUserDescriptionQuery({ variables: { id: state?.id ?? "" } });
  const router = useRouter();
  const { addTimeline } = useTimelineModal();
  const handleClickChange = () => {
    addTimeline({ child: <UserFirstTimeSetting firstTime={false} />, key: "change_user_info" });
  };
  if (loading) return <DefaultLoading />;
  return (
    <div className="flex flex-1 flex-col p-4 pb-10">
      <div className="">
        <Button text="変更する" width="w-20" onClick={handleClickChange} />
      </div>
      <div className="my-4 flex flex-col gap-4">
        <div className="flex gap-10 text-lg">
          <div className="">名前</div>
          <div className="">{data?.users_by_pk?.name}</div>
        </div>
        <div className="flex gap-10 text-lg">
          <div className="">性別</div>
          <div className="">
            {GENDER.find((item) => item.value === data?.users_by_pk?.gender?.toString())?.label}
          </div>
        </div>
        <div className="flex gap-10 text-lg">
          <div className="">作成日</div>
          <div className="">{data?.users_by_pk?.created_at}</div>
        </div>
        <div className="flex gap-10 text-lg">
          <div className="">アイコン</div>
          <Image
            src={data?.users_by_pk?.icon_url ?? ""}
            alt="icon"
            width={100}
            height={100}
            className="h-24 w-24 overflow-hidden object-cover"
          />
        </div>
        <Button
          onClick={async () => {
            await auth.signOut();
            router.replace("/world");
            toast.success("サインアウトしました");
            router.refresh();
          }}
          text="サインアウト"
        />
      </div>
      <div className="flex flex-col gap-2 border-t pt-10">
        <div className="py-2 text-xl">作成した世界</div>
        {(data?.users_by_pk?.worlds_aggregate.nodes.length ?? 0) > 0 ? (
          data?.users_by_pk?.worlds_aggregate.nodes.map((world, i) => {
            return (
              <World
                id={world.id}
                title={world.world_histories[0].title}
                description={world.world_histories[0].description}
                key={i}
              />
            );
          })
        ) : (
          <div className="text-gray-500">作成した世界がまだありません</div>
        )}
        <div className="py-2 text-xl">作成した決まり</div>
        {(data?.users_by_pk?.laws_aggregate.nodes.length ?? 0) > 0 ? (
          data?.users_by_pk?.laws_aggregate.nodes.map((law, i) => {
            return (
              <Law
                id={law.id}
                title={law.law_revisions[0].title}
                description={law.law_revisions[0].description ?? ""}
                key={i}
              />
            );
          })
        ) : (
          <div className="text-gray-500">作成した決まりがまだありません</div>
        )}
      </div>
      <div className="py-2 pt-4 text-xl">あなたの個体</div>
      <div className="flex flex-col gap-4 pt-4">
        {(data?.users_by_pk?.citizens_aggregate.nodes.length ?? 0) > 0 ? (
          data?.users_by_pk?.citizens_aggregate.nodes.map((citizen, i) => {
            return (
              <div className="" key={i}>
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
                      <div className="flex gap-2">
                        <p className="">世界 :</p>
                        <div className="text-gray-700">
                          {citizen.world_citizens[0]?.world.world_histories[0].title ?? "未移住"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-gray-500">あなたの個体がまだありません</div>
        )}
      </div>
    </div>
  );
};

export default Container;
