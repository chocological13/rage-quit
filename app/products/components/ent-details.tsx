import React from "react";
import "@/app/globals.css";
import SectionTitle from "@/components/section-title";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";

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
      <div className="cont text-lg font-light text-navsearch">
        <div className="flex items-center justify-center pt-10 md:pt-20">
          <p className="w-5/6 text-justify font-normal leading-7 tracking-wider">
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
          <div className="relative flex w-5/6 flex-col items-center gap-10 text-justify md:w-full md:flex-row md:px-10">
            <div>
              <Suspense fallback={<Skeleton />}>
                <video className="object-cover" autoPlay muted loop>
                  <source
                    src="https://res.cloudinary.com/dymumlmnn/video/upload/v1716187108/ARC_Finaltrailer_Webclip_g33ziy.webm"
                    type="video/mp4"
                  />
                </video>
              </Suspense>
            </div>
            <div className="desc">
              <ul>
                {DATA.map((ent, index) => (
                  <li key={index} className="mb-5">
                    <p className="title-ent font-semibold text-ragered">
                      {ent.title}
                    </p>
                    <p>{ent.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntertainmentDetails;
