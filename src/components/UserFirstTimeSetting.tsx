import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { TbPlus } from "react-icons/tb";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/Button";
import DefaultLoading from "@/components/DefaultLoading";
import { Input } from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import { GENDER } from "@/constants/gender";
import { auth } from "@/firebase/firebase.client.config";
import { useFindUserQuery, useUpdateUserMutation } from "@/graphql/type";
import { useTimelineModal } from "@/hooks/useTimelineModal";
import { useUploadImage } from "@/hooks/useUploadImage";
import { useUser } from "@/hooks/useUser";

const schema = z.object({
  name: z.string().min(1).max(20),
  age: z.number().min(0).max(150).positive(),
  sex: z.string().optional(),
  icon_url: z.string().optional(),
});

type InputType = z.infer<typeof schema>;

const UserFirstTimeSetting = ({ firstTime = true }: { firstTime: boolean }) => {
  const [step] = useState(0);
  const { register, formState, getValues, watch, setValue, reset } = useForm<InputType>({
    mode: "all",
    resolver: zodResolver(schema),
  });
  const [mutate] = useUpdateUserMutation();
  const { state } = useUser();
  const { removeModal } = useTimelineModal();

  const { data, refetch } = useFindUserQuery({ variables: { _eq: auth.currentUser?.uid } });

  useEffect(() => {
    !firstTime
      ? reset({
          icon_url: data?.users[0]?.icon_url ?? "",
          name: data?.users[0]?.name,
          age: data?.users[0].age ?? 0,
          sex: data?.users[0].gender?.toString() ?? "",
        })
      : reset({ icon_url: data?.users[0]?.icon_url ?? "" });
  }, [data, reset, firstTime]);

  const handleSubmit = async () => {
    const res = await mutate({
      variables: {
        id: state?.id ?? "",
        _set: {
          age: getValues("age"),
          name: getValues("name"),
          gender: parseInt(getValues("sex") ?? "3"),
          is_first_time: false,
          icon_url: getValues("icon_url") ? getValues("icon_url") : "/user.svg",
        },
      },
      refetchQueries: ["findUser", "findUserDescription"],
    });
    if (res) {
      toast.success("ユーザー情報を設定しました!", { icon: "🎉" });
      await refetch();
      removeModal();
    }
  };

  const { uploadImage } = useUploadImage();

  const [imageLoading, setImageLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejection: FileRejection[]) => {
      if (fileRejection.length > 0) return toast.error("画像の形式が正しくありません");
      // Do something with the files
      setImageLoading(true);
      const imageUrl = await uploadImage(acceptedFiles[0], "user_icon");
      setImageLoading(false);
      return setValue("icon_url", imageUrl);
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
  const watchImage = watch("icon_url");
  return (
    <div className="relative flex h-[500px] w-[900px] overflow-hidden rounded bg-white shadow">
      <div className="absolute flex h-full w-full items-center justify-center">
        <Image
          src="/icon2.svg"
          width={300}
          height={300}
          alt="icon"
          className="self-center justify-self-center opacity-10"
        />
      </div>
      {step === 0 && (
        <div className="relative m-10 flex flex-1 flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="w-fit text-2xl text-gray-600">
              {firstTime ? "総政治へようこそ" : "ユーザー情報設定"}
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <div className="">あなたの名前を決めてください</div>
              <Input
                register={register}
                inputName="name"
                type="text"
                errorMessage={formState.errors.name?.message}
                isError={!!formState.errors.name}
                required
                height="h-10"
              />
            </div>
            <div className="flex w-20 flex-col gap-4">
              <div className="">年齢</div>
              <div className="flex w-20 grow-0 items-center gap-2">
                <Input
                  register={register}
                  inputName="age"
                  type="number"
                  placeHolder="例) 20"
                  width="w-20"
                  errorMessage={formState.errors.age?.message}
                  isError={!!formState.errors.age}
                  required
                  height="h-10"
                />
                <>歳</>
              </div>
            </div>
            <div className="flex w-20 flex-col gap-4 pl-4">
              <div className="whitespace-nowrap">アイコン（任意）</div>
              <div
                {...getRootProps()}
                className="relative flex h-24 w-24 cursor-pointer items-center justify-center border bg-[#ffffff] pt-2 shadow-inner"
              >
                {watchImage ? (
                  <>
                    <div
                      className="absolute -right-5 -top-4 z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        setValue("icon_url", "");
                      }}
                    >
                      <RxCross2 size={22} />
                    </div>
                    <Image
                      src={watchImage}
                      alt="image"
                      fill
                      className="overflow-hidden object-cover"
                    />
                  </>
                ) : imageLoading ? (
                  <DefaultLoading />
                ) : (
                  <TbPlus className="relative bottom-[2px]" />
                )}
                <input {...getInputProps()} hidden />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">性別</div>
            <RadioButton
              name="sex"
              register={register}
              options={GENDER}
              checkedValue={getValues("sex")}
            />
          </div>
          <div className="absolute bottom-0 right-10 flex gap-2">
            <Button
              text="決定"
              width="w-40"
              onClick={handleSubmit}
              disabled={!formState.isValid || imageLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFirstTimeSetting;
