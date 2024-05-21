"use client";
import Link from "next/link";
import React, { useState } from "react";

interface NavLinksProps {
  name: string;
  path: string;
}

const NavLinks: React.FC<NavLinksProps> = ({
  name,
  path,
}: {
  name: string;
  path: string;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={`${path}`}
        className={`${isHovered ? "w-fit rounded-xl bg-ragered" : ""} list-style-none p-2 uppercase`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLinks;
