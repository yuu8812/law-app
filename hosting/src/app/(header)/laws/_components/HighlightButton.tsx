import React from "react";
import { FaCaretRight } from "react-icons/fa";

const HighlightButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex h-full w-4 items-center justify-center bg-gray-200" onClick={onClick}>
      <FaCaretRight />
    </div>
  );
};

export default HighlightButton;
