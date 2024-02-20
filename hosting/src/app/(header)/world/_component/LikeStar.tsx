import moment from "moment";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { RiThumbUpFill, RiThumbUpLine } from "react-icons/ri";
import { VscCommentDiscussion } from "react-icons/vsc";
import { InView } from "react-intersection-observer";
import { toast } from "sonner";
import { z } from "zod";
import "moment/locale/ja";

import MyDrawer from "@/components/Drawer";
import Heart from "@/components/Heart";
import Star from "@/components/Star";
import TA from "@/components/TA";
import {
  FindWorldCommentsDocument,
  useCreateReactionForWorldMutation,
  useCreateWorldCommentMutation,
  useCreateWorldCommentReactionMutation,
  useDeleteReactionForWorldMutation,
  useFindWorldCommentsQuery,
  useRemoveWorldCommentReactionMutation,
} from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const LikeStar = ({
  worldId,
  isLiked,
  isStared,
  likeCount,
  starCount,
  refetch,
  commentCount,
}: {
  worldId: string;
  likeCount: number;
  starCount: number;
  isStared: boolean;
  isLiked: boolean;
  refetch: () => void;
  commentCount: number;
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

  const { data, fetchMore } = useFindWorldCommentsQuery({
    variables: {
      id: worldId,
      limit: 20,
      order_by: { created_at: "desc" },
      user_id: state?.id ? { _eq: state.id } : {},
    },
  });

  const handleFetchMore = useCallback(async () => {
    await fetchMore({
      variables: {
        limit: 10,
        offset: data?.worlds_by_pk?.world_comments.length ?? 0,
        order_by: { created_at: "desc" },
        user_id: state?.id ? { _eq: state.id } : {},
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          worlds_by_pk: {
            ...prev.worlds_by_pk,
            world_comments: [
              ...(prev.worlds_by_pk?.world_comments ?? []),
              ...(fetchMoreResult.worlds_by_pk?.world_comments ?? []),
            ],
            id: prev.worlds_by_pk?.id ?? "",
          },
        };
      },
    });
  }, [data?.worlds_by_pk?.world_comments.length, fetchMore, state?.id]);

  const [createWorldComment] = useCreateWorldCommentMutation();

  const [text, setText] = useState("");

  const textValidate = z.string().min(1).max(500).safeParse(text).success;

  const handleSubmit = async () => {
    const res = await createWorldComment({
      variables: { text: text, user_id: state?.id ?? "", world_id: worldId },
      refetchQueries: ["findWorldComments"],
    });
    res &&
      toast.success(`投稿しました`, {
        icon: <>🎉</>,
      });
  };

  const [createWorldCommentReaction] = useCreateWorldCommentReactionMutation();
  const [removeWorldCommentReaction] = useRemoveWorldCommentReactionMutation();

  const handleCommentReaction = async (comment_id: string, isLiked: boolean) => {
    isLiked
      ? await removeWorldCommentReaction({
          variables: { type: 0, user_id: state?.id ?? "", comment_id },
          refetchQueries: [
            {
              query: FindWorldCommentsDocument,
              variables: {
                id: worldId,
                limit: data?.worlds_by_pk?.world_comments.length,
                order_by: { created_at: "desc" },
                user_id: state?.id ? { _eq: state.id } : {},
              },
            },
          ],
        })
      : await createWorldCommentReaction({
          variables: { type: 0, user_id: state?.id ?? "", comment_id },
          refetchQueries: [
            {
              query: FindWorldCommentsDocument,
              variables: {
                id: worldId,
                limit: data?.worlds_by_pk?.world_comments.length,
                order_by: { created_at: "desc" },
                user_id: state?.id ? { _eq: state.id } : {},
              },
            },
          ],
        });
  };

  return (
    <div className="relative mr-2 flex select-none flex-col items-end gap-4 text-xs font-semibold">
      <div className="relative flex items-center">
        <div className="bg-so_se_ji absolute right-12 flex w-auto min-w-[30px] items-center justify-center rounded-full py-[1px] text-right text-white">
          {starCount}
        </div>
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
      <div className="relative flex items-center">
        <div className="bg-so_se_ji absolute right-12 flex w-auto min-w-[30px] items-center justify-center rounded-full py-[1px] text-right text-white">
          {likeCount}
        </div>
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
      <div className="relative flex items-center">
        <div className="bg-so_se_ji absolute right-12 flex w-auto min-w-[30px] items-center justify-center rounded-full py-[1px] text-right text-white">
          {commentCount}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff] shadow-lg">
          <MyDrawer
            width="w-[60%]"
            button={
              <button>
                <VscCommentDiscussion
                  className="text-so_se_ji transition-all hover:scale-125"
                  size={28}
                />
              </button>
            }
          >
            <div className="flex flex-1 flex-col">
              <div className="p-2 text-xl font-bold">{commentCount}件のコメント</div>
              <div className="m-4">
                <div className="flex gap-2">
                  <Image
                    src={state?.url ?? ""}
                    alt="image"
                    width={32}
                    height={32}
                    className="mt-1 h-8 w-8 overflow-hidden rounded-full object-cover"
                  />
                  <TA
                    width="w-[100%]"
                    buttonTitle="コメント"
                    value={text}
                    setValue={setText}
                    onSubmit={handleSubmit}
                    buttonDisabled={!textValidate}
                  />
                </div>
                <div className="flex flex-col gap-4 pt-4">
                  {data?.worlds_by_pk?.world_comments.map((comment, i) => {
                    return (
                      <div className="" key={i}>
                        <div className="flex gap-2">
                          <div className="flex gap-2">
                            <Image
                              src={comment.user.icon_url ?? ""}
                              alt="image"
                              width={32}
                              height={32}
                              className="mt-1 h-8 w-8 overflow-hidden rounded-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-2 pt-1">
                            <div className="flex gap-4 text-xs text-gray-500">
                              <div className="">{comment.user.name}</div>
                              <div className="">
                                {moment(comment.created_at).locale("ja").fromNow()}
                              </div>
                            </div>
                            <div className="whitespace-pre-wrap">{comment.text}</div>
                            <div className="flex items-center gap-2">
                              <div
                                onClick={() =>
                                  handleCommentReaction(comment.id, comment.isLiked.length > 0)
                                }
                              >
                                {comment.isLiked.length > 0 ? (
                                  <RiThumbUpFill className="transition-all hover:scale-125" />
                                ) : (
                                  <RiThumbUpLine className="transition-all hover:scale-125" />
                                )}
                              </div>
                              <div className="text-xs text-gray-500">
                                {comment.likeCount.aggregate?.count}
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
            </div>
          </MyDrawer>
        </div>
      </div>
    </div>
  );
};

export default LikeStar;
