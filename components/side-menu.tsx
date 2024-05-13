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

  const lightLogo = (
    <Image
      src={"/fist-light-32.png"}
      width={32}
      height={32}
      className="h-8"
      alt="RQG Logo"
    />
  );
  const redLogo = (
    <Image
      src={"/fist-red-32.png"}
      width={32}
      height={32}
      className="h-8"
      alt="RQG Logo"
    />
  );

  const DATA = [
    {
      id: "navlinks-1",
      name: "Who We Are",
      path: "/aboutus",
    },
    {
      id: "navlinks-2",
      name: "Products/Services",
      path: "/products",
    },
    {
      id: "navlinks-3",
      name: "Our RageQuitters",
      path: "/teams",
    },
  ];

  return (
    <div className="flex h-full w-screen flex-col bg-navblack md:hidden">
      <div className="p-7">
        {/* top */}
        <div className="flex h-16 flex-row">
          <div
            className="mx-4 flex max-w-screen-xl flex-wrap items-center justify-between p-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {isHovered ? redLogo : lightLogo}
              <span className="self-center whitespace-nowrap text-xl font-medium uppercase dark:text-white">
                <p className={isHovered ? "text-ragered" : "text-white"}>
                  RageQuit
                </p>
                <p className={isHovered ? "text-ragered" : "text-white"}>
                  Games
                </p>
              </span>
            </Link>
          </div>
          <div className="my-auto block p-3 md:hidden">
            {/* close btn here */}
          </div>
        </div>
        <div className="links">
          <ul className="my-6 flex flex-col gap-5 text-xl text-white">
            {DATA.map((page) => (
              <NavLinks key={page.id} {...page} />
            ))}
          </ul>
        </div>
        <div className="search-bar my-6">
          <SearchBar />
        </div>
        <div className="m-auto flex items-center justify-center align-middle">
          <SignInBtn />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
