import React from "react";
import VidBg from "./components/background";
import HeroLogo from "./components/hero-logo";

const Hero: React.FC = () => {
  return (
    <div className="bg-video relative flex flex-col justify-center h-screen w-full bg-video">
      <VidBg />
      <div className="inner-cont relative grid grid-cols-[1fr_5fr_1fr] md:grid-cols-[1fr_3fr_4fr_1fr] items-center text-center w-full mt-7">
        <div className="empty"></div>
        <div className="inner-inner flex flex-col">
          <HeroLogo />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
