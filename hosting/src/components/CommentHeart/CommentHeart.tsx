"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { HiOutlineHeart } from "react-icons/hi2";
import { PiHeartBreakLight } from "react-icons/pi";
import { toast } from "sonner";

import { createCommentReactionAction } from "@/components/CommentHeart/action";
import Heart from "@/components/Heart";

export type CommentReactionState = {
  variables: {
    commentId: string;
  };
  error: string | null;
  return: {
    isPushed: boolean;
    count: number;
    id: string | null;
  };
};

const CommentHeart = ({
  commentId,
  fill,
  count,
}: {
  commentId: string;
  fill: boolean;
  count: number;
}) => {
  const [state, formAction] = useFormState<CommentReactionState, FormData>(
    createCommentReactionAction,
    {
      variables: { commentId },
      error: null,
      return: {
        isPushed: fill,
        count: count,
        id: null,
      },
    },
  );
  const router = useRouter();
  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.return.id && !state.error) {
      toast.success(!state.return.isPushed ? "いいねを取り消しました" : "いいねしました", {
        className: "rounded-none",
        icon: !state.return.isPushed ? (
          <PiHeartBreakLight size={20} />
        ) : (
          <HiOutlineHeart size={20} />
        ),
      });
    }
  }, [state, router]);
  return (
    <form action={formAction} className="mr-2 flex items-center justify-center gap-1">
      <button type="submit">
        <Heart fill={state.return.isPushed} props={{ size: 18, color: "#e75632" }} />
      </button>
      <div className="text-xs">{state.return.count}</div>
    </form>
  );
};

export default CommentHeart;
