"use server";

import { createCommentReaction, deleteCommentReaction } from "@/client/law";
import { CommentReactionState } from "@/components/CommentHeart/CommentHeart";
import { basicUUIDSchema } from "@/constants/form/schema";

export const createCommentReactionAction = async (
  state: CommentReactionState,
): Promise<CommentReactionState> => {
  const isSucceed = basicUUIDSchema.safeParse(state.variables.commentId).success;

  if (!isSucceed) return { ...state, error: "コメントの投稿に失敗しました" };

  if (!state.return.isPushed) {
    const res = await createCommentReaction({ comment_id: state.variables.commentId, type: 0 });

    const id = res.insert_comment_reactions_one?.id;

    if (!id) return { ...state, error: "いいねに失敗しました" };

    return { ...state, error: null, return: { isPushed: true, count: state.return.count + 1, id } };
  } else {
    const res = await deleteCommentReaction({ comment_id: state.variables.commentId });

    const id = res.delete_comment_reactions?.returning[0]?.id;

    if (!id) return { ...state, error: "いいねの削除に失敗しました" };

    return {
      ...state,
      error: null,
      return: { isPushed: false, count: state.return.count - 1, id },
    };
  }
};
