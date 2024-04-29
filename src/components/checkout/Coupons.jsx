import React from "react";
import { CiPercent } from "react-icons/ci";

const Coupon = () => {
  const couponData = [
    { title: "10% off on all categories" },
    { title: "Try a new category & get 15% off" },
  ];
  return (
    <div className="flex flex-col gap-3 w-full border rounded-lg p-7 border-gray-300">
      {couponData?.map((data, i) => {
        return (
          <div className="flex items-center justify-start gap-7" key={i}>
            <div className="">
              <CiPercent className="w-6 h-6"/>
            </div>
            <span className="text-sm text-black font-normal">{data?.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Coupon;
