"use client";
import React, { useState } from "react";
import { QuantityButton } from "../ui/Button";
import { LiaSquareFullSolid } from "react-icons/lia";

const cartData = [
  {
    title: "Full body indulgence",
    price: "3999",
    features: [
      { featu: "Threading: Eyebrow" },
      { featu: "Full arms + full legs + underarms (Chocolate Roll-on)" },
      { featu: "Threading: Eyebrow" },
      { featu: "Threading: Eyebrow" },
      { featu: "Threading: Eyebrow" },
    ],
  },
];

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);

  const addQuantityHandler = () => {
    // if (selectedVariant?.quantity > quantity) {
    setQuantity(quantity + 1);
    // } else {
    //   FailureAlert("Cant Add More Quantity Than Available Stock");
    // }
  };

  const dec = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-2 shadow border rounded-lg p-5 border-gray-300">
      <h1 className="text-lg text-black font-semibold">Cart</h1>
      {cartData?.map((data, i) => {
        return (
          <div className="flex flex-col gap-2" key={i}>
            <div className="flex items-center justify-between w-full">
              <div className="text-base text-black font-medium">
                {data?.title}
              </div>
              <div className="">
                <QuantityButton
                  quantity={quantity}
                  addQuantityHandler={addQuantityHandler}
                  dec={dec}
                />
              </div>
              <div className="text-xs text-black font-normal">
                {data?.price}
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              {data?.features?.map((data, i) => {
                return (
                  <div
                    className="flex items-center justify-start gap-3"
                    key={i}
                  >
                    <LiaSquareFullSolid className="w-2 h-2 flex items-center justify-center" />
                    <span className="text-sm font-light text-black">
                      {data?.featu}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartCard;
