"use client";
import Link from "next/link";
import React, { useState } from "react";

interface NavLinksProps {
  name: string;
  path: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ name, path }: { name: string; path: string }) => {
  // const DATA = [
  //   {
  //     name: "Who We Are",
  //     path: "/whoweare"
  //   },
  //   {
  //     name: "Products/Services",
  //     path: "/products"
  //   },
  //   {
  //     name: "Our RageQuitters",
  //     path: "/teams"
  //   }
  // ];

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${isHovered ? "bg-ragered w-fit rounded-md" : ""} list-style-none uppercase p-2`}>
      <Link href={`${path}`}>{name}</Link>
    </li>

    // <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
    //   <ul className="flex flex-row text-left items-center justify-start align-middle gap-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    //     {DATA.map((page) => (
    //       <li key={page.name} className={`${isHovered ? "bg-red-200 px-2 p-1 rounded-md" : ""} list-style-none uppercase`}>
    //         <Link href={`${page.path}`}>{page.name}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default NavLinks;
