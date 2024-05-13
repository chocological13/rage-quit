import React from "react";
import NavIcon from "../navbar/ui/nav-icon";
import NavLinks from "../navbar/ui/nav-links";
import Socials from "./components/socials";
import SocialsList from "./components/socials-list";

const Footer: React.FC = () => {
  const DATA = [
    {
      name: "Press",
      path: "/"
    },
    {
      name: "Security",
      path: "/"
    },
    {
      name: "Legal",
      path: "/"
    },
    {
      name: "Leadership",
      path: "/"
    },
    {
      name: "Candidate Privacy",
      path: "/"
    },
    {
      name: "Terms of Service",
      path: "/"
    },
    {
      name: "Privacy Notice",
      path: "/"
    },
    {
      name: "Player Support",
      path: "/"
    },
    {
      name: "E-Verify",
      path: "/"
    },
    {
      name: "Accessibility",
      path: "/"
    }
  ];

  return (
    <footer className="z-10 bg-gray-900 text-white text-sm text-center py-24 px-4 pb-16 h-10 bottom-0">
      <div className="mx-auto md:max-w-7xl">
        <div className="footer-row max-w-7xl mx-auto md:flex md:justify-between md:items-center md:py-6 bg-pink-400">
          <div className="footer-col md:flex md:flex-row justify-between">
            <div className="footer-col-inner md:flex md:items-center">
              <div className="icon flex justify-center md:justify-normal w-full">
                <NavIcon show={false} btn={false} />
              </div>
              <div className="footer-links">
                <ul className="flex flex-col md:flex-row list-none text-xs md:inline-block md:text-left">
                  {DATA.map((d) => (
                    <NavLinks key={d.name} {...d} />
                  ))}
                </ul>
              </div>
              <div>
                <SocialsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
