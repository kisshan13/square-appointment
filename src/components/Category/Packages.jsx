"use client";
import React from "react";
import Package from "../ui/Icon/Package";
import Star from "../ui/Icon/Star";
import Image from "next/image";
import haircut from "../../../public/men-services/serv1.webp";
import { Button } from "@radix-ui/themes";
import Cart from "./Cart";
import EditCartPackage from "./EditCartPackage";

const packagesData = [
  {
    name: "Face detox",
    rating: "4.85",
    booking: "(909k reviews)",
    price: 2047,
    timeInterval: "1hr 15mins",
    features: [
      { title: "Facial Hair removal", info: "Threading eyebrow" },
      { title: "FacialBleach/Detan", info: "Bleach face & neck" },
      { title: "Facial ", info: "sara fruit cleanup" },
    ],
  },
  {
    name: "Face detox",
    rating: "4.85",
    booking: "(909k reviews)",
    price: 2047,
    timeInterval: "1hr 15mins",
    features: [
      { title: "Facial Hair removal", info: "Threading eyebrow" },
      { title: "FacialBleach/Detan", info: "Bleach face & neck" },
      { title: "Facial ", info: "sara fruit cleanup" },
    ],
  },
  {
    name: "Face detox",
    rating: "4.85",
    booking: "(909k reviews)",
    price: 2047,
    timeInterval: "1hr 15mins",
    features: [
      { title: "Facial Hair removal", info: "Threading eyebrow" },
      { title: "FacialBleach/Detan", info: "Bleach face & neck" },
      { title: "Facial ", info: "sara fruit cleanup" },
    ],
  },
];

const Packages = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between w-full ">
          <div className="flex flex-col gap-1 justify-center w-1/2 border border-gray-300 p-5">
            {packagesData?.map((data, i) => {
              return (
                <div key={i}>
                  <div className="flex gap-1.5 items-center">
                    <Package className={"w-4 h-4"} />
                    <span className="text-sm text-[#0B5459] font-semibold ">
                      PACKAGE
                    </span>
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="font-semibold mb-1">{data?.name}</h2>
                    <h1 className="text-lg text-black font-medium">
                      {data?.title}
                    </h1>
                    <div className="flex gap-1 mb-4">
                      <Star className="w-5 h-5 flex items-center justify-center" />
                      <div className="border-b border-dashed border-gray-500 flex gap-2">
                        <span className="text-sm text-black font-light">
                          {data?.rating}
                        </span>
                        <span className="text-sm text-black font-light">
                          {data?.booking}
                        </span>
                      </div>
                    </div>
                    <div className="flex  w-full">
                      <div className="flex-1">
                        <div className="flex gap-3">
                          <p className="font-medium text-sm mb-1 text-black ">
                            {data?.price}
                          </p>
                          <span className="text-sm text-black font-light">
                            {data?.timeInterval}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1 mt-3">
                          {data?.features?.map((feature, i) => {
                            return (
                              <div key={i} className="flex items-center gap-3 ">
                                {/* <span className="text-lgflex items-center justify-center">
                                  .
                                </span> */}
                                <div className="font-medium text-sm mb-1 text-black ">
                                  {feature?.title}
                                </div>
                                <div className="text-sm text-black font-light">
                                  {feature?.info}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* <div>
                        <Image
                          src={haircut}
                          className="w-[100px] rounded-md aspect-square object-cover "
                        />
                      </div> */}
                    </div>
                  </div>
                  <div className="my-5">
                    <EditCartPackage />
                  </div>
                  <hr className="mb-5" />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 justify-center w-1/2 p-5">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
