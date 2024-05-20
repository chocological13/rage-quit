import SectionTitle from "@/components/section-title";
import React from "react";

const ProdBanner: React.FC = () => {
  return (
    <div className="hero-bg bg-fill relative flex h-[720px] flex-row overflow-hidden bg-slate-600 bg-opacity-60 bg-[url('/banner/prod-banner-mobile.webp')] bg-cover bg-center bg-no-repeat py-20 bg-blend-soft-light md:bg-[url('/banner/prod-banner.webp')]">
      <div className="hero-text-cont flex w-full flex-col justify-center text-white">
        <div className="mx-auto">
          <SectionTitle title="games & entertainment" />
        </div>
        <div>
          <h1 className="my-10 text-center text-5xl font-bold tracking-wider md:text-9xl">
            Explore <span className="text-ragered">Our Forge</span>
          </h1>
        </div>
        <div>
          <p className="text-center text-xl font-extralight tracking-wider">
            Discover the worlds we've created.
            <br />
            Dive into our epic games and unforgettable experiences designed for
            every type of player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProdBanner;
