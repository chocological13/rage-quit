import React from "react";
import Image from "next/image";

interface TeamsCardProps {
  src: string;
  name: string;
  role: string;
  comment: string;
}

const TeamsCard: React.FC<TeamsCardProps> = ({
  src,
  name,
  role,
  comment,
}: {
  src: string;
  name: string;
  role: string;
  comment: string;
}) => {
  return (
    <li className=" team-member hover:transform-y-2 group grid w-fit flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg md:flex md:flex-shrink md:flex-col">
      <div className="team-member-image relative">
        <Image
          src={src}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-20 hover:opacity-75"></div>
        <div className="absolute bottom-0 mx-auto w-full bg-black bg-opacity-20 px-4 pb-4 pt-2 text-center text-wwhite bg-blend-darken">
          <p className="text-2xl font-bold">{name}</p>
          <small className="tracking-wider">{role}</small>
        </div>
      </div>
      <div className="team-content py-4 group-hover:opacity-100">
        <p className="mx-auto max-w-[248px] text-wrap px-2 text-center leading-loose text-ragewhite">
          {comment}
        </p>
      </div>
    </li>
  );
};

export default TeamsCard;
