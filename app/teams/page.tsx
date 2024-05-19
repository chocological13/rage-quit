import React from "react";
import TeamHero from "./components/team-hero";
import TeamMarquee from "./components/team-marquee";

const Teams: React.FC = () => {
  return (
    <>
      <TeamHero />
      <TeamMarquee />
    </>
  );
};

export default Teams;
