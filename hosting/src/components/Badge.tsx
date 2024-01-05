import clsx from "clsx";
import React from "react";

const Badge = ({
  text,
  className,
  vertical,
}: {
  text: string;
  className?: string;
  vertical?: boolean;
}) => {
  return (
    <div
      className={clsx(
        `cursor-default overflow-hidden  bg-white shadow-md`,
        className,
        vertical ? "py-4 [writing-mode:vertical-rl]" : "flex items-center justify-center px-4",
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
