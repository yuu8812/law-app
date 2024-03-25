"use client";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

import PrivacyPolicy from "@/components/PrivacyPolicy";
import { useTimelineModal } from "@/hooks/useTimelineModal";

const PolicyProvider = ({ children }: { children: ReactNode }) => {
  const searchParam = useSearchParams();
  const getPolicyValue = searchParam.get("policy");
  const isVisiblePolicy = getPolicyValue === "visible";

  const { addTimeline } = useTimelineModal();

  useEffect(() => {
    isVisiblePolicy && addTimeline({ child: <PrivacyPolicy />, key: "privacy_policy_info" });
  }, [isVisiblePolicy, addTimeline]);

  return <>{children}</>;
};

export default PolicyProvider;
