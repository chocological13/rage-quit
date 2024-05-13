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
      path: "/",
    },
    {
      id: 2,
      name: "Security",
      path: "/",
    },
    {
      id: 3,
      name: "Legal",
      path: "/",
    },
    {
      id: 4,
      name: "Leadership",
      path: "/",
    },
    {
      id: 5,
      name: "Candidate Privacy",
      path: "/",
    },
    {
      id: 6,
      name: "Terms of Service",
      path: "/",
    },
    {
      id: 7,
      name: "Privacy Notice",
      path: "/",
    },
    {
      id: 8,
      name: "Player Support",
      path: "/",
    },
    {
      id: 9,
      name: "E-Verify",
      path: "/",
    },
    {
      id: 10,
      name: "Accessibility",
      path: "/",
    },
  ];

  id: return (
    <footer className="bottom-0 z-10 h-auto bg-navblack px-4 py-10 pb-16 text-center text-sm text-white">
      <div className="mx-auto md:max-w-7xl">
        <div
          id="footer-row"
          className="max-w-7xl border-b border-gray-400 md:mx-6 md:flex md:items-center md:justify-between md:py-6"
        >
          <div
            id="footer-col"
            className="w-full justify-between sm:md:flex-row md:flex"
          >
            <div
              id="footer-col-inner"
              className="w-full sm:md:flex-col md:flex md:flex-row md:items-center md:justify-between"
            >
              <div
                id="footer-icon"
                className="my-3 flex w-full justify-center md:inline-block md:w-auto"
              >
                <NavIcon show={false} btn={false} />
              </div>
              <ul
                id="footer-links"
                className="flex list-none flex-col gap-1 text-xs font-bold tracking-tighter sm:md:text-nowrap sm:md:flex-wrap sm:md:flex-row md:text-left"
              >
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
        <div
          id="footer-row-2"
          className="my-6 flex max-w-7xl flex-col justify-between gap-3 md:mx-6 md:flex-row md:items-center"
        >
          <div
            id="footer-row-text"
            className="flex flex-col gap-3 border-b border-gray-400 sm:md:flex-row md:gap-0 md:border-0"
          >
            <p className="md:border-r md:pr-3">Cookie Preferences</p>
            <small className="mb-7 md:mb-0 md:pl-3">
              © 2024 RageQuit Games, Inc. All Rights Reserved.
            </small>
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
