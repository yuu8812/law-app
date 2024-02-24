import { getClient } from "@/apiCaller/serverClient";
import {
  FindWorldDocument,
  FindWorldQuery,
  FindWorldQueryVariables,
  FindWorldsDocument,
  FindWorldsQuery,
  FindWorldsQueryVariables,
} from "@/graphql/type";

export const findWorld = async (variables: FindWorldQueryVariables) => {
  const { data }: { data: FindWorldQuery } = await getClient().query({
    query: FindWorldDocument,
    variables,
  });
  return data;
};

export const findWorlds = async (variables: FindWorldsQueryVariables) => {
  const { data }: { data: FindWorldsQuery } = await getClient().query({
    query: FindWorldsDocument,
    variables,
  });
  return data;
};
