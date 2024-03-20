import { revalidatePath } from "next/cache";
import Image from "next/image";
import Checkbox from "rc-checkbox";
import React, { useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { useReward } from "react-rewards";
import { toast } from "sonner";

import { Button } from "@/components/Button";
import MyDrawer from "@/components/Drawer";
import {
  useCreateWorldCitizensMutation,
  useFindCitizensNotBelongToWorldByUserIdQuery,
} from "@/graphql/type";
import { useSignUpModal } from "@/hooks/useSignupModal";
import { useUser } from "@/hooks/useUser";

const CitizensDrawer = ({ id, refetch }: { refetch: () => void; id: string }) => {
  const { openModal } = useSignUpModal();

  const [mutate] = useCreateWorldCitizensMutation();

  const { state } = useUser();

  const [citizenIds, setCitizenIds] = useState<string[]>([]);

  const ref = useRef<HTMLDivElement>(null);

  const { reward } = useReward("rewardId", "balloons");

  const handleSubmit = async () => {
    const res = await mutate({
      variables: {
        objects: citizenIds.map((i) => ({ world_id: id, citizen_id: i })),
      },
      refetchQueries: ["findCitizensNotBelongToWorldByUserId"],
    });
    if (res) {
      toast.success(`${citizenIds.length}体が移住しました`, {
        icon: <>🎉</>,
      });
      ref.current?.click();
      setCitizenIds([]);
      reward();
      refetch();
      revalidatePath(`/world/${id}/description`);
    }
  };

  const { data: citizensData, fetchMore } = useFindCitizensNotBelongToWorldByUserIdQuery({
    variables: {
      id: state?.id ?? "",
      limit: 40,
      order_by: { created_at: "desc" },
      where: { _not: { world_citizens: { world_id: { _is_null: false } } } },
    },
  });

  const handleClickCheckBox = (id: string, selected: boolean) => {
    selected
      ? setCitizenIds((prev) => [...prev, id])
      : setCitizenIds((prev) => prev.filter((i) => i !== id));
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
    <MyDrawer
      width="w-[90%] md:w-[60%]"
      button={
        <div
          role="button"
          ref={ref}
          tabIndex={-1}
          onClick={(e) => {
            if (!state?.id) {
              e.preventDefault();
              openModal();
            }
          }}
        >
          <Button text="個体を移住させる" width="w-48" />
          <span id="rewardId" />
        </div>
      }
    >
      <div className="p-4">
        <div className="text-lg">あなたの個体を追加</div>
        <div className="pt-4 text-sm text-gray-500">追加する個体を選択してください</div>
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
                <Checkbox
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
  );
};

export default CitizensDrawer;
