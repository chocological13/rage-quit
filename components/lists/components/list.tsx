import React from "react";
import Card from "./card";
import { CardProps } from "./card";

interface ListProps {
  section: string;
  props: CardProps[];
}

const ProductList: React.FC<ListProps> = ({ section, props }: { section: string; props: CardProps[] }) => {
  const lastChild = props[props.length - 1];

  return (
    <div className="w-full my-36 bg-bgblack overflow-auto">
      <div className="px-10 mt-24">
        <p className="text-white text-5xl font-semibold">{section}</p>
        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          {props.length % 2 === 0 && (
            <>
              {props.map((prop) => (
                <Card key={prop.alt} img={prop.img} alt={prop.alt} title={prop.title} />
              ))}
            </>
          )}

          {props.length % 2 === 1 && (
            <>
              {props.slice(0, props.length - 1).map((prop) => (
                <Card key={prop.alt} img={prop.img} alt={prop.alt} title={prop.title} />
              ))}

              <div className="md:col-span-2 md:mx-auto md:w-1/2 md:h-full flex-shrink">
                <Card img={lastChild.img} alt={lastChild.alt} title={lastChild.title} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
