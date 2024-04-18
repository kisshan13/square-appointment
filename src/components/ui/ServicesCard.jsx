import Image from "next/image";
import React from "react";

const ServicesCard = ({ data, bgColor }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {data?.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-start gap-1 "
            >
              <div
                className={`${(bgColor === true
                  ? "bg-gray-100 "
                  : null)} w-full flex items-center p-3 rounded-lg justify-center `}
              >
                <Image
                  src={data.img}
                  className={`object-contain ${(bgColor === true
                    ? "bg-gray-300"
                    : null)}  rounded-md`}
                />
              </div>
              <div className="text-black text-center text-xs max-w-24">
                {data?.title}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicesCard;
