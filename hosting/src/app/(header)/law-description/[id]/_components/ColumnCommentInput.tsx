"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createCommentAction } from "@/app/(header)/law-description/[id]/_action";
import { TextArea } from "@/components/TextArea";
import TriangleSubmitButton from "@/components/TriangleSubmitButton";
import { basicCommentObject } from "@/constants/form/schema";

export type ColumnCommentState = {
  variables: {
    law_revision_column_identify_id: string;
    law_revision_id: string;
  };
  error: string | null;
  return: string | null;
};

type Comment = {
  comment: string;
};

const ColumnCommentInput = ({
  columnId,
  lawRevisionId,
}: {
  columnId: string;
  lawRevisionId: string;
}) => {
  const { register, reset, formState } = useForm<Comment>({
    resolver: zodResolver(basicCommentObject),
  });

  const [state, formAction] = useFormState<ColumnCommentState, FormData>(createCommentAction, {
    variables: {
      law_revision_column_identify_id: columnId ?? "ALL",
      law_revision_id: lawRevisionId,
    },
    error: null,
    return: null,
  });

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.return && !state.error) {
      toast.success("コメントを投稿しました");
      reset();
    }
  }, [state, reset]);

  return (
    <form action={formAction} className="px-2">
      <TextArea
        register={register}
        inputName="comment"
        width="w-full"
        height="min-h-[100px]"
        Icon={<TriangleSubmitButton disabled={!formState.isValid} />}
      />
    </form>
  );
};

export default ColumnCommentInput;
