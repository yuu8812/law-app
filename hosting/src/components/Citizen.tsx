import Image from "next/image";
import React from "react";

const Citizen = ({
  createdAt,
  name,
  id,
  url,
  style,
}: {
  name?: string;
  id: string;
  createdAt?: string;
  url?: string | null;
  style?: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-3 text-sm" key={id}>
      {url && (
        <div className="h-6 w-6 overflow-hidden rounded-full border border-slate-800 transition-all hover:scale-125">
          <Image
            src={url}
            alt="Picture of the author"
            width={24}
            height={24}
            className=" bg-slate-300"
            aria-label={url}
          />
        </div>
      )}
      <div className={`${style && style} text-sm text-gray-500`}>{name}</div>
      {createdAt && <div className="">{createdAt}</div>}
    </div>
  );
};

export default Citizen;
