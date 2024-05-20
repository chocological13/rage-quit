import CarouselForge from "@/components/lists/components/carousel";
import React from "react";

const ForgeDetails: React.FC = () => {
  return (
    <>
      <div className="forge-cont py-20 text-bgwhite">
        <div className="title-cont mx-auto w-5/6 md:w-4/5">
          <div className="inner-cont flex flex-col items-center">
            <p className="mb-5 py-4 text-5xl font-semibold">
              Rage <span className="text-ragered">Forge</span>
            </p>
            <p className="text-center font-extralight leading-7 tracking-wider">
              At{" "}
              <span className="font-semibold text-ragered">RageQuit Games</span>
              , <span className="font-semibold">Rage Forge</span> is where
              creativity and innovation come to life. This is our dedicated
              space for nurturing new ideas, developing cutting-edge
              technologies, and experimenting with groundbreaking game concepts.
              Our team of visionary developers and designers work tirelessly in{" "}
              <span className="font-semibold">Rage Forge</span> to push the
              boundaries of gaming, crafting experiences that are both
              technically advanced and incredibly fun. From early prototypes to
              final products, every project that emerges from{" "}
              <span className="font-semibold">Rage Forge</span> reflects our
              commitment to excellence and our passion for gaming. Join us on
              this journey of discovery and see what the future of gaming holds.
            </p>
          </div>
        </div>
        <div className="forge">
          <CarouselForge showTitle={false} />
        </div>
      </div>
    </>
  );
};

export default ForgeDetails;
