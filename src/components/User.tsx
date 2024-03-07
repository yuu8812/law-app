import Image from "next/image";
import React from "react";

const User = ({
  createdAt,
  name,
  id,
  url,
  style,
  imgSize = "h-[30px] w-[30px]",
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
        className={`${imgSize} relative overflow-hidden rounded-full border border-slate-800 shadow transition-all hover:scale-125`}
      >
        {url && (
          <Image
            src={url}
            alt="Picture of the author"
            aria-label={url}
            fill
            className="object-cover"
          />
        )}
      </div>
      {name && <div className={`${style && style} text-sm text-gray-500`}>{name}</div>}
      {createdAt && <div className="">{createdAt}</div>}
    </div>
  );
};

export default User;
