"use client";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { TbPlus } from "react-icons/tb";
import { toast } from "sonner";
import { z } from "zod";

import ButtonWrap from "@/app/(header)/world/create/_component/ButtonWrap";
import DefaultLoading from "@/components/DefaultLoading";
import Editor from "@/components/editor/Editor";
import { Input } from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import RequiredBadge from "@/components/RequiredBadge";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import { LAW_CATEGORIES } from "@/constants/lawCategory";
import { FindLawsDocument, useCreateLawMutation } from "@/graphql/type";
import { useUploadImage } from "@/hooks/useUploadImage";
import { useUser } from "@/hooks/useUser";

const RULE_TYPE = [
  { id: "none", label: "未設定", value: "0" },
  { id: "law", label: "法令", value: "1" },
  { id: "rule", label: "ルール", value: "2" },
  { id: "moral", label: "モラル", value: "3" },
  { id: "other", label: "その他", value: "4" },
];

const NEW_LAW_OR_EXISTS_LAW = [
  { id: "new", label: "新しい決まり", value: "0" },
  { id: "exists", label: "既存の決まり", value: "1" },
];

const schema = z.object({
  name: z.string().min(1, { message: "入力してください" }).max(50),
  description: z.string().min(1, { message: "入力してください" }).max(200),
  lawType: z.string(),
  category: z.string(),
  imageUrl: z.string().optional(),
  content: z.string().optional(),
  newOrExists: z.string(),
  place: z.string().max(100).optional(),
});

type LawInput = z.infer<typeof schema>;

const Container = () => {
  const { register, formState, handleSubmit, control, setValue, watch } = useForm<LawInput>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const [mutate] = useCreateLawMutation();

  const { state } = useUser();
  const router = useRouter();

  const onSubmit = async (data: LawInput) => {
    const res = await mutate({
      variables: {
        author_id: state?.id ?? "",
        type: 0,
        place: data.place,
        newness: Number(data.newOrExists),
        law_revisions: {
          data: [
            {
              title: data.name,
              description: data.description,
              category_ja: LAW_CATEGORIES.find((item) => item.category_number === data.category)
                ?.category_ja,
              text_block: data.content,
              law_image_url: data.imageUrl,
            },
          ],
        },
      },
      refetchQueries: [{ query: FindLawsDocument }],
    });
    if (res) {
      router.replace(`/law/${res.data?.insert_laws_one?.id}`);
      toast.success("決まりを作成しました", { icon: <>🎉</> });
    }
  };
  const { uploadImage } = useUploadImage();

  const [imageLoading, setImageLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejection: FileRejection[]) => {
      // Do something with the files
      if (fileRejection.length > 0) return toast.error("画像の形式が正しくありません");
      setImageLoading(true);
      const imageUrl = await uploadImage(acceptedFiles[0], "createLaw");
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
    <div className="flex flex-1 flex-col items-center">
      <DevTool control={control} />
      <ButtonWrap
        onSubmit={handleSubmit(onSubmit)}
        formState={formState}
        isLoading={formState.isSubmitting}
        onCancel={() => router.replace("/law")}
      />
      <div className="flex w-[60%] flex-col gap-6 pt-6">
        <div className="pb-2 text-2xl">決まりを追加する</div>
        <div className="flex flex-col pb-10 text-lg text-gray-500">
          <p className="">世の中にあるさまざまな決まりを探して追加してみましょう。</p>
          <p className="pt-10">追加したい決まりがないですか?</p>
          <p className="pt-2">
            あなたの考えた決まりを追加してみましょう。あなたの決まりが世界を変えるかもしれません。
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">新しい決まりか既存の決まりか</div>
          <RadioButton register={register} name="newOrExists" options={NEW_LAW_OR_EXISTS_LAW} />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="">決まりの名前</div>
            <RequiredBadge
              error={!!formState.errors.name?.message || !formState.touchedFields.name}
            />
          </div>
          <Input
            register={register}
            inputName="name"
            type="text"
            height="h-10"
            width="w-[400px]"
            placeHolder="決まりの名前"
            isError={!!formState.errors.name}
            errorMessage={formState.errors.name?.message}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="">どんな決まり?</div>
            <RequiredBadge
              error={
                !!formState.errors.description?.message || !formState.touchedFields.description
              }
            />
          </div>
          <TextArea
            register={register}
            inputName="description"
            height="min-h-[200px]"
            width="w-[500px]"
            placeHolder="大まかな決まりの説明"
            isError={!!formState.errors.description}
            errorMessage={formState.errors.description?.message}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="">どこにある決まり?</div>
          </div>
          <Input
            register={register}
            inputName="place"
            type="text"
            height="h-10"
            width="w-[400px]"
            placeHolder="決まりがある場所"
            isError={!!formState.errors.place}
            errorMessage={formState.errors.place?.message}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">種類</div>
          <RadioButton register={register} name="lawType" options={RULE_TYPE} />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">カテゴリー</div>
          <Select
            options={LAW_CATEGORIES.map((item) => ({
              label: item.category_ja,
              value: item.category_number,
            })).concat({ label: "未設定", value: "00" })}
            name="category"
            initialMessage="未設定"
            displayCurrentValue
            register={register}
            bigSelect
            onChange={(v) => setValue("category", v.value)}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="">決まりのイメージ画像を追加する</div>
          <div
            {...getRootProps()}
            className="relative flex h-40 w-60 cursor-pointer items-center justify-center border bg-[#ffffff] pt-2 shadow-inner"
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
            <input {...getInputProps()} hidden />
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <div className="">詳しい決まりの説明</div>
          <Editor editable minHeight="min-h-[700px]" onChange={(v) => setValue("content", v)} />
        </div>
      </div>
    </div>
  );
};

export default Container;
