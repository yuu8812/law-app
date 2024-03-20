"use client";
import React from "react";
import { Rating } from "react-simple-star-rating";

const StarRate = ({
  value,
  readonly = true,
  onClick,
  size = 20,
  allowFraction = true,
}: {
  value: number;
  readonly?: boolean;
  onClick?: (n: number) => void;
  size?: number;
  allowFraction?: boolean;
}) => {
  return (
    <Rating
      onClick={onClick}
      SVGclassName={"flex rotate-90 md:hover:scale-125 inline-block transition-all"}
      size={size}
      initialValue={value}
      allowFraction={allowFraction}
      readonly={readonly}
      fillColor="#e19705"
      allowHover={false}
      SVGstyle={{ display: "inline" }}
    />
  );
};

export default StarRate;
