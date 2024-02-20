import Image from "next/image";
import React, { ReactNode } from "react";
import { UseFieldArrayRemove } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import CitizensDrawer from "@/app/(header)/world/_component/CitizensDrawer";
import { InputType } from "@/app/(header)/world/create/_component/InputContainer";

const WhiteBox = ({ children, shadow }: { children: ReactNode; shadow?: boolean }) => {
  return (
    <div className={`flex w-fit rounded bg-[#ffffff] ${shadow && "border shadow-inner"}`}>
      {children}
    </div>
  );
};

const RenderAddedCitizens = ({
  citizens,
  remove,
  onClick,
  setValue,
}: {
  citizens: InputType["citizens"];
  remove: UseFieldArrayRemove;
  onClick: () => void;
  setValue: ([{ citizen_id, name, url }]: {
    citizen_id: string;
    name: string;
    url: string;
  }[]) => void;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-1 flex-wrap gap-2">
        {citizens.map((item, i) => {
          return (
            <WhiteBox key={item.citizen_id + "added_laws"} shadow>
              <div className="flex flex-1 items-center gap-1 rounded">
                <div className="flex h-12 items-center justify-center">
                  <div className="ml-2 h-8 w-8 overflow-hidden rounded-full object-cover">
                    <Image src={item.url ?? ""} alt="name" width={32} height={32} className="" />
                  </div>
                  <div className="px-2">{item.name}</div>
                </div>
                <div onClick={() => remove(i)} className="cursor-pointer pr-1">
                  <IoCloseSharp size={20} className="relative top-[1px]" />
                </div>
              </div>
            </WhiteBox>
          );
        })}
      </div>
      <CitizensDrawer setValue={setValue} citizens={citizens}>
        <WhiteBox>
          <button
            className="hover:bg-so_se_ji flex h-10 w-40 flex-col items-center justify-center rounded bg-[#ffffff] shadow-sm transition-all hover:border hover:text-white"
            onClick={onClick}
            type="button"
          >
            <p className="">追加する</p>
          </button>
        </WhiteBox>
      </CitizensDrawer>
    </div>
  );
};

export default RenderAddedCitizens;
