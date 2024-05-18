import React from "react";

const AboutText = () => {
  return (
    <section
      id="about-text"
      className="flex w-full flex-col items-center bg-divblack px-1 py-14 text-white md:flex-row md:px-10 md:py-36"
    >
      <p className="mb-20 flex-shrink text-wrap text-center text-4xl font-bold md:my-auto md:w-1/4 md:text-6xl">
        Our
        <span className="font-semibold text-ragered"> Story.</span>
      </p>
      <p className="w:px-0 w-full text-wrap px-2 text-justify leading-6 md:w-3/4">
        Welcome to{" "}
        <span className="font-semibold text-ragered">RageQuit Games</span>,
        where passion and innovation collide to create unforgettable gaming
        experiences. <span className="font-semibold">Founded in 2005</span>, our
        journey began with a dream to redefine the gaming landscape. Our debut
        title,{" "}
        <span className="font-semibold text-ragered">Realm of Rivals</span>,
        launched in 2007 and quickly became a global sensation.
        <br />
        <br />
        In <span className="font-semibold">2010</span>, we expanded our
        portfolio with{" "}
        <span className="font-semibold text-ragered">Rift Rumble</span>,
        captivating gamers worldwide. By{" "}
        <span className="font-semibold">2013</span>, we ventured into esports
        with{" "}
        <span className="font-semibold text-ragered">Tactical Triumph</span>,
        leading to our first major tournament, the{" "}
        <span className="font-semibold text-ragered">
          Tactical Triumph Tournament
        </span>
        . Our success continued with the{" "}
        <span className="font-semibold">2015</span> release of{" "}
        <span className="font-semibold text-ragered">
          Legend of Runeterra Showdown
        </span>
        , solidifying our reputation for innovative and immersive gaming
        experiences.
        <br />
        <br />
        At the core of our success is a diverse team of talented individuals
        dedicated to excellence, creativity, and a player-first approach. At
        Rage Quit Gaming, we foster a culture of collaboration, inclusivity, and
        continuous improvement, ensuring that every game we create is not only
        technically flawless but also a joy to play. Join us in our quest to
        push the boundaries of gaming and connect with a vibrant community of
        passionate players.
      </p>
    </section>
  );
};

export default AboutText;
