import Image from "next/image";
import React from "react";

const User = ({
  createdAt,
  name,
  id,
  url,
  style,
  imgSize = "h-6 w-6",
}: {
  name?: string;
  id: string;
  createdAt?: string;
  url?: string | null;
  style?: string;
  imgSize?: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm" key={id}>
      <div
        className={`${imgSize} overflow-hidden rounded-full border border-slate-800 bg-gray-300 shadow transition-all hover:scale-125`}
      >
        {url && (
          <Image
            src={url}
            alt="Picture of the author"
            width={24}
            height={24}
            className=""
            aria-label={url}
          />
        )}
      </div>
      {name && <div className={`${style && style} text-sm text-gray-500`}>{name}</div>}
      {createdAt && <div className="">{createdAt}</div>}
    </div>
  );
};

export default User;
