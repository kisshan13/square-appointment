import React from "react";
import Services from "./Services";
import ServicesShowCase from "./ServicesShowCase";

const HeroSection = () => {
  return (
    <div className="flex justify-between w-full gap-32">
      <div className="w-1/2">
        <Services />
      </div>
      <div className="w-1/2">
        <ServicesShowCase />
      </div>
    </div>
  );
};

export default HeroSection;
