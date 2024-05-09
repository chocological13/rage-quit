import React from "react";
import NavLinks from "./navbar/ui/nav-links";
import NavIcon from "./navbar/ui/nav-icon";
import SearchBar from "./navbar/ui/search-bar";
import HoverProvider from "@/app/context/hovercontext/HoverProvider";

const NavBar: React.FC = () => {
  return (
    <HoverProvider>
      <nav className="bg-navblack w-full h-[70px] text-white fixed z-20 top-0 start-0 grid grid-cols-[1fr_5fr_1fr_1fr]">
        <NavIcon />
        <NavLinks />
        <SearchBar />
      </nav>
    </HoverProvider>
  );
};

export default NavBar;
