"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import HoverContext from "@/app/context/hovercontext/HoverContext";

const NavIcon: React.FC = () => {
  const { isHovered, setIsHovered } = useContext(HoverContext);

  const lightLogo = <Image src={"/fist-light-32.png"} width={32} height={32} className="h-8" alt="RQG Logo" />;
  const redLogo = <Image src={"/fist-red-32.png"} width={32} height={32} className="h-8" alt="RQG Logo" />;

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1" onMouseEnter={() => setIsHovered()} onMouseLeave={() => setIsHovered()}>
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {isHovered ? redLogo : lightLogo}
        <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white uppercase">
          <p className={isHovered ? "text-[#ff0000]" : "text-white"}>RageQuit</p>
          <p className={isHovered ? "text-[#ff0000]" : "text-white"}>Games</p>
        </span>
      </Link>
    </div>
  );
};

export default NavIcon;
