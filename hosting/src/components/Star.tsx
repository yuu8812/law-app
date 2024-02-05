import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";

const Star = ({ fill, props }: { fill?: boolean; props?: IconBaseProps }) => {
  if (fill) return <FaStar {...props} />;
  else return <FaRegStar {...props} />;
};

export default Star;
