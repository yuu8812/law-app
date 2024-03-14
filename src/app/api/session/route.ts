import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { adminClient } from "@/apiCaller/adminClient";
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

  if (!token) return NextResponse.json({ status: "token not found" }, { status: 403 });

  const sessionCookie = await firebaseAdmin
    .auth()
    // 2週間
    .createSessionCookie(token, { expiresIn: 1209600000 });

  const user = await firebaseAdmin.auth().verifyIdToken(token);

  cookieStore.set("__session", sessionCookie, { secure: true });

  const userExist = await adminClient().query({
    query: FindUserDocument,
    variables: {
      _eq: user.uid,
    } as FindUserQueryVariables,
  });

  if (userExist.data.users.length === 0) {
    await adminClient().mutate({
      mutation: CreateUserDocument,
      variables: {
        authentication_id: user.uid,
        icon_url: user?.picture ? user.picture : "/user.svg",
        name: "匿名",
        email: user.email,
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
