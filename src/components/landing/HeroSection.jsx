import React from "react";
import Services from "./Services";
import ServicesShowCase from "./ServicesShowCase";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:justify-between w-full gap-32 mt-12">
      <div className="w-full lg:w-1/2">
        <Services />
      </div>
      <div className="hidden lg:flex lg:w-1/2">
        <ServicesShowCase />
      </div>
    </div>
  );
};

export default HeroSection;
