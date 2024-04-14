import React from "react";
import girl from "../../../public/image/girl.webp";
import boy from "../../../public/image/boy.webp";
import ac from "../../../public/image/ac.webp";

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

  return (
    <div>
      <h1 className="text-3xl text-black font-medium">
        Home services at your doorstep
      </h1>
      <div className="rounded-lg border-[1px] border-gray-500 p-4 ">
        <h2 className="text-lg text-gray-600">What are you looking for?</h2>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {servicesData?.map((data) => {
              return (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={data.img}
                    className="object-contain bg-gray-300 rounded-md"
                  />
                  <div className="text-black text-center text-sm">
                    {data?.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
