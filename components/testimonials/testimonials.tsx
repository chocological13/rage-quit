"use client";
import React from "react";
import { Carousel } from "nuka-carousel";
import TestiCard from "./components/testi-card";

const feedback = [
  {
    id: "feedback-1",
    content: "RageQuit Games has completely transformed my gaming experience. Their diverse range of titles keeps me hooked for hours on end. I can't get enough of their thrilling gameplay and immersive worlds!",
    name: "Lorelei Mercer"
  },
  {
    id: "feedback-2",
    content: "I've been a loyal fan of RageQuit Games for years now, and I've never been disappointed. From intense esports tournaments to captivating storylines, they never fail to deliver top-notch entertainment. Keep up the amazing work!",
    name: "Gregory Schumacher"
  },
  {
    id: "feedback-3",
    content: "As a casual gamer, I appreciate the variety of options RageQuit Games offers. Whether I'm in the mood for intense competition or a relaxing strategy game, they have something for every mood. Thanks for making gaming so accessible and enjoyable!",
    name: "Belle Wrangler"
  },
  {
    id: "feedback-4",
    content: "RageQuit Games has redefined my gaming experience. Their commitment to innovation and player satisfaction shines through in every title they release. I've never felt more immersed in a virtual world than when I'm playing their games.",
    name: "William Worthwright"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="sm:py-16 py-6 flex justify-center items-center flex-col relative bg-bgblack">
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 sticky z-[1] px-3 md:px-0 md:relative md:my-3">
        <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full flex justify-center">
          What our players <br className="sm:block hidden" /> have to say about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-medium text-lg leading-tight max-w-sm text-gray-300 md:mx-3">From casual gamers to esports enthusiasts, our community shares their thoughts on our games and the impact they've had on their gaming journey.</p>
        </div>
      </div>
      <div className="overflow-x-scroll flex md:gap-5 gap-3 no-scrollbar md:px-6">
        {feedback.map((card) => (
          <div className="flex-shrink-0 x-6 py-12 w-5/6 md:w-1/3">
            <TestiCard key={card.id} {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
