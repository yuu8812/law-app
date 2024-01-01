import React from "react";
import { HiMiniHeart, HiOutlineHeart } from "react-icons/hi2";
import { IconBaseProps } from "react-icons/lib";

const Heart = ({ fill, props }: { fill?: boolean; props?: IconBaseProps }) => {
  if (fill) return <HiMiniHeart {...props} />;
  else return <HiOutlineHeart {...props} />;
};

export default Heart;
