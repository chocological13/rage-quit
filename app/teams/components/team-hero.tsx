import SectionTitle from "@/components/section-title";
import Image from "next/image";
import React from "react";

const TeamHero: React.FC = () => {
  return (
    <section className="teams-hero relative">
      <div className="hero__bg bottom-0 left-0 right-0 top-0 overflow-hidden bg-[url('/banner/hero-dark-sketch.webp')] bg-cover bg-center bg-repeat">
        <div className="hero__inner mx-3 my-10 bg-transparent py-20 md:mx-auto md:my-32 md:mb-10 md:max-w-7xl">
          <div className="grid--gutterless flex flex-col justify-between md:flex-row-reverse md:gap-14">
            <div className="grid__item mb-10">
              <SectionTitle title="teams" />
              <h1 className="hero__heading mt-3 text-[54px] font-bold text-white md:text-[80px]">
                Our <span className="text-ragered">RageQuitters</span>
              </h1>
            </div>

            <Image
              alt=""
              width="640"
              height="360"
              src={"/banner/statue.webp"}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
