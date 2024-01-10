import Image from "next/image";
import React from "react";

const User = ({
  createdAt,
  name,
  url,
}: {
  name: string;
  createdAt?: string;
  url?: string | null;
}) => {
  return (
    <div className="flex items-center justify-center gap-3 text-sm">
      {url && (
        <Image
          src={url}
          alt="Picture of the author"
          width={20}
          height={20}
          className="border-1 h-5 w-5 rounded-full border-black bg-slate-300 outline outline-offset-1 outline-slate-800"
          aria-label={url}
        />
      )}
      <div className="text-sm text-gray-500">{name}</div>
      {createdAt && <div className="">{createdAt}</div>}
    </div>
  );
};

export default User;
