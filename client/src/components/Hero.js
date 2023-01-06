import React from "react";
import Banner from "./images/banner3.jpg";
import { BiChevronDown } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="relative ">
      <img className="h-[650px] w-[100%] object-cover" src={Banner} alt="" />

      <div className="w-[300px] absolute top-[30%] left-[43%] ">
        <h1 className="text-[40px]">Take the stress out of mealtime</h1>
      </div>
      <div className="w-[300px] absolute top-[54%] left-[43%]">
        <p className="text-[#343434] text-[20px]">
          America's Most Popular Meal Kit
        </p>
      </div>
      <div className="w-[300px] absolute top-[65%] left-[43%]">
        <button className="py-[12px] px-[24px] bg-[#067A46] rounded text-white text-[16px] hover:bg-[#056835]">
          View our plans
        </button>
      </div>
      <div className="w-[300px] absolute top-[83%] left-[49.8%]">
        <button className="bg-[#FFFFFF] rounded-full h-[48px] w-[48px] border-[#067A46] border-[1px] hover:bg-[#E3F5BF] flex justify-center items-center">
          <BiChevronDown size="30px" color="#067A46" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
