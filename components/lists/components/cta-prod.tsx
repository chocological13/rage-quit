import React from "react";
import Image from "next/image";
import CTABtn from "../../hero/components/CTA-btn";
import "@/app/globals.css";

const CTAProd: React.FC = () => {
  return (
    <>
      <div
        id="cta-prod"
        className="mt-16 border-t-bgblack bg-ragewhite p-0 md:m-0 md:flex md:justify-between"
      >
        <div className="cta-content mx-auto flex flex-col items-center justify-center">
          <div className="container-inner md:px-30 mx-auto max-w-[620px] px-4 py-8 pt-0 text-center md:mx-auto md:py-8">
            <p className="isolate my-10 text-4xl font-bold leading-none text-black">
              Explore our forge!!
            </p>
            <p className="mx-auto max-w-xs text-lg font-bold leading-tight tracking-tighter text-gray-600">
              Discover more about our games and entertainments now
            </p>
          </div>
          <div className="mb-16 block md:inline-flex">
            <CTABtn title="Learn More" link="/products" />
          </div>
        </div>
        <div className="cta-img">
          <Image
            src={"/banner/ctaprod.webp"}
            width={796}
            height={566}
            alt="CTA Products"
          />
        </div>
      </div>
    </>
  );
};

export default CTAProd;
