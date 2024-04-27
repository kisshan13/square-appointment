"use client";
import React from "react";
import star from "../../../public/image/star.webp";
import user from "../../../public/image/user.webp";
import Image from "next/image";
import ServicesCard from "../ui/ServicesCard";

const Services = ({ data }) => {
  const statsData = [
    {
      img: star,
      stats: "4.8",
      title: "Service Rating",
    },
    {
      img: user,
      stats: "5M +",
      title: "Customers Globally",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="hidden lg:flex text-3xl text-black font-medium max-w-80">
        {data?.heading}
      </h1>
      <div className="rounded-lg lg:mt-4 lg:border border-gray-400 lg:p-4 flex flex-col gap-3 ">
        <h2 className="hidden lg:flex text-lg text-gray-400">
          {data?.categoryText}
        </h2>
        <div className="flex flex-col gap-4 mt-4">
          <ServicesCard data={data?.category} bgColor={true} />
          <div className="grid grid-cols-2 gap-3">
            {data?.categories?.map((data, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                >
                  <span className="text-black text-start text-xs max-w-24">
                    {data?.categoryData?.name}
                  </span>
                  <img src={data?.image} className="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-12 mt-12 w-full">
        {statsData.map((stats, i) => {
          return (
            <div className="flex items-center gap-5" key={i}>
              <Image src={stats?.img} />
              <div className="flex flex-col gap-0.5">
                <span className="text-black font-medium text-base">
                  {stats?.stats}
                </span>
                <span className="text-black text-xs">{stats?.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
