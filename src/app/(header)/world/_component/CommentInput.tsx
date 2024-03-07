import React from "react";
import { useForm } from "react-hook-form";
import { VscSend } from "react-icons/vsc";
import { toast } from "sonner";
import { z } from "zod";

import TextArea from "@/components/TextArea";
import { useCreateWorldCommentMutation } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const schema = z.object({
  text: z.string().min(1, { message: "入力してください" }).max(200),
});

type Schema = z.infer<typeof schema>;

const CommentInput = ({ world_id }: { world_id: string }) => {
  const { register, getValues, setValue, reset, formState } = useForm<Schema>();

  const [mutate] = useCreateWorldCommentMutation({ refetchQueries: ["FindWorldComments"] });

  const { state } = useUser();
  const onSubmit = async () => {
    await mutate({
      variables: { text: getValues("text"), world_id, author_id: state?.id ?? "" },
    });
    toast.success("コメントを投稿しました", { icon: <div className="text-xl">🎉</div> });
    reset();
  };

  return (
    <div className="flex flex-1">
      <div className="flex flex-1 justify-between gap-2 pr-2">
        <TextArea<Schema>
          register={register}
          inputName="text"
          width="h-10 w-full"
          onSubmit={onSubmit}
          Icon={
            <VscSend
              size={22}
              className={`relative top-2 cursor-pointer transition-all active:opacity-25`}
            />
          }
          disabled={!formState.isValid}
          onInput={(v) =>
            setValue("text", v, { shouldValidate: true, shouldDirty: true, shouldTouch: true })
          }
        />
      </div>
    </div>
  );
};

export default CommentInput;
