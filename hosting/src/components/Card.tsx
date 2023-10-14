import clsx from "clsx";
import { ReactNode } from "react";

export const Card = ({ children, className }: { children: ReactNode; className: string }) => {
  return <div className={clsx("rounded bg-white shadow-md", className)}>{children}</div>;
};
