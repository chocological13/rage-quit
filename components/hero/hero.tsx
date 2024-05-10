import React from "react";
import VidBg from "./components/background";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-video relative flex flex-col justify-center h-screen w-full bg-video">
      <VidBg />
      <div className="inner-cont relative grid grid-cols-[1fr_3fr_4fr_1fr] items-center text-center w-full mt-7">
        <div className="empty"></div>
        <div className="inner-inner flex flex-col">
          <div className="hero-logo">
            <Image src="/hero-logo.png" width={384} height={293} alt="hero-logo" />
          </div>
          <div className="text mt-16 text-white">
            <p className="text-3xl">
              Realm of Rivals
              <br />
              Mid-Season Invitational
            </p>
            <br />
            <p>Tune in to Play-ins and Brackets,</p>
            <p>and don&apos;t miss the Finals</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
