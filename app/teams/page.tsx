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
      <section className="team-text-cont mx-auto flex w-9/12 py-20 md:py-32">
        <TeamText />
      </section>
      <section className="marquee pb-20">
        <TeamMarquee />
      </section>
      <section className="teams pb-20 md:w-full">
        <TeamDisplay />
      </section>
    </div>
  );
};

export default Teams;
