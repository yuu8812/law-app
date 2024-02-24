import { FetchResult } from "@apollo/client";
import { faker } from "@faker-js/faker/locale/ja";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { adminClient } from "@/apiCaller/adminClient";
import { firebaseAdmin } from "@/firebase/firebase.admin.config";
import {
  CreateCitizensDocument,
  CreateCitizensMutation,
  CreateCitizensMutationVariables,
  FindLoginBonusDateDocument,
  FindLoginBonusDateQuery,
  FindLoginBonusDateQueryVariables,
  FindRandomSpeciesAssetsDocument,
  FindRandomSpeciesAssetsQuery,
} from "@/graphql/type";
import { compareDate } from "@/utils/compareDate";

const createCitizens = async (userId: string) => {
  const { data: randomSpeciesAsset }: { data: FindRandomSpeciesAssetsQuery } =
    await adminClient().query({
      query: FindRandomSpeciesAssetsDocument,
    });

  const currentDate = new Date();

  const isoDateString = currentDate.toISOString();

  const hasuraTimestamp = isoDateString.replace("T", " ").substring(0, 22) + "Z";

  const res: FetchResult<CreateCitizensMutation> = await adminClient().mutate({
    mutation: CreateCitizensDocument,
    variables: {
      id: userId,
      login_bonus_timestamp: hasuraTimestamp,
      objects: randomSpeciesAsset.random_species_assets_view.map((speciesAsset) => ({
        user_id: userId,
        species_asset_id: speciesAsset.species_asset_id,
        body_setting: {},
        name: faker.person.fullName(),
      })),
    } as CreateCitizensMutationVariables,
  });

  if (!res) throw new Error("Citizens not created");

  return res.data;
};

export const GET = async () => {
  const cookieStore = cookies();

  const token = cookieStore.get("__session")?.value;

  if (!token) throw new Error("Unauthorized");

  const user = await firebaseAdmin.auth().verifySessionCookie(token);

  const { data }: { data: FindLoginBonusDateQuery } = await adminClient().query({
    query: FindLoginBonusDateDocument,
    variables: { authentication_id: { _eq: user.uid } } as FindLoginBonusDateQueryVariables,
  });

  const userId = data.users[0]?.id;

  if (!userId) throw new Error("User not found");

  const lastLoginBonusTimestamp = data.users[0]?.login_bonus_timestamp;

  const isReceived = compareDate(lastLoginBonusTimestamp);

  if (isReceived) {
    const res = await createCitizens(userId);
    console.log("worked");
    return NextResponse.json({ res }, { status: 200 });
  }

  console.log("ignored");

  return NextResponse.json({}, { status: 203 });
};
