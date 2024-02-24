import Link from "next/link";
import React from "react";

const World = ({ id, title }: { title: string; id: string; description: string }) => {
  return (
    <Link
      href={`/world/${id}/description`}
      className="min-h-6 flex w-fit cursor-pointer items-center justify-center break-all border border-gray-300 bg-[#ffffff] px-1 shadow hover:bg-gray-100"
    >
      <div className="">{title}</div>
    </Link>
  );
};

export default World;
