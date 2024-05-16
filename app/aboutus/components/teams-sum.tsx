import React from "react";
import Image from "next/image";

interface TeamMember {
  picture: string;
  name: string;
  role: string;
  comment: string;
}

const TeamSum: React.FC = () => {
  const members = [
    {
      picture: "/about-banner.webp",
      name: "Ahri",
      role: "Fox Waifu",
      comment: "Should I make your pulse rise?",
    },
  ];
  return (
    <section className="team bg-desertsand bg-wwhite container mx-auto px-4 py-16 md:py-24">
      <h2 className="mb-8 text-center text-3xl font-bold">Our RageQuitters</h2>
      <ul className="team-members grid grid-cols-1 gap-8 md:grid-cols-3">
        {members.map((member) => (
          <li
            key={member.name}
            className="team-member hover:transform-y-2 bg-buff group w-fit overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="team-member-image relative">
              <Image
                src={member.picture}
                alt={member.name}
                width={300}
                height={300}
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-20 hover:opacity-75"></div>
              <div className="text-buff absolute bottom-0 px-4 pb-4 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-base">{member.role}</p>
              </div>
            </div>
            <div className="team-member-content p-4 group-hover:opacity-100">
              <p className="leading-loose text-wine">{member.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeamSum;
