"use server";
import { cookies } from "next/headers";

import { getClient } from "@/api/client";
import { firebaseAdmin } from "@/firebase/firebase.admin.config";
import {
  CreateUserDocument,
  CreateUserMutation,
  CreateUserMutationVariables,
  FindUserDocument,
  FindUserQuery,
  FindUserQueryVariables,
} from "@/graphql/type";

const findUserFromSession = async (): Promise<FindUserQuery | null> => {
  const cookieStore = cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) {
    return null;
  }

  const user = await firebaseAdmin
    .auth()
    .verifyIdToken(token, true)
    .catch(() => {
      throw new Error("Invalid token");
    });

  const res = await getClient().query({
    query: FindUserDocument,
    variables: { _eq: user.uid } as FindUserQueryVariables,
  });

  return res.data;
};

const createUserFromSession = async (): Promise<CreateUserMutation | null> => {
  const cookieStore = cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) {
    return null;
  }
  const user = await firebaseAdmin
    .auth()
    .verifyIdToken(token)
    .catch(() => {
      throw new Error("Invalid token");
    });

  const res = await getClient().mutate({
    mutation: CreateUserDocument,
    variables: {
      authentication_id: user.uid,
      name: "匿名",
      icon_url: user.picture,
    } as CreateUserMutationVariables,
  });

  return res.data;
};

export const findUserOrCreate = async () => {
  const user = await findUserFromSession();

  if (user?.users[0]?.id) {
    return user?.users[0]?.id;
  }
  const createdUser = await createUserFromSession();

  return createdUser?.insert_users?.returning[0].id;
};
