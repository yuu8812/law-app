import React from "react";

const Argument = ({
  // description,
  // id,
  title,
}: {
  title: string;
  id: string;
  description: string;
}) => {
  return (
    <div className="flex h-10 w-fit cursor-pointer items-center justify-center border border-gray-300 bg-[#fff] px-4 shadow hover:bg-gray-100">
      <div className="">{title}</div>
    </div>
  );
};

export default Argument;
