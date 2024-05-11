import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CardProps {
  img: string;
  alt: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ img, alt, title }: { img: string; alt: string; title: string }) => {
  return (
    <div className="relative transition duration-200 ease-out shadow-md rounded-md">
      <Link href="/" className="block">
        <Image src={img} width={855} height={389} alt={alt} className="rounded-lg" />
      </Link>
      <div className="px-6 py-12 w-1/3 absolute top-0 left-0 h-full text-base md:text-2xl flex-wrap flex items-center text-center pointer-events-none text-white">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
