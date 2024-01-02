"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { PiTriangleFill } from "react-icons/pi";

import { Input } from "@/components/Input";

const ColumnCommentInput = () => {
  const { pending } = useFormStatus();
  const { register } = useForm<{ comment: string }>();
  return (
    <form>
      <Input
        register={register}
        inputName="comment"
        type="text"
        width="w-full"
        Icon={
          <button type="submit" disabled={pending}>
            <PiTriangleFill size={20} color={pending ? "gray" : "black"} />
          </button>
        }
      />
    </form>
  );
};

export default ColumnCommentInput;
