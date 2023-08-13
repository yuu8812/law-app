"use client";

import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import VHClient from "../../100vh/VHClient";
import { Button } from "../../ui/button";
import { Card, CardDescription, CardTitle } from "../../ui/card";

import useModalParams from "@/hooks/useModalParam";
import { cn } from "@/lib/utils";

const Modal = () => {
  const { hideModal, data } = useModalParams();

  return (
    <div
      className={cn(
        !data.type ? "opacity-0 -z-50" : "opacity-100 z-50",
        "fixed backdrop-blur-sm bg-gray-200 bg-opacity-30 transition-all",
      )}
    >
      <VHClient>
        <div
          className={cn("h-full w-full flex items-center justify-center")}
          onClick={() => {
            hideModal();
          }}
        >
          <Card
            className={cn(
              "w-80 h-60 px-8 flex items-center justify-center flex-col shadow-2xl transition-all duration-700",
              !data.type ? "opacity-0 bg-gray-200" : "opacity-100 bg-white",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {data.type === "message" && (
              <div className="relative flex flex-col h-full w-full justify-around">
                <div className="">
                  <CardTitle className="text-md my-4">{data.text}</CardTitle>
                  <CardDescription>もう一度お試しください</CardDescription>
                </div>
                <Button className="relative bottom-0" onClick={hideModal}>
                  閉じる
                </Button>
              </div>
            )}
            {data.type === "loading" && (
              <div className="text-primary animate-pulse">
                <FontAwesomeIcon
                  icon={faTowerBroadcast}
                  size={"3x"}
                  className="w-14 h-14 duration-700"
                />
              </div>
            )}
          </Card>
        </div>
      </VHClient>
    </div>
  );
};

export default Modal;
