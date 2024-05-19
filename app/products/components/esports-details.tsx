import SectionTitle from "@/components/section-title";
import React from "react";

const EsportsDetails = () => {
  return (
    <>
      <div className="e-sports-banner bg-fill h-[680px] bg-bgblack bg-[url('/banner/esports-banner.webp')] bg-center bg-no-repeat bg-blend-lighten">
        {/* <div className="flex h-full justify-center align-middle">
          <div className="flex flex-col justify-center">
          </div>
        </div> */}
      </div>
      <div className="esports-text">
        <div className="small-title md:mx-10 md:py-10">
          <SectionTitle title="E-Sports" />
        </div>
      </div>
    </>
  );
};

export default EsportsDetails;
