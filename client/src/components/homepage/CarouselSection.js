import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselMenu from "./CarouselMenu";

const CarouselSection = () => {
  const navigate = useNavigate();

  const navigateToMenus = () => {
    navigate("/menus");
  };

  return (
    <div>
      <div className="h-[568px] border-b-2">
        <p className="text-[32px] mt-[30px] mb-[5px] text-[#242424]">
          Over 30+ fresh recipes every week
        </p>
        <p className="text-[16px] font-light mb-10">
          Easy meals designed by professional chefs and nutritionists
        </p>
        <CarouselMenu />
        <button
          onClick={navigateToMenus}
          className="mt-[45px] py-[12px] px-[24px] bg-[#067A46] rounded text-white text-[16px] hover:bg-[#056835]"
        >
          View our menus
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
