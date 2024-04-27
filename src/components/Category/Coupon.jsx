import React from "react";
import coupon from "../../../public/coupon/coupon.png";
import Image from "next/image";

const Coupon = () => {
  return (
    <div className="flex flex-col gap-2 shadow border rounded-lg p-5 border-gray-300">
      <div className="flex items-center justify-start gap-3">
        <div className="">
          <Image src={coupon} className="w-10 h-10" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-medium mb-1 text-xs">
            20% off on Kotak Silk cards
          </h2>
          <span className="text-xs text-black font-light">
            20% off up to INR 350
          </span>
        </div>
      </div>
      <span className="text-sm font-medium text-[#6E42E5]">
        View More Offers{" "}
      </span>
    </div>
  );
};

export default Coupon;
