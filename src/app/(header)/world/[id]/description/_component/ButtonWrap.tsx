import { createPortal } from "react-dom";

import { Button } from "@/components/Button";

const ButtonWrap = ({ onSubmit, onCancel }: { onSubmit: () => void; onCancel: () => void }) => {
  return createPortal(
    <div className="fixed bottom-10 right-20 z-10 flex gap-2 bg-opacity-100">
      <Button
        text="キャンセルする"
        height="h-12"
        width="w-40"
        buttonType="light"
        onClick={onCancel}
      />
      <Button text="更新する" height="h-12" width="w-40" type="button" onClick={onSubmit} />
    </div>,
    document.body,
  );
};

export default ButtonWrap;
