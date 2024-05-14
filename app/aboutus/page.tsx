import Banner from "@/components/banner";
import React from "react";
import AboutText from "./components/about-text";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Banner
        img="/about-banner.webp"
        width={1920}
        height={1280}
        alt="about-banner"
      />
      <AboutText />
    </div>
  );
};

export default AboutUs;
