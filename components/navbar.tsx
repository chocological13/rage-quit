import React from "react";
import NavLinks from "./ui/nav-links";

const NavBar: React.FC = () => {
  return (
    <div className="bg-black w-full h-[55px] text-white fixed z-20 top-0 start-0">
      <div>Icon here later</div>
      <NavLinks />
    </div>
  );
};

export default NavBar;
