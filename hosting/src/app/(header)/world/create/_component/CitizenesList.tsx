"use client";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/Button";
import { FindCitizensNotBelongToWorldByUserIdQuery } from "@/graphql/type";

const CitizensList = ({
  res,
  append,
  fields,
  remove,
}: {
  res: FindCitizensNotBelongToWorldByUserIdQuery | undefined;
  append: ({ citizen_id, name, url }: { citizen_id: string; name: string; url: string }) => void;
  fields: { citizen_id: string; name: string; url: string | null }[];
  remove: (index: number) => void;
}) => {
  if (!res || res.users_by_pk?.citizens.length === 0)
    return <div className="m-2">見つかりませんでした</div>;
  return (
    <div className="relative top-0 flex flex-1 flex-col">
      <div className="absolute mb-10 flex h-full w-full flex-col gap-2 overflow-scroll pt-4">
        {res.users_by_pk?.citizens.map((citizen) => {
          const isAdded = fields.some((field) => {
            return field.citizen_id === citizen.id;
          });
          return (
            <li className="flex min-h-[120px] w-full bg-[#fff] px-2" key={citizen.id + "add_laws"}>
              <div className="m-1 flex flex-1 flex-col justify-between gap-1">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={citizen.species_asset.image_url}
                      alt="citizen_url"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="">{citizen.name}</div>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="">種族 : {citizen.species_asset.species.name}</div>
                  <div className="">性格 : {citizen.species_asset.personality}</div>
                </div>
                <Button
                  text={!isAdded ? "追加する" : "追加済み"}
                  width="w-20 self-end"
                  buttonType={isAdded ? "danger" : "primary"}
                  onClick={() => {
                    if (!isAdded) {
                      append({
                        citizen_id: citizen.id,
                        name: citizen.name,
                        url: citizen.species_asset.image_url,
                      });
                    } else {
                      remove(fields.findIndex((field) => field.citizen_id === citizen.id));
                    }
                  }}
                  type="button"
                />
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default CitizensList;
