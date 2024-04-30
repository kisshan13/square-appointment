"use client";
import Image from "next/image";
import React from "react";
import promise from "../../../public/coupon/promise.webp";
import { LuArrowRight } from "react-icons/lu";

const promiseCard = [
  { title: "4.5+ Rated Beauticians" },
  { title: "Luxury Salon Experience" },
  { title: "Premium Branded Products" },
];

const Promise = () => {
  return (
    <div className="flex justify-between shadow border rounded-lg p-5 border-gray-300">
      <div>
        <h1 className="text-base font-medium text-black ">UC Promise</h1>
        <div className="flex flex-col gap-1 mt-3">
          {promiseCard?.map((data, i) => {
            return (
              <div className="flex gap-3" key={i}>
                <span>
                  <LuArrowRight />
                </span>
                <span className="text-sm text-black font-normal">
                  {data?.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Image src={promise} />
      </div>
    </div>
  );
};

export default Promise;
