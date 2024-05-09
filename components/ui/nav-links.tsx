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
    <div>
      {DATA.map((page) => (
        <li key={page.name}>
          <Link href={`${page.path}`}>{page.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default NavLinks;
