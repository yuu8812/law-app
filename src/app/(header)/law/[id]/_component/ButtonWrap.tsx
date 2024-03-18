import { createPortal } from "react-dom";

import { Button } from "@/components/Button";

const ButtonWrap = ({ onSubmit, onCancel }: { onSubmit: () => void; onCancel: () => void }) => {
  return createPortal(
    <div className="fixed bottom-2 right-4  z-10 flex flex-col-reverse gap-2 bg-opacity-100 md:bottom-10 md:right-20 md:flex-row">
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
