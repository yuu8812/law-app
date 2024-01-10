"use client";
import Lottie, { InteractivityProps } from "lottie-react";
import React from "react";

import homeLottie from "@/lottie/home-lottie.json";

const interactivity: Omit<InteractivityProps, "lottieObj"> | undefined = {
  mode: "scroll",
  actions: [
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

const LottieHome = () => {
  return (
    <Lottie width={100} interactivity={interactivity} animationData={homeLottie} loop={true} />
  );
};

export default LottieHome;
