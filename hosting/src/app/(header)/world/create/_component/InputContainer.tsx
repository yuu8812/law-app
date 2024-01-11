"use client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import Editor from "@/components/editor/Editor";
import { Input } from "@/components/Input";
import RenderAddedLaws from "@/components/RenderAddedLaws";
import { TextArea } from "@/components/TextArea";

export type Input = {
  name: string;
  text: string;
  other: { a: string }[];
};

const InputContainer = () => {
  const { register, control } = useForm<Input>();

  const { append, fields, remove } = useFieldArray<Input>({ control, name: "other" });

  return (
    <form className="flex flex-1 items-center justify-center bg-white">
      <div className="relative top-0 flex w-[70%] flex-col gap-4  p-4">
        <div className="flex flex-col gap-4 pt-10">
          <div className="">世界名</div>
          <Input
            register={register}
            inputName="text"
            type="text"
            height="h-10"
            width="w-[600px]"
            placeHolder="世界の名前"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="">どんな世界？</div>
          <TextArea
            register={register}
            inputName="text"
            width="w-[600px]"
            height="h-[100px]"
            placeHolder="例）素晴らしい世界"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">法令を追加する</div>
          <div className="flex flex-1 text-sm">
            <RenderAddedLaws laws={fields} append={append} remove={remove} />
          </div>
        </div>
        <div className="mb-20 mt-2 flex flex-1 flex-col gap-4">
          <div className="">世界の詳しい説明</div>
          <div className="max-w-[1000px] bg-[#ffffff] py-20">
            <Editor />
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 z-50 flex" onMouseEnter={(e) => e.stopPropagation()}>
        <Button text="キャンセルする" height="h-12" width="w-40" buttonType="danger" />
        <Button text="作成する" height="h-12" width="w-40" type="submit" />
      </div>
    </form>
  );
};

export default InputContainer;
