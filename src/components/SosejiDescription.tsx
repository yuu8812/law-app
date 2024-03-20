import React from "react";

import { Button } from "@/components/Button";

const SosejiDescription = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="-pt-10 relative z-50 md:pt-0">
      <div className="flex h-auto w-full flex-1 flex-col rounded bg-[#ffffff] shadow md:h-[500px] lg:w-[800px]">
        <div className="relative m-10 mb-10 flex flex-1 flex-col">
          <div className="text-xl">総政治へようこそ</div>
          <div className="flex flex-col gap-1 pt-10">
            <div className="">
              あなたの元へは毎日のように、今の世界を離れ移住をしたいさまざまな生物が集まってきます
            </div>
            <div className="">彼らのために素晴らしい世界を見つけて彼らを移住させましょう</div>
          </div>
          <div className="pt-10">
            <div className="font-bold">***気に入った世界がないですか?***</div>
            <div className="flex flex-col gap-1 pt-5">
              <div className="">ここでは好きなように世界と決まりを作ることができます</div>
              <div className="">あなたの世界を作って、新しい住人を迎えましょう</div>
            </div>
          </div>
        </div>
        <div className="relative my-10 self-center">
          <Button text="始める" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default SosejiDescription;
