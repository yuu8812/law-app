"use client";
import useClient from "@/hooks/useClient";
import { FC } from "react";

interface Props {}

const LawDescription: FC<Props> = (props): JSX.Element => {
  const { client } = useClient();
  return (
    <div className="p-4">
      <div className="">関税についての法律</div>
    </div>
  );
};

export default LawDescription;
