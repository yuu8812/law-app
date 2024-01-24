"use client";
import { DevTool } from "@hookform/devtools";
import React, { Suspense } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import ButtonWrap from "@/app/(header)/world/create/_component/ButtonWrap";
import SearchLawModal from "@/app/(header)/world/create/_component/SearchLawModal";
import { WorldType } from "@/app/(header)/world/create/page";
import Editor from "@/components/editor/Editor";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal";
import RenderAddedLaws from "@/components/RenderAddedLaws";
import Select from "@/components/Select";
import { TextArea } from "@/components/TextArea";
import { LAW_CATEGORIES } from "@/constants/lawCategory";
import { FindLawsWhenCreateWorldQuery } from "@/graphql/type";

export type InputType = {
  name: string;
  text: string;
  laws: { text: string; law_id: string }[];
  categories: { category_num: string; category_ja: string }[];
};

const InputContainer = ({
  res,
  searchParams,
}: {
  res: FindLawsWhenCreateWorldQuery | undefined;
  searchParams: WorldType;
}) => {
  const { register, control, watch } = useForm<InputType>({
    defaultValues: {
      laws: [],
      categories: [],
      name: "",
      text: "",
    },
  });

  const { append: appendLaws, remove: removeLaws } = useFieldArray<InputType>({
    control,
    name: "laws",
    shouldUnregister: true,
  });

  const { prepend: appendCategories, remove: removeCategories } = useFieldArray<InputType>({
    control,
    name: "categories",
  });

  const openModal = searchParams.modal === "open";

  const watchedLaws = watch("laws");
  const watchedCategories = watch("categories");

  return (
    <form className="relative flex flex-1 items-center justify-center bg-white">
      <input hidden {...register("laws")} />
      <DevTool control={control} />
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
            height="min-h-[150px]"
            placeHolder="例）素晴らしい世界"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">世界に法令を追加する</div>
          <div className="flex flex-1 text-sm">
            <RenderAddedLaws laws={watchedLaws} append={appendLaws} remove={removeLaws} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">カテゴリーを追加する</div>
          <div className="flex flex-wrap gap-2">
            {watchedCategories.map((field, i) => {
              return (
                <div
                  className="flex items-center justify-center gap-1"
                  key={i + "add_category" + JSON.stringify(watchedCategories)}
                >
                  <Select
                    options={LAW_CATEGORIES.map((item) => ({
                      label: item.category_ja,
                      value: item.category_number,
                      disabled: watchedCategories.some(
                        (field) => field.category_num === item.category_number,
                      ),
                    }))}
                    name={`categories.${i}`}
                    register={register}
                    initialValue={{ label: field.category_ja, value: field.category_num }}
                    displayCurrentValue={true}
                  />
                  <div
                    className="relative -left-[4px] z-50 w-2 cursor-pointer"
                    onClick={() => {
                      console.log(i + "key");
                      removeCategories(i);
                    }}
                    key={i + "remove"}
                  >
                    <IoCloseSharp className="relative" size={20} />
                  </div>
                </div>
              );
            })}
          </div>
          <Select
            options={LAW_CATEGORIES.map((item) => ({
              label: item.category_ja,
              value: item.category_number,
              disabled: watchedCategories.some(
                (field) => field.category_num === item.category_number,
              ),
            }))}
            name="categories"
            initialMessage="カテゴリーを追加"
            register={register}
            onChange={(value) => {
              appendCategories({ category_ja: value.label, category_num: value.value });
            }}
          />
        </div>
        <div className="mt-2 flex flex-1 flex-col gap-4 pb-20">
          <div className="">世界の詳しい説明</div>
          <Editor />
        </div>
      </div>
      <ButtonWrap />
      <Suspense fallback={<div>loading...</div>}>
        {openModal && res && (
          <Modal>
            <SearchLawModal
              searchParams={searchParams}
              res={res}
              append={appendLaws}
              fields={watchedLaws}
              remove={removeLaws}
            />
          </Modal>
        )}
      </Suspense>
    </form>
  );
};

export default InputContainer;
