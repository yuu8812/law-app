import Link from "next/link";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const BreadCrumb = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link className="flex items-center gap-2" href={href}>
      <div className="relative top-[1px]">
        <AiOutlineLeft />
      </div>
      {text}
    </Link>
  );
};
