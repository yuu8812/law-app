"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { useFieldArray, useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { TbPlus } from "react-icons/tb";
import { toast } from "sonner";
import * as z from "zod";

import ButtonWrap from "@/app/(header)/world/create/_component/ButtonWrap";
import DefaultLoading from "@/components/DefaultLoading";
import Editor from "@/components/editor/Editor";
import { Input } from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import RenderAddedCitizens from "@/components/RenderAddedCitizens";
import RenderAddedLaws from "@/components/RenderAddedLaws";
import RequiredBadge from "@/components/RequiredBadge";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";
import { WORLD_BLOCK_TEMPLATE } from "@/editorTemplate/worldTemplate";
import { CreateWorldMutationVariables, useCreateWorldMutation } from "@/graphql/type";
import { useUploadImage } from "@/hooks/useUploadImage";
import { useUser } from "@/hooks/useUser";
import { removeStorage } from "@/utils/editorStorage";
import { genThumbnail } from "@/utils/genRandomThumbnail";

const schema = z.object({
  name: z.string().min(1, { message: "入力してください" }).max(50),
  text: z.string().min(1, { message: "入力してください" }).max(200),
  laws: z
    .array(
      z.object({
        law_id: z.string(),
        text: z.string(),
        description: z.string(),
        law_image_url: z.string().nullable(),
      }),
    )
    .min(0),
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
  language: z.string().optional(),
  securityLevel: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type InputType = z.infer<typeof schema>;

const InputContainer = () => {
  const { register, control, watch, formState, setValue, handleSubmit, getValues } = useForm<
    z.infer<typeof schema>
  >({
    defaultValues: {
      laws: [],
      citizens: [],
      name: undefined,
      text: undefined,
    },
    resolver: zodResolver(schema),
    mode: "all",
  });

  const { remove: removeLaws } = useFieldArray<InputType>({
    control,
    name: "laws",
  });

  const { remove: removeCitizens } = useFieldArray<InputType>({
    control,
    name: "citizens",
  });

  const watchedLaws = watch("laws");
  // const watchedArguments = watch("arguments");
  const watchedCitizens = watch("citizens");

  const [touchedCitizens, setTouchedCitizens] = useState(false);

  const [, setModalType] = useState<"law" | "argument" | "citizens">("law");

  const openLawModal = useCallback(() => {
    setModalType("law");
  }, []);

  const openCitizensModal = useCallback(() => {
    setModalType("citizens");
    setTouchedCitizens(true);
  }, [setTouchedCitizens]);

  const { state } = useUser();

  const variables = (data: z.infer<typeof schema>): CreateWorldMutationVariables => ({
    objects: [
      {
        world_laws: {
          data: data.laws.map((item) => ({ law_id: item.law_id })),
        },
        world_histories: {
          data: [
            {
              title: data.name,
              description: data.text,
              block_json: data.content,
              official_language: data.language ?? "",
              public_security: parseInt(data.securityLevel ?? "0"),
              world_image_url: data.imageUrl ? data.imageUrl : genThumbnail(),
            },
          ],
        },
        author_id: state?.id,
        world_citizens: {
          data: data.citizens.map((item) => ({ citizen_id: item.citizen_id })),
        },
      },
    ],
  });

  const [mutate, { loading }] = useCreateWorldMutation();

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const res = await mutate({
      variables: variables(data),
      refetchQueries: ["findWorlds", "findCitizensNotBelongToWorldByUserId"],
    }).catch(() => {
      toast.error("作成に失敗しました");
    });

    if (res) {
      toast.success("世界を作成しました");
      router.replace(`/world/${res?.data?.insert_worlds?.returning[0]?.id}/description`);
      removeStorage("createWorld");
    }
  };

  const { uploadImage } = useUploadImage();

  const [imageLoading, setImageLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejection: FileRejection[]) => {
      // Do something with the files
      if (fileRejection.length > 0) return toast.error("画像の形式が正しくありません");
      setImageLoading(true);
      const imageUrl = await uploadImage(acceptedFiles[0], "createWorld");
      setImageLoading(false);
      return setValue("imageUrl", imageUrl);
    },
    [uploadImage, setValue],
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,

    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg"],
      "image/jpg": [".jpg"],
      "image/gif": [".gif"],
    },
    maxFiles: 1,
  });

  const watchImage = watch("imageUrl");

  return (
    <form
      className="relative flex flex-1 items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ButtonWrap
        onSubmit={handleSubmit(onSubmit)}
        formState={formState}
        isLoading={loading}
        onCancel={() => router.replace("/world")}
      />
      <input hidden {...register("laws")} />
      <input hidden {...register("citizens")} />
      <input hidden {...register("content")} />
      <input hidden {...register("contentHtml")} />
      <div className="relative top-0 flex w-[70%] flex-col gap-6 rounded-lg p-4">
        <div className="pb-2 pt-4 text-2xl">世界を追加</div>
        <div className="text-lg text-gray-500">あなただけの世界を作って公開してみましょう</div>
        <div className="flex flex-1 flex-col gap-4 pt-4">
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
            <RequiredBadge error={!!formState.errors.text || !formState.touchedFields.text} />
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
              remove={removeCitizens}
              onClick={openCitizensModal}
              setValue={(arr) => setValue("citizens", arr)}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">世界に決まりを追加する</div>
          <div className="flex flex-1 text-sm">
            <RenderAddedLaws
              laws={watchedLaws}
              remove={removeLaws}
              onClick={openLawModal}
              setValue={(arr) => setValue("laws", arr)}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">世界の公用語</div>
          <Select
            register={register}
            name="language"
            options={language
              .map((language) => ({ label: language.ja, value: language.en }))
              .concat([{ label: "未設定", value: "" }])}
            bigSelect
            initialMessage="未設定"
            onChange={(v) =>
              setValue("language", v.value, {
                shouldDirty: true,
                shouldTouch: true,
              })
            }
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">世界の目標の治安レベル</div>
          <RadioButton
            name="securityLevel"
            register={register}
            options={securityLevel.map((v, i) => ({ id: v, label: v, value: i.toString() }))}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">世界のイメージ画像を追加する</div>
          <div
            className="relative flex h-40 w-60 cursor-pointer items-center justify-center border bg-[#ffffff] pt-2 shadow-inner"
            {...getRootProps()}
          >
            {watchImage ? (
              <>
                <div
                  className="absolute -right-5 -top-4 z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setValue("imageUrl", "");
                  }}
                >
                  <RxCross2 size={22} />
                </div>
                <Image src={watchImage} alt="image" fill className="overflow-hidden object-cover" />
              </>
            ) : imageLoading ? (
              <DefaultLoading />
            ) : (
              <TbPlus />
            )}
            <input {...getInputProps()} />
          </div>
        </div>

        <div className="relative mt-2 flex min-w-[600px] flex-col gap-4 pb-20">
          <div className="w-full">世界の詳しい説明</div>
          <div className="flex min-h-[700px]">
            <Editor
              editorKey="createWorld"
              minHeight="min-h-[700px]]"
              editable={true}
              onChange={(v) => setValue("content", v)}
              template="world"
              templateBlock={WORLD_BLOCK_TEMPLATE({
                title: getValues("name"),
                laws: getValues("laws"),
                description: getValues("text"),
              })}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputContainer;
