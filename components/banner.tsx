import React from "react";
import Image from "next/image";

interface BannerProps {
  img: string;
  width: number;
  height: number;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({
  img,
  width,
  height,
  alt,
}: {
  img: string;
  width: number;
  height: number;
  alt: string;
}) => {
  return (
    <div className="h-full bg-pink-50 text-white">
      <Image src={img} width={width} height={height} alt={alt} />
    </div>
  );
};

export default Banner;
