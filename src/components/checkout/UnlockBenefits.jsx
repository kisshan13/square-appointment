import Image from "next/image";
import React from "react";
import unlock from "../../../public/coupon/unlock-benefits.webp";

const UnlockBenefits = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Image
        src={unlock}
        className="flex items-center justify-center w-32 h-32"
      />
      <div className="text-black text-3xl font-semibold">
        Unlock Plus benefits!
      </div>
    </div>
  );
};

export default UnlockBenefits;
