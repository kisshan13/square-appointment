import React from "react";
import PageContainer from "../container/PageContainer";
import Image from "next/image";
import apple from "../../../public/sociallinks/apple.webp";
import google from "../../../public/sociallinks/google.webp";

const footerData = [
  {
    title: "Company",
    h1: "About us",
    h2: "Terms & conditions",
    h3: "Privacy policy ",
    h4: "Anti-discrimination policy ",
    h5: "UC impact ",
    h6: "Careers ",
  },
  {
    title: "For Customer",
    h1: "UC reviews",
    h2: "Categories near you",
    h3: "Blog",
    h4: "Contact  us",
  },
  {
    title: "For partners",
    h1: "Register as a professional",
  },
];

const Fotter = () => {
  return (
    <footer>
      <PageContainer>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="font-semibold text-xl mt-6">SquareApps</h3>
          <div className="grid grid-cols-4 gap-5 w-full mt-4">
            {footerData?.map((data) => {
              return (
                <div className="gap-7 mt-1">
                  <h3 className="text-xl font-medium text-black">
                    {data?.title}
                  </h3>
                  <div className="flex flex-col items-start gap-2 mt-3">
                    <span className="text-base text-gray-800 font-normal">
                      {data?.h1}
                    </span>
                    <span className="text-base text-gray-800 font-normal">
                      {data?.h2}
                    </span>
                    <span className="text-base text-gray-800 font-normal">
                      {data?.h3}
                    </span>
                    <span className="text-base text-gray-800 font-normal">
                      {data?.h4}
                    </span>
                    <span className="text-base text-gray-800 font-normal">
                      {data?.h5}
                    </span>
                    <span className="text-base text-gray-800 font-normal">
                      {data?.h6}
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="gap-7 mt-1">
              <h3 className="text-xl font-medium text-black">Social Links</h3>
              <div className="flex flex-col items-start gap-2 mt-3">
                <Image sar={apple} />
                <Image sar={google} />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Fotter;
