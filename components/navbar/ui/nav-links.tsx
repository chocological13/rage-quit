import Link from "next/link";
import React from "react";

const NavLinks: React.FC = () => {
  const DATA = [
    {
      name: "Who We Are",
      path: "/whoweare"
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
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul className="flex flex-row text-left items-center justify-start align-middle gap-3">
        {DATA.map((page) => (
          <li key={page.name} className="list-style-none uppercase">
            <Link href={`${page.path}`}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
