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
      <div className="bg-[url('/banner/sketch-ekko.jpg')] bg-auto bg-left-bottom bg-no-repeat">
        <section className="team-text-cont mx-auto flex w-9/12 py-20 md:py-32">
          <TeamText />
        </section>
      </div>
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
