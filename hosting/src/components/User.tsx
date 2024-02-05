import Image from "next/image";
import React from "react";

const User = ({
  createdAt,
  name,
  id,
  url,
  style,
}: {
  name: string;
  id: string;
  createdAt?: string;
  url?: string | null;
  style?: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-3 text-sm" key={id}>
      {url && (
        <Image
          src={url}
          alt="Picture of the author"
          width={20}
          height={20}
          className="border-1 h-5 w-5 rounded-full border-black bg-slate-300 outline outline-offset-1 outline-slate-800 transition-all hover:scale-125"
          aria-label={url}
        />
      )}
      <div className={`${style && style} text-sm text-gray-500`}>{name}</div>
      {createdAt && <div className="">{createdAt}</div>}
    </div>
  );
};

export default User;
