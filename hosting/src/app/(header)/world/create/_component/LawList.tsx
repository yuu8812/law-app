"use client";
import React from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import { Button } from "@/components/Button";
import { FindLawsWhenCreateWorldQuery } from "@/graphql/type";

const LawList = ({
  res,
  append,
  fields,
  remove,
}: {
  res: FindLawsWhenCreateWorldQuery;
  append: UseFieldArrayAppend<InputType>;
  fields: { text: string; law_id: string }[];
  remove: UseFieldArrayRemove;
}) => {
  if (res.laws.length === 0) return <div className="m-2">見つかりませんでした</div>;
  return (
    <div className="relative top-0 flex flex-1 flex-col overflow-scroll">
      <div className="absolute mb-10 flex h-full w-full flex-col gap-2 pt-4">
        {res.laws.map((law, i) => {
          const isAdded = fields.some((field) => {
            return field.law_id === law.law_revisions[0].id;
          });
          return (
            <div className="flex min-h-[100px] w-full bg-[#fff] px-2" key={i + "add_laws"}>
              <div className="m-1 flex flex-1 flex-col justify-between">
                <div className="">{law.law_revisions[0].title}</div>
                <Button
                  text={!isAdded ? "追加する" : "追加済み"}
                  width="w-20 self-end"
                  buttonType={isAdded ? "danger" : "primary"}
                  onClick={() => {
                    if (!isAdded) {
                      append({
                        law_id: law.law_revisions[0].id,
                        text: law.law_revisions[0].title,
                      });
                    } else {
                      remove(fields.findIndex((field) => field.law_id === law.law_revisions[0].id));
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

export default LawList;
