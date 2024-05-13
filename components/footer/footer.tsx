import React from "react";
import NavIcon from "../navbar/ui/nav-icon";
import NavLinks from "../navbar/ui/nav-links";
import SocialsList from "./components/socials-list";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const Footer: React.FC = () => {
  const DATA = [
    {
      id: 1,
      name: "Press",
      path: "/"
    },
    {
      id: 2,
      name: "Security",
      path: "/"
    },
    {
      id: 3,
      name: "Legal",
      path: "/"
    },
    {
      id: 4,
      name: "Leadership",
      path: "/"
    },
    {
      id: 5,
      name: "Candidate Privacy",
      path: "/"
    },
    {
      id: 6,
      name: "Terms of Service",
      path: "/"
    },
    {
      id: 7,
      name: "Privacy Notice",
      path: "/"
    },
    {
      id: 8,
      name: "Player Support",
      path: "/"
    },
    {
      id: 9,
      name: "E-Verify",
      path: "/"
    },
    {
      id: 10,
      name: "Accessibility",
      path: "/"
    }
  ];

  id: return (
    <footer className="z-10 bg-navblack text-white text-sm text-center py-10 px-4 pb-16 h-auto bottom-0">
      <div className="mx-auto md:max-w-7xl">
        <div id="footer-row" className="max-w-7xl md:mx-6 md:flex md:justify-between md:items-center md:py-6 border-b border-gray-400">
          <div id="footer-col" className="md:flex sm:md:flex-row justify-between w-full">
            <div id="footer-col-inner" className="md:flex md:items-center md:justify-between w-full sm:md:flex-col md:flex-row">
              <div id="footer-icon" className="flex justify-center md:inline-block w-full md:w-auto my-3">
                <NavIcon show={false} btn={false} />
              </div>
              <ul id="footer-links" className="flex flex-col sm:md:flex-row list-none text-xs md:text-left sm:md:flex-wrap sm:md:text-nowrap gap-1 tracking-tighter font-bold">
                {DATA.map((d) => (
                  <NavLinks key={d.id} {...d} />
                ))}
              </ul>
              <div id="socials-list" className="my-6 flex justify-center">
                <SocialsList />
              </div>
            </div>
          </div>
        </div>
        <div id="footer-row-2" className="max-w-7xl md:mx-6 flex md:flex-row flex-col gap-3 md:items-center my-6 justify-between">
          <div id="footer-row-text" className="flex sm:md:flex-row flex-col gap-3 md:gap-0 border-b border-gray-400 md:border-0">
            <p className="md:border-r md:pr-3">Cookie Preferences</p>
            <small className="md:pl-3 mb-7 md:mb-0">© 2024 RageQuit Games, Inc. All Rights Reserved.</small>
          </div>
          <Link href="#top">
            <p className="tracking-tighter">
              TO THE SURFACE
              <span>
                <KeyboardArrowUpIcon />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
