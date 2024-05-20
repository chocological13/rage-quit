import SectionTitle from "@/components/section-title";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const EsportsDetails = () => {
  return (
    <>
      <div className="e-sports-banner bg-fill h-[680px] bg-bgblack bg-[url('/banner/esports-banner.webp')] bg-center bg-no-repeat bg-blend-lighten">
        {/* <div className="flex h-full justify-center align-middle">
          <div className="flex flex-col justify-center">
          </div>
        </div> */}
      </div>
      <div className="esports-text p-3 px-10">
        <div className="small-title flex justify-center py-10 md:mx-10">
          <SectionTitle title="E-Sports" />
        </div>
        <div className="esports-det grid gap-10 md:grid-cols-[3fr_1fr]">
          <div className="bg-ragewhite py-3 bg-blend-darken md:order-2 md:mb-5">
            <Image
              src="/misc/faker.webp"
              width={500}
              height={400}
              alt="faker"
            />
          </div>
          <div className=" flex flex-col gap-10 md:order-1 md:my-auto md:-translate-y-0.5">
            <p className="text-justify leading-relaxed tracking-wide md:leading-loose">
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
