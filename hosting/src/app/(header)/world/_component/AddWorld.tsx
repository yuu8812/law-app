"use client";
import React from "react";
import { createPortal } from "react-dom";
import { TbWorldUp } from "react-icons/tb";

const AddWorld = () => {
  return createPortal(
    <div className="fixed bottom-4 right-4 flex items-center gap-1">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffffff] shadow-lg">
        <TbWorldUp size={32} className="transition-all hover:scale-125" color={"#03658c"} />
      </div>
    </div>,
    document.body,
  );
};

export default AddWorld;
