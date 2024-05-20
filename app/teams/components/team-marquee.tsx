import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TeamMarquee: React.FC = () => {
  const imageList = [
    "/champ/ahri.png",
    "/champ/akali.png",
    "/champ/annie.png",
    "/champ/ashe.png",
    "/champ/caitlyn.png",
    "/champ/diana.png",
    "/champ/ezreal.png",
    "/champ/gwen.png",
    "/champ/heimerdinger.png",
    "/champ/ivern.png",
    "/champ/janna.png",
    "/champ/jayce.png",
    "/champ/jinx.png",
    "/champ/kaisa.png",
    "/champ/lb.png",
    "/champ/malzahar.png",
    "/champ/mf.png",
    "/champ/morg.png",
    "/champ/nami.png",
    "/champ/neeko.png",
    "/champ/nida.png",
    "/champ/ori.png",
    "/champ/qiyana.png",
    "/champ/sera.png",
    "/champ/sona.png",
    "/champ/soraka.png",
    "/champ/syndra.png",
    "/champ/teemo.png",
    "/champ/vel.png",
    "/champ/viktor.png",
    "/champ/xayah.png",
    "/champ/yuumi.png",
    "/champ/zac.png",
    "/champ/zoe.png",
    "/champ/zyra.png",
    "/champ/ornn.png",
    "/champ/pan.png",
    "/champ/rakan.png",
    "/champ/aphe.png",
    "/champ/corki.png",
    "/champ/ez.png",
    "/champ/fid.png",
    "/champ/jhin.png",
    "/champ/mal.png",
    "/champ/naut.png",
  ];

  return (
    <div className="marquee-holder flex max-w-full flex-col gap-3">
      <Marquee speed={30} pauseOnHover>
        <div className="marquee-30 flex flex-row gap-2">
          {imageList.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`image-${index}`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-auto"
            />
          ))}
        </div>
      </Marquee>
      <Marquee speed={30} direction="right" pauseOnHover>
        <div className="marquee-2 hidden gap-2 md:flex md:flex-row">
          {imageList.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`image-${index}`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-auto"
            />
          ))}
        </div>
      </Marquee>
      <Marquee speed={30} pauseOnHover>
        <div className="marquee-3 hidden gap-2 md:flex md:flex-row">
          {imageList.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`image-${index}`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-auto"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TeamMarquee;
