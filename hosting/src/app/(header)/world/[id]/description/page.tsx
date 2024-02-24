import React from "react";

import { findWorld } from "@/api/server";
import Container from "@/app/(header)/world/[id]/description/_component/Container";
import AnimateWrap from "@/components/AnimateWrap";

export const revalidate = 0;

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await findWorld({ id }).catch((e) => {
    throw new Error(e);
  });

  if (data.worlds_by_pk === null) throw new Error("Not Found");

  return (
    <div className="relative flex flex-1 gap-2">
      <AnimateWrap>
        <Container data={data} id={id} />
      </AnimateWrap>
    </div>
  );
};

export default page;
