import React from "react";

const TeamText: React.FC = () => {
  return (
    <div className="hero relative overflow-hidden">
      <div className="team-text bg-slate-300 bg-opacity-20 text-center text-lg tracking-wide text-slate-600 md:bg-none md:text-2xl">
        <p>
          At <span className="font-semibold text-ragered">RageQuit Games</span>,
          our team is the heart and soul of everything we do. Each member brings
          their unique talents, passion, and expertise to create games that push
          the boundaries of innovation and deliver unforgettable experiences.
          From visionary leaders and creative minds to technical wizards and
          community champions, our diverse team collaborates seamlessly to turn
          dreams into reality.
          <br />
          <br />
          <span className="text-2xl font-light md:text-4xl">
            Get to know the dedicated individuals who make RageQuit Games a
            leader in the gaming industry.
          </span>
        </p>
      </div>
    </div>
  );
};

export default TeamText;
