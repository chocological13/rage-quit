import React from "react";
import NavLinks from "./navbar/ui/nav-links";
import NavIcon from "./navbar/ui/nav-icon";
import SearchBar from "./navbar/ui/search-bar";

const NavBar: React.FC = () => {
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
    <nav className="bg-navblack w-full h-[70px] text-white fixed z-20 top-0 start-0 grid grid-cols-[1fr_5fr_1fr_1fr]">
      <NavIcon />
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <ul className="flex flex-row text-left items-center justify-start align-middle gap-3">
          {DATA.map((page) => (
            <NavLinks key={page.name} name={page.name} path={page.path} />
          ))}
        </ul>
      </div>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
