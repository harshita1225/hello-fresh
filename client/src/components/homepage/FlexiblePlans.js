import React from "react";
import BottomBanner from "../images/bottom-banner.jpg";

const FlexiblePlans = () => {
  return (
    <div className="relative">
      <img
        className="h-[300px] w-[100%] object-cover"
        src={BottomBanner}
        alt=""
      />
      <div className="w-[300px] absolute top-[19%] left-[43%] ">
        <h1 className="text-[40px]">Flexible Plans</h1>
      </div>
      <div className="w-[300px] absolute top-[54%] left-[43%]">
        <p className="text-[#343434] text-[20px]">
          to meet your household needs
        </p>
      </div>
      <div className="w-[300px] absolute top-[75%] left-[43%]">
        <button className="py-[12px] px-[24px] bg-[#067A46] rounded text-white text-[16px] hover:bg-[#056835]">
          View our plans
        </button>
      </div>
    </div>
  );
};

export default FlexiblePlans;
