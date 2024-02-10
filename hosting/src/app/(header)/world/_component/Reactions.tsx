"use client";
import React from "react";

import AddWorld from "@/app/(header)/world/_component/AddWorld";
import LikeStar from "@/app/(header)/world/_component/LikeStar";
import { useFindWorldReactionQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const Reactions = ({ world_id }: { world_id: string }) => {
  const { state } = useUser();
  const { data, refetch } = useFindWorldReactionQuery({
    variables: { world_id: world_id, user_id: state?.id, like: 0, star: 1 },
  });
  const likeCount = data?.worlds_by_pk?.likeCount.aggregate?.count ?? 0;
  const starCount = data?.worlds_by_pk?.starCount.aggregate?.count ?? 0;

  const isLiked = !!data?.worlds_by_pk?.isLiked[0]?.user_id;
  const isStared = !!data?.worlds_by_pk?.isStared[0]?.user_id;

  return (
    <>
      <LikeStar
        worldId={world_id}
        likeCount={likeCount}
        starCount={starCount}
        isLiked={isLiked}
        isStared={isStared}
        refetch={refetch}
      />
      <AddWorld worldId={world_id} />
    </>
  );
};

export default Reactions;
