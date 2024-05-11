"use client";

import React from "react";
import NavLinks from "@/components/navbar/ui/nav-links";
import SearchBar from "@/components/navbar/ui/search-bar";
import SignInBtn from "@/components/navbar/ui/signin-btn";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SideMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const lightLogo = <Image src={"/fist-light-32.png"} width={32} height={32} className="h-8" alt="RQG Logo" />;
  const redLogo = <Image src={"/fist-red-32.png"} width={32} height={32} className="h-8" alt="RQG Logo" />;

  const DATA = [
    {
      name: "Who We Are",
      path: "/aboutus"
    },
    {
      name: "Products/Services",
      path: "/products"
    },
    {
      name: "Our RageQuitters",
      path: "/teams"
    }
  ];

  return (
    <div className="w-screen h-full bg-navblack flex flex-col md:hidden">
      <div className="p-7">
        {/* top */}
        <div className="flex flex-row h-16">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 p-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {isHovered ? redLogo : lightLogo}
              <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white uppercase">
                <p className={isHovered ? "text-ragered" : "text-white"}>RageQuit</p>
                <p className={isHovered ? "text-ragered" : "text-white"}>Games</p>
              </span>
            </Link>
          </div>
          <div className="block md:hidden my-auto p-3">{/* close btn here */}</div>
        </div>
        <div className="links">
          <ul className="text-white flex flex-col gap-5 text-xl my-6">
            {DATA.map((page) => (
              <NavLinks key={page.name} name={page.name} path={page.path} />
            ))}
          </ul>
        </div>
        <div className="search-bar my-6">
          <SearchBar />
        </div>
        <div className="flex justify-center align-middle items-center m-auto">
          <SignInBtn />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
