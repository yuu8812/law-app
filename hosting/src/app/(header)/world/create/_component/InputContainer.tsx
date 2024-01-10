"use client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Markup from "@/components/Markup";
import RenderAddedLaws from "@/components/RenderAddedLaws";
import { TextArea } from "@/components/TextArea";

export type Input = {
  name: string;
  text: string;
  other: { a: string }[];
};

const InputContainer = () => {
  const { register, control } = useForm<Input>();

  const { append, fields } = useFieldArray<Input>({ control, name: "other" });

  return (
    <form className="flex flex-1">
      <div className="relative top-0 flex flex-1 flex-col gap-10 bg-white p-4">
        <div className="flex flex-col gap-2">
          <div className="">世界名</div>
          <Input register={register} inputName="name" type="text" width="w-[600px]" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="">どんな世界</div>
          <TextArea register={register} inputName="text" width="w-[600px]" height="h-[200px]" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="">法令を追加する</div>
          <div className="flex flex-1">
            <RenderAddedLaws laws={fields} append={append} />
          </div>
        </div>
        <div className="mb-20 flex flex-1 flex-col gap-2">
          <div className="">世界の詳しい説明</div>
          <div className="quill-wrapper flex flex-1 border border-[#ffffff] bg-[#ffffff] outline-none hover:border-blue focus:outline-blue">
            <Markup />
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 flex">
        <Button text="キャンセルする" height="h-12" buttonType="danger" />
        <Button text="作成する" height="h-12" type="submit" />
      </div>
    </form>
  );
};

export default InputContainer;
