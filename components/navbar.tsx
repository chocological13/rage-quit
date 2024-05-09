import React from "react";
import NavLinks from "./navbar/ui/nav-links";
import NavIcon from "./navbar/ui/nav-icon";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-red-200 w-full h-[70px] text-white fixed z-20 top-0 start-0 grid grid-cols-[1fr_5fr_1fr]">
      <NavIcon />
      <NavLinks />
    </nav>
  );
};

export default NavBar;
