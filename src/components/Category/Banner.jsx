import React from "react";
import banner from "../../../public/women/hero-banner.webp";
import Image from "next/image";
import Packages from "./Packages";

const Banner = () => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={banner} className="rounded-lg w-full " />
      <div>
        <Packages />
      </div>
    </div>
  );
};

export default Banner;
