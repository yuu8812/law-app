"use client";
import React from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import { Button } from "@/components/Button";
import { FindArgumentsForCreateWorldQuery } from "@/graphql/type";

const ArgumentList = ({
  res,
  append,
  fields,
  remove,
}: {
  res: FindArgumentsForCreateWorldQuery | undefined;
  append: UseFieldArrayAppend<InputType>;
  fields: { title: string; argument_id: string }[];
  remove: UseFieldArrayRemove;
}) => {
  if (!res || res.arguments.length === 0) return <div className="m-2">見つかりませんでした</div>;
  return (
    <div className="relative top-0 flex flex-1 flex-col overflow-scroll">
      <div className="absolute mb-10 flex h-full w-full flex-col gap-2 pt-4">
        {res.arguments.map((argument, i) => {
          const isAdded = fields?.some((field) => {
            return field.argument_id === argument.id;
          });
          return (
            <div className="flex min-h-[100px] w-full bg-[#fff] px-2" key={i + "add_argument"}>
              <div className="m-1 flex flex-1 flex-col justify-between">
                <div className="">{argument.title}</div>
                <div className="">{argument.description}</div>
                <Button
                  text={!isAdded ? "追加する" : "追加済み"}
                  width="w-20 self-end"
                  buttonType={isAdded ? "danger" : "primary"}
                  onClick={() => {
                    if (!isAdded) {
                      append({
                        argument_id: argument.id,
                        title: argument.description,
                      });
                    } else {
                      remove(fields.findIndex((field) => field.argument_id === argument.id));
                    }
                  }}
                  type="button"
                  key={i + "add_argument_button"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArgumentList;
