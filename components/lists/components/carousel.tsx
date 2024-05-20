import React from "react";
import Card from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselForgeProps {
  showTitle: boolean;
}

const CarouselForge: React.FC<CarouselForgeProps> = ({
  showTitle,
}: {
  showTitle: boolean;
}) => {
  const DATA = [
    {
      id: "prod0",
      img: "/products/prod-ban.png",
      alt: "prod-ban",
      title: "Bandle SAGA",
    },
    {
      id: "prod1",
      img: "/products/prod-mag.jpg",
      alt: "prod-mag",
      title: "Mage HUNTER",
    },
    {
      id: "prod2",
      img: "/products/prod-kin.png",
      alt: "prod-kin",
      title: "King's RUIN",
    },
    {
      id: "prod3",
      img: "/products/prod-hex.jpg",
      alt: "prod-hex",
      title: "Hextech MAYHEM",
    },
    {
      id: "prod4",
      img: "/products/prod-nex.png",
      alt: "prod-nex",
      title: "Nexus MAYHEM",
    },
    {
      id: "prod5",
      img: "/products/prod-nun.jpg",
      alt: "prod-nun",
      title: "Nunu's CHANT",
    },
  ];

  return (
    <div id="scroll-forge" className="w-full bg-bgblack py-10">
      <div className="mt-10 px-10">
        {showTitle && (
          <p className="mb-10 text-5xl font-semibold text-white">Rage Forge</p>
        )}
        <div className="flex gap-3 md:gap-5">
          <Carousel className="mx-5">
            <CarouselContent>
              {DATA.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="x-6 w-5/6 flex-shrink-0 py-12 md:w-1/3 md:basis-1/3"
                >
                  <Card img={data.img} alt={data.alt} title={data.title} />
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
