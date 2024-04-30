"use client";
import React, { useCallback, useMemo, useState } from "react";
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

const CartCard = ({ data, product }) => {
  const [quantity, setQuantity] = useState(1);

  const selectedProduct = useMemo(() => {
    const prod = data?.find((d) => d?.id === product)
    return prod
  }, [product, data])

  console.log(selectedProduct)

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
      {[selectedProduct]?.map((data, i) => {
        return (
          <div className="flex flex-col gap-2" key={i}>
            <div className="flex items-center justify-between w-full">
              <div className="text-base text-black font-medium">
                {data?.itemData?.name}
              </div>
              <div className="">
                {/* <QuantityButton
                  quantity={quantity}
                  addQuantityHandler={addQuantityHandler}
                  dec={dec}
                /> */}
              </div>
              <div className="text-xs text-black font-normal">
                ₹ {data?.itemData?.variations?.at(0)?.itemVariationData?.priceMoney?.amount}
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
                    <span className="text-sm font-normal text-black">
                      {data?.featu}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <hr />
      <div className="p-2">
        <div className="bg-[#572AC8] flex items-center justify-between rounded-md py-2 px-3">
          <span className="text-white text-sm font-medium">₹ {selectedProduct?.itemData?.variations?.at(0)?.itemVariationData?.priceMoney?.amount}</span>
          <span className="text-base font-medium text-white cursor-pointer">
            Checkout
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
