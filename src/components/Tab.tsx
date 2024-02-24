"use client";
import React, { useState } from "react";

const Tab = ({ settings }: { settings: { name: string; text: string }[] }) => {
  const [tab, setTab] = useState<string>(settings[0].name);

  return (
    <div className="relative top-0 flex h-full w-full flex-1 flex-col overflow-scroll">
      <div className="sticky top-2 z-50 flex min-h-[40px] rounded bg-[#ffffff] text-sm">
        <div className="flex flex-1 items-center justify-between gap-2 px-1 ">
          {settings.map((setting, i) => {
            return (
              <button
                className={`flex flex-1 items-center justify-center rounded py-1 ${setting.name === tab ? "bg-so_se_ji text-white" : "bg-gray-200"}`}
                onClick={() => setTab(setting.name)}
                key={i}
              >
                {setting.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tab;
