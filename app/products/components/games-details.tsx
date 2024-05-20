"use client";

import React from "react";
import ProdDetailsLayout from "./prod-details-layout";
import { useMediaQuery } from "@mui/material";
import ProductDetailsMobile from "./prod-details-mobile";

const GamesDetails: React.FC = () => {
  const isMedium = useMediaQuery("(min-width: 768px)");

  const DATA = [
    {
      text: {
        title: "Realm of Rivals",
        desc: "Step into a realm where only the strongest rivals survive. Engage in strategic battles and forge alliances to dominate the battlefield. With a variety of champions and endless tactical possibilities, every match is a new challenge.",
        id: 0,
      },
      card: {
        title: " ",
        img: "/products/games-lol.png",
        alt: "lol",
      },
      index: 0,
    },
    {
      text: {
        title: "Valorant Vanguards",
        desc: "Join the ranks of elite Vanguards in a high-stakes, tactical shooter. Team up and outsmart your opponents with precision, strategy, and skill. Every round counts in this fast-paced game of survival and supremacy.",
        id: 1,
      },
      card: {
        title: " ",
        img: "/products/games-val.png",
        alt: "val",
      },
      index: 1,
    },
    {
      text: {
        title: "Tactics Triumph",
        desc: "Master the art of strategy in Tactics Triumph. Assemble your team of heroes and lead them to victory in this turn-based tactical game. Plan your moves carefully and adapt to the ever-evolving battlefield.",
        id: 2,
      },
      card: {
        title: " ",
        img: "/products/games-tft.png",
        alt: "tft",
      },
      index: 2,
    },
    {
      text: {
        title: "Rift Legends",
        desc: "Venture into the Rift and experience the legends of old in this immersive action RPG. Battle powerful foes, uncover ancient secrets, and forge your legacy in a world filled with magic and mystery.",
        id: 3,
      },
      card: {
        title: " ",
        img: "/products/games-rift.png",
        alt: "rift",
      },
      index: 3,
    },
    {
      text: {
        title: "Runeterra Clash",
        desc: "Enter the world of Runeterra and engage in epic clashes between mighty champions. Build your deck, outsmart your opponents, and rise through the ranks in this strategic card game.",
        id: 4,
      },
      card: {
        title: " ",
        img: "/products/games-lor.png",
        alt: "lor",
      },
      index: 4,
    },
  ];
  return (
    <>
      {isMedium ? (
        <div className="mx-auto w-[95%] px-2 py-20">
          <div className="title mb-10 text-center text-5xl font-semibold text-ragewhite">
            <p>
              Our <span className="text-ragered">Games.</span>
            </p>
          </div>
          {DATA.map((game, index) => (
            <ProdDetailsLayout key={index} {...game} />
          ))}
        </div>
      ) : (
        <div className="mx-auto w-[95%] px-2 py-20">
          <div className="title mb-20 text-center text-5xl font-semibold text-ragewhite md:mb-32">
            <p>
              Our <span className="text-ragered">Games.</span>
            </p>
          </div>
          {DATA.map((game, index) => (
            <ProductDetailsMobile key={index} {...game} />
          ))}
        </div>
      )}
    </>
  );
};

export default GamesDetails;
