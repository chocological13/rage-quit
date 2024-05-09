import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavIcon: React.FC = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src={"https://flowbite.com/docs/images/logo.svg"} width={32} height={33} className="h-8" alt="RQG Logo" />
        <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white">
          <p>RageQuit</p>
          <p>Games</p>
        </span>
      </Link>
    </div>
  );
};

export default NavIcon;
