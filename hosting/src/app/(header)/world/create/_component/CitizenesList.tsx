"use client";
import React from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import { Button } from "@/components/Button";
import { FindCitizensQuery } from "@/graphql/type";

const CitizensList = ({
  res,
  append,
  fields,
  remove,
}: {
  res: FindCitizensQuery | undefined;
  append: UseFieldArrayAppend<InputType>;
  fields: InputType["citizens"];
  remove: UseFieldArrayRemove;
}) => {
  if (!res || res.citizens.length === 0) return <div className="m-2">見つかりませんでした</div>;
  return (
    <div className="relative top-0 flex flex-1 flex-col overflow-scroll">
      <div className="absolute mb-10 flex h-full w-full flex-col gap-2 pt-4">
        {res.citizens.map((citizen, i) => {
          const isAdded = fields.some((field) => {
            return field.citizen_id === citizen.id;
          });
          return (
            <div className="flex min-h-[100px] w-full bg-[#fff] px-2" key={i + "add_laws"}>
              <div className="m-1 flex flex-1 flex-col justify-between">
                <div className="">{citizen.species_asset.species.description}</div>
                <Button
                  text={!isAdded ? "追加する" : "追加済み"}
                  width="w-20 self-end"
                  buttonType={isAdded ? "danger" : "primary"}
                  onClick={() => {
                    if (!isAdded) {
                      append({
                        citizen_id: citizen.id,
                        name: citizen.name,
                      });
                    } else {
                      remove(fields.findIndex((field) => field.citizen_id === citizen.id));
                    }
                  }}
                  type="button"
                  key={i + "add_laws_button"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CitizensList;
