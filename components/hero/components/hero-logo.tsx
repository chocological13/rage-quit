import React from "react";
import Image from "next/image";
import CTABtn from "./CTA-btn";

const HeroLogo: React.FC = () => {
  return (
    <>
      <div className="hero-logo mt-10 md:mx-auto">
        <Image src="/hero-logo.png" width={384} height={293} alt="hero-logo" />
      </div>
      <div className="text my-8 text-white">
        <p className="text-4xl">
          Realm of Rivals
          <br />
          Mid-Season Invitational
        </p>
        <br />
        <p className="text-lg">
          Tune in to Play-ins and Brackets,
          <br />
          and don&apos;t miss the Finals
        </p>
      </div>
      <div className="my-3">
        <CTABtn
          title="Watch Now"
          link="https://youtu.be/dQw4w9WgXcQ?si=5Yd1KvKITVdUq_ln"
        />
      </div>
    </>
  );
};

export default HeroLogo;
