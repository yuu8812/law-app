"use client";
import Image from "next/image";
import React, { useState } from "react";

import RenderXml from "@/app/(header)/law/_component/RenderXml";
import Editor from "@/components/editor/Editor";
import { FindLawQuery } from "@/graphql/type";

const TAB_SETTING: { name: "INFO" | "BREAKDOWN"; text: string }[] = [
  { name: "INFO", text: "タイトル" },
  { name: "BREAKDOWN", text: "情報" },
];

const Container = ({ data }: { data: FindLawQuery }) => {
  const [tab, setTab] = useState<"INFO" | "BREAKDOWN">("INFO");

  const parse = data.laws_by_pk?.law_revisions[0].text_block
    ? JSON.parse(data.laws_by_pk?.law_revisions[0].text_block)
    : [];

  return (
    <>
      <div className="w-80 pt-2 text-sm">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 items-center justify-between gap-2 px-1 ">
            {TAB_SETTING.map((setting, i) => {
              return (
                <button
                  className={`flex flex-1 items-center justify-center rounded py-1 ${setting.name === tab ? "bg-so_se_ji text-white" : "bg-gray-200"}`}
                  key={i}
                  onClick={() => setTab(setting.name)}
                >
                  {setting.text}
                </button>
              );
            })}
          </div>
        </div>
        {tab === "INFO" && (
          <div className="flex flex-1 flex-col gap-2 break-all p-2">
            {data.laws_by_pk?.type === 1 ? (
              <>
                <div className="relative h-40 w-full overflow-hidden rounded">
                  <Image src={`/hinomaru.webp`} alt="world" className="object-cover" fill />
                </div>
                <div className="text-lg">{data.laws_by_pk?.law_revisions[0].title}</div>
                <div className="text-sm text-gray-600">
                  {data.laws_by_pk?.law_revisions[0].description}
                </div>
              </>
            ) : (
              <>
                <>
                  <div className="relative h-40 w-full overflow-hidden rounded">
                    <Image
                      src={data.laws_by_pk?.law_revisions[0].law_image_url ?? "/dummy.avif"}
                      alt="world"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="text-lg">{data.laws_by_pk?.law_revisions[0].title}</div>
                  <div className="text-sm text-gray-600">
                    {data.laws_by_pk?.law_revisions[0].description}
                  </div>
                </>
              </>
            )}
          </div>
        )}
      </div>
      <div className="relative top-0 my-2 flex flex-1 overflow-scroll border bg-[#ffffff] shadow-inner">
        <div className="absolute flex flex-1 p-4">
          {data.laws_by_pk?.type === 0 ? (
            <Editor defaultValue={parse} />
          ) : (
            <RenderXml xml={data.laws_by_pk?.law_revisions[0].text_xml ?? ""} />
          )}
        </div>
      </div>
    </>
  );
};

export default Container;
