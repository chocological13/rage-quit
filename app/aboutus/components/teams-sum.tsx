import React from "react";
import Image from "next/image";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "next/link";

interface TeamMember {
  picture: string;
  name: string;
  role: string;
  comment: string;
}

const TeamSum: React.FC = () => {
  const members = [
    {
      id: 1,
      picture: "/teams/ls-yuumi.webp",
      name: "Yuumi",
      role: "CattoEO and Co-Founder",
      comment: "Purrfectly innovative games for all.",
    },
    {
      id: 2,
      picture: "/teams/seraphine.webp",
      name: "Seraphine",
      role: "Creative Daydreamer",
      comment: "Dreams turned into gaming realities.",
    },
    {
      id: 3,
      picture: "/teams/heim.webp",
      name: "Heimerdinger",
      role: "Lead Mad Developer",
      comment: "Engineering gaming wonders with a spark of madness",
    },
    {
      id: 4,
      picture: "/teams/viktor.webp",
      name: "Viktor",
      role: "Chief AndroTech Officer",
      comment: "Function over form. 01111001 01100101 01110011.",
    },
    {
      id: 5,
      picture: "/teams/ivern.webp",
      name: "Ivern",
      role: "CommuniTREE Manager",
      comment: "My favorite color is RageQuit Games!",
    },
  ];
  return (
    <section className="team-container bg-titlegray px-4 py-16 md:py-24">
      <h2 className="mb-9 text-center text-3xl font-bold md:mb-20">
        Our <span className="text-ragered">RageQuitters.</span>
      </h2>
      <ul className="team-members no-scrollbar flex flex-row gap-8 overflow-scroll overflow-x-scroll md:grid-cols-3">
        {members.map((member) => (
          <li
            key={member.id}
            className=" team-member hover:transform-y-2 group grid w-fit flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-buff shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg md:flex md:w-[300px] md:flex-shrink md:flex-col"
          >
            <div className="team-member-image relative">
              <Image
                src={member.picture}
                alt={member.name}
                width={300}
                height={500}
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-20 hover:opacity-75"></div>
              <div className="absolute bottom-0 mx-auto w-full bg-black bg-opacity-20 px-4 pb-4 pt-2 text-center text-buff bg-blend-darken">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-base">{member.role}</p>
              </div>
            </div>
            <div className="team-member-content py-4 group-hover:opacity-100">
              <p className="mx-auto max-w-[250px] text-wrap leading-loose text-wine">
                {member.comment}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cta-container mx-auto flex items-center justify-center px-4 pt-10 md:mt-16 md:py-10">
        <Link href={"/teams"}>
          <button
            type="button"
            className="btn btn-primary flex flex-row items-center justify-between gap-1 rounded-lg bg-divblack px-6 py-3 text-center align-middle font-semibold text-white hover:bg-ragered focus:outline-none"
          >
            <p className="text-lg">Meet the Team!</p>
            <DoubleArrowIcon className="" fontSize="large" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TeamSum;
