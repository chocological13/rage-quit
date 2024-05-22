import React from "react";
import AboutText from "./components/about-text";
import TeamSum from "./components/teams-sum";
import Culture from "./components/culture";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full bg-ragewhite">
      <div className="banner inset-0 box-border h-[980px] overflow-hidden bg-[url('/banner/about-banner.webp')] bg-cover bg-center"></div>

      <AboutText />
      <TeamSum />
      <Culture />
    </div>
  );
};

export default AboutUs;
