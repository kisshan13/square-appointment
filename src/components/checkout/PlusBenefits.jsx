"use client";
import React from "react";
import { CiPercent } from "react-icons/ci";

const PlusBenefits = () => {
  const benefitsData = [
    {
      title: "Get 10% off on all categories",
      description: "Enjoy 10% discount on all bookings in any category",
    },
    {
      title: "Try a new category & get 15% off",
      description: "Enjoy 15% discount on trying a category for the first time",
    },
  ];

  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="text-black font-medium text-lg">All Plus benefits</h1>
      {benefitsData?.map((data, i) => {
        return (
          <div className="flex flex-col  gap-7" key={i}>
            <div className="">
              <CiPercent className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-sm text-black font-medium">
                {data?.title}
              </span>
              <span className="text-sm text-black font-normal">
                {data?.description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlusBenefits;
