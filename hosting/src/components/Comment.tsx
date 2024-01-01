import React from "react";
import { CiChat1 } from "react-icons/ci";
import { IconBaseProps } from "react-icons/lib";

const Comment = ({ props }: { props: IconBaseProps }) => {
  return (
    <div className="relative top-[1px]">
      <CiChat1 {...props} strokeWidth={0.8} />
    </div>
  );
};

export default Comment;
