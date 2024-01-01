"use server";

import { getClient } from "@/api/client";
import {
  FindCommentsByLawIdDocument,
  FindCommentsByLawIdQuery,
  FindCommentsByLawIdQueryVariables,
  FindLawDocument,
  FindLawQuery,
  FindLawQueryVariables,
  FindLawsDocument,
  FindLawsQuery,
  FindLawsQueryVariables,
} from "@/graphql/type";

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
