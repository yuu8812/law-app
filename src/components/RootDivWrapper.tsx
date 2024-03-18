"use client";
import React, { ReactNode } from "react";
import Div100vh from "react-div-100vh";

const RootDivWrapper = ({ children }: { children: ReactNode }) => {
  return <Div100vh>{children}</Div100vh>;
};

export default RootDivWrapper;
