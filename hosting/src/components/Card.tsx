import clsx from "clsx";
import { ReactNode } from "react";

export const Card = ({ children, className }: { children: ReactNode; className: string }) => {
  return (
    <div
      className={clsx(
        "outline-gray border bg-stone-100 shadow outline-1 outline-gray-300 transition-all hover:bg-white hover:outline",
        className,
      )}
    >
      {children}
    </div>
  );
};
