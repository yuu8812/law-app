import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { getClient } from "@/apiCaller/serverClient";
import { firebaseAdmin } from "@/firebase/firebase.admin.config";
import {
  CreateUserDocument,
  CreateUserMutationVariables,
  FindUserDocument,
  FindUserQueryVariables,
} from "@/graphql/type";

export const POST = async (req: NextRequest) => {
  const json = await req.json();
  const token = json.token;
  const cookieStore = cookies();

  const sessionCookie = await firebaseAdmin
    .auth()
    .createSessionCookie(token, { expiresIn: 60 * 60 * 24 * 5 });

  const user = await firebaseAdmin.auth().verifyIdToken(token);

  cookieStore.set("__session", sessionCookie);

  const userExist = await getClient().query({
    query: FindUserDocument,
    variables: {
      _eq: user.uid,
    } as FindUserQueryVariables,
  });

  if (userExist.data.users.length === 0) {
    await getClient().mutate({
      mutation: CreateUserDocument,
      variables: {
        authentication_id: user.uid,
        icon_url: user.picture,
        name: user.email,
      } as CreateUserMutationVariables,
    });
  }

  return NextResponse.json({
    status: "session added",
  });
};

export const DELETE = async () => {
  const cookieStore = cookies();

  cookieStore.delete("__session");

  return NextResponse.json({ status: "delete success" });
};
