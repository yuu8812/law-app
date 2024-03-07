"use client";
import React from "react";
import { BiEditAlt } from "react-icons/bi";

import LikeStar from "@/app/(header)/world/_component/LikeStar";
import { useFindWorldReactionQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const Reactions = ({
  world_id,
  setEdit,
  edit,
  isAuthor,
}: {
  world_id: string;
  setEdit: () => void;
  edit: boolean;
  isAuthor: boolean;
}) => {
  const { state } = useUser();
  const { data, refetch } = useFindWorldReactionQuery({
    variables: { world_id: world_id, user_id: state?.id, like: 0, star: 1 },
  });
  const likeCount = data?.worlds_by_pk?.likeCount.aggregate?.count ?? 0;
  const starCount = data?.worlds_by_pk?.starCount.aggregate?.count ?? 0;

  const isLiked = !!data?.worlds_by_pk?.isLiked[0]?.user_id;
  const isStared = !!data?.worlds_by_pk?.isStared[0]?.user_id;

  const commentCount = data?.worlds_by_pk?.world_comments_aggregate.aggregate?.count ?? 0;

  return (
    <div>
      {isAuthor && (
        <div
          onClick={() => !edit && setEdit()}
          className={`fixed right-2 top-4 flex ${edit ? "cursor-default" : "cursor-pointer"} items-center justify-center rounded bg-[#ffffff] p-1 shadow`}
        >
          {edit && <div className="w-24 px-2 text-so_se_ji">編集中です</div>}
          <BiEditAlt size={30} className="transition-all hover:scale-110" />
        </div>
      )}
      {!edit && (
        <LikeStar
          worldId={world_id}
          likeCount={likeCount}
          starCount={starCount}
          isLiked={isLiked}
          isStared={isStared}
          refetch={refetch}
          commentCount={commentCount}
        />
      )}
    </div>
  );
};

export default Reactions;
