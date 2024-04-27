import React from "react";
import Coupon from "./Coupon";
import Promise from "./Promise";

const Cart = () => {
  return (
    <div className="flex flex-col gap-5">
      <Coupon />
      <Promise />
    </div>
  );
};

export default Cart;
