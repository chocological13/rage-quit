"use client";
import Link from "next/link";
import React, { useState } from "react";

interface NavLinksProps {
  name: string;
  path: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ name, path }: { name: string; path: string }) => {
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
  );
};

export default NavLinks;
