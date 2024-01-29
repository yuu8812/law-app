"use client";
import React from "react";
import { FieldValues, FormState } from "react-hook-form";

import { Button } from "@/components/Button";

const ButtonWrap = <T extends FieldValues>({
  formState,
  onSubmit,
  isLoading,
}: {
  onSubmit: () => void;
  formState: FormState<T>;
  isLoading: boolean;
}) => {
  return (
    <div className="fixed bottom-10 right-20 z-50 flex bg-opacity-100">
      <Button text="キャンセルする" height="h-12" width="w-40" buttonType="danger" />
      <Button
        text="作成する"
        height="h-12"
        width="w-40"
        type="button"
        onClick={onSubmit}
        disabled={!formState.isValid || formState.isSubmitting || isLoading}
      />
    </div>
  );
};

export default ButtonWrap;
