import React from "react";
import ProductList from "./components/list";

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
    }
  ];

  return (
    <div>
      {DATA.map((prod) => (
        <ProductList key={prod.section} section={prod.section} props={prod.props} />
      ))}
    </div>
  );
};

export default ListProd;
