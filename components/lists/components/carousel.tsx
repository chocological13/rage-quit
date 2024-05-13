"use client";
import React from "react";
import Card, { CardProps } from "./card";

const CarouselForge: React.FC = () => {
  const DATA = [
    {
      id: "prod0",
      img: "/prod-ban.png",
      alt: "prod-ban",
      title: "Bandle SAGA",
    },
    {
      id: "prod1",
      img: "/prod-mag.jpg",
      alt: "prod-mag",
      title: "Mage HUNTER",
    },
    {
      id: "prod2",
      img: "/prod-kin.png",
      alt: "prod-kin",
      title: "King's RUIN",
    },
    {
      id: "prod3",
      img: "/prod-hex.jpg",
      alt: "prod-hex",
      title: "Hextech MAYHEM",
    },
    {
      id: "prod4",
      img: "/prod-nex.png",
      alt: "prod-nex",
      title: "Nexus MAYHEM",
    },
    {
      id: "prod5",
      img: "/prod-nun.jpg",
      alt: "prod-nun",
      title: "Nunu's CHANT",
    },
  ];

  return (
    <div id="scroll-forge" className="Py-36 w-full overflow-auto bg-bgblack">
      <div className="mt-24 px-10">
        <p className="text-5xl font-semibold text-white">Rage Forge</p>
        <div className="no-scrollbar flex gap-3 overflow-x-scroll md:gap-5">
          {DATA.map((data) => (
            <div className="x-6 w-5/6 flex-shrink-0 py-12 md:w-1/3">
              <Card
                key={data.id}
                img={data.img}
                alt={data.alt}
                title={data.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselForge;
