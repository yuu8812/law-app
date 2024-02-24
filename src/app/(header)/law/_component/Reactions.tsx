"use client";
import React from "react";

import LikeStar from "@/app/(header)/law/_component/LikeStar";
import PortalStarRate from "@/app/(header)/law/_component/PortalStarRate";
import { useFindLawReactionsQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const Reactions = ({ id }: { id: string }) => {
  const { state } = useUser();

  const { data, refetch } = useFindLawReactionsQuery({
    variables: { law_id: id, user_id: state?.id ?? "" },
  });

  const isLiked = (data?.laws_by_pk?.is_liked.length ?? 0) > 0;
  const isStared = (data?.laws_by_pk?.is_stared.length ?? 0) > 0;

  const likeCount = data?.laws_by_pk?.like.aggregate?.count ?? 0;
  const starCount = data?.laws_by_pk?.star.aggregate?.count ?? 0;

  return (
    <div>
      <PortalStarRate
        law_id={id}
        avg={data?.laws_by_pk?.law_star_rates_aggregate.aggregate?.avg?.rate ?? 0}
        refetch={refetch}
        user_rate={data?.laws_by_pk?.user_rate[0]?.rate ?? 0}
      />
      <LikeStar
        isLiked={isLiked}
        isStared={isStared}
        likeCount={likeCount}
        starCount={starCount}
        law_id={id}
        refetch={refetch}
      />
    </div>
  );
};

export default Reactions;
