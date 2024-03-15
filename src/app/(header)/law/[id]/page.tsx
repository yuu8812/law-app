import { Metadata } from "next";
import React from "react";

import { getClient } from "@/apiCaller/serverClient";
import Container from "@/app/(header)/law/[id]/_component/Container";
import { FindLawDocument, FindLawQuery, FindLawQueryVariables } from "@/graphql/type";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data }: { data: FindLawQuery } = await getClient().query({
    query: FindLawDocument,
    variables: { id },
  });
  return {
    title:
      data.laws_by_pk?.law_revisions[0].title === ""
        ? data.laws_by_pk?.law_revisions[0].title
        : data.laws_by_pk?.law_revisions[0].description,
    description: data.laws_by_pk?.law_revisions[0].description,
    openGraph: {
      title:
        data.laws_by_pk?.law_revisions[0].title === ""
          ? data.laws_by_pk?.law_revisions[0].title
          : data.laws_by_pk?.law_revisions[0].description,
      description: data.laws_by_pk?.law_revisions[0].description,
      images: [data.laws_by_pk?.law_revisions[0].law_image_url ?? "/icon2.svg"],
    },
  };
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { data }: { data: FindLawQuery } = await getClient().query({
    query: FindLawDocument,
    variables: { id } as FindLawQueryVariables,
  });

  return (
    <div className="relative flex flex-1">
      <Container data={data} />
    </div>
  );
};

export default Page;
