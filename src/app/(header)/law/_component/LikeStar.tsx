"use client";
import moment from "moment";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { RiThumbUpFill, RiThumbUpLine } from "react-icons/ri";
import { VscCommentDiscussion } from "react-icons/vsc";
import { InView } from "react-intersection-observer";
import { toast } from "sonner";
import { z } from "zod";
import "moment/locale/ja";

import Bookmark from "@/components/Bookmark";
import MyDrawer from "@/components/Drawer";
import Heart from "@/components/Heart";
import TA from "@/components/TA";
import {
  FindLawCommentsDocument,
  useCreateLawCommentMutation,
  useCreateLawCommentReactionMutation,
  useCreateLawReactionMutation,
  useDeleteLawCommentReactionMutation,
  useDeleteLawReactionMutation,
  useFindLawCommentsQuery,
} from "@/graphql/type";
import useRedirectIfUnAuth from "@/hooks/useRedirectIfUnAuth";
import { useUser } from "@/hooks/useUser";

const LikeStar = ({
  law_id,
  isLiked,
  isStared,
  likeCount,
  starCount,
}: {
  law_id: string;
  likeCount: number;
  starCount: number;
  isStared: boolean;
  isLiked: boolean;
}) => {
  const { state } = useUser();

  const [mutate] = useCreateLawReactionMutation();
  const [remove] = useDeleteLawReactionMutation();

  const { redirect } = useRedirectIfUnAuth();

  const ref = useRef<HTMLButtonElement>(null);

  const handleClickStar = async () => {
    redirect();
    isStared
      ? await remove({
          variables: { type: 1, user_id: state?.id ?? "", law_id },
          refetchQueries: ["findLawReactions"],
        })
      : await mutate({
          variables: { type: 1, user_id: state?.id ?? "", law_id },
          refetchQueries: ["findLawReactions"],
        });
  };

  const handleClickLike = async () => {
    redirect();
    isLiked
      ? await remove({
          variables: { type: 0, user_id: state?.id ?? "", law_id },
          refetchQueries: ["findLawReactions"],
        })
      : await mutate({
          variables: { type: 0, user_id: state?.id ?? "", law_id },
          refetchQueries: ["findLawReactions"],
        });
  };

  const [text, setText] = useState("");

  const textValidate = z.string().min(1).max(500).safeParse(text).success;

  const {
    data,
    fetchMore,
    refetch: refetchComment,
  } = useFindLawCommentsQuery({
    variables: {
      id: law_id,
      limit: 40,
      order_by: { created_at: "desc" },
      where: { user_id: state?.id ? { _eq: state?.id } : undefined },
    },
  });

  const handleFetchMore = async () => {
    await fetchMore({
      variables: {
        offset: data?.laws_by_pk?.law_comments.length,
        id: law_id,
        limit: 40,
        where: { user_id: state?.id ? { _eq: state?.id } : undefined },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          laws_by_pk: {
            id: prev.laws_by_pk?.id ?? "",
            ...prev.laws_by_pk,
            law_comments: [
              ...(prev.laws_by_pk?.law_comments ?? []),
              ...(fetchMoreResult.laws_by_pk?.law_comments ?? []),
            ],
            law_comments_aggregate: fetchMoreResult.laws_by_pk?.law_comments_aggregate
              ? fetchMoreResult.laws_by_pk?.law_comments_aggregate
              : {},
          },
        };
      },
    });
  };

  const [createLawComment] = useCreateLawCommentReactionMutation();

  const [deleteLawComment] = useDeleteLawCommentReactionMutation();

  const handleCommentReaction = async (comment_id: string, isLiked: boolean) => {
    if (!state?.id) {
      ref.current?.click();
      return redirect();
    }
    isLiked
      ? await deleteLawComment({
          variables: { comment_id, user_id: state?.id ?? "" },
          refetchQueries: [
            {
              query: FindLawCommentsDocument,
              variables: {
                id: law_id,
                limit: data?.laws_by_pk?.law_comments.length ?? 40,
                order_by: { created_at: "desc" },
              },
            },
          ],
        })
      : await createLawComment({
          variables: { comment_id, user_id: state?.id ?? "" },
          refetchQueries: [
            {
              query: FindLawCommentsDocument,
              variables: {
                id: law_id,
                limit: data?.laws_by_pk?.law_comments.length ?? 40,
                order_by: { created_at: "desc" },
              },
            },
          ],
        });
    refetchComment();
  };

  const [createComment] = useCreateLawCommentMutation();

  const handleSubmit = async () => {
    if (!state?.id) {
      ref.current?.click();
      return redirect();
    }
    const res = await createComment({
      variables: { law_id, text, author_id: state?.id ?? "" },
      refetchQueries: ["findLawComments"],
    });
    res &&
      toast.success(`投稿しました`, {
        icon: <>🎉</>,
      });
  };

  return (
    <div className="fixed bottom-6 right-2 flex select-none flex-col items-end gap-4 text-xs font-semibold">
      <div className="flex items-center ">
        <div className="absolute right-12 flex w-auto min-w-[30px] items-center justify-center rounded bg-so_se_ji py-[1px] text-right text-white">
          {starCount}
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded bg-[#ffffff] shadow-lg"
          onClick={handleClickStar}
        >
          <Bookmark
            props={{ size: 24, className: "text-yellow-400 hover:scale-125 transition-all" }}
            fill={isStared}
          />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="absolute right-12 flex w-auto min-w-[30px] items-center justify-center rounded bg-so_se_ji py-[1px] text-right text-white">
          {likeCount}
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded bg-[#ffffff] shadow-lg"
          onClick={handleClickLike}
        >
          <Heart
            props={{ size: 26, className: "text-red hover:scale-125 transition-all" }}
            fill={isLiked}
          />
        </div>
      </div>
      <div className="relative flex items-center">
        <div className="absolute right-12 flex w-auto min-w-[30px] items-center justify-center rounded bg-so_se_ji py-[1px] text-right text-white">
          {data?.laws_by_pk?.law_comments_aggregate.aggregate?.count}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffffff] shadow-lg">
          <MyDrawer
            width="w-[90%] md:w-[60%]"
            button={
              <button ref={ref}>
                <VscCommentDiscussion
                  className="text-slate-900 transition-all hover:scale-125"
                  size={28}
                />
              </button>
            }
          >
            <div className="flex flex-1 flex-col">
              <div className="p-2 text-xl font-bold">
                {data?.laws_by_pk?.law_comments_aggregate.aggregate?.count}件のコメント
              </div>
              <div className="m-4">
                <div className="flex gap-2">
                  <Image
                    src={state?.url ?? "/user.svg"}
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
                  {data?.laws_by_pk?.law_comments.map((comment, i) => {
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
