import React from "react";

const ColumnSection = () => {
  return (
    <div className="box-border border-b divide-[#EEEEEE] pb-[32px]  bg-[#f8f8f8] text-[#242424]">
      <h2 className="text-center text-[32px] font-light leading-[38px] pt-[40px] pb-[30px] px-[10px]">
        Why HelloFresh?
      </h2>

      <div className="grid grid-rows-4 md:grid-rows-1 grid-flow-col max-w-[1140px] m-auto gap-20 basis-0 justify-self-center content-between align-middle">
        <div className="flex flex-col items-center text-center">
          <div className="mb-[20px] max-w-[181px]">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn1.png"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[38px] mb-[5px]">
            No skimpin’ on the chicken!
          </h3>
          <p className="leading-[24px] ">
            Or steak, or fish, or plant protein.
          </p>
        </div>

        <div className="flex flex-col items-center text-center ">
          <div className="mb-[20px] max-w-[181px]">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn2.png"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[38px] mb-[5px]">
            No commitment whatsoever
          </h3>
          <p className="leading-[24px] ">
            Skipping weeks or cancelling is super easy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-[20px] max-w-[181px]">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn3.png"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[38px] mb-[5px]">
            The most 5-star reviews
          </h3>
          <p className="leading-[24px] ">
            Our huge recipe selection wows week after week.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-[20px] max-w-[181px]">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/cms/homepage/How%20It%20Works%20Icons/why-hellofresh-icn4.png"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[38px] mb-[5px]">
            Fresh and affordable
          </h3>
          <p className="leading-[24px] ">
            Chef-created deliciousness from $7.49 per meal.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[24px] m-auto">
        <button className="rounded text-[16px] bg-[#067a46] text-[#ffffff] pointer py-3 px-6 font-normal hover:bg-[#056835]">
          Get started
        </button>
      </div>
    </div>
  );
};

export default ColumnSection;
