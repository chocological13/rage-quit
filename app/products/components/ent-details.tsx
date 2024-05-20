import React from "react";
import "@/app/globals.css";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const EntertainmentDetails: React.FC = () => {
  const DATA = [
    {
      title: "Music",
      desc: "Our original soundtracks and singles, created by talented artists, resonate with fans and enhance the emotional depth of our games. Each piece of music is crafted to reflect the unique atmosphere and themes of our title.",
    },
    {
      title: "Arcadia the Series",
      desc: "Arcadia takes viewers on an epic journey through the universe of our games, exploring the lore and characters that players have come to love. With stunning animation and captivating storytelling, Arcadia has garnered a passionate following and critical acclaim.",
    },
    {
      title: "Expanded Universe",
      desc: "Beyond music and animation, we delve into comic books, board games, and other forms of media, enriching the stories and experiences from our game worlds.",
    },
  ];
  return (
    <>
      <div className="ent-bg hero__bg__md md:bg-fill h-[214px] bg-[url('/banner/banner-ent-mobile.webp')] bg-contain bg-center bg-no-repeat md:h-[600px] md:bg-[url('/banner/banner-ent.webp')] md:bg-cover">
        <div className="flex justify-center text-black md:justify-end md:p-10 md:pr-20">
          <div className="mt-9 md:hidden">
            <SectionTitle title="entertainment" />
          </div>
          <div className="md-title hidden p-6 pr-40 md:block">
            <div className="bg-ragered p-2 px-3 text-5xl font-semibold tracking-widest text-white">
              ENTERTAINMENT
            </div>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="flex justify-center md:pt-20">
          <p className="text-justify leading-7 tracking-wider md:w-5/6">
            At{" "}
            <span className="font-semibold text-ragered">RageQuit Games</span>,
            our entertainment offerings extend beyond gaming to include a rich
            array of multimedia experiences. From our original music tracks that
            capture the essence of our game worlds to our critically acclaimed
            animated series, Arcadia, we immerse our fans in compelling stories
            and unforgettable moments.
          </p>
        </div>
        <div className="ent-desc flex flex-row items-center justify-center gap-10 py-20 md:px-20 md:py-16">
          <div className="relative flex flex-row items-center gap-3 md:px-10">
            <div>vid here?</div>
            <div className="desc">
              <ul>
                {DATA.map((ent, index) => (
                  <li key={index} className="mb-5">
                    <h3 className="title-ent font-semibold text-ragered">
                      {ent.title}
                    </h3>
                    <p>{ent.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="">
            <Image
              src={"/banner/sketch-poppy.webp"}
              width={640}
              height={522}
              alt="poppy sketch"
            />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EntertainmentDetails;
