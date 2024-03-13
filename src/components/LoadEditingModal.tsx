import React from "react";

import { Button } from "@/components/Button";

const LoadEditingModal = ({
  negative,
  positive,
}: {
  negative: () => void;
  positive: () => void;
}) => {
  return (
    <div className="flex h-72 w-[420px] items-center justify-center rounded bg-white shadow">
      <div className="m-10 flex flex-col items-center gap-4">
        <div className="text-lg">過去に編集していたコンテンツがあります</div>
        <div className="">読み込みますか？</div>
        <div className="flex gap-4 pt-10">
          <Button text="いいえ" width="w-32" buttonType="light" onClick={negative} />
          <Button text="はい" width="w-32" onClick={positive} />
        </div>
      </div>
    </div>
  );
};

export default LoadEditingModal;
