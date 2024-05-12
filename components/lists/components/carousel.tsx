"use client";
import React from "react";
import Card, { CardProps } from "./card";

const CarouselForge: React.FC = () => {
  const DATA = [
    {
      img: "/prod-ban.png",
      alt: "prod-ban",
      title: "Bandle SAGA"
    },
    {
      img: "/prod-mag.jpg",
      alt: "prod-mag",
      title: "Mage HUNTER"
    },
    {
      img: "/prod-kin.png",
      alt: "prod-kin",
      title: "King's RUIN"
    },
    {
      img: "/prod-hex.jpg",
      alt: "prod-hex",
      title: "Hextech MAYHEM"
    },
    {
      img: "/prod-nex.png",
      alt: "prod-nex",
      title: "Nexus MAYHEM"
    },
    {
      img: "/prod-nun.jpg",
      alt: "prod-nun",
      title: "Nunu's CHANT"
    }
  ];

  return (
    <div className="w-full Py-36 bg-bgblack overflow-auto">
      <div className="px-10 mt-24">
        <p className="text-white text-5xl font-semibold">Rage Forge</p>
        <div className="overflow-x-scroll flex md:gap-5 gap-3 no-scrollbar">
          {DATA.map((data) => (
            <div className="flex-shrink-0 x-6 py-12 w-5/6 md:w-1/3">
              <Card key={data.alt} img={data.img} alt={data.alt} title={data.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselForge;
