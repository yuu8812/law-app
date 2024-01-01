import React from "react";

const NameAndDate = ({ name, date }: { name: string; date: string }) => {
  return (
    <div className="ml-2 flex gap-2 text-xs">
      <div>{name}</div>
      <div>{date}</div>
    </div>
  );
};

export default NameAndDate;
