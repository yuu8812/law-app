"use server";

import { getClient } from "@/api/client";
import {
  CreateLawRevisionColumnCommentDocument,
  CreateLawRevisionColumnCommentMutation,
  CreateLawRevisionColumnCommentMutationVariables,
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
} from "@/graphql/type";

// query

export const findLaws = async (
  variables: FindLawsQueryVariables | undefined,
): Promise<FindLawsQuery> => {
  const res = await getClient().query({ query: FindLawsDocument, variables });
  return res.data;
};

export const findLaw = async (variables: FindLawQueryVariables): Promise<FindLawQuery> => {
  const res = await getClient().query({ query: FindLawDocument, variables });
  return res.data;
};

export const findCommentsByLawId = async (
  variables: FindCommentsByLawIdQueryVariables,
): Promise<FindCommentsByLawIdQuery> => {
  const res = await getClient().query({ query: FindCommentsByLawIdDocument, variables });
  return res.data;
};

export const findCommentsOnLawRevisionColumn = async (
  variables: FindCommentsOnLawRevisionQueryVariables,
): Promise<FindCommentsOnLawRevisionQuery> => {
  const res = await getClient().query({
    query: FindCommentsOnLawRevisionDocument,
    variables,
  });
  return res.data;
};

// mutation

export const createCommentForLawColumn = async (
  variables: CreateLawRevisionColumnCommentMutationVariables,
): Promise<CreateLawRevisionColumnCommentMutation> => {
  const res = await getClient().mutate({
    mutation: CreateLawRevisionColumnCommentDocument,
    variables,
  });
  return res.data;
};
