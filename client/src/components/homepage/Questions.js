import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Questions = () => {
  return (
    <div className="bg-[#F8F8F8] h-[776px] flex flex-col">
      <h1 className="text-[40px] pt-[30px]">More questions?</h1>
      <div className="flex pt-[35px] justify-center ml-[-520px]">
        <ul>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li className="text-[16px]">
              How does HelloFresh’s meal kit delivery service work?
            </li>
          </div>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>Which food meal plans & recipes does HelloFresh offer?</li>
          </div>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>How many times a week does HelloFresh deliver?</li>
          </div>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>Does HelloFresh give nutrition & calorie information?</li>
          </div>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>How do I recycle my HelloFresh box?</li>
          </div>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>Why should I choose HelloFresh as my meal kit service?</li>
          </div>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>How much does HelloFresh cost?</li>
          </div>
          <div className="flex gap-[16px] pb-[32px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>Does HelloFresh support a healthy lifestyle?</li>
          </div>
          <div className="flex gap-[16px] items-center">
            <button className="bg-[#FFFFFF] rounded-full h-[40px] w-[40px] border-black border-[1px] flex justify-center items-center">
              <BiChevronDown size="30px" />
            </button>
            <li>Can I skip a week of delivery?</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Questions;
