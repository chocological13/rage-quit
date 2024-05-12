import React from "react";
import ProductList from "./components/list";
import CarouselForge from "./components/carousel";
import CTAProd from "./components/cta-prod";

const ListProd: React.FC = () => {
  const DATA = [
    {
      section: "Games",
      props: [
        {
          img: "/games-lol.png",
          alt: "games-lol",
          title: "Realm of RIVALS"
        },
        {
          img: "/games-val.png",
          alt: "games-val",
          title: "Valorant VANGUARDS"
        },
        {
          img: "/games-tft.png",
          alt: "games-tft",
          title: "Tactics TRIUMPH"
        },
        {
          img: "/games-rift.png",
          alt: "games-rift",
          title: "Rift LEGENDS"
        },
        {
          img: "/games-lor.png",
          alt: "games-lor",
          title: "Runeterra CLASH"
        }
      ]
    },
    {
      section: "Esports",
      props: [
        {
          img: "/esports-lol.png",
          alt: "esports-lol",
          title: "Rivalry ROYALE"
        },
        {
          img: "/esports-val.png",
          alt: "esports-val",
          title: "Valorant VALOR CUP"
        }
      ]
    },
    {
      section: "Entertainment",
      props: [
        {
          img: "/ent-arc.png",
          alt: "ent-arc",
          title: "ARCADIA"
        },
        {
          img: "/ent-mus.png",
          alt: "ent-mus",
          title: "Rage BEATS"
        }
      ]
    }
  ];

  return (
    <>
      <div>
        {DATA.map((prod) => (
          <ProductList key={prod.section} section={prod.section} props={prod.props} />
        ))}
      </div>
      <CarouselForge />
      <CTAProd />
    </>
  );
};

export default ListProd;
