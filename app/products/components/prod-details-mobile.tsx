import React from "react";
import { ProdDetailsLayoutProps } from "./prod-details-layout";
import ProdDetailsText, { ProdDetailsTextProps } from "./prod-details-text";
import Card, { CardProps } from "@/components/lists/components/card";

const ProductDetailsMobile: React.FC<ProdDetailsLayoutProps> = ({
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
      <div className="prod-details my-5 bg-bgblack md:gap-10">
        <div>
          <Card img={card.img} alt={card.alt} title={card.title} />
        </div>
        <div className="">
          <ProdDetailsText title={text.title} desc={text.desc} id={index} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsMobile;
