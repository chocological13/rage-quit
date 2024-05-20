import SectionTitle from "@/components/section-title";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const EsportsDetails = () => {
  return (
    <>
      <div className="e-sports-banner bg-fill h-[680px] bg-bgblack bg-[url('/banner/esports-banner.webp')] bg-center bg-no-repeat bg-blend-lighten"></div>
      <div className="esports-text bg-bgwhite bg-[url('/banner/sketch-poppy.webp')] bg-left-bottom bg-no-repeat p-3 px-10 mix-blend-darken">
        <div className="small-title flex justify-center py-10 md:mx-10">
          <SectionTitle title="E-Sports" />
        </div>
        <div className="esports-det grid gap-10 py-10 md:grid-cols-[3fr_1fr]">
          <div className="py-3 bg-blend-darken md:order-2 md:py-10">
            <Image
              src="/misc/faker.webp"
              width={500}
              height={400}
              alt="faker"
            />
          </div>
          <div className=" flex flex-col gap-10 md:order-1 md:my-auto md:-translate-y-0.5">
            <p className="bg-slate-400 bg-opacity-15 p-2 text-justify text-lg leading-relaxed tracking-wide md:leading-loose">
              At{" "}
              <span className="font-semibold text-ragered">RageQuit Games</span>
              , our esports scene blends high-stakes competition with
              community-driven events. From premier tournaments in games like
              Realm of Rivals and Valorant Vanguards to grassroots competitions,
              we cater to all skill levels. Our live broadcasts with
              professional commentary bring the excitement to a global audience.
              Experience the thrill of RageQuit Games esports, where every match
              is a battle for glory and every player can become a legend.
            </p>
            <div className="flex justify-center md:justify-end">
              <Link href={"https://youtu.be/dQw4w9WgXcQ?si=5Yd1KvKITVdUq_ln"}>
                <button
                  type="button"
                  className="rounded-md bg-bgblack p-2 px-2 font-semibold text-ragewhite underline underline-offset-8 hover:bg-ragered hover:text-ragewhite"
                  aria-label="watch link"
                >
                  Watch Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsportsDetails;
