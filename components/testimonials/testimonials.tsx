import React from "react";
import TestiCard from "./components/testi-card";

const feedback = [
  {
    id: "feedback-1",
    content:
      "RageQuit Games has completely transformed my gaming experience. Their diverse range of titles keeps me hooked for hours on end. I can't get enough of their thrilling gameplay and immersive worlds!",
    name: "Lorelei Mercer",
  },
  {
    id: "feedback-2",
    content:
      "I've been a loyal fan of RageQuit Games for years now, and I've never been disappointed. From intense esports tournaments to captivating storylines, they never fail to deliver top-notch entertainment. Keep up the amazing work!",
    name: "Gregory Schumacher",
  },
  {
    id: "feedback-3",
    content:
      "As a casual gamer, I appreciate the variety of options RageQuit Games offers. Whether I'm in the mood for intense competition or a relaxing strategy game, they have something for every mood. Thanks for making gaming so accessible and enjoyable!",
    name: "Belle Wrangler",
  },
  {
    id: "feedback-4",
    content:
      "RageQuit Games has redefined my gaming experience. Their commitment to innovation and player satisfaction shines through in every title they release. I've never felt more immersed in a virtual world than when I'm playing their games.",
    name: "William Worthwright",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center justify-center bg-bgblack py-6 sm:py-16"
    >
      <div className="sticky z-[1] mb-6 flex w-full flex-col items-center justify-between px-3 sm:mb-16 md:relative md:my-3 md:flex-row md:px-0">
        <h2 className="xs:text-[48px] xs:leading-[76.8px] flex w-full justify-center text-[40px] font-semibold leading-[66.8px] text-white">
          What our players <br className="hidden sm:block" /> have to say about
          us
        </h2>
        <div className="mt-6 w-full md:mt-0">
          <p className="font-poppins max-w-sm text-lg font-medium leading-tight text-gray-300 md:mx-3">
            From casual gamers to esports enthusiasts, our community shares
            their thoughts on our games and the impact they've had on their
            gaming journey.
          </p>
        </div>
      </div>
      <div className="no-scrollbar flex w-screen gap-3 overflow-hidden overflow-x-scroll md:w-full md:gap-5">
        {feedback.map((card) => (
          <div className="x-6 w-5/6 flex-shrink-0 py-12 md:ml-10 md:w-1/3">
            <TestiCard key={card.id} {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
