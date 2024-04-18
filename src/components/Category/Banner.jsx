import React from "react";
import banner from "../../../public/women/hero-banner.webp";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Image src={banner} className="rounded-lg w-full "/>
    </div>
  );
};

export default Banner;
