import React from "react";

const Law = ({
  //  description, id,
  title,
}: {
  title: string;
  id: string;
  description: string;
}) => {
  return (
    <div className="flex h-10 w-fit items-center justify-center border border-gray-300 px-4 shadow">
      <div className="">{title}</div>
    </div>
  );
};

export default Law;
