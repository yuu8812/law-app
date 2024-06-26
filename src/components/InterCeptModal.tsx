import React from "react";

import { Button } from "@/components/Button";

const InterCeptModal = ({ negative, positive }: { negative: () => void; positive: () => void }) => {
  return (
    <div className="flex h-72 w-full items-center justify-center rounded bg-white shadow md:w-[420px]">
      <div className="m-10 flex flex-col items-center gap-4">
        <div className="text-lg">変更内容は保存されません</div>
        <div className="">よろしいですか？</div>
        <div className="flex gap-4 pt-10">
          <Button text="いいえ" width="w-32" buttonType="light" onClick={negative} />
          <Button text="はい" width="w-32" onClick={positive} />
        </div>
      </div>
    </div>
  );
};

export default InterCeptModal;
