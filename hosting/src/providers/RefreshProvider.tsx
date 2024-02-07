"use client";
import { useRouter } from "next/navigation";
import React from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

const RefreshProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  return (
    <PullToRefresh
      onRefresh={async () => {
        console.log("refresh");
        router.refresh();
      }}
    >
      {children}
    </PullToRefresh>
  );
};

export default RefreshProvider;
