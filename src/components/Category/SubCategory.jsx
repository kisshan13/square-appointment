import React from "react";
import CategoryTitle from "../ui/CategoryTitle";
import cat1 from "../../../public/women/cat1.webp";
import cat2 from "../../../public/women/cat2.webp";
import cat3 from "../../../public/women/cat1.webp";
import cat4 from "../../../public/women/cat4.webp";
import cat5 from "../../../public/women/cat5.webp";
import cat6 from "../../../public/women/cat6.webp";
import cat7 from "../../../public/women/cat7.webp";
import cat8 from "../../../public/women/cat8.webp";
import cat9 from "../../../public/women/cat9.webp";
import ServicesCard from "../ui/ServicesCard";

const SubCategory = () => {
  
  const subCategoryData = [
    { img: cat1, title: "Best Seller Pakages" },
    { img: cat2, title: "Make your package" },
    { img: cat3, title: "Waxing" },
    { img: cat4, title: "Facial & cleanups" },
    { img: cat5, title: "Manicure" },
    { img: cat6, title: "Pedicure" },
    { img: cat7, title: "Threading & face wax" },
    { img: cat8, title: "Bleach & detan" },
    { img: cat9, title: "Hair care" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <CategoryTitle
        title={"Salon Prime"}
        rating={"4.85"}
        booking={"(11.3 bookings)"}
      />
      <div className="rounded-lg lg:mt-4 lg:border border-gray-400 lg:p-4">
        <ServicesCard data={subCategoryData} bgColor={false}/>
      </div>
    </div>
  );
};

export default SubCategory;
