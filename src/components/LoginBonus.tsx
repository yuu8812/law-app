import Image from "next/image";
import React from "react";

import { Button } from "@/components/Button";
import { CreateCitizensMutation } from "@/graphql/type";

const LoginBonus = ({ data, onClose }: { data: CreateCitizensMutation; onClose: () => void }) => {
  return (
    <div className="mb:mt-0 -mt-10 flex flex-1 items-center justify-center">
      <div className="flex h-[500px] w-full flex-1 rounded bg-[#ffffff] shadow md:w-[800px]">
        <div className="relative m-10 flex flex-1 flex-col">
          <div className="my-2 text-lg">本日の移住希望個体</div>
          <div className="text-sm">
            どうやら彼らは現在住んでいる世界に疲れたようです。新たな世界に導いてあげましょう
          </div>
          <div className="mt-10 flex flex-col gap-4 md:flex-wrap">
            {data.insert_citizens?.returning.map((citizen, i) => {
              return (
                <div key={i}>
                  <div className="flex gap-3">
                    <Image
                      src={citizen.species_asset.image_url ?? ""}
                      alt="image"
                      width={32}
                      height={32}
                      className="mt-1 h-8 w-8 overflow-hidden rounded-full border border-slate-950 object-cover"
                    />
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                      <p className="text-base">{citizen.name}</p>
                      <div className="flex gap-4">
                        <div className="flex gap-2">
                          <p className="">種族 :</p>
                          <div className="text-gray-700">{citizen.species_asset.species.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 self-center">
            <Button text="わかリました" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBonus;
