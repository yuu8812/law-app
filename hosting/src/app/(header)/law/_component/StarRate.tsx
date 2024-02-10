"use client";
import React from "react";
import { Rating } from "react-simple-star-rating";

const StarRate = () => {
  return (
    <Rating
      onClick={() => console.log("first")}
      SVGclassName={"inline-block"}
      size={20}
      initialValue={2.5}
      allowFraction
      readonly
      fillColor="rgb(2, 98, 157)"
    />
  );
};

export default StarRate;
