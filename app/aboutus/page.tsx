import Banner from "@/components/banner";
import React from "react";
import AboutText from "./components/about-text";
import History from "./components/history";
import TeamSum from "./components/teams-sum";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full">
      <Banner
        img="/about-banner.webp"
        width={1920}
        height={1080}
        alt="about-banner"
      />

      <AboutText />
      <History year={2005} title="founding" content="lorem" />
      <TeamSum />
    </div>
  );
};

export default AboutUs;
