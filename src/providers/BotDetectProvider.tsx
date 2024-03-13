"use client";
import { load } from "@fingerprintjs/botd";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { TbRobotOff } from "react-icons/tb";

const BotDetectProvider = ({ children }: { children: ReactNode }) => {
  const [isBot, setIsBot] = useState(false);
  const router = useRouter();
  useEffect(() => {
    load({ monitoring: false })
      .then((botd) => botd.detect())
      .then((result) => {
        console.log(result);
        setIsBot(false);
      })
      .catch((error) => {
        setIsBot(true);
        console.log(error);
      });
  }, [router]);

  if (isBot)
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center gap-4">
          <TbRobotOff size={40} />
          <p className="font-bold">500 Bot Detected</p>
        </div>
      </div>
    );

  return <>{children}</>;
};

export default BotDetectProvider;
