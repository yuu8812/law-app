import React, { memo, useCallback, useEffect, useState } from "react";

import Heart from "@/components/Heart";
import {
  useCreateColumnReactionMutation,
  useDeleteLawColumnReactionsMutation,
} from "@/graphql/type";
import useRedirectIfUnAuth from "@/hooks/useRedirectIfUnAuth";
import { useUser } from "@/hooks/useUser";

const RevisionReaction = memo(
  ({
    columnId,
    lawRevisionId,
    text,
    isLiked,
    likeCount,
  }: {
    columnId: string;
    lawRevisionId: string;
    text: string;
    isLiked: boolean;
    likeCount: number;
  }) => {
    const [likeCounter, setLikeCounter] = useState(0); // `likeCount`の状態を管理
    const [isL, setIsL] = useState<boolean>(false);

    const [mutate] = useCreateColumnReactionMutation();
    const [del] = useDeleteLawColumnReactionsMutation();

    const { state } = useUser();
    const { redirect } = useRedirectIfUnAuth();

    useEffect(() => {
      setIsL(isLiked);
      setLikeCounter(likeCount);
    }, [isLiked, likeCount]);

    const handleClick = useCallback(async () => {
      redirect();
      if (isL) {
        await del({
          variables: {
            law_revision_id: lawRevisionId,
            user_id: state?.id,
            column_id: columnId,
          },
        }).then(() => {
          setIsL((prev) => !prev);
          setLikeCounter((prev) => prev - 1); // いいね数を減らす
        });
      } else {
        await mutate({
          variables: {
            column_id: columnId,
            law_revision_id: lawRevisionId,
            type: 0,
            user_id: state?.id,
            text: text,
          },
        }).then(() => {
          setIsL((prev) => !prev);
          setLikeCounter((prev) => prev + 1); // いいね数を増やす
        });
      }
    }, [columnId, del, lawRevisionId, mutate, redirect, state?.id, text, isL]);

    return (
      <div className="my-1 flex items-center gap-1">
        <div
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full border px-2 py-1 shadow"
          onClick={handleClick}
        >
          <Heart
            fill={isL}
            props={{ size: 14, className: "text-red hover:scale-125 transition-all" }}
          />
          <p className="text-xs">{likeCounter}</p>
        </div>
      </div>
    );
  },
);

RevisionReaction.displayName = "RevisionReaction";

export default RevisionReaction;
