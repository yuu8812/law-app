import React from "react";

import { findWorld } from "@/api/server";
import Reactions from "@/app/(header)/world/_component/Reactions";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await findWorld({ id });

  const markup = data.worlds_by_pk?.world_histories[0]?.markup_text;

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <Reactions world_id={id} />
    </div>
  );
};

export default page;
