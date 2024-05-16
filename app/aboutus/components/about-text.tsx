import React from "react";

const AboutText = () => {
  return (
    <section
      id="about-text"
      className="bg-divblack flex w-full flex-col items-center px-1 py-14 text-white md:flex-row md:px-10 md:py-36"
    >
      <p className="mb-20 flex-shrink text-wrap text-center text-4xl font-bold md:my-auto md:w-1/4 md:text-6xl">
        Our
        <span className="font-semibold text-ragered"> story.</span>
      </p>
      <p className="w:px-0 w-full text-wrap px-2 text-justify md:w-3/4">
        {/* RageQuit Games was founded in 199X, driven by a shared vision to create
        games that challenge, inspire, and entertain players around the world.
        Our debut title,{" "}
        <span className="font-semibold text-ragered">Realm of Rivals</span>,
        launched in 200X, quickly becoming a global sensation.
        <br />
        Building on that success, we expanded our portfolio with acclaimed
        titles like{" "}
        <span className="font-semibold text-ragered">
          Tactics Triumph, Rift Legends, Valorant Vanguard, and Runeterra
          Rivals.
        </span>{" "}
        Throughout the years, we've continued to innovate and push the
        boundaries of what's possible in gaming. Our dedication to excellence
        has been recognized through numerous awards and the unwavering loyalty
        of our growing community.
       */}
        Welcome to{" "}
        <span className="font-semibold text-ragered">RageQuit Games</span>,
        where passion and innovation collide to create unforgettable gaming
        experiences. Our journey began with a dream to redefine the gaming
        landscape, and we've been dedicated to that mission ever since.
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
