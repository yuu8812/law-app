"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi2";
import { MdOutlineQuestionMark } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

import SosejiDescription from "@/components/SosejiDescription";
import User from "@/components/User";
import { useTimelineModal } from "@/hooks/useTimelineModal";
import { useUser } from "@/hooks/useUser";

const Sidebar = () => {
  const [isHover, setIsHover] = useState(false);

  const { state } = useUser();

  const { addTimeline, removeModal } = useTimelineModal();

  const handleOpenQuestion = () => {
    addTimeline({
      child: <SosejiDescription onClose={removeModal} />,
      key: "soseji_description",
    });
  };

  return (
    <div className="fixed top-0 z-20 hidden h-full w-8 flex-col md:flex">
      <div
        className={`fixed left-0 top-0 h-screen flex-1 items-center justify-center transition-all ${isHover ? "w-40 bg-[#f7f9f8]" : "w-12 bg-[#f7f9f8]"} flex-col  shadow-xl`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`flex h-full w-full flex-1 flex-col justify-between pb-10 pt-10 ${isHover && "relative -left-4"}`}
        >
          <div className="flex flex-col gap-2">
            <Link href="/world" className="relative -top-5 flex flex-1 flex-col justify-between">
              <div className="flex flex-1 flex-col">
                <div
                  className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all`}
                >
                  <Image src={"/icon-mini.svg"} alt="here" width={32} height={32} priority />
                  <p
                    className={`${!isHover && "absolute -translate-x-20 opacity-0"} whitespace-nowrap font-extrabold transition-all`}
                  >
                    総政治 [β]
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/world" className="flex flex-1 flex-col justify-between">
              <div className="flex flex-1 flex-col">
                <div
                  className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all hover:bg-so_se_ji hover:text-white`}
                >
                  <TiWorld size={30} />
                  <p
                    className={`${!isHover && "absolute -translate-x-20 opacity-0"} w-10 whitespace-nowrap transition-all`}
                  >
                    地域
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/law" className="flex flex-1 flex-col justify-between">
              <div className="flex flex-1 flex-col">
                <div
                  className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all hover:bg-so_se_ji hover:text-white`}
                >
                  <HiOutlineDocument size={30} />
                  <p
                    className={`${!isHover && "absolute -translate-x-20 opacity-0"} w-10 whitespace-nowrap transition-all`}
                  >
                    決まり
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div className="flex flex-1 cursor-pointer flex-col justify-between">
              <div className="flex flex-1 flex-col">
                <div
                  className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all `}
                >
                  <Link
                    href="https://twitter.com/go_so_se_ji"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110 hover:bg-so_se_ji  hover:text-white"
                  >
                    <FaTwitter size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="flex flex-1 cursor-pointer flex-col justify-between"
              onClick={handleOpenQuestion}
            >
              <div className="flex flex-1 flex-col">
                <div
                  className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all `}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110 hover:bg-so_se_ji  hover:text-white">
                    <MdOutlineQuestionMark size={20} />
                  </div>
                </div>
              </div>
            </div>
            {state?.id ? (
              <Link href="/user" className={`flex shrink-0 gap-2 rounded-full transition-all`}>
                <div
                  className={`flex w-full shrink-0 items-center justify-center gap-4 overflow-hidden rounded-full p-2 transition-all duration-75 hover:bg-so_se_ji hover:text-white`}
                >
                  <User id={state?.id ?? ""} url={state?.url ?? "/user.svg"} />
                  <p
                    className={`${!isHover && "absolute -translate-x-20 opacity-0"} w-10 whitespace-nowrap transition-all`}
                  >
                    情報
                  </p>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
