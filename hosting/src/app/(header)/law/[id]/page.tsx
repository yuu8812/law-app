import React from "react";

import { getClient } from "@/apiCaller/serverClient";
import Container from "@/app/(header)/law/[id]/_component/Container";
import Reactions from "@/app/(header)/law/_component/Reactions";
import AnimateWrap from "@/components/AnimateWrap";
import { FindLawDocument, FindLawQuery } from "@/graphql/type";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { data }: { data: FindLawQuery } = await getClient().query({
    query: FindLawDocument,
    variables: { id },
  });

  return (
    <div className="relative flex flex-1">
      <AnimateWrap>
        <Container data={data} />
      </AnimateWrap>
      <div className="relative mr-1 flex w-12 overflow-scroll">
        <Reactions id={id} />
      </div>
    </div>
  );
};

export default Page;
