"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "sonner";
import * as z from "zod";

import ButtonWrap from "@/app/(header)/world/create/_component/ButtonWrap";
import SearchArgumentModal from "@/app/(header)/world/create/_component/SearchArgumentModal";
import SearchLawModal from "@/app/(header)/world/create/_component/SearchLawModal";
import Modal from "@/components/CustomModal";
import Editor from "@/components/editor/Editor";
import { Input } from "@/components/Input";
import RenderAddedArguments from "@/components/RenderAddedArgument";
import RenderAddedLaws from "@/components/RenderAddedLaws";
import Select from "@/components/Select";
import { TextArea } from "@/components/TextArea";
import { LAW_CATEGORIES } from "@/constants/lawCategory";
import { CreateWorldMutationVariables, useCreateWorldMutation } from "@/graphql/type";
import { useCustomModal } from "@/hooks/useCustomModal";
import { useUser } from "@/hooks/useUser";

const schema = z.object({
  name: z.string().min(1, { message: "入力してください" }).max(50),
  text: z.string().min(1, { message: "入力してください" }).max(200),
  laws: z.array(
    z.object({
      law_id: z.string(),
      text: z.string(),
    }),
  ),
  categories: z.array(
    z.object({
      category_num: z.string(),
      category_ja: z.string(),
    }),
  ),
  arguments: z.array(
    z.object({
      argument_id: z.string(),
      title: z.string(),
    }),
  ),
  content: z.string().nullable(),
  contentHtml: z.string().nullable(),
});

export type InputType = z.infer<typeof schema>;

const InputContainer = () => {
  const { register, control, watch, getValues, formState, setValue, setFocus } = useForm<
    z.infer<typeof schema>
  >({
    defaultValues: {
      laws: [],
      categories: [],
      arguments: [],
      name: undefined,
      text: undefined,
      content: undefined,
      contentHtml: undefined,
    },
    resolver: zodResolver(schema),
    mode: "all",
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

  const { prepend: appendArguments, remove: removeArguments } = useFieldArray<InputType>({
    control,
    name: "arguments",
  });

  const watchedLaws = watch("laws");
  const watchedCategories = watch("categories");
  const watchedArguments = watch("arguments");

  const { openModal } = useCustomModal();

  const [modalType, setModalType] = useState<"law" | "argument">("law");

  const openLawModal = useCallback(() => {
    setModalType("law");
    openModal();
  }, [openModal]);

  const openArgumentModal = useCallback(() => {
    setModalType("argument");
    openModal();
  }, [openModal]);

  const { state } = useUser();

  const variables: CreateWorldMutationVariables = {
    objects: [
      {
        world_categories: {
          data: getValues("categories").map((item) => ({ law_category_ja: item.category_ja })),
        },
        world_arguments: {
          data: getValues("arguments").map((item) => ({ argument_id: item.argument_id })),
        },
        world_laws: {
          data: getValues("laws").map((item) => ({ law_id: item.law_id })),
        },
        world_histories: {
          data: [
            {
              editor_id: state?.id,
              title: getValues("name"),
              description: getValues("text"),
              markup_text: watch("content"),
              markup_text_html: watch("contentHtml"),
            },
          ],
        },
        author_id: state?.id,
        world_editable_users: { data: [{ user_id: state?.id }] },
      },
    ],
  };

  const [mutate, { loading }] = useCreateWorldMutation();

  const router = useRouter();

  const onSubmit = () => {
    mutate({ variables })
      .then((res) => {
        toast.success("世界を作成しました");
        localStorage.removeItem("novel__content");
        router.replace(`/world/${res?.data?.insert_worlds?.returning[0]?.id}`);
      })
      .catch(() => {
        toast.error("作成に失敗しました");
      });
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setFocus("name");
    }, 500);
  }, [setFocus]);

  return (
    <form className="relative flex flex-1 items-center justify-center bg-white">
      {createPortal(
        <ButtonWrap onSubmit={onSubmit} formState={formState} isLoading={loading} />,
        document.body,
      )}
      <Modal>
        {modalType === "law" ? (
          <SearchLawModal append={appendLaws} fields={watchedLaws} remove={removeLaws} />
        ) : (
          <SearchArgumentModal
            append={appendArguments}
            fields={watchedArguments}
            remove={removeArguments}
          />
        )}
      </Modal>
      <input hidden {...register("laws")} />
      <input hidden {...register("arguments")} />
      <input hidden {...register("content")} />
      <input hidden {...register("contentHtml")} />

      <DevTool control={control} />
      <div className="relative top-0 flex w-[70%] flex-col gap-4  p-4">
        <div className="flex flex-col gap-4 pt-10">
          <div className="">世界名</div>
          <Input
            register={register}
            inputName="name"
            type="text"
            height="h-10"
            width="w-[600px]"
            placeHolder="世界の名前"
            errorMessage={formState.errors.name?.message}
            isError={!!formState.errors.name}
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
            errorMessage={formState.errors.text?.message}
            isError={!!formState.errors.text}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">世界に法令を追加する</div>
          <div className="flex flex-1 text-sm">
            <RenderAddedLaws
              laws={watchedLaws}
              append={appendLaws}
              remove={removeLaws}
              onClick={openLawModal}
            />
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
                    className="relative right-7 z-10 w-2 cursor-pointer"
                    onClick={() => {
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
        <div className="flex flex-col gap-4">
          <div className="">参考にした議論を追加する</div>
          <div className="flex flex-1 text-sm">
            <RenderAddedArguments
              argumentList={watchedArguments}
              append={appendArguments}
              remove={removeArguments}
              onClick={openArgumentModal}
            />
          </div>
        </div>
        <div className="relative mt-2 flex flex-1 flex-col gap-4 pb-20">
          <div className="">世界の詳しい説明</div>
          <Editor
            onUpdate={(html, json) => {
              setValue("contentHtml", html, { shouldDirty: true, shouldTouch: true });
              setValue("content", json, { shouldDirty: true, shouldTouch: true });
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default InputContainer;
