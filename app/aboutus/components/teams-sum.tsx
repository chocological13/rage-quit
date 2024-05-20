import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "next/link";
import TeamsCard from "./teams-card";

const TeamSum: React.FC = () => {
  const members = [
    {
      id: 1,
      src: "/teams/ls-yuumi.webp",
      name: "Yuumi",
      role: "CattoEO and Co-Founder",
      comment: '"Purrfectly innovative games for all."',
    },
    {
      id: 2,
      src: "/teams/seraphine.webp",
      name: "Seraphine",
      role: "Creative Daydreamer",
      comment: '"Dreams turned into gaming realities."',
    },
    {
      id: 3,
      src: "/teams/heim.webp",
      name: "Heimerdinger",
      role: "Lead Mad Developer",
      comment: '"Engineering gaming wonders with a spark of madness"',
    },
    {
      id: 4,
      src: "/teams/viktor.webp",
      name: "Viktor",
      role: "Chief AndroTech Officer",
      comment: '"Function over form. 01111001 01100101 01110011."',
    },
    {
      id: 5,
      src: "/teams/ivern.webp",
      name: "Ivern",
      role: "CommuniTREE Manager",
      comment: '"My favorite color is RageQuit Games!"',
    },
  ];

  return (
    <section className="team-container bg-titlegray px-4 py-16 md:py-24">
      <h2 className="mb-9 text-center text-5xl font-bold tracking-wider md:mb-20 md:text-6xl">
        Our <span className="text-ragered">RageQuitters.</span>
      </h2>

      <ul className="team-members no-scrollbar flex flex-row justify-center gap-8 overflow-scroll overflow-x-scroll md:grid-cols-3">
        {members.map((member) => (
          <TeamsCard key={member.id} {...member} />
        ))}
      </ul>

      <div className="cta-container mx-auto flex items-center justify-center px-4 pt-10 md:mt-16 md:py-10">
        <Link href={"/teams"}>
          <button
            type="button"
            className="btn btn-primary flex flex-row items-center justify-between gap-1 rounded-xl bg-divblack px-6 py-3 text-center align-middle font-semibold text-white hover:bg-ragered focus:outline-none"
          >
            <p className="text-2xl">Meet the rest of our team!</p>
            <DoubleArrowIcon className="" fontSize="large" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TeamSum;
