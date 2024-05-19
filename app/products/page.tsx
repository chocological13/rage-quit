import React from "react";
import ProdBanner from "./components/prod-banner";
import GamesDetails from "./components/games-details";

const Products: React.FC = () => {
  return (
    <div className="w-full bg-ragewhite">
      <section className="about-banner mt-navheight">
        <ProdBanner />
      </section>
      <section className="games bg-bgblack">
        <GamesDetails />
      </section>
    </div>
  );
};

export default Products;
