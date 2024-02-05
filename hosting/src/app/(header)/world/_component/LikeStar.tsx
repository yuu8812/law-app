import React from "react";
import { createPortal } from "react-dom";

import Heart from "@/components/Heart";
import Star from "@/components/Star";
import {
  useCreateReactionForWorldMutation,
  useDeleteReactionForWorldMutation,
} from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const LikeStar = ({
  worldId,
  isLiked,
  isStared,
  likeCount,
  starCount,
  refetch,
}: {
  worldId: string;
  likeCount: number;
  starCount: number;
  isStared: boolean;
  isLiked: boolean;
  refetch: () => void;
}) => {
  const [mutate] = useCreateReactionForWorldMutation();
  const [remove] = useDeleteReactionForWorldMutation();

  const { state } = useUser();

  const handleClickLike = async () => {
    isLiked
      ? await remove({ variables: { type: 0, user_id: state?.id, world_id: worldId } })
      : await mutate({ variables: { type: 0, user_id: state?.id, world_id: worldId } });
    refetch();
  };

  const handleClickStar = async () => {
    isStared
      ? await remove({ variables: { type: 1, user_id: state?.id, world_id: worldId } })
      : await mutate({ variables: { type: 1, user_id: state?.id, world_id: worldId } });
    refetch();
  };

  return createPortal(
    <div className="fixed bottom-24 right-6 flex select-none flex-col items-end gap-4 text-xs font-semibold">
      <div className="flex items-center ">
        <div className="pr-2 text-right">{starCount}</div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff] shadow-lg"
          onClick={handleClickStar}
        >
          <Star
            props={{ size: 24, className: "text-yellow-400 hover:scale-125 transition-all" }}
            fill={isStared}
          />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="pr-2 text-right">{likeCount}</div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff] shadow-lg"
          onClick={handleClickLike}
        >
          <Heart
            props={{ size: 26, className: "text-red hover:scale-125 transition-all" }}
            fill={isLiked}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default LikeStar;
