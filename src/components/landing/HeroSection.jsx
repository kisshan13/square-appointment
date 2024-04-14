import React from "react";
import Services from "./Services";
import ServicesShowCase from "./ServicesShowCase";

const HeroSection = () => {
  return (
    <div className="flex justify-between ">
      <Services />
      <ServicesShowCase />
    </div>
  );
};

export default HeroSection;
