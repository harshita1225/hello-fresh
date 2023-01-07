import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const ProgressBar = () => {
  return (
    <div className="mb-10">
      <div className="w-[screen] flex justify-between px-5 h-[60px] items-center border-2 shadow-md">
        <div className="mx-auto">
          <div className="flex ">
            <div className="flex items-center gap-3">
              <div>
                <MdOutlineLibraryBooks className="text-gray-300 text-[1.8rem]" />
              </div>
              <p className="text-[16px]  text-gray-400">Select Plan</p>
              <div className="w-[60px] h-[3px] bg-gray-300 mr-3"></div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaRegUser className="text-gray-300 text-[1.5rem]" />
              </div>
              <p className="text-[16px]  text-gray-400">Address</p>
              <div className="w-[60px] h-[3px] bg-gray-300 mr-3"></div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <RiSecurePaymentLine className="text-gray-300 text-[1.8rem]" />
              </div>
              <p className="text-[16px] text-gray-400">Checkout</p>
              <div className="w-[60px] h-[3px] bg-gray-300 mr-3"></div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <GiMeal className="text-gray-300 text-[1.8rem]" />
              </div>
              <p className="text-[16px] text-gray-400">Select Meals</p>
            </div>
          </div>
        </div>
        <div>
          <AiOutlineShoppingCart className="text-[2rem] text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
