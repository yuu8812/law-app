import { Metadata } from "next";
import React from "react";

import { findWorld } from "@/api/server";
import Container from "@/app/(header)/world/[id]/description/_component/Container";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await findWorld({ id }).catch((e) => {
    throw new Error(e);
  });
  return {
    title: data.worlds_by_pk?.world_histories[0].title,
    description: data.worlds_by_pk?.world_histories[0].description,
    openGraph: {
      title: data.worlds_by_pk?.world_histories[0].title,
      description: data.worlds_by_pk?.world_histories[0].description,
      images: [data.worlds_by_pk?.world_histories[0].world_image_url ?? "/icon2.svg"],
    },
  };
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await findWorld({ id }).catch((e) => {
    throw new Error(e);
  });

  if (data.worlds_by_pk === null) throw new Error("Not Found");

  return (
    <div className="relative flex flex-1 gap-2">
      <Container data={data} id={id} />
    </div>
  );
};

export default page;
