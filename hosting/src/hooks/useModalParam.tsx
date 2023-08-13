"use client";
import { useCallback } from "react";

import { useStaticModalSWR } from "./useStaticSwr";

const useModalParams = () => {
  const { data, mutate } = useStaticModalSWR();
  const hideModal = useCallback(() => {
    mutate({ type: null, text: "" });
  }, [mutate]);
  const showModal = useCallback(
    (text?: string) => {
      hideModal();
      if (text) mutate({ type: "message", text: text });
      if (!text) mutate({ type: "loading" });
      if (!text) {
        setTimeout(() => {
          hideModal();
        }, 500);
      }
    },
    [mutate, hideModal],
  );

  return { showModal, hideModal, data };
};

export default useModalParams;
