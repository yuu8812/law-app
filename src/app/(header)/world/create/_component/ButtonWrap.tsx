"use client";
import React from "react";
import { createPortal } from "react-dom";
import { FieldValues, FormState } from "react-hook-form";

import { Button } from "@/components/Button";

const ButtonWrap = <T extends FieldValues>({
  formState,
  onSubmit,
  isLoading,
  onCancel,
}: {
  onSubmit: () => void;
  formState: FormState<T>;
  isLoading: boolean;
  onCancel: () => void;
}) => {
  return createPortal(
    <div className="fixed bottom-2 right-2 z-10 flex flex-col-reverse gap-2 bg-opacity-100 md:bottom-10 md:right-20 md:flex-row">
      <Button
        text="キャンセルする"
        height="h-12"
        width="w-40"
        buttonType="light"
        onClick={onCancel}
      />
      <Button
        text="作成する"
        height="h-12"
        width="w-40"
        type="button"
        onClick={onSubmit}
        disabled={!formState.isValid || formState.isSubmitting || isLoading}
      />
    </div>,
    document.body,
  );
};

export default ButtonWrap;
