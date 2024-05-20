import React from "react";
import NavLinks from "@/components/navbar/ui/nav-links";
import SearchBar from "@/components/navbar/ui/search-bar";
import SignInBtn from "@/components/navbar/ui/signin-btn";
import CloseIcon from "@mui/icons-material/Close";
import { MouseEventHandler } from "react";
import NavIcon from "./ui/nav-icon";

interface SideMenuProps {
  toggleDrawer: MouseEventHandler<HTMLButtonElement>;
}

const SideMenu: React.FC<SideMenuProps> = ({ toggleDrawer }: SideMenuProps) => {
  const DATA = [
    {
      id: "navlinks-1",
      name: "Who We Are",
      path: "/aboutus",
    },
    {
      id: "navlinks-2",
      name: "Products/Services",
      path: "/products",
    },
    {
      id: "navlinks-3",
      name: "Our RageQuitters",
      path: "/teams",
    },
  ];

  return (
    <div className="flex h-full w-screen flex-col bg-navblack md:hidden">
      <div className="p-7">
        {/* top */}
        <button
          className="flex h-16 w-full flex-row justify-between"
          onClick={toggleDrawer}
          type="button"
          aria-label="nav-button"
        >
          <NavIcon show btn={false} />
          <button
            type="button"
            onClick={toggleDrawer}
            className="my-auto block p-3 md:hidden"
            aria-label="close-nav-button"
          >
            <CloseIcon className="text-white" />
          </button>
        </button>
        <div className="links">
          <ul>
            <button
              type="button"
              onClick={toggleDrawer}
              className="my-14 flex flex-col gap-5 text-xl text-white"
              aria-label="links-button"
            >
              {DATA.map((page) => (
                <NavLinks key={page.id} {...page} />
              ))}
            </button>
          </ul>
        </div>
        <div className="search-bar my-6">
          <SearchBar />
        </div>
        <div className="m-auto flex items-center justify-center align-middle">
          <SignInBtn />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
