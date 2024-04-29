import React, { useState } from "react";
import coupon from "../../../public/coupon/coupon.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Coupon = () => {
  const [showMoreCoupon, setShowMoreCoupon] = useState(false);

  const showCoupon = () => {
    setShowMoreCoupon(!showMoreCoupon);
  };

  return (
    <div className="flex flex-col gap-2 shadow border rounded-lg p-5 border-gray-300">
      <div className="flex items-center justify-start gap-3">
        <div className="">
          <Image src={coupon} className="w-8 h-8" />
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
      {!showMoreCoupon && (
        <span
          onClick={showCoupon}
          className="flex items-center text-xs cursor-pointer mt-1 font-medium text-[#6E42E5]"
        >
          View More Offers{" "}
          <IoIosArrowDown className="px-2 w-4 h-4 text-[#6E42E5]" />
        </span>
      )}
      {showMoreCoupon && (
        <div className="flex items-center justify-start mt-3 gap-3">
          <div className="">
            <Image src={coupon} className="w-8 h-8" />
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
      )}
      {showMoreCoupon && (
        <span
          onClick={showCoupon}
          className="text-sm cursor-pointer mt-1 font-medium text-[#6E42E5] flex items-center "
        >
          View less Offers{" "}
          <IoIosArrowDown className="px-2 w-4 h-4 rotate-180 text-[#6E42E5]" />
        </span>
      )}

    </div>
  );
};

export default Coupon;
