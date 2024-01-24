"use server";

import { revalidatePath } from "next/cache";

import { getClient } from "@/api/client";
import { WorldType } from "@/app/(header)/world/create/page";
import { findUserOrCreate } from "@/client/user";
import {
  CreateCommentReactionDocument,
  CreateCommentReactionMutation,
  CreateCommentReactionMutationVariables,
  CreateLawRevisionColumnCommentDocument,
  CreateLawRevisionColumnCommentMutation,
  CreateLawRevisionColumnCommentMutationVariables,
  CreateWatchedLawDocument,
  CreateWatchedLawMutation,
  CreateWatchedLawMutationVariables,
  DeleteCommentReactionDocument,
  DeleteCommentReactionMutation,
  DeleteCommentReactionMutationVariables,
  FindCommentsByLawIdDocument,
  FindCommentsByLawIdQuery,
  FindCommentsByLawIdQueryVariables,
  FindCommentsOnLawRevisionDocument,
  FindCommentsOnLawRevisionQuery,
  FindCommentsOnLawRevisionQueryVariables,
  FindLawDocument,
  FindLawQuery,
  FindLawQueryVariables,
  FindLawsDocument,
  FindLawsQuery,
  FindLawsQueryVariables,
  FindLawsWhenCreateWorldDocument,
  FindLawsWhenCreateWorldQuery,
  FindLawsWhenCreateWorldQueryVariables,
  InputMaybe,
  Laws_Bool_Exp,
} from "@/graphql/type";

// query

export const findLaws = async (
  variables: FindLawsQueryVariables | undefined,
): Promise<FindLawsQuery> => {
  const userId = await findUserOrCreate();
  const res = await getClient().query({
    query: FindLawsDocument,
    variables: { ...variables, userId },
  });
  return res.data;
};

export const findLaw = async (variables: FindLawQueryVariables): Promise<FindLawQuery> => {
  const userId = await findUserOrCreate();
  const res = await getClient().query({
    query: FindLawDocument,
    variables: { ...variables, userId },
  });
  return res.data;
};

export const findCommentsByLawId = async (
  variables: FindCommentsByLawIdQueryVariables,
): Promise<FindCommentsByLawIdQuery> => {
  const userId = await findUserOrCreate();
  const res = await getClient().query({
    query: FindCommentsByLawIdDocument,
    variables: { ...variables, user_id: userId },
  });
  return res.data;
};

export const findCommentsOnLawRevisionColumn = async (
  variables: FindCommentsOnLawRevisionQueryVariables,
): Promise<FindCommentsOnLawRevisionQuery> => {
  const userId = await findUserOrCreate();
  const res = await getClient().query({
    query: FindCommentsOnLawRevisionDocument,
    variables: { ...variables, userId: userId },
  });
  return res.data;
};

// mutation

export const createCommentForLawColumn = async (
  variables: CreateLawRevisionColumnCommentMutationVariables,
): Promise<CreateLawRevisionColumnCommentMutation> => {
  const userId = await findUserOrCreate();
  const res = await getClient().mutate({
    mutation: CreateLawRevisionColumnCommentDocument,
    variables: { ...variables, author_id: userId },
  });
  revalidatePath("/law-description/[id]", "page");
  return res.data;
};

export const createCommentReaction = async (
  variables: CreateCommentReactionMutationVariables,
): Promise<CreateCommentReactionMutation> => {
  const userId = await findUserOrCreate();
  const res = await getClient().mutate({
    mutation: CreateCommentReactionDocument,
    variables: { ...variables, user_id: userId },
  });
  return res.data;
};

export const deleteCommentReaction = async (
  variables: DeleteCommentReactionMutationVariables,
): Promise<DeleteCommentReactionMutation> => {
  const userId = await findUserOrCreate();
  const res = await getClient().mutate({
    mutation: DeleteCommentReactionDocument,
    variables: { ...variables, user_id: userId },
  });
  return res.data;
};

export const createWatchedLaw = async (
  variables: CreateWatchedLawMutationVariables,
): Promise<CreateWatchedLawMutation | null> => {
  const userId = await findUserOrCreate();
  if (!userId) return null;
  const res = await getClient().mutate({
    mutation: CreateWatchedLawDocument,
    variables: { ...variables, user_id: userId },
  });
  revalidatePath("/law-description/[id]", "page");
  return res.data;
};

export const findLawsWhenCreateWorld = async (
  searchParams: WorldType,
): Promise<FindLawsWhenCreateWorldQuery> => {
  const userId = await findUserOrCreate();
  const ifSearchWordExist: InputMaybe<Laws_Bool_Exp> = searchParams.search
    ? { law_revisions: { title: { _like: `%${searchParams.search}%` } } }
    : {};
  const whereParam = (): InputMaybe<Laws_Bool_Exp> => {
    if (searchParams.type === "viewed")
      return {
        law_views: {
          user_id: {
            _eq: userId,
          },
        },
        ...ifSearchWordExist,
      };
    if (searchParams.type === "like")
      return { reactions: { type: { _eq: 0 }, user_id: { _eq: userId } } };
    if (searchParams.type === "my_law")
      return {
        author_id: {
          _eq: userId,
        },
        ...ifSearchWordExist,
      };
    return { ...ifSearchWordExist };
  };

  const res = await getClient().query({
    query: FindLawsWhenCreateWorldDocument,
    variables: {
      limit: 10,
      where: { ...whereParam() },
    } as FindLawsWhenCreateWorldQueryVariables,
  });
  return res.data;
};
