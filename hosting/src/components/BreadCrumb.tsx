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
    <Link className="sticky top-0 flex items-center gap-2 px-1 pb-2" href={href}>
      <div className="underline">{leftText}</div>
      <IoIosArrowForward className="relative top-[2px]" />
      <div className="underline">{rightText}</div>
    </Link>
  );
};
