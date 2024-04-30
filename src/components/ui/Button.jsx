import { HiMinus, HiOutlinePlusSm } from "react-icons/hi";

export const QuantityButton = ({ quantity, addQuantityHandler, dec }) => {
  return (
    <div className="w-full py-2 gap-2 lg:px-1 lg:h-[30px] bg-[#e2d9f8] border border-[#572AC8] justify-center items-center lg:gap-1 rounded-lg inline-flex">
      <span className="rounded-full px-2">
        <HiMinus
          className="w-3 h-3 lg:h-4 lg:w-4 cursor-pointer text-[#572AC8]"
          onClick={dec}
        />
      </span>
      <span className="text-center  text-[#572AC8] text-base lg:text-lg font-normal leading-normal">
        {quantity}
      </span>
      <span className=" rounded-full px-2">
        <HiOutlinePlusSm
          className="h-4 w-4 lg:h-5 lg:w-5  text-[#572AC8] cursor-pointer"
          onClick={addQuantityHandler}
        />
      </span>
    </div>
  );
};
