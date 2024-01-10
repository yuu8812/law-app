import React from "react";
import { IconBaseProps } from "react-icons/lib";
import { MdBookmark, MdOutlineBookmarkAdd } from "react-icons/md";

const Bookmark = ({ fill, props }: { fill?: boolean; props?: IconBaseProps }) => {
  if (fill) return <MdBookmark {...props} size={30} fill="#ffb700" />;
  else return <MdOutlineBookmarkAdd {...props} size={30} color="#ffb700" />;
};

export default Bookmark;
