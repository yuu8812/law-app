import Image from "next/image";
import React, { Fragment } from "react";

import { findWorld } from "@/api/server";
import Reactions from "@/app/(header)/world/_component/Reactions";
import Argument from "@/components/Argument";
import Category from "@/components/Category";
import Editor from "@/components/editor/Editor";
import Law from "@/components/Law";
import PieChart from "@/components/PieChart";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await findWorld({ id }).catch((e) => {
    throw new Error(e);
  });

  if (data.worlds_by_pk === null) throw new Error("Not Found");

  const markup = data.worlds_by_pk?.world_histories[0]?.markup_text;

  const parse = markup ? JSON.parse(markup) : [];

  return (
    <div className="relative flex flex-1 gap-2 border-t">
      <div className="relative flex w-[20%] flex-1 overflow-scroll">
        <div className="absolute top-0 flex h-fit">
          <div className="relative top-0 m-1 mx-1 flex w-full flex-1 flex-col gap-2">
            <div className="relative h-40 w-full overflow-hidden rounded">
              <Image src={"/ex.jpg"} alt="world" className="object-cover" fill />
            </div>
            <div className="text-xl">{data.worlds_by_pk?.world_histories[0].title}</div>
            <div className="text text-sm">{data.worlds_by_pk?.world_histories[0].description}</div>
            <div className="flex flex-1 flex-col gap-1 px-2 pt-6 text-sm">
              <div className="flex h-8 items-center">
                <p className="w-32">指定公用語</p>
                <div className="px-4 font-bold">
                  {language[data.worlds_by_pk?.world_histories[0].official_language ?? 0].ja}
                </div>
              </div>
              <div className="flex h-8 items-center">
                <p className="w-32">治安レベル</p>
                <div className="px-4 font-bold">
                  {securityLevel[data.worlds_by_pk?.world_histories[0].public_security ?? 0]}
                </div>
              </div>
              <div className="flex h-8 items-center">
                <p className="w-32">運営管理者数</p>
                <div className="px-4 font-bold">
                  {data.worlds_by_pk?.world_editable_users_aggregate.aggregate?.count ?? 0}
                </div>
              </div>
              <div className="flex h-8 items-center">
                <p className="w-32">統治責任者</p>
                <div className="px-4 font-bold">{data.worlds_by_pk?.user.name}</div>
              </div>
              <div className="flex h-8 items-center pt-4">
                <p className="w-32">世界レベル</p>
                <div className="px-4 text-xl font-bold">
                  {data.worlds_by_pk?.level}
                  <span className="pl-2 text-sm">LV</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2 px-2 pt-4">
              <div className="">
                <div className="flex items-center gap-2">
                  <p className="">個体数</p>
                  <p className="text-xl font-bold">
                    {data.worlds_by_pk?.world_citizens_aggregate.aggregate?.count ?? 0}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative right-5 h-40 w-40">
                  {data.worlds_by_pk?.species_percentage && (
                    <PieChart
                      data={data.worlds_by_pk?.species_percentage.map((i) => ({
                        number: i.percentage ?? 0,
                        text: i.species_name ?? "",
                      }))}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-4 mt-2 flex min-w-[55%] flex-1 overflow-scroll rounded bg-[#ffffff]">
        <div className="absolute flex h-fit w-full flex-1 pb-10">
          <Editor defaultValue={parse} />
        </div>
      </div>
      <div className="relative flex w-[25%] flex-1 flex-col gap-2 overflow-scroll">
        <div className="absolute flex h-fit w-full flex-1 flex-col gap-2 p-2">
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">域内の法令</div>
            {data.worlds_by_pk?.world_laws.length === 0 ? (
              <div className="text-sm">なし</div>
            ) : (
              data.worlds_by_pk?.world_laws.map((law, i) => {
                return (
                  <Fragment key={i}>
                    <Law id={law.law.id} title={law.law.law_revisions[0].title} description="" />
                  </Fragment>
                );
              })
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">参考議論</div>
            {data.worlds_by_pk?.world_arguments.length === 0 ? (
              <div className="text-sm">なし</div>
            ) : (
              data.worlds_by_pk?.world_arguments.map((argument, i) => {
                return (
                  <Fragment key={i}>
                    <Argument
                      id={argument.argument.id}
                      title={argument.argument.title}
                      description={argument.argument.description}
                    />
                  </Fragment>
                );
              })
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">カテゴリ</div>
            <div className="flex flex-wrap gap-2">
              {data.worlds_by_pk?.world_categories.length === 0 ? (
                <div className="text-sm">なし</div>
              ) : (
                data.worlds_by_pk?.world_categories.map((category, i) => {
                  return (
                    <Fragment key={i}>
                      <Category
                        id={category.law_category.category_ja}
                        title={category.law_category.category_ja}
                        description=""
                      />
                    </Fragment>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Reactions world_id={id} />
    </div>
  );
};

export default page;
