"use client";
import React from "react";

import { CreateLawMutationVariables, useCreateLawMutation } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const Page = () => {
  const { state } = useUser();
  const [mutate] = useCreateLawMutation();
  const func = async () => {
    const res = await fetch("https://elaws.e-gov.go.jp/api/1/lawdata/321CONSTITUTION");
    const xml = await res.text();
    await mutate({
      variables: {
        author_id: state?.id,
        type: 1,
        law_revisions: { data: [{ text_xml: xml, title: "サンプル法令" }] },
      } as CreateLawMutationVariables,
    });
  };
  return <button onClick={func}>押してください</button>;
};

export default Page;
