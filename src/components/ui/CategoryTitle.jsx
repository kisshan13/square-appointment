import React from "react";
import Star from "./Icon/Star";

const CategoryTitle = ({ title, rating, booking }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl text-black font-medium">{title}</h1>
      <div className="flex gap-3 mb-4">
        <Star className="w-6 h-6" />
        <div className="border-b border-dashed border-gray-500 flex gap-2">
          <span className="text-base text-black font-light">{rating}</span>
          <span className="text-base text-black font-light">{booking}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryTitle;
