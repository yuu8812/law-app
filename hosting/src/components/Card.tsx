import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

export const Card = ({
  children,
  className,
  href,
  scroll,
  onClick,
}: {
  children: ReactNode;
  className: string;
  href?: Url;
  scroll?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  if (href)
    return (
      <Link className={clsx("outline-gray bg-white shadow", className)} href={href} scroll={scroll}>
        {children}
      </Link>
    );
  return (
    <div className={clsx("outline-gra bg-white shadow", className)} onClick={onClick}>
      {children}
    </div>
  );
};
