import React from "react";
import NavLinks from "./ui/nav-links";
import NavIcon from "./ui/nav-icon";
import SearchBar from "./ui/search-bar";
import SignInBtn from "./ui/signin-btn";

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
    <nav className="bg-navblack w-full h-navheight text-white fixed z-20 top-0 start-0 grid grid-cols-[1fr_5fr_1fr_1fr] md:gap-3">
      <NavIcon />
      <div className="items-center my-auto hidden w-full md:block md:mx-auto" id="navbar-search">
        <ul className="flex flex-row text-left justify-start align-middle gap-5 my-4">
          {DATA.map((page) => (
            <NavLinks key={page.name} name={page.name} path={page.path} />
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="relative hidden md:block">
          <SearchBar />
        </div>
      </div>
      <div className="relative flex items-center align-middle justify-center mt-2">
        <SignInBtn />
      </div>
    </nav>
  );
};

export default NavBar;
