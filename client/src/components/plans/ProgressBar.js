import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

import { Context } from "../../Context";

const ProgressBar = ({ selectPlan, address, checkout, selectMeals }) => {
  const { progressBar } = useContext(Context);
  return (
    <div className="mb-10">
      <div className="w-[screen] flex justify-between px-5 h-[60px] items-center border-2 shadow-md">
        <div className="mx-auto">
          <div className="flex ">
            <div className={`flex items-center gap-3 `}>
              <div>
                <MdOutlineLibraryBooks
                  className={` text-[1.8rem] ${
                    selectPlan ? "text-green-600" : "text-gray-400"
                  }`}
                />
              </div>
              <p
                className={`text-[16px] ${
                  selectPlan ? "text-green-600" : "text-gray-400"
                }`}
              >
                Select Plan
              </p>
              <div
                className={`w-[60px] h-[3px] mr-3 ${
                  selectPlan ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaRegUser
                  className={` text-[1.5rem] ${
                    address ? "text-green-600" : "text-gray-400"
                  }`}
                />
              </div>
              <p
                className={`text-[16px] ${
                  address ? "text-green-600" : "text-gray-400"
                }`}
              >
                Address
              </p>
              <div
                className={`w-[60px] h-[3px] mr-3 ${
                  address ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <RiSecurePaymentLine
                  className={` text-[1.8rem] ${
                    checkout ? "text-green-600" : "text-gray-400"
                  }`}
                />
              </div>
              <p
                className={`text-[16px] ${
                  checkout ? "text-green-600" : "text-gray-400"
                }`}
              >
                Checkout
              </p>
              <div
                className={`w-[60px] h-[3px] mr-3 ${
                  checkout ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <GiMeal
                  className={` text-[1.8rem] ${
                    selectMeals ? "text-green-600" : "text-gray-400"
                  }`}
                />
              </div>
              <p
                className={`text-[16px] ${
                  selectMeals ? "text-green-600" : "text-gray-400"
                }`}
              >
                Select Meals
              </p>
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
