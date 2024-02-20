import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-6 flex w-fit cursor-pointer items-center justify-center break-all border border-gray-300 bg-[#fff] px-4 text-sm shadow hover:bg-gray-100">
      <div className="">{children}</div>
    </div>
  );
};

export default Wrapper;
