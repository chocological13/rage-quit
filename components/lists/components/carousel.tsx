"use client";
import React from "react";
import Card from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div id="scroll-forge" className="w-full bg-bgblack py-20">
      <div className="mt-10 px-10">
        <p className="text-5xl font-semibold text-white">Rage Forge</p>
        <div className="flex gap-3 md:gap-5">
          <Carousel className="mx-5">
            <CarouselContent>
              {DATA.map((data) => (
                <CarouselItem className="x-6 w-5/6 flex-shrink-0 py-12 md:w-1/3 md:basis-1/3">
                  <Card
                    key={data.id}
                    img={data.img}
                    alt={data.alt}
                    title={data.title}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselForge;
