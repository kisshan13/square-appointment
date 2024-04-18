import React from "react";
import girl from "../../../public/image/girl.webp";
import boy from "../../../public/image/boy.webp";
import ac from "../../../public/image/ac.webp";
import cleaning from "../../../public/image/cleaning.webp";
import electric from "../../../public/image/electric.webp";
import smart from "../../../public/image/smartlock.webp";
import purifier from "../../../public/image/waterpurifier.webp";
import star from "../../../public/image/star.webp";
import user from "../../../public/image/user.webp";
import Image from "next/image";
import ServicesCard from "../ui/ServicesCard";

const Services = () => {
  const servicesData = [
    {
      img: girl,
      title: "Salon Prime",
    },
    {
      img: boy,
      title: "Salon Prime for kids & men",
    },
    {
      img: ac,
      title: "AC & Appliance Repair",
    },
  ];

  const data = [
    {
      img: cleaning,
      title: "Cleaning",
    },
    {
      img: electric,
      title: "Electric , plumber & carpenter ",
    },
    {
      img: smart,
      title: "Native Water purifier",
    },
    {
      img: purifier,
      title: "native Smart locks",
    },
  ];

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
        Home services at your doorstep
      </h1>
      <div className="rounded-lg lg:mt-4 lg:border border-gray-400 lg:p-4 flex flex-col gap-3 ">
        <h2 className="hidden lg:flex text-lg text-gray-400">
          What are you looking for?
        </h2>
        <div className="flex flex-col gap-4 mt-4">
          <ServicesCard data={servicesData} bgColor={true} />
          <div className="grid grid-cols-2 gap-3">
            {data?.map((data, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                >
                  <span className="text-black text-start text-xs max-w-24">
                    {data?.title}
                  </span>
                  <Image src={data?.img} className="" />
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
