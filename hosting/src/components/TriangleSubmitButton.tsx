import React from "react";
import { useFormStatus } from "react-dom";
import { PiTriangleFill } from "react-icons/pi";

const TriangleSubmitButton = ({ disabled }: { disabled: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending || disabled}>
      <PiTriangleFill size={16} color={pending || disabled ? "gray" : "black"} />
    </button>
  );
};

export default TriangleSubmitButton;
