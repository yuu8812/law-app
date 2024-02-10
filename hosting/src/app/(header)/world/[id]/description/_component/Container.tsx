"use client";
import Image from "next/image";
import React, { Fragment } from "react";

import Reactions from "@/app/(header)/world/_component/Reactions";
import Argument from "@/components/Argument";
import Category from "@/components/Category";
import Citizen from "@/components/Citizen";
import Editor from "@/components/editor/Editor";
import Law from "@/components/Law";
import PieChart from "@/components/PieChart";
import User from "@/components/User";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";
import { FindWorldQuery } from "@/graphql/type";

const Container = ({ data, id }: { data: FindWorldQuery; id: string }) => {
  const markup = data.worlds_by_pk?.world_histories[0]?.markup_text;

  const parse = markup ? JSON.parse(markup) : [];

  return (
    <div className="flex flex-1 overflow-scroll">
      <div className="sticky top-0 flex w-[22%] flex-1 overflow-scroll">
        <div className="absolute top-0 flex h-fit w-full flex-1">
          <div className="relative top-0 flex w-full flex-1 flex-col gap-2">
            <div className="relative h-40 w-full overflow-hidden rounded">
              <Image src={"/ex.jpg"} alt="world" className="object-cover" fill />
            </div>
            <div className="text-xl">{data.worlds_by_pk?.world_histories[0].title}</div>
            <div className="text text-sm">{data.worlds_by_pk?.world_histories[0].description}</div>
            <div className="flex flex-1 flex-col gap-1 px-2 pt-6 text-sm">
              <div className="flex h-8 items-center">
                <p className="w-28">指定公用語</p>
                <div className="pl-4 font-bold">
                  {language[data.worlds_by_pk?.world_histories[0].official_language ?? 0].ja}
                </div>
              </div>
              <div className="flex h-8 items-center">
                <p className="w-28">治安レベル</p>
                <div className="pl-4 font-bold">
                  {securityLevel[data.worlds_by_pk?.world_histories[0].public_security ?? 0]}
                </div>
              </div>
              <div className="flex h-8 items-center">
                <p className="w-28">運営管理者数</p>
                <div className="pl-4 font-bold">
                  {data.worlds_by_pk?.world_editable_users_aggregate.aggregate?.count ?? 0}
                </div>
              </div>
              <div className="flex h-8 items-center">
                <p className="w-28">統治責任者</p>
                <div className="pl-4 font-bold">{data.worlds_by_pk?.user.name}</div>
              </div>
              <div className="flex h-8 items-center pt-4">
                <p className="w-28">世界レベル</p>
                <div className="pl-4 text-xl font-bold">
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
                <div className="h-36 w-36">
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
      <div className="sticky top-0 mb-4 mt-2 flex min-w-[55%] flex-1 rounded bg-[#ffffff]">
        <div className="absolute flex h-fit w-full flex-1 pb-10">
          <Editor defaultValue={parse} />
        </div>
      </div>
      <div className="hide-scrollbar sticky top-0 flex w-[18%] flex-1 flex-col gap-2 overflow-scroll">
        <div className="absolute m-2 flex h-fit flex-1 flex-col gap-2">
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
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">管理者</div>
            <div className="flex flex-wrap gap-[-2px]">
              {data.worlds_by_pk?.world_editable_users.map((user, i) => {
                return (
                  <div className="py-1" key={i}>
                    <User id={user.user.id} name="" url={user.user.icon_url} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">個体</div>
            <div className="flex flex-wrap gap-[-2px]">
              {data.worlds_by_pk?.world_citizens_aggregate.nodes.map((citizen, i) => {
                return (
                  <div className="py-[2px]" key={i}>
                    <Citizen
                      id={citizen.citizen.id}
                      url={citizen.citizen.species_asset.image_url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Reactions world_id={id} />
    </div>
  );
};

export default Container;
