import React from "react";
import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import AccordionItemLocal from "./accordion-item";

const Culture: React.FC = () => {
  const DATA = [
    {
      id: 1,
      value: "item-1",
      title: "Collaboration",
      content:
        "We believe that the best ideas emerge from teamwork. Our open, communicative environment encourages every team member to share their insights and creativity. By working together, we combine our strengths to tackle challenges and achieve our goals.",
    },
    {
      id: 2,
      value: "item-2",
      title: "Inclusivity",
      content:
        "Diversity is one of our greatest assets. We strive to create an inclusive workplace where everyone feels valued and respected. Different perspectives and experiences enrich our creative process and lead to more innovative and engaging games. We are committed to maintaining a welcoming environment for all.",
    },
    {
      id: 3,
      value: "item-3",
      title: "Continuous Improvement",
      content:
        "We are dedicated to constantly evolving and improving. Whether it's adopting the latest technologies, refining our development processes, or learning from player feedback, we believe in the power of growth and innovation. Our commitment to excellence drives us to produce games that meet the highest standards of quality and entertainment.",
    },
  ];

  return (
    <section className="culture justify-center bg-[url('/banner/culture-glhf.webp')] text-white">
      <div className="title-cont relative flex flex-row justify-center overflow-hidden bg-[url('/banner/title-sketch-texture.webp')] py-20 text-6xl font-bold tracking-wider bg-blend-multiply">
        <h1 className="text-black">
          Our <span className="text-ragered">Culture.</span>
        </h1>
        <Image
          src={"/banner/title-sketch-ahri.webp"}
          width={500}
          height={500}
          alt="sketch"
          className="absolute right-0 top-16 hidden md:block"
        />
      </div>
      <Accordion
        type="single"
        collapsible
        orientation="horizontal"
        className="mx-auto grid w-3/4 md:py-24"
      >
        {DATA.map((each) => (
          <AccordionItemLocal key={each.id} {...each} />
        ))}
      </Accordion>
    </section>
  );
};

export default Culture;
