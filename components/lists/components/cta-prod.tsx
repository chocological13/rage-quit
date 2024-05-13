import React from "react";
import Image from "next/image";
import CTABtn from "../../hero/components/CTA-btn";
import "@/app/globals.css";

const CTAProd: React.FC = () => {
  return (
    <>
      <div id="cta-prod" className="md:flex md:justify-between mt-16 p-0 md:m-0 border-t-bgblack">
        <div className="cta-content flex flex-col items-center justify-center mx-auto">
          <div className="container-inner max-w-[620px] mx-auto text-center py-8 px-4 pt-0 md:mx-auto md:px-30 md:py-8">
            <h2 className="text-4xl font-bold leading-none text-black mb-6 block isolate">Explore our forge!!</h2>
            <p className="text-lg text-gray-600 leading-tight tracking-tighter mx-auto font-bold max-w-xs">Discover more about our games and entertainments now</p>
          </div>
          <div className="block mb-16 md:inline-flex">
            <CTABtn title="Learn More" link="/products" />
          </div>
        </div>
        <div className="cta-img">
          <Image src={"/ctaprod.webp"} width={796} height={566} alt="CTA Products" />
        </div>
      </div>
    </>
  );
};

export default CTAProd;
