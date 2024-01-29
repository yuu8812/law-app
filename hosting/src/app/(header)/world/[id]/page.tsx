import React from "react";

import { findWorld } from "@/serverClient/law";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const res = await findWorld({ variables: { id: id } });
  const resHtml = res.worlds_by_pk?.world_histories[0]?.markup_text_html;
  const html = resHtml
    ? JSON.parse(res.worlds_by_pk?.world_histories[0]?.markup_text_html ?? "")
    : "";
  return (
    <div className="flex flex-1">
      <main>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </main>
    </div>
  );
};

export default page;
