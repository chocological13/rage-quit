import React from "react";
import Card from "./components/card";

const GamesList: React.FC = () => {
  const DATA = [
    {
      img: "/games-lol.png",
      alt: "games-lol",
      title: "Realm of RIVALS"
    }
  ];
  return (
    <div className="w-full my-5 bg-bgblack overflow-auto">
      <div className="mt-16 border-bgblack">
        <div className="text-white font-bold text-2xl">
          {DATA.map((card) => (
            <Card key={card.alt} img={card.img} alt={card.alt} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesList;
