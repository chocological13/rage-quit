import React from "react";
import TeamHero from "./components/team-hero";
import TeamMarquee from "./components/team-marquee";
import TeamText from "./components/team-text";
import "@/app/globals.css";
import TeamDisplay from "./components/team-display";

const Teams: React.FC = () => {
  return (
    <div className="max-w-full bg-ragewhite">
      <TeamHero />
      <div className="team-text-cont mx-auto flex w-9/12 py-20 md:py-32">
        <TeamText />
      </div>
      <div className="pb-20">
        <TeamMarquee />
      </div>
      <div className="">
        <TeamDisplay />
      </div>
    </div>
  );
};

export default Teams;
