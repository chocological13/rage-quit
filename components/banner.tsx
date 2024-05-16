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
    <div className="h-full w-full overflow-hidden object-contain">
      <Image
        src={img}
        width={width}
        height={height}
        alt={alt}
        className="sm:object-position-center object-cover object-center sm:object-contain"
      />
    </div>
  );
};

export default Banner;
