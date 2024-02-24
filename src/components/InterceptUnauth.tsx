"use client";
import React, { MouseEvent, ReactNode } from "react";

import { useSignUpModal } from "@/hooks/useSignupModal";
import { useUser } from "@/hooks/useUser";

const InterceptUnauth = ({ children }: { children: ReactNode }) => {
  const { state } = useUser();
  const { openModal } = useSignUpModal();
  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (state?.id) return;
    e.preventDefault();
    openModal();
  };
  return (
    <div className="flex h-fit w-fit flex-1" onClick={(e) => handleClick(e)}>
      {children}
    </div>
  );
};

export default InterceptUnauth;
