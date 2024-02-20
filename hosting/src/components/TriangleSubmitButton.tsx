import React from "react";
import { PiTriangleFill } from "react-icons/pi";

const TriangleSubmitButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <button type="submit" disabled={disabled}>
      <PiTriangleFill
        size={16}
        color={disabled ? "#c3c3c3" : "#02367baf"}
        className="relative left-[1px] top-1"
      />
    </button>
  );
};

export default TriangleSubmitButton;
