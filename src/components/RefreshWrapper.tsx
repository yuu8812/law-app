"use client";
import { useWindowWidth } from "@react-hook/window-size";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

const RefreshWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const handleRefresh = async () => {
    router.refresh();
  };

  const width = useWindowWidth();

  if (width > 600) {
    return <>{children}</>;
  }

  return (
    <PullToRefresh
      onRefresh={handleRefresh}
      className="flex h-full w-full flex-1"
      maxPullDownDistance={200}
      pullingContent={<></>}
    >
      <div className="flex flex-1 flex-col">{children as ReactNode}</div>
    </PullToRefresh>
  );
};

export default RefreshWrapper;
