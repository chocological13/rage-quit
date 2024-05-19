import Link from "next/link";
import React from "react";
import Image from "next/image";

export interface CardProps {
  img: string;
  alt: string;
  title: string;
}

const Card: React.FC<CardProps> = ({
  img,
  alt,
  title,
}: {
  img: string;
  alt: string;
  title: string;
}) => {
  return (
    <div className="relative rounded-md shadow-md transition duration-200 ease-out">
      <Link href="/" className="block">
        <Image
          src={img}
          width={855}
          height={389}
          alt={alt}
          className="rounded-lg"
        />
      </Link>
      <div className="pointer-events-none absolute left-0 top-0 flex h-full w-1/3 flex-wrap items-center px-6 py-12 text-center text-base text-white md:text-2xl">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
