import React from "react";

import { Button } from "@/components/Button";

const SosejiDescription = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative z-50">
      <div className="flex h-[500px] w-[800px] flex-1 flex-col rounded bg-[#ffffff] shadow">
        <div className="relative m-10 flex flex-1 flex-col">
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
        <div className="relative bottom-10 self-center">
          <Button text="始める" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default SosejiDescription;
