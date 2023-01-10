import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="h-[336px] w-[358px] overflow-hidden shadow-md bg-white text-[#242424] relative box-border cursor-pointer hover:shadow-xl">
      <img
        className="w-full max-h-[198px] object-cover"
        src={props.image}
        alt="recipe"
      />
      <div className="text-left p-[8px]">
        <div className="flex flex-row pt-[4px]">
          <span className="inline-bloc px-1 font-semibold mr-[6px]  mb-2 bg-[#f0aa4a] text-white text-[12px] text-center rounded">
            HALL OF FAME
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            color="black"
            className="-mt-[2px]"
          >
            <path d="M12 3.5A8.5 8.5 0 1 1 3.5 12 8.51 8.51 0 0 1 12 3.5M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.75 15v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM12 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"></path>
          </svg>
        </div>

        <h4 className="text-[16px] mb-[4px] leading-6">{props.title}</h4>
        <p className="text-[14px] leading-5">{props.subtitle}</p>

        <div className="flex flex-row max-w-[300px] mt-auto text-[14px] pt-6 ">
          <p className="pr-[8px] color-[#242424] font-semibold border-r-[1px] border-r-[#E4E4E4]">
            {props.time} min
          </p>
          <p className="text-[#676767] px-[8px]">{props.tags}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
