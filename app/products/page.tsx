import React from "react";
import ProdBanner from "./components/prod-banner";
import GamesDetails from "./components/games-details";
import EsportsDetails from "./components/esports-details";

const Products: React.FC = () => {
  return (
    <div className="w-full bg-ragewhite">
      <section className="about-banner mt-navheight">
        <ProdBanner />
      </section>
      <section className="games bg-bgblack">
        <GamesDetails />
      </section>
      <section className="esports-details bg-ragewhite">
        <EsportsDetails />
      </section>
    </div>
  );
};

export default Products;
