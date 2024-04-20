import React from "react";
import Package from "../ui/Icon/Package";

const packagesData = [
  {
    name: "Face detox",
    rating: "4.85",
    booking: "909k reviews",
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
    booking: "909k reviews",
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
    booking: "909k reviews",
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
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5 justify-center">
            <div className="flex gap-1.5 items-center">
              <Package className={"w-4 h-4"} />
              <span className="text-sm text-[#0B5459] font-semibold ">
                PACKAGE
              </span>
            </div>
            
            <
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
