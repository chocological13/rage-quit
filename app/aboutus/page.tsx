import Banner from "@/components/banner";
import React from "react";
import AboutText from "./components/about-text";
import TeamSum from "./components/teams-sum";
import Culture from "./components/culture";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full bg-ragewhite">
      <div className="banner inset-0 mt-navheight box-border overflow-hidden bg-cover bg-center object-fill">
        <Banner
          img="/banner/about-banner.webp"
          width={1920}
          height={1080}
          alt="about-banner"
        />
      </div>

      <AboutText />
      {/* <History year={2005} title="founding" content="lorem" /> */}
      <TeamSum />
      <Culture />
    </div>
  );
};

export default AboutUs;
