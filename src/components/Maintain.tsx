import moment from "moment";
import Image from "next/image";
import React from "react";
import { FaWrench } from "react-icons/fa6";

import "moment/locale/ja";

export const Maintain = ({ endTimestamp }: { endTimestamp?: string | null }) => {
  const maintainEndTime = endTimestamp ? moment(endTimestamp).calendar().toString() : null;
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-white">
      <div className="absolute left-4 top-4 flex flex-1 flex-col">
        <div
          className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all`}
        >
          <Image src={"/icon.svg"} alt="here" width={32} height={32} />
          <p>総政治 [β]</p>
        </div>
      </div>
      <div className="my-10 flex items-center gap-4">
        <FaWrench size={30} />
        <div className="text-xl">現在メンテナンス中です</div>
      </div>
      <>{maintainEndTime && maintainEndTime}に終了いたします</>
      <div className="">ご迷惑をおかけします🙇</div>
    </div>
  );
};
