"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuBtn from "./menu-btn";

interface NavIconProp {
  show: boolean;
  btn: boolean;
}

const NavIcon: React.FC<NavIconProp> = ({ show, btn }: { show: boolean; btn: boolean }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const lightLogo = <Image src={"/fist-light-32.png"} width={32} height={32} className="h-8" alt="RQG Logo" />;
  const redLogo = <Image src={"/fist-red-32.png"} width={32} height={32} className="h-8" alt="RQG Logo" />;

  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 p-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {isHovered ? redLogo : lightLogo}
          {show && (
            <>
              <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white uppercase">
                <p className={isHovered ? "text-ragered" : "text-white"}>RageQuit</p>
                <p className={isHovered ? "text-ragered" : "text-white"}>Games</p>
              </span>
            </>
          )}
        </Link>
      </div>
      {btn && (
        <div className="block md:hidden my-auto p-3">
          <MenuBtn />
        </div>
      )}
    </>
  );
};

export default NavIcon;
