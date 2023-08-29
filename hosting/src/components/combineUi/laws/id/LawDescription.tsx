"use client";
import useClient from "@/hooks/useClient";
import { FC } from "react";

interface Props {}

const LawDescription: FC<Props> = (props): JSX.Element => {
  const { client } = useClient();
  return (
    <div className="p-4">
      <div className="">関税についての法律</div>
      <button
        onClick={() =>
          client({
            method: "get",
            url: "http://127.0.0.1:5001/auth-law-yuu-project/us-central1/api",
          })
        }
      >
        リクエスト
      </button>
    </div>
  );
};

export default LawDescription;
