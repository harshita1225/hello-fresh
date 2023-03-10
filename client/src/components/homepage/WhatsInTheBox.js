import React from "react";
import { useNavigate } from "react-router-dom";

const WhatsInTheBox = () => {
  const navigate = useNavigate();

  const navigateToPlans = () => {
    navigate("/plans");
  };

  return (
    <>
      <div className="flex flex-row max-w-[1140px] mx-auto pt-[20px]  bg-white text-[16px] font-normal text-[#242424] px-0 ">
        <div className="basis-1/2 w-[100%] -ml-[15px] -mr-[15px] relative px-[15px]">
          <img
            src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto:low,w_655/hellofresh_website/gb/cms/homepage/homepage%20to%20Contentful/US-homepage-image.png"
            alt=""
          />
        </div>
        <div className="basis-1/12 px-[15px]"></div>

        <div className="basis-5/12 self-center text-center m-0">
          <h3 className="leading-[32px] my-[15px] text-center text-[24px] font-normal">
            What's inside each box?
          </h3>
          <div className="text-left leading-[24px]">
            ✓ Easy-to-follow recipes with clear nutritional info
            <br />
            <br />
            <p>
              ✓ High-quality ingredients sourced straight from the farm
              <br />
              <br />
            </p>
            <p>
              ✓ Convenient meal kits that fit perfectly in the fridge
              <br />
              <br />
            </p>
            <p>
              ✓ A fun cooking experience that makes you feel unstoppable
              <br />
              <br />
            </p>
            <p className="text-[#067A46] cursor-pointer">
              ✓
              <span className="underline">
                <a href="https://www.hellofresh.com/about/sustainability/packaging">
                  Innovative packaging designed to reduce waste
                </a>{" "}
              </span>
              <br />
            </p>
          </div>
          <div className="w-full items-center mt-[32px] inline-block m-0 py-3 ">
            <button
              onClick={navigateToPlans}
              className="block w-full rounded text-[16px] bg-[#067a46] leading-[24px] text-[#ffffff] pointer py-3  hover:bg-[#056835] m-0"
            >
              View our plans
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[40px] border-b divide-[#EEEEEE]"></div>
    </>
  );
};

export default WhatsInTheBox;
