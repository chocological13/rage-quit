import React from "react";
import ProdDetailsText, { ProdDetailsTextProps } from "./prod-details-text";
import Card, { CardProps } from "@/components/lists/components/card";

interface ProdDetailsLayoutProps {
  text: ProdDetailsTextProps;
  card: CardProps;
  index: number;
}

const ProdDetailsLayout: React.FC<ProdDetailsLayoutProps> = ({
  text,
  card,
  index,
}: {
  text: ProdDetailsTextProps;
  card: CardProps;
  index: number;
}) => {
  return (
    <>
      {index % 2 === 1 ? (
        <>
          <div className="prod-details bg-bgblack md:grid md:grid-cols-2 md:gap-10">
            <div className="">
              <ProdDetailsText title={text.title} desc={text.desc} id={index} />
            </div>
            <div className="my-auto">
              <Card img={card.img} alt={card.alt} title={card.title} />
            </div>
          </div>
        </>
      ) : (
        <div className="prod-details bg-bgblack md:grid md:grid-cols-2 md:gap-10">
          <div className="my-auto">
            <Card img={card.img} alt={card.alt} title={card.title} />
          </div>
          <div className="">
            <ProdDetailsText title={text.title} desc={text.desc} id={index} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProdDetailsLayout;
