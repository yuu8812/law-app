import clsx from "clsx";
import React from "react";

const Badge = ({ text, className }: { text: string; className: string }) => {
  return (
    <div
      className={clsx(
        `cursor-default overflow-hidden bg-white py-2 shadow-md [writing-mode:vertical-rl]`,
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
