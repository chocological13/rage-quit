import React from "react";
import Card from "./components/card";
import { title } from "process";

const GamesList: React.FC = () => {
  const DATA = [
    {
      img: "/games-lol.png",
      alt: "games-lol",
      title: "Realm of RIVALS"
    },
    {
      img: "/games-val.png",
      alt: "games-val",
      title: "Valorant VANGUARDS"
    },
    {
      img: "/games-tft.png",
      alt: "games-tft",
      title: "Tactics TRIUMPH"
    },
    {
      img: "/games-rift.png",
      alt: "games-rift",
      title: "Rift LEGENDS"
    }
    // {
    //   img: "/games-lor.png",
    //   alt: "games-lor",
    //   title: "Runeterra CLASH"
    // }
  ];
  return (
    <div className="w-full my-36 bg-bgblack overflow-auto">
      <div className="px-10 mt-24">
        <p className="text-white text-5xl font-semibold">Games</p>
        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          {DATA.map((card) => (
            <Card key={card.alt} img={card.img} alt={card.alt} title={card.title} />
          ))}
          <div className="md:col-span-2 md:mx-auto md:w-1/2 md:h-full flex-shrink">
            <Card img="/games-lor.png" alt="games-lor" title="Runeterra CLASH" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
