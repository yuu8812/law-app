"use client";
import React from "react";

import StarRate from "@/app/(header)/law/_component/StarRate";
import { useUpdateStarRateMutation } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const PortalStarRate = ({
  avg,
  law_id,
  refetch,
  user_rate,
}: {
  law_id: string;
  avg: number;
  refetch: () => void;
  user_rate: number;
}) => {
  const [mutate] = useUpdateStarRateMutation();
  const { state } = useUser();
  const handleClickStar = async (n: number) => {
    await mutate({ variables: { law_id, user_id: state?.id ?? "", rate: n } });
    refetch();
  };
  return (
    <div className="fixed bottom-1 left-14 z-10 flex items-center justify-center gap-2 self-center rounded-lg border bg-[#ffffff] p-2 shadow-2xl">
      <StarRate
        value={user_rate}
        readonly={false}
        size={30}
        allowFraction={false}
        onClick={handleClickStar}
      />
      <div className="w-28 px-2 text-gray-500">平均: 星{avg.toFixed(2)}</div>
    </div>
  );
};

export default PortalStarRate;
