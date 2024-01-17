"use client";
import React from "react";

import { Button } from "@/components/Button";

const ButtonWrap = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex bg-opacity-100">
      <Button text="キャンセルする" height="h-12" width="w-40" buttonType="danger" />
      <Button text="作成する" height="h-12" width="w-40" type="submit" />
    </div>
  );
};

export default ButtonWrap;
