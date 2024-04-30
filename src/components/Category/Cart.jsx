import React from "react";
import Coupon from "./Coupon";
import Promise from "./Promise";
import CartCard from "./CartCard";

const Cart = ({ data, product }) => {
  return (
    <div className="flex flex-col gap-5">
      <CartCard data={data} product={product} />
      <Coupon />
      <Promise />
    </div>
  );
};

export default Cart;
