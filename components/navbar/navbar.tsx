import React from "react";
import NavLinks from "./ui/nav-links";
import NavIcon from "./ui/nav-icon";
import SignInBtn from "./ui/signin-btn";

const NavBar: React.FC = () => {
  const DATA = [
    {
      id: "nav-1",
      name: "Who We Are",
      path: "/aboutus",
    },
    {
      id: "nav-2",
      name: "Games & Experiences",
      path: "/products",
    },
    {
      id: "nav-3",
      name: "Our RageQuitters",
      path: "/teams",
    },
  ];

  return (
    <nav
      id="top"
      className="fixed start-0 top-0 z-20 grid h-navheight w-full grid-cols-[1fr_5fr_1fr_1fr] bg-navblack text-white md:gap-3"
    >
      <div className="flex w-screen justify-between md:w-full md:justify-normal">
        <NavIcon show btn />
      </div>
      <div
        className="my-auto hidden w-full items-center md:mx-auto md:block"
        id="navbar-search"
      >
        <ul className="my-4 flex flex-row justify-start gap-5 text-left align-middle">
          {DATA.map((page) => (
            <NavLinks key={page.id} {...page} />
          ))}
        </ul>
      </div>
      <div className="empty-cont"></div>
      <div className="relative mt-2 hidden w-3/4 items-center justify-center align-middle md:top-4 md:block">
        <SignInBtn />
      </div>
    </nav>
  );
};

export default NavBar;
