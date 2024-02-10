"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "sonner";
import * as z from "zod";

import ButtonWrap from "@/app/(header)/world/create/_component/ButtonWrap";
import SearchArgumentModal from "@/app/(header)/world/create/_component/SearchArgumentModal";
import SearchCitizensModal from "@/app/(header)/world/create/_component/SearchCitizensModal";
import SearchLawModal from "@/app/(header)/world/create/_component/SearchLawModal";
import CustomModal from "@/components/CustomModal";
import Editor from "@/components/editor/Editor";
import { Input } from "@/components/Input";
import RenderAddedArguments from "@/components/RenderAddedArgument";
import RenderAddedCitizens from "@/components/RenderAddedCitizens";
import RenderAddedLaws from "@/components/RenderAddedLaws";
import RequiredBadge from "@/components/RequiredBadge";
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
  citizens: z
    .array(
      z.object({
        citizen_id: z.string(),
        name: z.string(),
        url: z.string().nullable(),
      }),
    )
    .min(1),
  content: z.string().nullable(),
  contentHtml: z.string().nullable(),
});

export type InputType = z.infer<typeof schema>;

const InputContainer = () => {
  const { register, control, watch, formState, setValue, handleSubmit } = useForm<
    z.infer<typeof schema>
  >({
    defaultValues: {
      laws: [],
      categories: [],
      arguments: [],
      citizens: [],
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

  const { prepend: appendCitizens, remove: removeCitizens } = useFieldArray<InputType>({
    control,
    name: "citizens",
  });

  const watchedLaws = watch("laws");
  const watchedCategories = watch("categories");
  const watchedArguments = watch("arguments");
  const watchedCitizens = watch("citizens");

  const [touchedCitizens, setTouchedCitizens] = useState(false);

  const { openModal } = useCustomModal();

  const [modalType, setModalType] = useState<"law" | "argument" | "citizens">("law");

  const openLawModal = useCallback(() => {
    setModalType("law");
    openModal();
  }, [openModal]);

  const openArgumentModal = useCallback(() => {
    setModalType("argument");
    openModal();
  }, [openModal]);

  const openCitizensModal = useCallback(() => {
    setModalType("citizens");
    setTouchedCitizens(true);
    openModal();
  }, [openModal, setTouchedCitizens]);

  const { state } = useUser();

  const variables = (data: z.infer<typeof schema>): CreateWorldMutationVariables => ({
    objects: [
      {
        world_categories: {
          data: data.categories.map((item) => ({ law_category_ja: item.category_ja })),
        },
        world_arguments: {
          data: data.arguments.map((item) => ({ argument_id: item.argument_id })),
        },
        world_laws: {
          data: data.laws.map((item) => ({ law_id: item.law_id })),
        },
        world_histories: {
          data: [
            {
              editor_id: state?.id,
              title: data.name,
              description: data.text,
              markup_text: data.content,
              markup_text_html: data.contentHtml,
            },
          ],
        },
        world_chat_boxes: {
          data: [{ title: "ALL", status: 0, author_id: state?.id, description: "全体チャット" }],
        },
        author_id: state?.id,
        world_editable_users: { data: [{ user_id: state?.id }] },
        world_citizens: {
          data: data.citizens.map((item) => ({ citizen_id: item.citizen_id, user_id: state?.id })),
        },
      },
    ],
  });

  const [mutate, { loading }] = useCreateWorldMutation();

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const res = await mutate({ variables: variables(data) }).catch(() => {
      toast.error("作成に失敗しました");
    });

    if (res) {
      toast.success("世界を作成しました");
      router.replace(`/world/${res?.data?.insert_worlds?.returning[0]?.id}/description`);
    }
  };

  return (
    <form
      className="relative flex flex-1 items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {createPortal(
        <ButtonWrap onSubmit={handleSubmit(onSubmit)} formState={formState} isLoading={loading} />,
        document.body,
      )}
      <CustomModal>
        {modalType === "law" ? (
          <SearchLawModal append={appendLaws} fields={watchedLaws} remove={removeLaws} />
        ) : modalType === "argument" ? (
          <SearchArgumentModal
            append={appendArguments}
            fields={watchedArguments}
            remove={removeArguments}
          />
        ) : (
          <SearchCitizensModal
            append={appendCitizens}
            fields={watchedCitizens}
            remove={removeCitizens}
          />
        )}
      </CustomModal>
      <input hidden {...register("laws")} />
      <input hidden {...register("arguments")} />
      <input hidden {...register("citizens")} />
      <input hidden {...register("content")} />
      <input hidden {...register("contentHtml")} />
      <DevTool control={control} />
      <div className="relative top-0 flex w-[70%] flex-col gap-4 rounded-lg p-4">
        <div className="flex flex-1 flex-col gap-4 pt-10">
          <div className="flex flex-1 items-center gap-4">
            <div className="">世界の名前</div>
            <RequiredBadge
              error={!!formState.errors.name?.message || !formState.touchedFields.name}
            />
          </div>
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
          <div className="flex flex-1 items-center gap-4">
            <div className="">どんな世界？</div>
            <RequiredBadge
              error={!!formState.errors.text?.message || !formState.touchedFields.text}
            />
          </div>
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
          <div className="flex flex-1 items-center gap-4">
            <div className="">個体を追加する</div>
            <RequiredBadge
              error={!(watchedCitizens.length > 0 && touchedCitizens)}
              subMessage="(最低1体)"
            />
          </div>
          <div className="flex flex-1 text-sm">
            <RenderAddedCitizens
              citizens={watchedCitizens}
              append={appendCitizens}
              remove={removeCitizens}
              onClick={openCitizensModal}
            />
          </div>
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
        <div className="flex flex-1 flex-col gap-2">
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
                    bigSelect
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
            bigSelect
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
        <div className="relative mt-2 flex min-w-[600px] flex-col gap-4 pb-20">
          <div className="w-full">世界の詳しい説明</div>
          <div className="flex min-h-[500px]">
            <Editor
              minHeight="min-h-[500px]]"
              editable={true}
              onChange={(v) => setValue("content", v)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputContainer;
