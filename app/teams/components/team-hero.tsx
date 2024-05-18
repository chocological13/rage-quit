import Image from "next/image";
import React from "react";

const TeamHero: React.FC = () => {
  return (
    <section className="teams-hero relative">
      <div className="hero__bg bottom-0 left-0 right-0 top-0 overflow-hidden bg-[url('/banner/hero-dark-sketch.webp')] bg-cover bg-repeat">
        <div className="hero__inner mx-auto my-20 mb-10 max-w-7xl bg-transparent pt-20">
          <div className="grid--gutterless flex flex-row-reverse justify-between gap-14">
            <div className="grid__item">
              <div className="w-fit bg-ragered px-2 text-center uppercase text-white">
                <span>Teams</span>
              </div>
              <h1 className="hero__heading text-[80px] font-bold text-white">
                Our <span className="text-ragered">RageQuitters</span>
              </h1>
            </div>

            <Image
              alt=""
              width="640"
              height="360"
              src={"/banner/statue.webp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
