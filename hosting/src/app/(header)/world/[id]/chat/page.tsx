"use client";
import React, { useEffect, useState } from "react";

import ChatRenderer from "@/app/(header)/world/_component/ChatRenderer";
import { useFindChatBoxesQuery } from "@/graphql/type";

const Page = ({ params }: { params: { id: string } }) => {
  const [currentChatBoxId, setCurrentChatBoxId] = useState<string | null>(null);

  const { data, loading } = useFindChatBoxesQuery({ variables: { _eq: params.id } });

  useEffect(() => {
    setCurrentChatBoxId(data?.world_chat_boxes[0]?.id ?? null);
  }, [data?.world_chat_boxes]);

  return (
    <div className="flax relative mt-1 flex-1 items-center justify-center bg-[#ffffff]">
      <div className="absolute flex h-full w-1/5 flex-1 overflow-scroll border-r">
        <div className="relative flex h-full w-full flex-1 flex-col">
          <div className="sticky top-0 m-1 mb-1 flex h-10 w-full items-center border-b">
            <div className="rounded bg-blue p-1 px-4 text-white">チャンネル</div>
          </div>
          <div className="sticky top-0 h-10 w-full items-center pt-1">
            {data?.world_chat_boxes.map((chatBox, i) => {
              return (
                <div className="w-full pl-4 font-semibold text-gray-500 underline" key={i}>
                  #{chatBox.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {!loading && currentChatBoxId && <ChatRenderer boxId={currentChatBoxId} />}
    </div>
  );
};

export default Page;
