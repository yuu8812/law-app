import React from "react";

import { useSignUpModal } from "@/hooks/useSignupModal";
import { useUser } from "@/hooks/useUser";

const usePreventDefaultIfUnAuth = () => {
  const { state } = useUser();
  const { openModal } = useSignUpModal();
  const redirect = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!state?.id) {
      e.preventDefault();
      openModal();
    }
  };

  return { redirect };
};

export default usePreventDefaultIfUnAuth;
