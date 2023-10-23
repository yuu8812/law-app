import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

export const Card = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className: string;
  href?: Url;
}) => {
  if (href)
    return (
      <Link
        className={clsx(
          "outline-gray border bg-stone-100 shadow outline-1 outline-gray-300 transition-all hover:bg-white hover:outline",
          className,
        )}
        href={href}
      >
        {children}
      </Link>
    );
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
