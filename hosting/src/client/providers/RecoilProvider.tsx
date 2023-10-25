"use client";
import React, { ReactNode } from "react";
import { RecoilEnv, RecoilRoot } from "recoil";

// コンソールエラーの消去
//https://github.com/facebookexperimental/Recoil/issues/733#issuecomment-1399410023
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const RecoilProvider = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
