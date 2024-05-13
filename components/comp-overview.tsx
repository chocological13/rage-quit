import React from "react";

const CompOv: React.FC = () => {
  return (
    <section
      id="company-overview"
      className="my-36 flex w-full flex-col items-center px-1 md:px-0"
    >
      <p className="mb-20 text-center text-6xl font-bold">
        We aspire to be the most player-focused
        <br />
        game company in the world
      </p>
      <p className="w:px-0 w-full text-wrap px-2 text-justify md:w-1/2">
        At <span className="font-semibold text-ragered">RageQuit Games</span>,
        founded in 20xx, our mission is to revolutionize gaming, one epic
        experience at a time.
        <br />
        <br />
        We kicked off our journey with{" "}
        <span className="font-semibold italic text-ragered">
          Realm of Rivals
        </span>
        , swiftly becoming a global sensation. Since then, we've unleashed a
        dynamic lineup of games, including{" "}
        <span className="font-semibold italic text-ragered">
          Tactics Triumph, Rift Legends, Valorant Vanguard, Runeterra Rivals
        </span>
        , each designed to push boundaries and ignite the competitive spirit
        within players. Our dedication to excellence extends to the esports
        realm, where events like{" "}
        <span className="font-semibold italic text-ragered">
          Valorant Valor Cup, Rift Rumble Championship, Runeterra Legends
          League, Tactics Titans Tournament
        </span>{" "}
        attract millions of fans worldwide. <br />
        <br />
        But we're not just about games. From electrifying soundtracks to
        cutting-edge merchandise, we're expanding our universe to engage with
        our community on every level. At RageQuit Games, players fuel our
        passion and drive our innovation. Join us on this exhilarating
        adventure, where every rage quit is a step closer to victory.
      </p>
    </section>
  );
};

export default CompOv;
