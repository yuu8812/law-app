"use client";
import Image from "next/image";
import React, { useState } from "react";

import RenderXml from "@/app/(header)/law/_component/RenderXml";
import Editor from "@/components/editor/Editor";
import NewnessTag from "@/components/NewnessTag";
import World from "@/components/World";
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
        {tab === "BREAKDOWN" && (
          <div className="flex flex-col gap-1 pt-2">
            <div className="my-1">採用されている世界</div>
            {(data.laws_by_pk?.world_laws.length ?? 0) > 0 ? (
              data.laws_by_pk?.world_laws.map((world, i) => (
                <World
                  id={world.world.id}
                  title={world.world.world_histories[0].title}
                  description={world.world.world_histories[0].description}
                  key={i}
                />
              ))
            ) : (
              <div className="text-gray-400">採用されている世界がまだありません</div>
            )}
          </div>
        )}
        {tab === "INFO" && (
          <div className="flex flex-1 flex-col gap-2 break-all p-2">
            {data.laws_by_pk?.type === 1 ? (
              <>
                <div className="relative h-40 w-full overflow-hidden rounded">
                  <Image src={`/hinomaru.webp`} alt="world" className="object-cover" fill />
                </div>
                <div className="flex flex-col gap-4 pl-2">
                  <div className="text-lg">{data.laws_by_pk?.law_revisions[0].title}</div>
                  <div className="pb-4 text-sm text-gray-600">
                    {data.laws_by_pk?.law_revisions[0].description}
                  </div>
                  <div>
                    <NewnessTag newness={data.laws_by_pk.newness as 0 | 1} />
                  </div>
                  <div className="flex items-center gap-4 pt-1 text-gray-600">
                    <div className="">カテゴリ</div>
                    <div className="">
                      {data.laws_by_pk.law_revisions[0]?.category_ja ?? "なし"}
                    </div>
                    d
                  </div>
                  <div className="flex items-center gap-4 pt-1 text-gray-600">
                    <div className="">作成者</div>
                    <div className="">{"日本国"}</div>
                  </div>
                  <div className="flex items-center gap-4 pt-1 text-gray-600">
                    <div className="">決まりがある場所</div>
                    <div className="">{"日本国"}</div>
                  </div>
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
                  <div className="pb-4 text-sm text-gray-600">
                    {data.laws_by_pk?.law_revisions[0].description}
                  </div>
                  <div className="w-fit">
                    <NewnessTag newness={data.laws_by_pk?.newness as 0 | 1} />
                  </div>
                  <div className="flex flex-col gap-4 pl-2">
                    <div className="flex items-center gap-4 pt-1 text-gray-600">
                      <div className="">カテゴリ</div>
                      <div className="">
                        {data.laws_by_pk?.law_revisions[0]?.category_ja ?? "なし"}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-1 text-gray-600">
                      <div className="">作成者</div>
                      <div className="">{`${data.laws_by_pk?.type === 1 ? "日本国" : data.laws_by_pk?.user?.name ?? ""}`}</div>
                    </div>
                    <div className="flex items-center gap-4 pt-1 text-gray-600">
                      <div className="">決まりがある場所</div>
                      <div className="">
                        {data.laws_by_pk?.type === 1
                          ? "日本国"
                          : data.laws_by_pk?.place
                            ? data.laws_by_pk?.place
                            : "未設定"}
                      </div>
                    </div>
                  </div>
                </>
              </>
            )}
          </div>
        )}
      </div>
      <div className="relative top-0 my-2 flex flex-1 overflow-scroll border bg-[#ffffff] shadow-inner">
        <div className="absolute flex h-fit w-full flex-1 p-4">
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
