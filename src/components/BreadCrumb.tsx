import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const BreadCrumb = ({
  leftText,
  rightText,
  href,
}: {
  leftText: string;
  rightText: string;
  href: string;
}) => {
  return (
    <div className="flex items-center gap-2 px-1 pb-2">
      <Link className="underline" href={href}>
        {leftText}
      </Link>
      <IoIosArrowForward className="relative top-[2px]" />
      <div className="">{rightText}</div>
    </div>
  );
};
